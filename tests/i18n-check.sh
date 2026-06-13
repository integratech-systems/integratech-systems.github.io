#!/usr/bin/env bash
# ─────────────────────────────────────────────────────────────────────────────
#  IntegraTech i18n Test Suite
#  Checks that all data-i18n keys used in HTML pages have translations
#  in i18n.js for every supported language.
#
#  Usage:
#    ./tests/i18n-check.sh             # test all pages, all languages
#    ./tests/i18n-check.sh -v          # verbose: show every key checked
#    ./tests/i18n-check.sh -l ru       # only check one language
#    ./tests/i18n-check.sh -p services # only check one page (substring match)
#    ./tests/i18n-check.sh --remote    # also verify live site HTTP status
#
#  Exit code: 0 = all good, 1 = missing translations found
# ─────────────────────────────────────────────────────────────────────────────

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
SITE_DIR="$(dirname "$SCRIPT_DIR")/integratech-systems.github.io"
I18N_FILE="$SITE_DIR/assets/i18n.js"
LIVE_URL="https://integratech-systems.github.io"
LANGS=(en ru kz de fr)
PAGES=(index.html services.html case-studies.html open-source.html contact.html 404.html)

RED='\033[0;31m'; GREEN='\033[0;32m'; YELLOW='\033[1;33m'
CYAN='\033[0;36m'; BOLD='\033[1m'; DIM='\033[2m'; NC='\033[0m'

VERBOSE=false; FILTER_LANG=""; FILTER_PAGE=""; CHECK_REMOTE=false

while [[ $# -gt 0 ]]; do
  case "$1" in
    -v|--verbose)  VERBOSE=true ;;
    -l|--lang)     FILTER_LANG="$2"; shift ;;
    -p|--page)     FILTER_PAGE="$2"; shift ;;
    --remote)      CHECK_REMOTE=true ;;
    -h|--help)     grep '^#' "$0" | sed 's/^# \?//'; exit 0 ;;
  esac
  shift
done

# Write the Python checker to a temp file (avoids heredoc-in-subshell bugs)
PY_CHECKER=$(mktemp /tmp/i18n_check_XXXXXX.py)
trap "rm -f $PY_CHECKER" EXIT

python3 - "$PY_CHECKER" << 'PYEOF'
import sys
script = r'''#!/usr/bin/env python3
import re, sys
lang = sys.argv[1]
i18n_file = sys.argv[2]
html_file = sys.argv[3]
verbose = '--verbose' in sys.argv

with open(i18n_file, encoding='utf-8') as f:
    content = f.read()
with open(html_file, encoding='utf-8') as f:
    html = f.read()

langs_all = ['en','ru','kz','de','fr']
start = re.search(rf'    {re.escape(lang)}: {{', content)
if not start:
    print(f"ERROR:lang block not found", file=sys.stderr); sys.exit(2)

end_idx = len(content)
for other in langs_all:
    if other != lang:
        p = re.search(rf'    {re.escape(other)}: {{', content[start.end():])
        if p:
            idx = start.end() + p.start()
            if idx < end_idx: end_idx = idx

section = content[start.start():end_idx]
lang_keys = set(re.findall(r"'([^'\n]+)':\s*['\"`]", section))
lang_keys = {k for k in lang_keys if ('.' in k) or k.startswith('404')}

html_keys = sorted(set(re.findall(r'data-i18n(?:-html)?="([^"]+)"', html)))

print(f"TOTAL:{len(html_keys)}")
print(f"KEY_COUNT:{len(lang_keys)}")
for key in html_keys:
    if key in lang_keys:
        if verbose: print(f"OK:{key}")
    else:
        print(f"MISSING:{key}")
'''
with open(sys.argv[1], 'w') as f:
    f.write(script)
PYEOF

TOTAL_CHECKS=0; TOTAL_MISSING=0; TOTAL_PAGES=0
declare -A LANG_MISSING_COUNT
for lang in "${LANGS[@]}"; do LANG_MISSING_COUNT[$lang]=0; done

echo ""
echo -e "${BOLD}${CYAN}══════════════════════════════════════════════════════${NC}"
echo -e "${BOLD}${CYAN}   IntegraTech i18n Test Suite${NC}"
echo -e "${BOLD}${CYAN}══════════════════════════════════════════════════════${NC}"
echo -e "  Site dir : ${DIM}$SITE_DIR${NC}"
echo -e "  Langs    : ${BOLD}${LANGS[*]}${NC}"
echo ""

# 1. Syntax check
echo -e "${BOLD}[1/3] Syntax check i18n.js${NC}"
if node --check "$I18N_FILE" 2>/dev/null; then
  echo -e "  ${GREEN}✓ JavaScript syntax OK${NC}"
else
  echo -e "  ${RED}✗ SYNTAX ERROR in i18n.js${NC}"
  node --check "$I18N_FILE" || true; exit 1
fi

