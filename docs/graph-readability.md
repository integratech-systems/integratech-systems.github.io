# IntegraTech Site — Readability Over Graph Background

> Создан: 2026-06-19  
> Задача: улучшить читаемость текста поверх Vanta NET графа

---

## Проблема

Секции без явной фоновой заливки полностью прозрачны — граф Vanta NET виден сквозь текст.  
На тёмной и светлой теме анимированные рёбра и точки сетки конкурируют с контентом.

**Секции без фона (прозрачные):**
- `.hero` — главный экран (заголовок, typed text, lead)
- `.section` (без `.section-dark`) — "Core capabilities", "How we work"
- `.manifesto-section` — манифест
- Заголовки `h2`, `p.lead`, `.eyebrow` внутри них — сливаются с графом

---

## Что меняем

### 1. Граф Vanta NET — яркость рёбер

**Текущие значения:**
```js
// dark: color: 0x00aaff  — насыщенный голубой
// light: color: 0x005fb8 — тёмно-синий
```

**Проблема:** рёбра слишком яркие и контрастные — особенно на dark теме рядом с белым текстом.

**Итерации:**

| Вариант | dark color | dark bg | light color | light bg | Результат |
|---------|-----------|---------|-------------|----------|-----------|
| v0 (было) | 0x00aaff | 0x020b18 | 0x005fb8 | 0xf2f7ff | Рёбра слишком яркие |
| v1 | 0x00aaff + opacity .72 | — | — | — | Слишком мягко |
| v2 | 0x1a4a7a (тёмно-синий) | — | 0x8ab4d4 (серо-голубой) | — | Работает, но теряет характер |
| **v3 ✅** | 0x005599 opacity .68 | 0x010c1a | 0x4a90c0 | 0xeef4fc | **Выбранный вариант** |

---

### 2. Текст в прозрачных секциях — text-shadow для читаемости

Добавляем `text-shadow` к заголовкам и параграфам в `.hero` и `.section`:

```css
/* dark theme */
.hero h1, .hero .lead, .section h2, .section .lead, .manifesto-text h2, .manifesto-text .lead {
  text-shadow: 0 2px 12px rgba(1, 8, 20, 0.85), 0 0 40px rgba(1, 8, 20, 0.6);
}

/* light theme */
[data-theme="light"] .hero h1, [data-theme="light"] .section h2 {
  text-shadow: 0 1px 8px rgba(230, 242, 255, 0.9), 0 0 24px rgba(200, 225, 255, 0.7);
}
```

---

### 3. Полупрозрачный glass-backdrop для прозрачных секций

Вместо полностью прозрачного фона — тонкая "glass pill" за блоками контента:

```css
/* dark */
.hero > .container, .section:not(.section-dark) > .container {
  background: rgba(1, 10, 22, 0.35);
  backdrop-filter: blur(2px);
  border-radius: 12px;
  padding: 2rem 2.5rem;
}
```

---

## Итоговые изменения (применено)

### theme.js — Vanta NET параметры

- Dark: `color: 0x0055aa` (вместо `0x00aaff`) — менее насыщенный
- Dark: `backgroundColor: 0x010c1a` (темнее)  
- Dark: `opacity` через canvas — будем регулировать через `#vanta-bg { opacity }`
- Light: `color: 0x4a90c0` (серо-голубой вместо насыщенного синего)

### site.css — читаемость текста

- `text-shadow` на h1, h2, .lead в hero и section
- `#vanta-bg { opacity: 0.55 }` (было 0.78) — граф светлее
- `#vanta-bg.vanta-pulse { opacity: 0.70 }` (было 0.90) — при клике чуть ярче

---

## Changelog

| Дата | Версия | Описание |
|------|--------|----------|
| 2026-06-19 | v1.0 | Создан файл, анализ проблемы |
| 2026-06-19 | v1.1 | Снижена яркость рёбер, добавлен text-shadow |