# 2. Key counts
echo ""
echo -e "${BOLD}[2/3] Translation key counts per language${NC}"
EN_COUNT=0
for lang in "${LANGS[@]}"; do
  count=$(python3 "$PY_CHECKER" "$lang" "$I18N_FILE" "$SITE_DIR/index.html" | grep '^KEY_COUNT:' | cut -d: -f2)
  if [[ "$lang" == "en" ]]; then
    EN_COUNT=$count; echo -e "  ${GREEN}✓ ${BOLD}$lang${NC}: $count keys (reference)"
  elif [[ "$count" -lt $((EN_COUNT - 15)) ]]; then
    echo -e "  ${YELLOW}⚠ ${BOLD}$lang${NC}: $count keys ${RED}($(( EN_COUNT - count )) below EN)${NC}"
  else
    echo -e "  ${GREEN}✓ ${BOLD}$lang${NC}: $count keys"
  fi
done

# 3. Per-page coverage
echo ""
echo -e "${BOLD}[3/3] Per-page key coverage${NC}"
echo ""

for page in "${PAGES[@]}"; do
  [[ -n "$FILTER_PAGE" && "$page" != *"$FILTER_PAGE"* ]] && continue
  html_file="$SITE_DIR/$page"
  [[ ! -f "$html_file" ]] && echo -e "  ${YELLOW}⚠ SKIP $page${NC}" && continue

  TOTAL_PAGES=$((TOTAL_PAGES + 1))
  key_count=$(grep -oE 'data-i18n(-html)?="[^"]+"' "$html_file" | sort -u | wc -l | tr -d ' ')
  echo -e "  ${BOLD}📄 $page${NC}  ${DIM}($key_count unique i18n keys)${NC}"

  for lang in "${LANGS[@]}"; do
    [[ -n "$FILTER_LANG" && "$lang" != "$FILTER_LANG" ]] && continue

    py_args=("$lang" "$I18N_FILE" "$html_file")
    $VERBOSE && py_args+=("--verbose")
    result=$(python3 "$PY_CHECKER" "${py_args[@]}" 2>&1)

    total=$(echo "$result" | grep '^TOTAL:' | cut -d: -f2)
    TOTAL_CHECKS=$((TOTAL_CHECKS + total))

    missing_lines=$(echo "$result" | grep '^MISSING:' | sed 's/^MISSING://' || true)
    missing_count=$(echo "$missing_lines" | grep -c '[^[:space:]]' || true)

    if [[ "$missing_count" -eq 0 ]]; then
      echo -e "    ${GREEN}✓ [$lang]${NC} all $total keys present"
    else
      echo -e "    ${RED}✗ [$lang]${NC} ${BOLD}$missing_count${NC} missing:"
      while IFS= read -r mk; do
        [[ -z "$mk" ]] && continue
        echo -e "        ${RED}→ $mk${NC}"
        TOTAL_MISSING=$((TOTAL_MISSING + 1))
        LANG_MISSING_COUNT[$lang]=$((LANG_MISSING_COUNT[$lang] + 1))
      done <<< "$missing_lines"
    fi

    if $VERBOSE; then
      while IFS= read -r line; do
        [[ "$line" == OK:* ]] && echo -e "    ${DIM}[$lang] ✓ ${line#OK:}${NC}"
      done <<< "$result"
    fi
  done
  echo ""
done

# 4. Remote HTTP (optional)
if $CHECK_REMOTE; then
  echo -e "${BOLD}[4/4] Live site HTTP status${NC}"
  echo ""
  for page in "${PAGES[@]}"; do
    [[ "$page" == "index.html" ]] && url="$LIVE_URL/" || url="$LIVE_URL/$page"
    http_code=$(curl -sL -o /dev/null -w "%{http_code}" --max-time 10 "$url" 2>/dev/null || echo "000")
    if [[ "$http_code" == "200" ]]; then
      echo -e "  ${GREEN}✓ HTTP $http_code${NC}  $url"
    else
      echo -e "  ${RED}✗ HTTP $http_code${NC}  $url"
    fi
  done
  echo ""
fi

# Summary
echo -e "${BOLD}${CYAN}══════════════════════════════════════════════════════${NC}"
echo -e "${BOLD}  SUMMARY${NC}"
echo -e "${BOLD}${CYAN}══════════════════════════════════════════════════════${NC}"
echo -e "  Pages checked  : $TOTAL_PAGES"
echo -e "  Key checks run : $TOTAL_CHECKS"

if [[ $TOTAL_MISSING -eq 0 ]]; then
  echo -e "  Missing keys   : ${GREEN}${BOLD}0 ✓${NC}"
  echo ""
  echo -e "  ${GREEN}${BOLD}✅ ALL TESTS PASSED${NC}"
else
  echo -e "  Missing keys   : ${RED}${BOLD}$TOTAL_MISSING${NC}"
  echo ""
  echo -e "  By language:"
  for lang in "${LANGS[@]}"; do
    cnt=${LANG_MISSING_COUNT[$lang]}
    if [[ "$cnt" -gt 0 ]]; then
      echo -e "    ${RED}$lang : $cnt missing${NC}"
    else
      echo -e "    ${GREEN}$lang : 0 missing ✓${NC}"
    fi
  done
  echo ""
  echo -e "  ${RED}${BOLD}❌ TESTS FAILED — add missing translations to i18n.js${NC}"
fi

echo -e "${BOLD}${CYAN}══════════════════════════════════════════════════════${NC}"
echo ""

[[ $TOTAL_MISSING -eq 0 ]]
