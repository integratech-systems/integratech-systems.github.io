/**
 * IntegraTech Systems — i18n
 * Supported languages: en (English), ru (Russian), kz (Kazakh)
 */
(function () {
  'use strict';

  /* ── TRANSLATIONS ─────────────────────────────────────────── */
  var I18N = {
    en: {
      /* ── Nav ── */
      'nav.logo':         'IntegraTech',
      'nav.services':     'Services',
      'nav.case_studies': 'Case Studies',
      'nav.tech_stack':   'Tech Stack',
      'nav.contact':      'Contact',
      'nav.cta':          'Get in touch',

      /* ── Footer ── */
      'footer.tagline':     'Enterprise integration engineering · fintech · industrial',
      'footer.services':    'Services',
      'footer.case_studies':'Case Studies',
      'footer.tech_stack':  'Tech Stack',
      'footer.contact':     'Contact',

      /* ── index.html — hero ── */
      'hero.eyebrow':   'Enterprise Integration Engineering',
      'hero.badge':     '🟢 Available Q3 2026',
      'hero.h1':        'We build systems where',
      'hero.lead':      'IntegraTech designs and delivers enterprise integration platforms for financial institutions and industrial enterprises — from SWIFT pipelines to real-time event-driven architectures.',
      'hero.cta1':      'Start a project →',
      'hero.cta2':      'View case studies',
      'typed.strings': [
        "simple APIs don\u2019t work.",
        "standard ETL falls short.",
        "off-the-shelf tools break.",
        "latency becomes critical.",
        "data consistency matters."
      ],

      /* ── index.html — metrics ── */
      'metrics.projects_label': 'enterprise projects delivered',
      'metrics.uptime_label':   'pipeline uptime SLA',
      'metrics.java_label':     'modern stack, zero legacy tech debt',

      /* ── index.html — what we do ── */
      'section.what.eyebrow': 'Core capabilities',
      'section.what.h2':      'Engineering where complexity is the norm.',
      'section.what.lead':    'We work in the integrations layer — the part of the stack that connects legacy financial systems to modern infrastructure, where uptime, data consistency and security are non-negotiable.',

      'card.pipeline.title': 'Data Pipeline Engineering',
      'card.pipeline.desc':  'Apache NiFi + Kafka end-to-end pipelines with exactly-once semantics, CDC from PostgreSQL/Oracle, and Greenplum analytics integration. Handles 50k+ msg/sec.',
      'card.fintech.title':  'Financial System Integration',
      'card.fintech.desc':   "SWIFT MT/MX, НРД, МосБиржа API, banking core systems. We've built production connectors for the most demanding financial infrastructure in Russia and the CIS.",
      'card.java.title':     'Java Microservices',
      'card.java.desc':      'Java 17/21 with Spring Boot 3, WebFlux reactive stack, virtual threads, and event-driven design. API gateways with OAuth2, JWT, mTLS for zero-trust environments.',
      'card.devsecops.title':'DevSecOps & Infrastructure',
      'card.devsecops.desc': 'Kubernetes, GitLab CI/CD, OpenBao secrets management, zero-downtime deployments. Security-first by design — not added as an afterthought.',
      'card.network.title':  'Private Network Infrastructure',
      'card.network.desc':   'Self-hosted mesh VPN networks (Tailscale/headscale), private XMPP messaging, isolated corporate infrastructure free from Big Tech dependency.',
      'card.realtime.title': 'Real-time & Analytics',
      'card.realtime.desc':  'WebSocket feeds, trading system backends, time-series analytics on Greenplum. From raw market data to actionable business intelligence in milliseconds.',

      /* ── index.html — tech stack ── */
      'section.stack.eyebrow': 'Technology stack',
      'section.stack.h2':      'Battle-tested stack for mission-critical workloads.',
      'section.stack.lead':    'We choose boring, proven technology for the core — and modern tooling for developer experience. No hype-driven architecture decisions.',
      'section.stack.cta':     'Explore full stack →',
      'stack.data_title':      'Data & Integration',
      'stack.app_title':       'Application Layer',
      'stack.infra_title':     'Infrastructure',
      'stack.security_title':  'Security',
      'stack.fintech_title':   'Financial Protocols',

      /* ── index.html — approach ── */
      'section.approach.eyebrow': 'How we work',
      'section.approach.h2':      'From legacy mess to reliable pipelines.',
      'approach.step1.title': '1. Audit & Architecture',
      'approach.step1.desc':  'We map your existing integration landscape, identify bottlenecks and failure modes, and design a target architecture with clear migration paths.',
      'approach.step2.title': '2. Build & Integrate',
      'approach.step2.desc':  'We implement pipelines, APIs, and connectors with production-grade monitoring, error handling, and exactly-once delivery guarantees where required.',
      'approach.step3.title': '3. Deploy & Operate',
      'approach.step3.desc':  "GitOps deployment, runbooks, alerting, and SLA monitoring. We don't disappear after go-live — we stay until the system is stable and your team is confident.",

      /* ── index.html — CTA ── */
      'cta.eyebrow': 'Ready to integrate?',
      'cta.h2':      "Let's solve your hardest integration problem.",
      'cta.lead':    "Whether it's a legacy SWIFT connector, a NiFi pipeline drowning under load, or a greenfield event-driven architecture — we've seen it before.",
      'cta.btn1':    'Get in touch',
      'cta.btn2':    'See our work',

      /* ── index.html — live feed ── */
      'livefeed.eyebrow': 'System activity',
      'livefeed.h2':      'Production pipelines. Right now.',
      'livefeed.lead':    'Real-time integration means real consequences. These are the kind of systems we keep running 24/7.',

      /* ── services.html ── */
      'page.services.eyebrow': 'What we offer',
      'page.services.h1':      'Services',
      'page.services.lead':    'We deliver end-to-end integration engineering — from architecture consulting to production support. Each engagement is tailored to your stack and timeline.',

      'svc.pipeline.badge': 'Core service',
      'svc.pipeline.title': 'Data Pipeline Engineering',
      'svc.pipeline.lead':  'Design and implementation of enterprise data pipelines using Apache NiFi and Apache Kafka as the backbone.',
      'svc.pipeline.price': 'Engagement model: project-based or retainer · from €8 000 / project',

      'svc.fintech.badge': 'Fintech speciality',
      'svc.fintech.title': 'Financial System Integration',
      'svc.fintech.lead':  "We've built production connectors and adapters for the most demanding financial infrastructure in Russia and the CIS.",
      'svc.fintech.price': 'Engagement model: fixed-scope contract · from €15 000',

      'svc.java.badge': 'Application layer',
      'svc.java.title': 'Java Microservices & API Design',
      'svc.java.lead':  'Modern Java 17/21 backend engineering with Spring Boot 3, WebFlux reactive stack, and enterprise integration patterns.',
      'svc.java.price': 'Engagement model: T&M or project · from €6 000 / month',

      'svc.devops.badge': 'Infrastructure',
      'svc.devops.title': 'DevSecOps & Kubernetes',
      'svc.devops.lead':  'We build and operate Kubernetes-based infrastructure with GitOps workflows, secrets management, and full observability.',
      'svc.devops.price': 'Engagement model: retainer or project · from €5 000 / month',

      'svc.network.badge': 'Independence',
      'svc.network.title': 'Private Corporate Infrastructure',
      'svc.network.lead':  "Self-hosted corporate infrastructure that doesn't depend on Big Tech clouds. Full control, full privacy.",
      'svc.network.price': 'Engagement model: setup + support · from €3 500',

      'svc.advisory.badge': 'Advisory',
      'svc.advisory.title': 'Architecture Consulting',
      'svc.advisory.lead':  'Not ready to outsource implementation? We provide expert architecture reviews, workshops, and decision-making support.',
      'svc.advisory.price': 'Engagement model: hourly or day rate · from €200 / hour',

      /* ── case-studies.html ── */
      'page.cases.eyebrow': 'Real projects, real results',
      'page.cases.h1':      'Case Studies',
      'page.cases.lead':    "All projects are anonymised. Metrics and timelines are real. We don't share client names without explicit permission.",

      'case1.title': 'SWIFT ETL Pipeline: From 3-Day Outages to 99.97% Uptime',
      'case2.title': 'МосБиржа Real-time Feed: 60% Latency Reduction on Market Data Pipeline',
      'case3.title': 'ДИТ Москвы: City-Scale Data Integration for 40+ Source Systems',
      'case4.title': 'Private Corporate Network: Zero Big-Tech Dependency for a 30-Person Team',
      'case5.title': 'FluidTrader — Reactive Algorithmic Trading Platform (Fintech R&D)',

      /* ── open-source.html ── */
      'page.stack.eyebrow': 'Our toolbox',
      'page.stack.h1':      'Technology Stack',
      'page.stack.lead':    'We choose technology based on production track record and operational simplicity — not hype.',

      'stack.section.data.eyebrow':     'Data & Integration',
      'stack.section.data.h2':          'The integration layer',
      'stack.section.data.desc':        'Apache NiFi is our primary tool for data movement and transformation. It provides visual flow design, built-in error handling, and scales horizontally for high-throughput workloads.',
      'stack.section.app.eyebrow':      'Application layer',
      'stack.section.app.h2':           'Java ecosystem',
      'stack.section.app.desc':         'Java 21 with virtual threads eliminates the need for reactive plumbing in most cases. Spring Boot 3 with WebFlux where true reactive backpressure is needed.',
      'stack.section.infra.eyebrow':    'Infrastructure & DevOps',
      'stack.section.infra.h2':         'Cloud-native operations',
      'stack.section.infra.desc':       'Kubernetes for orchestration, GitLab CI / GitHub Actions for delivery, Helm for packaging, ArgoCD for GitOps.',
      'stack.section.security.eyebrow': 'Security',
      'stack.section.security.h2':      'Zero-trust by default',
      'stack.section.security.desc':    'OpenBao (an open-source HashiCorp Vault fork) manages all secrets — no credentials in environment variables or config files. mTLS everywhere.',
      'stack.section.fintech.eyebrow':  'Financial protocols',
      'stack.section.fintech.h2':       'Fintech-specific expertise',
      'stack.section.fintech.desc':     "Most integration engineers don't know SWIFT from SEPA or FIX from FAST. We do. Years of production experience with financial messaging protocols.",

      /* ── contact.html ── */
      'page.contact.eyebrow': "Let's talk",
      'page.contact.h1':      'Contact',
      'page.contact.lead':    "Describe your integration challenge — we'll respond within 24 hours with a brief technical assessment.",

      'contact.direct.h2':    'Reach us directly',
      'contact.email.label':  'Email',
      'contact.linkedin.label': 'LinkedIn',
      'contact.telegram.label': 'Telegram',
      'contact.where.title':  '📍 Where we work',
      'contact.where.text':   'Remote-first. Our team operates across Russia, Georgia, and Israel. We work in European and CIS time zones.',
      'contact.tips.h2':      'What to include in your first message',
      'contact.tip1.title':   'Your integration challenge',
      'contact.tip1.desc':    "What systems need to be connected? What's failing or missing today?",
      'contact.tip2.title':   'Industry & scale',
      'contact.tip2.desc':    'Fintech, banking, industrial, government? Approximate data volumes and team size.',
      'contact.tip3.title':   'Timeline & urgency',
      'contact.tip3.desc':    'Is this a new project, a legacy migration, or a production incident?',
      'contact.tip4.title':   'Existing stack (optional)',
      'contact.tip4.desc':    'What tech is already in use? Constraints we should know about?',
      'contact.note':         'We typically respond with a 1-page technical assessment within 24 hours — covering what we see as the core challenge and a possible approach.',
      'contact.avail.title':  'Currently available',
      'contact.avail.text':   'We have capacity for 1–2 new projects starting Q3 2026. Long-term retainer engagements preferred.',

      /* ── 404.html ── */
      '404.h1':   'Page not found',
      '404.desc': "This integration endpoint doesn't exist (yet).",
      '404.back': '← Back to home',
    },

    /* ═══════════════════════════════════════════════════════════ */
      /* ── auto-added translations ── */
      'page.services.lead': 'We deliver end-to-end integration engineering — from architecture consulting to production-grade system implementation and long-term support. Every engagement is tailored to your stack and timeline.',
      'svc.pipeline.body': 'Design and implementation of enterprise data pipelines using Apache NiFi and Apache Kafka as the backbone. We handle high-throughput scenarios (50k+ msg/sec), exactly-once delivery, CDC from Oracle/PostgreSQL, and integration with analytical databases including Greenplum.',
      'svc.pipeline.list': '<li>Apache NiFi flow design, cluster setup and tuning</li><li>Kafka topic architecture, schema registry, stream processing</li><li>Debezium CDC connectors for real-time database sync</li><li>Greenplum / PostgreSQL analytical integration</li><li>Dead-letter queues, replay, monitoring and alerting</li>',
      'svc.fintech.body': 'We\'ve built production connectors and adapters for the most demanding financial infrastructure in Russia and the CIS. SWIFT, НРД, МосБиржа — we know these protocols inside out and deliver integrations that don\'t fail silently.',
      'svc.fintech.list': '<li>SWIFT MT103 / MT202 / MX ISO 20022 message processing</li><li>НРД API integration — settlement, depository operations</li><li>МосБиржа WebSocket and REST API connectors</li><li>Banking core system adapters (custom protocols, legacy XML)</li><li>FIX protocol implementation for trading systems</li>',
      'svc.java.body': 'Modern Java 17/21 backend engineering with Spring Boot 3, WebFlux reactive stack, and virtual threads. We design API gateways with zero-trust security and event-driven architectures that scale without re-architecture.',
      'svc.java.list': '<li>Spring Boot 3 microservices with reactive WebFlux</li><li>Java 21 virtual threads for high-concurrency workloads</li><li>OAuth2 / JWT / mTLS API gateway design</li><li>Event-driven architecture with Kafka and Outbox pattern</li><li>Groovy scripting for NiFi processors and DSL tooling</li>',
      'svc.devops.body': 'We build and operate Kubernetes-based infrastructure with GitOps workflows, secrets management, and security posture that satisfies financial regulators. Zero-downtime deployments, auto-scaling, and runbooks included.',
      'svc.devops.list': '<li>Kubernetes cluster design, Helm chart authoring</li><li>GitLab CI / GitHub Actions pipeline architecture</li><li>OpenBao / HashiCorp Vault secrets management</li><li>Network security policies, pod security standards</li><li>Observability: Prometheus, Grafana, Loki, alerting</li>',
      'svc.network.body': 'Self-hosted corporate infrastructure that doesn\'t depend on Big Tech clouds. Mesh VPN networks for secure remote teams, private XMPP messaging servers, and secrets management systems under your full control.',
      'svc.network.list': '<li>Headscale + Tailscale mesh VPN for distributed teams</li><li>XMPP / Prosody self-hosted corporate messenger</li><li>OpenBao secrets and credentials management</li><li>Access control policies and network segmentation</li><li>Client onboarding automation and documentation</li>',
      'svc.advisory.body': 'Not ready to outsource implementation? We provide expert architecture reviews, integration audits, and technical strategy — so your team builds the right thing from the start and avoids expensive re-architecture later.',
      'svc.advisory.list': '<li>Integration landscape audit with findings report</li><li>Architecture design session + decision records</li><li>NiFi / Kafka performance tuning consultation</li><li>Security architecture review for fintech workloads</li><li>Team mentoring and tech lead support</li>',
      'svc.cta.eyebrow': 'Not sure which service fits?',
      'svc.cta.h2': 'Let\'s talk about your project.',
      'svc.cta.lead': 'A 30-minute call is enough to understand your integration challenges and give you a concrete recommendation.',
      'svc.cta.btn': 'Book a free call →',
      'page.cases.lead': 'All projects are anonymised. Metrics and timelines are real. We don\'t exaggerate — these are the actual results we delivered.',
      'case1.badge1': '🏦 Banking',
      'case1.badge2': 'NiFi + Kafka',
      'case1.badge3': '3 weeks',
      'case1.p1': 'A top-20 Russian bank had a SWIFT MT103 processing pipeline built on a brittle custom Java monolith. The system crashed under end-of-month load — every single month. The team was spending 2–3 days per incident on manual recovery.',
      'case1.p2': 'We rebuilt the ingestion and transformation layer on Apache NiFi with Kafka as the durable backbone. Dead-letter handling, idempotent processors, and automated replay replaced the fragile manual procedures. Monitoring was wired to PagerDuty with runbooks for every alert.',
      'case1.list': '<li>Replaced monolithic SWIFT processor with NiFi flow + Kafka topic per message type</li><li>Implemented exactly-once semantics for financial message delivery</li><li>Automated reconciliation against НРД settlement records</li><li>Zero data loss during the first end-of-month cycle post-launch</li>',
      'case1.r1': 'pipeline uptime',
      'case1.r2': 'manual recovery time',
      'case1.r3': 'from audit to production',
      'case2.badge1': '📈 Trading',
      'case2.badge2': 'WebSocket + PostgreSQL',
      'case2.badge3': '6 weeks',
      'case2.p1': 'A proprietary trading firm was receiving МосБиржа market data through a third-party vendor feed. p99 latency was hitting 180ms during volatile sessions — unacceptable for their algorithmic strategies. The vendor refused to SLA-guarantee improvements.',
      'case2.p2': 'We built a direct WebSocket connection to МосБиржа FAST/FIXS feed, designed a low-latency normalisation layer in Java 21 with virtual threads, and stored tick data directly into partitioned PostgreSQL tables with BRIN indexes. The p99 dropped from 180ms to 72ms on day one.',
      'case2.list': '<li>Direct FAST protocol decoder — no vendor intermediary</li><li>Java 21 virtual threads handling 12 000 concurrent instrument subscriptions</li><li>Partitioned PostgreSQL tick storage with sub-millisecond write latency</li><li>Grafana dashboard for latency percentiles, gap detection, and reconnects</li>',
      'case2.r1': 'latency reduction',
      'case2.r2': 'p99 market data latency',
      'case2.r3': 'concurrent subscriptions',
      'case3.badge1': '🏛️ Government',
      'case3.badge2': 'NiFi + Greenplum',
      'case3.badge3': '4 months',
      'case3.p1': 'Moscow\'s Department of Information Technology needed a unified data integration layer to consolidate operational data from 40+ municipal systems into a Greenplum analytical platform. Existing ETL was a patchwork of scheduled SQL scripts with no lineage, no monitoring, and daily failures.',
      'case3.p2': 'We designed and deployed an Apache NiFi cluster that handles the full ingestion lifecycle — from REST and SOAP source APIs to schema validation, transformation, error handling, and lineage tracking. Every pipeline self-documents its state through structured logging and a custom Grafana dashboard.',
      'case3.list': '<li>NiFi cluster: 3-node HA with ZooKeeper, 40+ active flows</li><li>Schema Registry for all source contracts — breaking changes caught before ingestion</li><li>Full data lineage from source API to Greenplum analytical table</li><li>On-call runbook and automated alerting handed to the internal team</li>',
      'case3.r1': 'source systems',
      'case3.r2': 'pipeline errors/month',
      'case3.r3': 'design to production',
      'case4.badge1': '🔐 Enterprise',
      'case4.badge2': 'Headscale + OpenBao',
      'case4.badge3': '2 weeks',
      'case4.p1': 'A fintech company with remote employees across Russia, Georgia, and Israel needed a secure internal network that didn\'t route traffic through US-controlled cloud providers. Existing WireGuard setup required manual key management and had no access control policies.',
      'case4.p2': 'We deployed a self-hosted headscale controller with Tailscale clients, implemented ACL policies for network segmentation, added an XMPP Prosody messaging server, and integrated OpenBao for secrets rotation. Client onboarding was reduced to scanning a QR code.',
      'case4.list': '<li>Headscale controller on private VPS, exit nodes in DE and US</li><li>ACL policies: per-user access tiers, internet exit control</li><li>Self-hosted Prosody XMPP with end-to-end encrypted group chats</li><li>QR-code based onboarding page — client setup under 2 minutes</li>',
      'case4.r1': 'team members connected',
      'case4.r2': 'new client onboarding',
      'case4.r3': 'self-hosted, zero Big Tech',
      'case5.p1': 'Internal R&D project — a production-grade reactive algorithmic trading system built on Java 21 + Spring WebFlux. Connected to HTX (Huobi) spot &amp; futures markets. The system runs 24/7 with 5 microservices, 12+ real-time SSE dashboards, and an AI market analyst powered by Qwen3.7-Max and DeepSeek.',
      'case5.p2': 'This project demonstrates our full-stack fintech engineering capability: non-blocking reactive pipelines, TimescaleDB time-series storage, HMAC-SHA256 signed API auth, sub-100ms order execution latency, and automated AI-driven hourly market briefs.',
      'case5.list': '<li>5 microservices: fluid-trader, klines-service, prices-service, news-agent, trader-db</li><li>AI analyst: Qwen3.7-Max + DeepSeek-V4-Pro, hourly market briefs via Telegram</li><li>TimescaleDB for OHLCV time-series, WebSocket feed from HTX + Binance</li><li>Zero-Trust secrets: OpenBao with automatic rotation, no credentials in code</li><li>Full Kubernetes deployment on bare-metal VPS, Nginx TLS termination</li>',
      'case5.r1': 'days continuous uptime',
      'case5.r2': 'live SSE dashboards',
      'case5.r3': 'order execution latency',
      'case5.access': 'Access available for investors &amp; enterprise partners',
      'cases.cta.eyebrow': 'Have a similar challenge?',
      'cases.cta.h2': 'We\'d love to hear about your project.',
      'page.stack.lead': 'We choose technology based on production track record and operational simplicity. Here\'s what we actually use — and why.',
      'stack.section.data.desc': 'Apache NiFi is our primary tool for data movement and transformation. It provides visual flow design, built-in provenance (data lineage), back-pressure handling, and 300+ built-in processors. Kafka is the durable backbone where reliability matters more than simplicity.',
      'stack.section.app.desc': 'Java 21 with virtual threads eliminates the need for reactive plumbing in most cases while keeping throughput high. Spring Boot 3 with Spring Security, WebFlux for truly async workloads, and Groovy for scripting inside NiFi processors.',
      'stack.section.infra.desc': 'Kubernetes for orchestration, GitLab CI / GitHub Actions for delivery, Helm for packaging. We instrument everything with Prometheus + Grafana and wire alerts to PagerDuty or Telegram for on-call. Deployments are GitOps — config lives in Git, not in someone\'s head.',
      'stack.section.security.eyebrow': 'Security',
      'stack.section.security.h2': 'Zero-trust by default',
      'stack.section.security.desc': 'OpenBao (an open-source HashiCorp Vault fork) manages all secrets — no credentials in environment variables, no plaintext configs. mTLS between services, OAuth2/JWT at API boundaries, and network-level segmentation with headscale ACL policies.',
      'stack.section.fintech.eyebrow': 'Financial protocols',
      'stack.section.fintech.h2': 'Fintech-specific expertise',
      'stack.section.fintech.desc': 'Most integration engineers don\'t know SWIFT from SEPA or FIX from FAST. We do. This expertise is rare and took years of production work to accumulate. It\'s one of the core reasons our clients in banking and trading choose us over generalist vendors.',
      'stack.philosophy.eyebrow': 'Engineering philosophy',
      'stack.philosophy.h2': 'Why we don\'t chase trends',
      'stack.phil1.title': 'We use NiFi even though people say "just use Kafka"',
      'stack.phil1.desc': 'Because NiFi gives you data provenance, back-pressure handling, visual debugging, and 300 built-in processors. For complex ETL with many heterogeneous sources, it\'s the right tool — and our NiFi production experience proves it.',
      'stack.phil2.title': 'We use Java 21 even though everyone says "go Rust"',
      'stack.phil2.desc': 'Because the Spring ecosystem, JVM tooling, and Java talent pool are unmatched for enterprise integration. Virtual threads solved the concurrency problem. Rewriting in Rust helps no one\'s SLA.',
      'stack.phil3.title': 'We use OpenBao instead of commercial vaults',
      'stack.phil3.desc': 'Full control, no vendor lock-in, no licensing fees at scale. We self-host and operate OpenBao in production for our own infrastructure and clients — we know its failure modes and operational patterns.',
      'stack.phil4.title': 'We build self-hosted infrastructure by default',
      'stack.phil4.desc': 'Headscale, Prosody, OpenBao — not because cloud is bad, but because for financial companies and regulated industries, data sovereignty and operational independence are a business requirement, not a preference.',
      'page.contact.lead': 'Describe your integration challenge — we\'ll respond within 24 hours with an honest assessment, not a sales pitch.',
      'contact.direct.h2': 'Reach us directly',
      'contact.where.title': '📍 Where we work',
      'contact.where.text': 'Remote-first. Our team operates across Russia, Georgia, and Israel. We work with clients in EU, CIS, and MENA — timezone coverage UTC+0 to UTC+4.',
      'contact.tips.h2': 'What to include in your first message',
      'contact.tip1.title': 'Your integration challenge',
      'contact.tip1.desc': 'What systems need to be connected? What\'s failing or missing today?',
      'contact.tip2.title': 'Industry & scale',
      'contact.tip2.desc': 'Fintech, banking, industrial, government? Approximate data volumes and team size.',
      'contact.tip3.title': 'Timeline & urgency',
      'contact.tip3.desc': 'Is this a new project, a legacy migration, or a production incident?',
      'contact.tip4.title': 'Existing stack (optional)',
      'contact.tip4.desc': 'What tech is already in use? Constraints we should know about?',
      'contact.note': 'We typically respond with a 1-page technical assessment within 24 hours — not a generic proposal, but a real opinion on your specific situation.',
      'contact.avail.title': 'Currently available',
      'contact.avail.text': 'We have capacity for 1–2 new projects starting Q3 2026. Long engagements preferred.',

    ru: {
      /* ── Nav ── */
      'nav.logo':         'IntegraTech',
      'nav.services':     'Услуги',
      'nav.case_studies': 'Кейсы',
      'nav.tech_stack':   'Технологии',
      'nav.contact':      'Контакты',
      'nav.cta':          'Связаться',

      /* ── Footer ── */
      'footer.tagline':     'Интеграционный инжиниринг · финтех · промышленность',
      'footer.services':    'Услуги',
      'footer.case_studies':'Кейсы',
      'footer.tech_stack':  'Технологии',
      'footer.contact':     'Контакты',

      /* ── index.html — hero ── */
      'hero.eyebrow': 'Интеграционный инжиниринг для предприятий',
      'hero.badge':   '🟢 Доступны с Q3 2026',
      'hero.h1':      'Мы строим системы там, где',
      'hero.lead':    'IntegraTech проектирует и внедряет корпоративные интеграционные платформы для финансовых организаций и промышленных предприятий — от SWIFT-конвейеров до событийных архитектур реального времени.',
      'hero.cta1':    'Начать проект →',
      'hero.cta2':    'Смотреть кейсы',
      'typed.strings': [
        'простые API не справляются.',
        'стандартный ETL не подходит.',
        'готовые решения ломаются.',
        'задержка становится критичной.',
        'согласованность данных важна.',
      ],

      /* ── index.html — metrics ── */
      'metrics.projects_label': 'корпоративных проектов сдано',
      'metrics.uptime_label':   'SLA uptime конвейеров',
      'metrics.java_label':     'современный стек, нулевой технический долг',

      /* ── index.html — what we do ── */
      'section.what.eyebrow': 'Ключевые компетенции',
      'section.what.h2':      'Инжиниринг там, где сложность — норма.',
      'section.what.lead':    'Мы работаем на интеграционном слое — части стека, соединяющей устаревшие финансовые системы с современной инфраструктурой, где доступность, согласованность данных и безопасность не обсуждаются.',

      'card.pipeline.title': 'Инжиниринг конвейеров данных',
      'card.pipeline.desc':  'Apache NiFi + Kafka сквозные конвейеры с семантикой exactly-once, CDC из PostgreSQL/Oracle и интеграция с Greenplum-аналитикой. Производительность 50k+ сообщений/сек.',
      'card.fintech.title':  'Интеграция финансовых систем',
      'card.fintech.desc':   'SWIFT MT/MX, НРД, API МосБиржи, банковские ядра. Мы реализовали production-коннекторы для самой требовательной финансовой инфраструктуры России и СНГ.',
      'card.java.title':     'Java-микросервисы',
      'card.java.desc':      'Java 17/21 со Spring Boot 3, реактивный стек WebFlux, виртуальные потоки и событийный дизайн. API-шлюзы с OAuth2, JWT, mTLS для zero-trust окружений.',
      'card.devsecops.title':'DevSecOps и инфраструктура',
      'card.devsecops.desc': 'Kubernetes, GitLab CI/CD, управление секретами OpenBao, деплой без простоев. Безопасность — часть архитектуры, а не послесловие.',
      'card.network.title':  'Приватная сетевая инфраструктура',
      'card.network.desc':   'Self-hosted mesh VPN (Tailscale/headscale), корпоративный XMPP-мессенджер, изолированная инфраструктура без зависимости от BigTech.',
      'card.realtime.title': 'Реальное время и аналитика',
      'card.realtime.desc':  'WebSocket-потоки, бэкенды торговых систем, временны́е ряды на Greenplum. От сырых рыночных данных до бизнес-интеллекта за миллисекунды.',

      /* ── index.html — tech stack ── */
      'section.stack.eyebrow': 'Стек технологий',
      'section.stack.h2':      'Проверенный в бою стек для mission-critical нагрузок.',
      'section.stack.lead':    'В ядре — надёжные battle-tested технологии. В инструментарии разработчика — современные инструменты. Никаких хайп-решений.',
      'section.stack.cta':     'Подробнее о стеке →',
      'stack.data_title':      'Данные и интеграция',
      'stack.app_title':       'Прикладной уровень',
      'stack.infra_title':     'Инфраструктура',
      'stack.security_title':  'Безопасность',
      'stack.fintech_title':   'Финансовые протоколы',

      /* ── index.html — approach ── */
      'section.approach.eyebrow': 'Как мы работаем',
      'section.approach.h2':      'От устаревших систем — к надёжным конвейерам.',
      'approach.step1.title': '1. Аудит и архитектура',
      'approach.step1.desc':  'Картируем интеграционный ландшафт, выявляем узкие места и точки отказа, проектируем целевую архитектуру с чёткими путями миграции.',
      'approach.step2.title': '2. Разработка и интеграция',
      'approach.step2.desc':  'Реализуем конвейеры, API и коннекторы с production-мониторингом, обработкой ошибок и гарантиями доставки exactly-once там, где это необходимо.',
      'approach.step3.title': '3. Деплой и эксплуатация',
      'approach.step3.desc':  'GitOps-деплой, runbook-ы, алертинг и SLA-мониторинг. Мы не исчезаем после запуска — остаёмся до тех пор, пока система устойчива и команда уверена в себе.',

      /* ── index.html — CTA ── */
      'cta.eyebrow': 'Готовы к интеграции?',
      'cta.h2':      'Давайте решим вашу самую сложную задачу.',
      'cta.lead':    'Будь то устаревший SWIFT-коннектор, перегруженный NiFi-конвейер или greenfield событийная архитектура — мы это уже видели.',
      'cta.btn1':    'Написать нам',
      'cta.btn2':    'Смотреть работы',

      /* ── index.html — live feed ── */
      'livefeed.eyebrow': 'Активность систем',
      'livefeed.h2':      'Production-конвейеры. Прямо сейчас.',
      'livefeed.lead':    'Интеграция реального времени — это реальные последствия. Именно такие системы мы держим в работе 24/7.',

      /* ── services.html ── */
      'page.services.eyebrow': 'Что мы предлагаем',
      'page.services.h1':      'Услуги',
      'page.services.lead':    'Мы обеспечиваем комплексный интеграционный инжиниринг — от архитектурного консалтинга до production-поддержки. Каждый контракт адаптирован к вашему стеку и срокам.',

      'svc.pipeline.badge': 'Основная услуга',
      'svc.pipeline.title': 'Инжиниринг конвейеров данных',
      'svc.pipeline.lead':  'Проектирование и реализация корпоративных конвейеров на Apache NiFi и Apache Kafka.',
      'svc.pipeline.price': 'Формат: проект или ретейнер · от €8 000 / проект',

      'svc.fintech.badge': 'Финтех-специализация',
      'svc.fintech.title': 'Интеграция финансовых систем',
      'svc.fintech.lead':  'Мы реализовали production-коннекторы и адаптеры для самой требовательной финансовой инфраструктуры России и СНГ.',
      'svc.fintech.price': 'Формат: fixed-scope контракт · от €15 000',

      'svc.java.badge': 'Прикладной уровень',
      'svc.java.title': 'Java-микросервисы и проектирование API',
      'svc.java.lead':  'Современная Java 17/21-разработка на Spring Boot 3, реактивный стек WebFlux и паттерны корпоративной интеграции.',
      'svc.java.price': 'Формат: T&M или проект · от €6 000 / мес',

      'svc.devops.badge': 'Инфраструктура',
      'svc.devops.title': 'DevSecOps и Kubernetes',
      'svc.devops.lead':  'Строим и эксплуатируем инфраструктуру на базе Kubernetes с GitOps-процессами, управлением секретами и полной наблюдаемостью.',
      'svc.devops.price': 'Формат: ретейнер или проект · от €5 000 / мес',

      'svc.network.badge': 'Независимость',
      'svc.network.title': 'Приватная корпоративная инфраструктура',
      'svc.network.lead':  'Self-hosted корпоративная инфраструктура без зависимости от BigTech-облаков. Полный контроль, полная приватность.',
      'svc.network.price': 'Формат: setup + поддержка · от €3 500',

      'svc.advisory.badge': 'Консалтинг',
      'svc.advisory.title': 'Архитектурный консалтинг',
      'svc.advisory.lead':  'Не готовы отдавать реализацию на аутсорс? Предоставляем экспертные архитектурные ревью, воркшопы и поддержку принятия решений.',
      'svc.advisory.price': 'Формат: почасовая оплата · от €200 / час',

      /* ── case-studies.html ── */
      'page.cases.eyebrow': 'Реальные проекты, реальные результаты',
      'page.cases.h1':      'Кейсы',
      'page.cases.lead':    'Все проекты анонимизированы. Метрики и сроки — реальные. Имена клиентов не раскрываем без явного согласия.',

      'case1.title': 'SWIFT ETL-конвейер: от 3-дневных аварий к uptime 99.97%',
      'case2.title': 'Фид МосБиржи реального времени: снижение задержки на 60%',
      'case3.title': 'ДИТ Москвы: городская интеграция данных из 40+ систем',
      'case4.title': 'Приватная корпоративная сеть: нулевая зависимость от BigTech для 30 сотрудников',
      'case5.title': 'FluidTrader — Реактивная алгоритмическая торговая платформа (Fintech R&D)',

      /* ── open-source.html ── */
      'page.stack.eyebrow': 'Наш инструментарий',
      'page.stack.h1':      'Стек технологий',
      'page.stack.lead':    'Технологии выбираем по production-опыту и простоте эксплуатации — не по хайпу.',

      'stack.section.data.eyebrow':     'Данные и интеграция',
      'stack.section.data.h2':          'Интеграционный слой',
      'stack.section.data.desc':        'Apache NiFi — основной инструмент перемещения и трансформации данных. Визуальный дизайн потоков, встроенная обработка ошибок, горизонтальное масштабирование.',
      'stack.section.app.eyebrow':      'Прикладной уровень',
      'stack.section.app.h2':           'Экосистема Java',
      'stack.section.app.desc':         'Java 21 с виртуальными потоками устраняет необходимость в реактивном «сантехническом» коде в большинстве случаев. Spring Boot 3 с WebFlux там, где нужен настоящий реактивный backpressure.',
      'stack.section.infra.eyebrow':    'Инфраструктура и DevOps',
      'stack.section.infra.h2':         'Cloud-native операции',
      'stack.section.infra.desc':       'Kubernetes для оркестрации, GitLab CI / GitHub Actions для поставки, Helm для пакетирования, ArgoCD для GitOps.',
      'stack.section.security.eyebrow': 'Безопасность',
      'stack.section.security.h2':      'Zero-trust по умолчанию',
      'stack.section.security.desc':    'OpenBao (форк HashiCorp Vault с открытым кодом) управляет всеми секретами — никаких учётных данных в переменных окружения и конфигурационных файлах. mTLS везде.',
      'stack.section.fintech.eyebrow':  'Финансовые протоколы',
      'stack.section.fintech.h2':       'Финтех-экспертиза',
      'stack.section.fintech.desc':     'Большинство инженеров по интеграции не знают разницы между SWIFT и SEPA или FIX и FAST. Мы знаем. Годы production-опыта с протоколами финансового обмена сообщениями.',

      /* ── contact.html ── */
      'page.contact.eyebrow': 'Поговорим',
      'page.contact.h1':      'Контакты',
      'page.contact.lead':    'Опишите вашу задачу — мы ответим в течение 24 часов с кратким техническим анализом.',

      'contact.direct.h2':      'Написать напрямую',
      'contact.email.label':    'Email',
      'contact.linkedin.label': 'LinkedIn',
      'contact.telegram.label': 'Telegram',
      'contact.where.title':  '📍 Где мы работаем',
      'contact.where.text':   'Распределённая команда. Работаем из России, Грузии и Израиля. Часовые пояса: Европа и СНГ.',
      'contact.tips.h2':      'Что написать в первом сообщении',
      'contact.tip1.title':   'Ваша задача по интеграции',
      'contact.tip1.desc':    'Какие системы нужно соединить? Что сейчас не работает или отсутствует?',
      'contact.tip2.title':   'Отрасль и масштаб',
      'contact.tip2.desc':    'Финтех, банк, промышленность, госсектор? Примерный объём данных и размер команды.',
      'contact.tip3.title':   'Сроки и срочность',
      'contact.tip3.desc':    'Это новый проект, миграция с legacy или production-инцидент?',
      'contact.tip4.title':   'Текущий стек (опционально)',
      'contact.tip4.desc':    'Какие технологии уже используются? Ограничения, о которых нам стоит знать?',
      'contact.note':         'Как правило, отвечаем в течение 24 часов с 1-страничным техническим анализом — видением ключевой проблемы и возможного подхода к решению.',
      'contact.avail.title':  'Сейчас доступны',
      'contact.avail.text':   'Есть место для 1–2 новых проектов, старт в Q3 2026. Предпочтительны долгосрочные ретейнер-контракты.',

      /* ── 404.html ── */
      '404.h1':   'Страница не найдена',
      '404.desc': 'Этот эндпоинт интеграции пока не существует.',
      '404.back': '← На главную',
    },

    /* ═══════════════════════════════════════════════════════════ */
      /* ── auto-added translations ── */
      'page.services.lead': 'Мы обеспечиваем комплексный интеграционный инжиниринг — от архитектурного консалтинга до production-поддержки. Каждый контракт адаптирован к вашему стеку и срокам.',
      'svc.pipeline.body': 'Проектирование и реализация корпоративных конвейеров данных на базе Apache NiFi и Apache Kafka. Обрабатываем высоконагруженные сценарии (50k+ сообщ/сек), семантику exactly-once, CDC из Oracle/PostgreSQL и интеграцию с аналитическими БД, включая Greenplum.',
      'svc.pipeline.list': '<li>Проектирование NiFi-потоков, настройка кластера и тюнинг</li><li>Архитектура Kafka-топиков, Schema Registry, потоковая обработка</li><li>Debezium CDC-коннекторы для синхронизации БД в реальном времени</li><li>Аналитическая интеграция с Greenplum / PostgreSQL</li><li>Dead-letter очереди, replay, мониторинг и алертинг</li>',
      'svc.fintech.body': 'Мы реализовали production-коннекторы и адаптеры для самой требовательной финансовой инфраструктуры России и СНГ. SWIFT, НРД, МосБиржа — мы знаем эти протоколы изнутри и поставляем интеграции, которые не дают сбоев.',
      'svc.fintech.list': '<li>Обработка SWIFT MT103 / MT202 / MX ISO 20022</li><li>Интеграция с API НРД — расчёты, депозитарные операции</li><li>WebSocket и REST-коннекторы к МосБирже</li><li>Адаптеры к банковским ядрам (кастомные протоколы, legacy XML)</li><li>Реализация протокола FIX для торговых систем</li>',
      'svc.java.body': 'Современная разработка бэкенда на Java 17/21 с Spring Boot 3, реактивным стеком WebFlux и виртуальными потоками. Проектируем API-шлюзы с zero-trust безопасностью и событийно-ориентированными архитектурами, которые масштабируются без перепроектирования.',
      'svc.java.list': '<li>Микросервисы на Spring Boot 3 с реактивным WebFlux</li><li>Виртуальные потоки Java 21 для высоконагруженных систем</li><li>Проектирование API-шлюзов OAuth2 / JWT / mTLS</li><li>Событийная архитектура с Kafka и паттерном Outbox</li><li>Groovy-скрипты для NiFi-процессоров и DSL-инструментов</li>',
      'svc.devops.body': 'Строим и эксплуатируем инфраструктуру на базе Kubernetes с GitOps-процессами, управлением секретами и уровнем безопасности, соответствующим требованиям финансовых регуляторов. Нулевой простой при деплоях, автомасштабирование и runbook-документация.',
      'svc.devops.list': '<li>Проектирование Kubernetes-кластеров, разработка Helm-чартов</li><li>Архитектура GitLab CI / GitHub Actions pipeline</li><li>Управление секретами через OpenBao / HashiCorp Vault</li><li>Политики сетевой безопасности, pod security standards</li><li>Наблюдаемость: Prometheus, Grafana, Loki, алертинг</li>',
      'svc.network.body': 'Self-hosted корпоративная инфраструктура без зависимости от BigTech-облаков. Mesh VPN-сети для распределённых команд, приватные XMPP-серверы обмена сообщениями и системы управления секретами под вашим полным контролем.',
      'svc.network.list': '<li>Mesh VPN Headscale + Tailscale для распределённых команд</li><li>Корпоративный мессенджер XMPP / Prosody на собственном хостинге</li><li>Управление секретами и учётными данными через OpenBao</li><li>Политики контроля доступа и сегментация сети</li><li>Автоматизация онбординга клиентов и документация</li>',
      'svc.advisory.body': 'Не готовы отдавать реализацию на аутсорс? Проводим экспертные архитектурные ревью, аудиты интеграций и разрабатываем техническую стратегию — чтобы ваша команда сразу шла в правильном направлении и не тратила ресурсы на переработку.',
      'svc.advisory.list': '<li>Аудит интеграционного ландшафта с отчётом о находках</li><li>Архитектурная сессия + записи о принятых решениях</li><li>Консультация по тюнингу производительности NiFi / Kafka</li><li>Ревью архитектуры безопасности для финтех-нагрузок</li><li>Менторинг команды и поддержка тимлида</li>',
      'svc.cta.eyebrow': 'Не уверены, какая услуга подходит?',
      'svc.cta.h2': 'Давайте обсудим ваш проект.',
      'svc.cta.lead': '30-минутного звонка достаточно, чтобы разобраться в вашей интеграционной задаче и дать конкретную рекомендацию.',
      'svc.cta.btn': 'Записаться на бесплатный звонок →',
      'page.cases.lead': 'Все проекты анонимизированы. Метрики и сроки — реальные. Мы не преувеличиваем — это фактические результаты, которых мы достигли.',
      'case1.badge1': '🏦 Банк',
      'case1.badge2': 'NiFi + Kafka',
      'case1.badge3': '3 недели',
      'case1.p1': 'Топ-20 российский банк использовал конвейер обработки SWIFT MT103, построенный на хрупком Java-монолите. Система падала под нагрузкой конца месяца — каждый месяц без исключения. Команда тратила 2–3 дня на ручное восстановление после каждого инцидента.',
      'case1.p2': 'Мы перестроили слой приёма и трансформации на Apache NiFi с Kafka в качестве надёжного backbone. Dead-letter обработка, идемпотентные процессоры и автоматизированный replay заменили хрупкие ручные процедуры. Мониторинг подключён к PagerDuty с runbook-документацией для каждого алерта.',
      'case1.list': '<li>Заменили монолитный SWIFT-процессор на NiFi-поток + Kafka-топик на каждый тип сообщения</li><li>Реализовали exactly-once семантику для доставки финансовых сообщений</li><li>Автоматическая сверка с расчётными записями НРД</li><li>Нулевые потери данных в первый цикл конца месяца после запуска</li>',
      'case1.r1': 'uptime конвейера',
      'case1.r2': 'время ручного восстановления',
      'case1.r3': 'от аудита до production',
      'case2.badge1': '📈 Трейдинг',
      'case2.badge2': 'WebSocket + PostgreSQL',
      'case2.badge3': '6 недель',
      'case2.p1': 'Проприетарная торговая фирма получала рыночные данные МосБиржи через сторонний вендорный фид. p99 задержка достигала 180мс в периоды волатильности — неприемлемо для алгоритмических стратегий. Вендор отказался гарантировать улучшения по SLA.',
      'case2.p2': 'Мы построили прямое WebSocket-подключение к фиду МосБиржи FAST/FIXS, разработали слой нормализации с низкой задержкой на Java 21 с виртуальными потоками и сохраняли тиковые данные в партиционированные таблицы PostgreSQL с BRIN-индексами. p99 упал со 180мс до 72мс в первый день.',
      'case2.list': '<li>Прямой декодер протокола FAST — без вендорного посредника</li><li>Виртуальные потоки Java 21 для 12 000 одновременных подписок на инструменты</li><li>Партиционированное хранилище тиков PostgreSQL с sub-миллисекундной задержкой записи</li><li>Dashboard Grafana для перцентилей задержки, обнаружения разрывов и реконнектов</li>',
      'case2.r1': 'снижение задержки',
      'case2.r2': 'задержка рыночных данных p99',
      'case2.r3': 'одновременных подписок',
      'case3.badge1': '🏛️ Государство',
      'case3.badge2': 'NiFi + Greenplum',
      'case3.badge3': '4 месяца',
      'case3.p1': 'Департаменту информационных технологий Москвы требовался единый слой интеграции данных для консолидации операционных данных из 40+ городских систем в аналитическую платформу Greenplum. Существующий ETL представлял собой набор плановых SQL-скриптов без lineage, мониторинга и ежедневными сбоями.',
      'case3.p2': 'Мы спроектировали и развернули кластер Apache NiFi, который управляет полным жизненным циклом загрузки — от REST и SOAP API источников до валидации схем, трансформации, обработки ошибок и отслеживания lineage. Каждый конвейер самодокументирует своё состояние через структурированные логи и кастомный Grafana-дашборд.',
      'case3.list': '<li>Кластер NiFi: 3-нодовый HA с ZooKeeper, 40+ активных потоков</li><li>Schema Registry для всех контрактов источников — нарушения схем перехватываются до загрузки</li><li>Полный data lineage от API источника до аналитической таблицы Greenplum</li><li>On-call runbook и автоматический алертинг переданы внутренней команде</li>',
      'case3.r1': 'систем-источников',
      'case3.r2': 'ошибок конвейера/мес',
      'case3.r3': 'от проектирования до production',
      'case4.badge1': '🔐 Enterprise',
      'case4.badge2': 'Headscale + OpenBao',
      'case4.badge3': '2 недели',
      'case4.p1': 'Финтех-компания с удалёнными сотрудниками в России, Грузии и Израиле нуждалась в защищённой внутренней сети, которая не маршрутизирует трафик через подконтрольных США облачных провайдеров. Существующая конфигурация WireGuard требовала ручного управления ключами и не имела политик контроля доступа.',
      'case4.p2': 'Мы развернули self-hosted контроллер Headscale с клиентами Tailscale, реализовали ACL-политики для сегментации сети, добавили XMPP-сервер Prosody и интегрировали OpenBao для ротации секретов. Онбординг клиентов сведён к сканированию QR-кода.',
      'case4.list': '<li>Контроллер Headscale на приватном VPS, exit-ноды в DE и US</li><li>ACL-политики: уровни доступа per-user, контроль интернет-выхода</li><li>Self-hosted Prosody XMPP с end-to-end зашифрованными групповыми чатами</li><li>Страница онбординга на основе QR-кода — настройка клиента за 2 минуты</li>',
      'case4.r1': 'подключённых участников команды',
      'case4.r2': 'онбординг нового клиента',
      'case4.r3': 'self-hosted, без BigTech',
      'case5.p1': 'Внутренний R&D-проект — production-grade реактивная система алгоритмической торговли на Java 21 + Spring WebFlux. Подключена к спотовым и фьючерсным рынкам HTX (Huobi). Система работает 24/7: 5 микросервисов, 12+ real-time SSE-дашбордов и AI-аналитик рынка на Qwen3.7-Max и DeepSeek.',
      'case5.p2': 'Проект демонстрирует наши full-stack возможности финтех-инжиниринга: неблокирующие реактивные конвейеры, хранилище временных рядов TimescaleDB, HMAC-SHA256 API-аутентификация, задержка исполнения ордеров <100мс и автоматические AI-обзоры рынка каждый час.',
      'case5.list': '<li>5 микросервисов: fluid-trader, klines-service, prices-service, news-agent, trader-db</li><li>AI-аналитик: Qwen3.7-Max + DeepSeek-V4-Pro, ежечасные обзоры рынка в Telegram</li><li>TimescaleDB для OHLCV временных рядов, WebSocket-фид HTX + Binance</li><li>Zero-Trust секреты: OpenBao с автоматической ротацией, никаких учётных данных в коде</li><li>Полный деплой в Kubernetes на bare-metal VPS, TLS-терминация через Nginx</li>',
      'case5.r1': 'дней непрерывной работы',
      'case5.r2': 'live SSE-дашбордов',
      'case5.r3': 'задержка исполнения ордера',
      'case5.access': 'Доступ доступен для инвесторов и корпоративных партнёров',
      'cases.cta.eyebrow': 'У вас похожая задача?',
      'cases.cta.h2': 'Расскажите о вашем проекте.',
      'page.stack.lead': 'Технологии выбираем по production-опыту и простоте эксплуатации. Вот что мы реально используем — и почему.',
      'stack.section.data.desc': 'Apache NiFi — наш основной инструмент перемещения и трансформации данных. Визуальный дизайн потоков, встроенный data lineage (provenance), обработка back-pressure и 300+ готовых процессоров. Kafka — надёжный backbone там, где важнее надёжность, а не простота.',
      'stack.section.app.desc': 'Java 21 с виртуальными потоками устраняет необходимость в реактивной «сантехнике» в большинстве случаев при сохранении высокой пропускной способности. Spring Boot 3 с Spring Security, WebFlux для по-настоящему асинхронных нагрузок и Groovy для скриптов в NiFi-процессорах.',
      'stack.section.infra.desc': 'Kubernetes для оркестрации, GitLab CI / GitHub Actions для доставки, Helm для пакетирования. Всё инструментируем через Prometheus + Grafana, алерты — в PagerDuty или Telegram для on-call. Деплои GitOps — конфиг живёт в Git, не в чьей-то голове.',
      'stack.section.security.eyebrow': 'Безопасность',
      'stack.section.security.h2': 'Zero-trust по умолчанию',
      'stack.section.security.desc': 'OpenBao (open-source форк HashiCorp Vault) управляет всеми секретами — никаких учётных данных в переменных окружения, никаких plaintext-конфигов. mTLS между сервисами, OAuth2/JWT на API-границах и сегментация сети через ACL-политики Headscale.',
      'stack.section.fintech.eyebrow': 'Финансовые протоколы',
      'stack.section.fintech.h2': 'Финтех-экспертиза',
      'stack.section.fintech.desc': 'Большинство инженеров по интеграции не знают разницы между SWIFT и SEPA или FIX и FAST. Мы знаем. Эта экспертиза редка и накоплена годами production-работы. Это одна из ключевых причин, по которой клиенты в банковском секторе и трейдинге выбирают нас, а не универсальных вендоров.',
      'stack.philosophy.eyebrow': 'Инженерная философия',
      'stack.philosophy.h2': 'Почему мы не гонимся за трендами',
      'stack.phil1.title': 'Мы используем NiFi, хотя все говорят «просто Kafka»',
      'stack.phil1.desc': 'Потому что NiFi даёт data lineage, обработку back-pressure, визуальную отладку и 300 встроенных процессоров. Для сложного ETL с разнородными источниками — это правильный инструмент, и наш production-опыт с NiFi это подтверждает.',
      'stack.phil2.title': 'Мы используем Java 21, хотя все говорят «иди на Rust»',
      'stack.phil2.desc': 'Потому что экосистема Spring, инструментарий JVM и пул Java-специалистов не имеют себе равных для корпоративной интеграции. Виртуальные потоки решили проблему конкурентности. Переписывать на Rust не помогает SLA.',
      'stack.phil3.title': 'Мы используем OpenBao вместо коммерческих хранилищ',
      'stack.phil3.desc': 'Полный контроль, никакого vendor lock-in, никаких лицензионных платежей при масштабировании. Мы эксплуатируем OpenBao в production для собственной инфраструктуры и клиентов — знаем его режимы отказа и операционные паттерны.',
      'stack.phil4.title': 'Мы строим self-hosted инфраструктуру по умолчанию',
      'stack.phil4.desc': 'Headscale, Prosody, OpenBao — не потому что облако плохо, а потому что для финансовых компаний и регулируемых отраслей суверенитет данных и операционная независимость — это бизнес-требование, а не предпочтение.',
      'page.contact.lead': 'Опишите вашу интеграционную задачу — ответим в течение 24 часов с честной оценкой, а не коммерческим предложением.',
      'contact.direct.h2': 'Написать напрямую',
      'contact.where.title': '📍 Где мы работаем',
      'contact.where.text': 'Распределённая команда. Работаем из России, Грузии и Израиля. Часовые пояса: Европа и СНГ — UTC+0 до UTC+4.',
      'contact.tips.h2': 'Что написать в первом сообщении',
      'contact.tip1.title': 'Ваша интеграционная задача',
      'contact.tip1.desc': 'Какие системы нужно соединить? Что сейчас не работает или отсутствует?',
      'contact.tip2.title': 'Отрасль и масштаб',
      'contact.tip2.desc': 'Финтех, банк, промышленность, госсектор? Примерный объём данных и размер команды.',
      'contact.tip3.title': 'Сроки и срочность',
      'contact.tip3.desc': 'Это новый проект, миграция с legacy или production-инцидент?',
      'contact.tip4.title': 'Текущий стек (опционально)',
      'contact.tip4.desc': 'Какие технологии уже используются? Ограничения, о которых нам стоит знать?',
      'contact.note': 'Как правило, отвечаем в течение 24 часов с кратким техническим анализом — реальным мнением о вашей конкретной ситуации, а не стандартным предложением.',
      'contact.avail.title': 'Сейчас доступны',
      'contact.avail.text': 'Есть место для 1–2 новых проектов, старт в Q3 2026. Предпочтительны долгосрочные ретейнер-контракты.',

    kz: {
      /* ── Nav ── */
      'nav.logo':         'IntegraTech',
      'nav.services':     'Қызметтер',
      'nav.case_studies': 'Кейстер',
      'nav.tech_stack':   'Технологиялар',
      'nav.contact':      'Байланыс',
      'nav.cta':          'Хабарласу',

      /* ── Footer ── */
      'footer.tagline':     'Кәсіпорынды интеграциялау · финтех · өнеркәсіп',
      'footer.services':    'Қызметтер',
      'footer.case_studies':'Кейстер',
      'footer.tech_stack':  'Технологиялар',
      'footer.contact':     'Байланыс',

      /* ── index.html — hero ── */
      'hero.eyebrow': 'Кәсіпорынды интеграциялау инжинирингі',
      'hero.badge':   '🟢 Q3 2026 жылдан қол жетімді',
      'hero.h1':      'Біз жүйелер жасаймыз, онда',
      'hero.lead':    'IntegraTech қаржы мекемелері мен өнеркәсіптік кәсіпорындар үшін корпоративтік интеграциялық платформаларды жасайды және жеткізеді — SWIFT конвейерлерінен нақты уақыт оқиғаларына негізделген архитектураларға дейін.',
      'hero.cta1':    'Жобаны бастау →',
      'hero.cta2':    'Кейстерді қарау',
      'typed.strings': [
        'қарапайым API жұмыс істемейді.',
        'стандартты ETL жеткіліксіз.',
        'дайын шешімдер сынады.',
        'кешігу маңызды болады.',
        'деректер дәйектілігі маңызды.',
      ],

      /* ── index.html — metrics ── */
      'metrics.projects_label': 'кәсіпорынды жоба жеткізілді',
      'metrics.uptime_label':   'конвейер жұмыс уақыты SLA',
      'metrics.java_label':     'заманауи стек, техникалық борыш нөл',

      /* ── index.html — what we do ── */
      'section.what.eyebrow': 'Негізгі мүмкіндіктер',
      'section.what.h2':      'Күрделілік норма болған жерде инжиниринг.',
      'section.what.lead':    'Біз интеграциялық қабатта жұмыс жасаймыз — ескі қаржы жүйелерін заманауи инфрақұрылыммен байланыстыратын стек бөлігінде, мұнда қолжетімділік, деректер дәйектілігі және қауіпсіздік талқыланбайды.',

      'card.pipeline.title': 'Деректер конвейерін инжинирингі',
      'card.pipeline.desc':  'Apache NiFi + Kafka ұштан ұшқа конвейерлер exactly-once семантикасымен, PostgreSQL/Oracle-дан CDC және Greenplum аналитикасымен интеграция. 50k+ хабарлама/сек өнімділік.',
      'card.fintech.title':  'Қаржы жүйелерін интеграциялау',
      'card.fintech.desc':   'SWIFT MT/MX, НРД, МосБиржа API, банк ядро жүйелері. Ресей мен ТМД-ның ең талапты қаржы инфрақұрылымы үшін production коннекторларын жасадық.',
      'card.java.title':     'Java микросервистері',
      'card.java.desc':      'Java 17/21 Spring Boot 3, WebFlux реактивті стек, виртуалды ағындар және оқиғаларға негізделген дизайн. OAuth2, JWT, mTLS бар API-шлюздер.',
      'card.devsecops.title':'DevSecOps және инфрақұрылым',
      'card.devsecops.desc': 'Kubernetes, GitLab CI/CD, OpenBao құпия басқару, нөлдік тоқтаумен деплой. Қауіпсіздік архитектураның бөлігі — кейінгі ой емес.',
      'card.network.title':  'Жеке желілік инфрақұрылым',
      'card.network.desc':   'Self-hosted mesh VPN желілері (Tailscale/headscale), жеке XMPP хабаршысы, BigTech тәуелділігінсіз корпоративтік инфрақұрылым.',
      'card.realtime.title': 'Нақты уақыт және аналитика',
      'card.realtime.desc':  'WebSocket ағындары, сауда жүйелерінің бэкендтері, Greenplum-да уақыт қатарлары аналитикасы. Шикі нарық деректерінен миллисекундтарда іскерлік интеллектке дейін.',

      /* ── index.html — tech stack ── */
      'section.stack.eyebrow': 'Технологиялар стегі',
      'section.stack.h2':      'Маңызды жүктемелер үшін шайқаста сыналған стек.',
      'section.stack.lead':    'Ядрода — сенімді, тексерілген технологиялар. Әзірлеуші инструментарийінде — заманауи құралдар. Хайп-шешімдер жоқ.',
      'section.stack.cta':     'Толық стекті қарау →',
      'stack.data_title':      'Деректер және интеграция',
      'stack.app_title':       'Қолданба қабаты',
      'stack.infra_title':     'Инфрақұрылым',
      'stack.security_title':  'Қауіпсіздік',
      'stack.fintech_title':   'Қаржы хаттамалары',

      /* ── index.html — approach ── */
      'section.approach.eyebrow': 'Жұмыс тәсіліміз',
      'section.approach.h2':      'Ескірген жүйеден сенімді конвейерлерге.',
      'approach.step1.title': '1. Аудит және архитектура',
      'approach.step1.desc':  'Бар интеграциялық ландшафтты картаға түсіреміз, тар жерлерді анықтаймыз және миграция жолдары анық көрсетілген мақсатты архитектура жобалаймыз.',
      'approach.step2.title': '2. Жасау және интеграциялау',
      'approach.step2.desc':  'Конвейерлерді, API-ларды және коннекторларды production мониторингімен, қателерді өңдеумен және қажет жерде exactly-once жеткізу кепілдіктерімен іске асырамыз.',
      'approach.step3.title': '3. Деплой және пайдалану',
      'approach.step3.desc':  'GitOps деплой, runbook-тар, алертинг және SLA мониторинг. Іске қосылғаннан кейін жоғалып кетпейміз — жүйе тұрақты болып, команда сенімді болғанша қаламыз.',

      /* ── index.html — CTA ── */
      'cta.eyebrow': 'Интеграциялауға дайынсыз ба?',
      'cta.h2':      'Ең қиын интеграция мәселеңізді бірге шешейік.',
      'cta.lead':    'Ескірген SWIFT коннектор болсын, жүктемеден қиналған NiFi конвейер болсын немесе жаңа оқиғаларға негізделген архитектура болсын — біз мұны бұрын да көрдік.',
      'cta.btn1':    'Хабарласу',
      'cta.btn2':    'Жұмыстарды қарау',

      /* ── index.html — live feed ── */
      'livefeed.eyebrow': 'Жүйе белсенділігі',
      'livefeed.h2':      'Production конвейерлері. Дәл қазір.',
      'livefeed.lead':    'Нақты уақыт интеграциясы — нақты салдарлар. Біз 24/7 осындай жүйелерді ұстаймыз.',

      /* ── services.html ── */
      'page.services.eyebrow': 'Не ұсынамыз',
      'page.services.h1':      'Қызметтер',
      'page.services.lead':    'Архитектуралық консалтингтен production қолдауға дейін кешенді интеграциялық инжиниринг ұсынамыз. Әрбір келісімшарт сіздің стекіңіз бен мерзімдеріңізге бейімделген.',

      'svc.pipeline.badge': 'Негізгі қызмет',
      'svc.pipeline.title': 'Деректер конвейерін инжинирингі',
      'svc.pipeline.lead':  'Apache NiFi және Apache Kafka негізіндегі корпоративтік деректер конвейерлерін жобалау және іске асыру.',
      'svc.pipeline.price': 'Формат: жоба немесе ретейнер · €8 000 бастап',

      'svc.fintech.badge': 'Финтех мамандануы',
      'svc.fintech.title': 'Қаржы жүйелерін интеграциялау',
      'svc.fintech.lead':  'Ресей мен ТМД-ның ең талапты қаржы инфрақұрылымы үшін production коннекторлар мен адаптерлер жасадық.',
      'svc.fintech.price': 'Формат: тіркелген көлем · €15 000 бастап',

      'svc.java.badge': 'Қолданба қабаты',
      'svc.java.title': 'Java микросервистері және API жобалау',
      'svc.java.lead':  'Java 17/21 заманауи бэкенд инжинирингі, Spring Boot 3, WebFlux және корпоративтік интеграция паттерндері.',
      'svc.java.price': 'Формат: T&M немесе жоба · €6 000/ай бастап',

      'svc.devops.badge': 'Инфрақұрылым',
      'svc.devops.title': 'DevSecOps және Kubernetes',
      'svc.devops.lead':  'GitOps процестері, құпия басқару және толық бақылаумен Kubernetes негізіндегі инфрақұрылымды жасап, пайдаланамыз.',
      'svc.devops.price': 'Формат: ретейнер немесе жоба · €5 000/ай бастап',

      'svc.network.badge': 'Тәуелсіздік',
      'svc.network.title': 'Жеке корпоративтік инфрақұрылым',
      'svc.network.lead':  'BigTech бұлтына тәуелділіксіз self-hosted корпоративтік инфрақұрылым. Толық бақылау, толық құпиялылық.',
      'svc.network.price': 'Формат: орнату + қолдау · €3 500 бастап',

      'svc.advisory.badge': 'Кеңес',
      'svc.advisory.title': 'Архитектуралық консалтинг',
      'svc.advisory.lead':  'Іске асыруды аутсорсингке беруге дайын емессіз бе? Сарапшылық архитектуралық шолу, воркшоптар және шешім қабылдауды қолдау ұсынамыз.',
      'svc.advisory.price': 'Формат: сағаттық · €200/сағ бастап',

      /* ── case-studies.html ── */
      'page.cases.eyebrow': 'Нақты жобалар, нақты нәтижелер',
      'page.cases.h1':      'Кейстер',
      'page.cases.lead':    'Барлық жобалар анонимдендірілген. Метрикалар мен мерзімдер нақты. Клиент атауларын тікелей келісімсіз жарияламаймыз.',

      'case1.title': 'SWIFT ETL конвейері: 3 күндік аварияларdan 99.97% uptime-ға',
      'case2.title': 'МосБиржа нақты уақыт ағыны: нарық деректер конвейерінде кідірісті 60%-ға азайту',
      'case3.title': 'ДИТ Москва: 40+ жүйеден қалалық деректер интеграциясы',
      'case4.title': 'Жеке корпоративтік желі: 30 қызметкерлік команда үшін BigTech тәуелділігінен нөлдік тәуелділік',
      'case5.title': 'FluidTrader — Реактивті алгоритмдік сауда платформасы (Fintech R&D)',

      /* ── open-source.html ── */
      'page.stack.eyebrow': 'Біздің инструментарий',
      'page.stack.h1':      'Технологиялар стегі',
      'page.stack.lead':    'Технологияларды production тәжірибесі мен пайдалану қарапайымдылығы бойынша таңдаймыз — хайп бойынша емес.',

      'stack.section.data.eyebrow':     'Деректер және интеграция',
      'stack.section.data.h2':          'Интеграциялық қабат',
      'stack.section.data.desc':        'Apache NiFi — деректерді жылжыту және трансформациялаудың негізгі құралы. Визуалды ағын дизайны, кіріктірілген қателерді өңдеу, жоғары өткізгіштік жүктемелер үшін горизонталды масштабтау.',
      'stack.section.app.eyebrow':      'Қолданба қабаты',
      'stack.section.app.h2':           'Java экожүйесі',
      'stack.section.app.desc':         'Виртуалды ағындары бар Java 21 көптеген жағдайда реактивтік «сантехникаға» қажеттілікті жояды. Нақты реактивтік backpressure қажет жерде Spring Boot 3 with WebFlux.',
      'stack.section.infra.eyebrow':    'Инфрақұрылым және DevOps',
      'stack.section.infra.h2':         'Cloud-native операциялар',
      'stack.section.infra.desc':       'Оркестрация үшін Kubernetes, жеткізу үшін GitLab CI / GitHub Actions, пакеттеу үшін Helm, GitOps үшін ArgoCD.',
      'stack.section.security.eyebrow': 'Қауіпсіздік',
      'stack.section.security.h2':      'Zero-trust әдепкі бойынша',
      'stack.section.security.desc':    'OpenBao (ашық кодты HashiCorp Vault форкы) барлық құпияларды басқарады — ортаның айнымалыларында немесе конфигурация файлдарында тіркелімдер жоқ. mTLS барлық жерде.',
      'stack.section.fintech.eyebrow':  'Қаржы хаттамалары',
      'stack.section.fintech.h2':       'Финтех мамандануы',
      'stack.section.fintech.desc':     'Интеграция инженерлерінің көпшілігі SWIFT пен SEPA немесе FIX пен FAST арасындағы айырмашылықты білмейді. Біз білеміз. Қаржылық хабарлама хаттамаларымен production тәжірибесінің жылдары.',

      /* ── contact.html ── */
      'page.contact.eyebrow': 'Сөйлесейік',
      'page.contact.h1':      'Байланыс',
      'page.contact.lead':    'Интеграция тапсырмаңызды сипаттаңыз — 24 сағат ішінде қысқаша техникалық талдаумен жауап береміз.',

      'contact.direct.h2':      'Тікелей хабарласу',
      'contact.email.label':    'Email',
      'contact.linkedin.label': 'LinkedIn',
      'contact.telegram.label': 'Telegram',
      'contact.where.title':  '📍 Қай жерде жұмыс жасаймыз',
      'contact.where.text':   'Таратылған команда. Ресей, Грузия және Израильден жұмыс жасаймыз. Уақыт белдеулері: Еуропа және ТМД.',
      'contact.tips.h2':      'Бірінші хабарламада не жазу керек',
      'contact.tip1.title':   'Интеграция тапсырмаңыз',
      'contact.tip1.desc':    'Қандай жүйелерді қосу керек? Қазір не жұмыс істемейді немесе жетіспейді?',
      'contact.tip2.title':   'Сала және ауқым',
      'contact.tip2.desc':    'Финтех, банк, өнеркәсіп, мемлекет? Шамамен деректер көлемі мен команда мөлшері.',
      'contact.tip3.title':   'Мерзімдер және жеделдік',
      'contact.tip3.desc':    'Бұл жаңа жоба ма, legacy миграция ма, әлде production инцидент пе?',
      'contact.tip4.title':   'Ағымдағы стек (міндетті емес)',
      'contact.tip4.desc':    'Қандай технологиялар қолданылуда? Білуіміз керек шектеулер бар ма?',
      'contact.note':         'Әдетте 24 сағат ішінде 1 беттік техникалық талдаумен жауап береміз — негізгі мәселенің көрінісі және мүмкін шешу тәсілі.',
      'contact.avail.title':  'Қазір қол жетімді',
      'contact.avail.text':   'Q3 2026 бастап 1–2 жаңа жобаға орын бар. Ұзақ мерзімді ретейнер келісімшарттар артықшылықты.',

      /* ── 404.html ── */
      '404.h1':   'Бет табылмады',
      '404.desc': 'Бұл интеграция эндпойнті әлі жоқ.',
      '404.back': '← Басты бетке',
    },

    /* ═══════════════════════════════════════════════════════════ */
      /* ── auto-added translations ── */
      'page.services.lead': 'Біз архитектуралық консалтингтен production деңгейіндегі жүйелерді енгізуге дейін толық интеграциялық инжиниринг жеткіземіз. Әр келісімшарт сіздің стегіңіз бен мерзімдеріңізге бейімделген.',
      'svc.pipeline.body': 'Apache NiFi мен Apache Kafka негізінде корпоративтік деректер конвейерлерін жобалау және іске асыру. Жоғары жүктемелі сценарийлерді (50k+ хбрш/сек), exactly-once жеткізуді, Oracle/PostgreSQL CDC-ні және Greenplum-ды қоса аналитикалық дерекқорлармен интеграцияны қамтамасыз етеміз.',
      'svc.pipeline.list': '<li>NiFi ағынын жобалау, кластерді баптау және реттеу</li><li>Kafka топик архитектурасы, Schema Registry, ағынды өңдеу</li><li>Нақты уақыттағы дерекқор синхрондауы үшін Debezium CDC коннекторлары</li><li>Greenplum / PostgreSQL аналитикалық интеграция</li><li>Dead-letter кезектер, replay, мониторинг және ескерту</li>',
      'svc.fintech.body': 'Біз Ресей мен ТМД-ның ең талапты қаржылық инфрақұрылымы үшін production коннекторлары мен адаптерлерін іске асырдық. SWIFT, НРД, МосБиржа — бұл протоколдарды ішінен білеміз.',
      'svc.fintech.list': '<li>SWIFT MT103 / MT202 / MX ISO 20022 хабарламаларын өңдеу</li><li>НРД API интеграциясы — есеп айырысу, депозитарлық операциялар</li><li>МосБиржа WebSocket және REST API коннекторлары</li><li>Банктік негізгі жүйелер адаптерлері</li><li>Сауда жүйелері үшін FIX протоколын іске асыру</li>',
      'svc.java.body': 'Spring Boot 3, WebFlux реактивті стегі және виртуалды ағындармен Java 17/21-де заманауи бэкенд инжинирингі. Zero-trust қауіпсіздігі бар API шлюздерін жобалаймыз.',
      'svc.java.list': '<li>Реактивті WebFlux-пен Spring Boot 3 микросервистері</li><li>Жоғары жүктемелер үшін Java 21 виртуалды ағындары</li><li>OAuth2 / JWT / mTLS API шлюзін жобалау</li><li>Kafka және Outbox паттернімен оқиғалы архитектура</li><li>NiFi процессорлары үшін Groovy скриптеу</li>',
      'svc.devops.body': 'GitOps жұмыс процестері, құпия деректерді басқару және қаржылық реттеушілер талаптарын қанағаттандыратын қауіпсіздік деңгейі бар Kubernetes негізіндегі инфрақұрылым құрамыз.',
      'svc.devops.list': '<li>Kubernetes кластерін жобалау, Helm чарттарын жасау</li><li>GitLab CI / GitHub Actions конвейер архитектурасы</li><li>OpenBao / HashiCorp Vault арқылы құпиялар басқармасы</li><li>Желілік қауіпсіздік саясаттары</li><li>Prometheus, Grafana, Loki мониторинг стегі</li>',
      'svc.network.body': 'BigTech бұлттарына тәуелді болмайтын self-hosted корпоративтік инфрақұрылым. Таратылған командалар үшін mesh VPN желілері, жеке XMPP хабарлама серверлері.',
      'svc.network.list': '<li>Таратылған командалар үшін Headscale + Tailscale mesh VPN</li><li>XMPP / Prosody self-hosted корпоративтік мессенджер</li><li>OpenBao арқылы құпиялар мен тіркелгі деректерін басқару</li><li>Қол жеткізуді бақылау саясаттары мен желі сегментациясы</li><li>Клиенттерге арналған онбординг автоматизациясы</li>',
      'svc.advisory.body': 'Іске асыруды аутсорска беруге дайын емессіз бе? Мамандандырылған архитектуралық шолулар, интеграция аудиттері мен техникалық стратегия беріп, командаңыз бастапқыдан дұрыс бағытта жүруіне көмектесеміз.',
      'svc.advisory.list': '<li>Интеграциялық ландшафт аудиті және тұжырымдар есебі</li><li>Архитектуралық жобалау сессиясы + шешімдер жазбалары</li><li>NiFi / Kafka өнімділігін реттеу бойынша консультация</li><li>Финтех жүктемелері үшін қауіпсіздік архитектурасын шолу</li><li>Команда тәлімгерлігі және тимлид қолдауы</li>',
      'svc.cta.eyebrow': 'Қай қызмет сәйкес екенін білмейсіз бе?',
      'svc.cta.h2': 'Жобаңыз туралы сөйлесейік.',
      'svc.cta.lead': '30 минуттық қоңырау интеграциялық міндеттеріңізді түсінуге және нақты ұсыным беруге жеткілікті.',
      'svc.cta.btn': 'Тегін қоңырауға жазылу →',
      'page.cases.lead': 'Барлық жобалар анонимдендірілген. Метрикалар мен мерзімдер нақты. Біз асыра сілтемейміз — бұл біздің нақты нәтижелеріміз.',
      'case1.badge1': '🏦 Банк',
      'case1.badge2': 'NiFi + Kafka',
      'case1.badge3': '3 апта',
      'case1.p1': 'Ресейдің ТОП-20 банкінде SWIFT MT103 өңдеу конвейері нәзік Java монолитінде салынған болатын. Жүйе ай соңындағы жүктемеде апатқа ұшырады — ай сайын. Команда әр оқиғаны қолмен қалпына келтіруге 2–3 күн жұмсады.',
      'case1.p2': 'Біз Apache NiFi-де Kafka-мен бірге тұрақты желкен ретінде қабылдау мен трансформация деңгейін қайта құрдық. Dead-letter өңдеу, идемпотентті процессорлар және автоматтандырылған replay нәзік қолмен орындалатын процедуралардың орнына келді.',
      'case1.list': '<li>Монолитті SWIFT процессорды NiFi ағыны + Kafka топигімен ауыстырдық</li><li>Қаржылық хабарлама жеткізу үшін exactly-once семантикасын іске асырдық</li><li>НРД есеп айырысу жазбаларымен автоматты салыстыру</li><li>Іске қосылғаннан кейінгі бірінші ай соңы циклінде деректер жоғалтпау</li>',
      'case1.r1': 'конвейер жұмыс уақыты',
      'case1.r2': 'қолмен қалпына келтіру уақыты',
      'case1.r3': 'аудиттен production-ға дейін',
      'case2.badge1': '📈 Сауда',
      'case2.badge2': 'WebSocket + PostgreSQL',
      'case2.badge3': '6 апта',
      'case2.p1': 'Меншікті сауда фирмасы МосБиржа нарық деректерін үшінші тарап вендор фидінен алып отырды. Құбылмалы сессияларда p99 кідірісі 180мс-ге жетті — алгоритмдік стратегиялар үшін қолайсыз.',
      'case2.p2': 'Біз МосБиржа FAST/FIXS фидіне тікелей WebSocket қосылымын құрдық, Java 21 виртуалды ағындарымен төмен кідірісті нормализация деңгейін жобаладық. p99 бірінші күні 180мс-тен 72мс-ге дейін төмендеді.',
      'case2.list': '<li>Тікелей FAST протокол декодері — вендор делдалынсыз</li><li>12 000 бір мезгілдегі аспап жазылымдарын өңдейтін Java 21 виртуалды ағындары</li><li>BRIN индекстері бар бөлінген PostgreSQL тик сақтауы</li><li>Кідіріс перцентильдеріне арналған Grafana бақылау тақтасы</li>',
      'case2.r1': 'кідірістің азаюы',
      'case2.r2': 'нарық деректері кідірісі p99',
      'case2.r3': 'бір мезгілдегі жазылымдар',
      'case3.badge1': '🏛️ Мемлекет',
      'case3.badge2': 'NiFi + Greenplum',
      'case3.badge3': '4 ай',
      'case3.p1': 'Мәскеудің Ақпараттық технологиялар департаментіне 40+ қалалық жүйеден операциялық деректерді Greenplum аналитикалық платформасына біріктіру үшін бірыңғай интеграция деңгейі қажет болды.',
      'case3.p2': 'Біз REST пен SOAP API көздерінен схема валидациясы, трансформация, қате өңдеу және lineage бақылауға дейін толық жүктеу өмірлік циклін басқаратын Apache NiFi кластерін жобаладық және орналастырдық.',
      'case3.list': '<li>NiFi кластері: ZooKeeper-мен 3 нодты HA, 40+ белсенді ағын</li><li>Барлық дереккөз келісімшарттары үшін Schema Registry</li><li>Бастапқы API-дан Greenplum кестесіне дейін толық data lineage</li><li>On-call runbook және автоматты ескерту ішкі командаға берілді</li>',
      'case3.r1': 'дереккөз жүйесі',
      'case3.r2': 'конвейер қателері/ай',
      'case3.r3': 'жобалаудан production-ға дейін',
      'case4.badge1': '🔐 Кәсіпорын',
      'case4.badge2': 'Headscale + OpenBao',
      'case4.badge3': '2 апта',
      'case4.p1': 'Ресей, Грузия және Израильдегі қашықтан қызметкерлері бар финтех компания АҚШ бақылайтын бұлт провайдерлері арқылы трафикті бағыттамайтын қорғалған ішкі желіге мұқтаж болды.',
      'case4.p2': 'Tailscale клиенттері бар self-hosted Headscale контроллерін орналастырдық, желі сегментациясы үшін ACL саясаттарын іске асырдық, XMPP Prosody хабарлама серверін қостық және OpenBao-ны құпиялар ротациясы үшін біріктірдік.',
      'case4.list': '<li>Жеке VPS-тегі Headscale контроллері, DE мен US-тегі шығу нүктелері</li><li>ACL саясаттары: пайдаланушы деңгейіндегі рұқсат деңгейлері</li><li>End-to-end шифрланған топтық чаттары бар self-hosted Prosody XMPP</li><li>QR-код онбординг беті — 2 минут ішінде клиент баптауы</li>',
      'case4.r1': 'қосылған команда мүшелері',
      'case4.r2': 'жаңа клиент онбординг уақыты',
      'case4.r3': 'self-hosted, BigTech-сіз',
      'case5.p1': 'Ішкі R&D жобасы — Java 21 + Spring WebFlux-та production деңгейіндегі реактивті алгоритмдік сауда жүйесі. HTX (Huobi) спот және фьючерс нарықтарына қосылған. Жүйе 5 микросервис, 12+ SSE бақылау тақтасымен 24/7 жұмыс жасайды.',
      'case5.p2': 'Бұл жоба біздің толық стекті финтех инжиниринг мүмкіндіктерімізді көрсетеді: блокталмайтын реактивті конвейерлер, TimescaleDB уақыт қатарларын сақтау, HMAC-SHA256 API аутентификациясы.',
      'case5.list': '<li>5 микросервис: fluid-trader, klines-service, prices-service, news-agent, trader-db</li><li>AI аналитик: Qwen3.7-Max + DeepSeek-V4-Pro, сағат сайын Telegram нарық шолулары</li><li>OHLCV уақыт қатарлары үшін TimescaleDB, HTX + Binance WebSocket фиді</li><li>Zero-Trust құпиялар: автоматты ротациямен OpenBao</li><li>Bare-metal VPS-тегі толық Kubernetes деплой</li>',
      'case5.r1': 'күн үздіксіз жұмыс',
      'case5.r2': 'live SSE бақылау тақтасы',
      'case5.r3': 'бұйрық орындау кідірісі',
      'case5.access': 'Инвесторлар мен корпоративтік серіктестер үшін қол жетімділік',
      'cases.cta.eyebrow': 'Ұқсас міндет бар ма?',
      'cases.cta.h2': 'Жобаңыз туралы айтыңыз.',
      'page.stack.lead': 'Технологияларды production тәжірибесі мен пайдалану қарапайымдылығы негізінде таңдаймыз. Шынымен пайдаланатынымыз — және неге.',
      'stack.section.data.desc': 'Apache NiFi — деректерді жылжыту және түрлендіруге арналған негізгі құралымыз. Визуалды ағын дизайны, кіріктірілген деректер дереккөзі (provenance), back-pressure өңдеу және 300+ кіріктірілген процессор.',
      'stack.section.app.desc': 'Java 21 виртуалды ағындары жоғары өткізу қабілетін сақтай отырып, реактивті «сантехниканы» жою қажеттілігін жояды. Spring Boot 3 Spring Security, WebFlux шынымен асинхронды жүктемелер үшін.',
      'stack.section.infra.desc': 'Оркестрация үшін Kubernetes, жеткізу үшін GitLab CI / GitHub Actions, пакеттеу үшін Helm. Prometheus + Grafana арқылы барлығын өлшейміз, on-call үшін PagerDuty немесе Telegram-ға ескерту.',
      'stack.section.security.eyebrow': 'Қауіпсіздік',
      'stack.section.security.h2': 'Zero-trust әдепкі бойынша',
      'stack.section.security.desc': 'OpenBao (HashiCorp Vault ашық бастапқы форкі) барлық құпияларды басқарады — орта айнымалыларда тіркелгі деректері жоқ. Сервистер арасында mTLS, API шекараларында OAuth2/JWT.',
      'stack.section.fintech.eyebrow': 'Қаржылық протоколдар',
      'stack.section.fintech.h2': 'Финтех-мамандануы',
      'stack.section.fintech.desc': 'Интеграция инженерлерінің көпшілігі SWIFT пен SEPA немесе FIX пен FAST арасындағы айырмашылықты білмейді. Біз білеміз. Бұл сирек кездесетін тәжірибе жылдар бойы жинақталды.',
      'stack.philosophy.eyebrow': 'Инженерлік философия',
      'stack.philosophy.h2': 'Неге трендтерді қуалай бермейміз',
      'stack.phil1.title': 'Барлығы "тек Kafka" десе де біз NiFi пайдаланамыз',
      'stack.phil1.desc': 'Себебі NiFi деректер дереккөзін, back-pressure өңдеуді, визуалды жөндеуді және 300 кіріктірілген процессорды береді.',
      'stack.phil2.title': 'Барлығы "Rust-қа кет" десе де біз Java 21 пайдаланамыз',
      'stack.phil2.desc': 'Себебі Spring экожүйесі, JVM инструментарийі корпоративтік интеграция үшін теңдессіз. Виртуалды ағындар параллельді бәсекелестік мәселесін шешті.',
      'stack.phil3.title': 'Коммерциялық vault орнына OpenBao пайдаланамыз',
      'stack.phil3.desc': 'Толық бақылау, vendor lock-in жоқ, масштабтауда лицензиялық ақылар жоқ. OpenBao-ны production-да өзіміз үшін де, клиенттер үшін де пайдаланамыз.',
      'stack.phil4.title': 'Әдепкі бойынша self-hosted инфрақұрылым жасаймыз',
      'stack.phil4.desc': 'Headscale, Prosody, OpenBao — бұлт жаман болғандықтан емес, қаржылық компаниялар мен реттелетін салалар үшін деректер егемендігі бизнес талабы болғандықтан.',
      'page.contact.lead': 'Интеграциялық міндетіңізді сипаттаңыз — 24 сағат ішінде сатылым ұсынысы емес, шынайы бағалауымен жауап береміз.',
      'contact.direct.h2': 'Тікелей хабарласу',
      'contact.where.title': '📍 Қай жерде жұмыс жасаймыз',
      'contact.where.text': 'Қашықтан жұмыс. Командамыз Ресей, Грузия және Израильде жұмыс жасайды. Еуропа мен ТМД клиенттерімен жұмыс жасаймыз.',
      'contact.tips.h2': 'Бірінші хабарламаға нені қосу керек',
      'contact.tip1.title': 'Интеграциялық міндетіңіз',
      'contact.tip1.desc': 'Қандай жүйелерді қосу керек? Қазір не жұмыс жасамайды немесе жетіспейді?',
      'contact.tip2.title': 'Сала және масштаб',
      'contact.tip2.desc': 'Финтех, банк, өнеркәсіп, мемлекет? Деректердің болжамды көлемі мен команда өлшемі.',
      'contact.tip3.title': 'Мерзімдер мен шұғылдылық',
      'contact.tip3.desc': 'Бұл жаңа жоба ма, legacy миграция ма, немесе production инцидент пе?',
      'contact.tip4.title': 'Ағымдағы стек (міндетті емес)',
      'contact.tip4.desc': 'Қандай технологиялар қолданылуда? Білуіміз керек шектеулер бар ма?',
      'contact.note': 'Әдетте 24 сағат ішінде 1 беттік техникалық талдаумен жауап береміз — жалпылама ұсыным емес, сіздің нақты жағдайыңыз туралы нақты пікір.',
      'contact.avail.title': 'Қазір қол жетімді',
      'contact.avail.text': 'Q3 2026-дан бастап 1-2 жаңа жобаға орын бар. Ұзақ мерзімді ретейнер келісімшарттарын қалаймыз.',

    de: {
      /* ── Nav ── */
      'nav.logo':         'IntegraTech',
      'nav.services':     'Leistungen',
      'nav.case_studies': 'Fallstudien',
      'nav.tech_stack':   'Technologien',
      'nav.contact':      'Kontakt',
      'nav.cta':          'Kontakt aufnehmen',

      /* ── Footer ── */
      'footer.tagline':     'Enterprise-Integrationsengineering · Fintech · Industrie',
      'footer.services':    'Leistungen',
      'footer.case_studies':'Fallstudien',
      'footer.tech_stack':  'Technologien',
      'footer.contact':     'Kontakt',

      /* ── hero ── */
      'hero.eyebrow': 'Enterprise-Integrationsengineering',
      'hero.badge':   '🟢 Verfügbar ab Q3 2026',
      'hero.h1':      'Wir bauen Systeme, wo',
      'hero.lead':    'IntegraTech entwirft und liefert Enterprise-Integrationsplattformen für Finanzinstitute und Industrieunternehmen — von SWIFT-Pipelines bis hin zu ereignisgesteuerten Echtzeit-Architekturen.',
      'hero.cta1':    'Projekt starten →',
      'hero.cta2':    'Fallstudien ansehen',
      'typed.strings': [
        "einfache APIs versagen.",
        "Standard-ETL nicht ausreicht.",
        "Fertiglösungen scheitern.",
        "Latenz kritisch wird.",
        "Datenkonsistenz entscheidend ist.",
      ],

      'metrics.projects_label': 'Enterprise-Projekte geliefert',
      'metrics.uptime_label':   'Pipeline-Uptime SLA',
      'metrics.java_label':     'moderner Stack, null technische Schulden',

      'section.what.eyebrow': 'Kernkompetenzen',
      'section.what.h2':      'Engineering, wo Komplexität die Norm ist.',
      'section.what.lead':    'Wir arbeiten auf der Integrationsebene — dem Teil des Stacks, der Legacy-Finanzsysteme mit moderner Infrastruktur verbindet, wo Verfügbarkeit, Datenkonsistenz und Sicherheit nicht verhandelbar sind.',

      'card.pipeline.title': 'Datenpipeline-Engineering',
      'card.pipeline.desc':  'Apache NiFi + Kafka End-to-End-Pipelines mit Exactly-Once-Semantik, CDC aus PostgreSQL/Oracle und Greenplum-Analytics-Integration. Verarbeitet 50k+ Nachrichten/Sek.',
      'card.fintech.title':  'Finanzielle Systemintegration',
      'card.fintech.desc':   'SWIFT MT/MX, НРД, МосБиржа API, Banking-Core-Systeme. Wir haben Production-Konnektoren für die anspruchsvollste Finanzinfrastruktur in Russland und der GUS gebaut.',
      'card.java.title':     'Java-Microservices',
      'card.java.desc':      'Java 17/21 mit Spring Boot 3, reaktivem WebFlux-Stack, Virtual Threads und ereignisgesteuertem Design. API-Gateways mit OAuth2, JWT, mTLS für Zero-Trust-Umgebungen.',
      'card.devsecops.title':'DevSecOps & Infrastruktur',
      'card.devsecops.desc': 'Kubernetes, GitLab CI/CD, OpenBao-Secrets-Management, Zero-Downtime-Deployments. Sicherheit als Architekturprinzip — kein nachträglicher Gedanke.',
      'card.network.title':  'Private Netzwerkinfrastruktur',
      'card.network.desc':   'Self-hosted Mesh-VPN-Netzwerke (Tailscale/headscale), privater XMPP-Messenger, isolierte Unternehmensinfrastruktur ohne Big-Tech-Abhängigkeit.',
      'card.realtime.title': 'Echtzeit & Analytics',
      'card.realtime.desc':  'WebSocket-Feeds, Trading-System-Backends, Zeitreihenanalysen auf Greenplum. Von Rohdaten zu verwertbarer Business Intelligence in Millisekunden.',

      'section.stack.eyebrow': 'Technologie-Stack',
      'section.stack.h2':      'Battle-tested Stack für unternehmenskritische Workloads.',
      'section.stack.lead':    'Im Kern bewährte, zuverlässige Technologien — bei den Entwicklerwerkzeugen moderne Tools. Keine Hype-getriebenen Architekturentscheidungen.',
      'section.stack.cta':     'Vollständigen Stack erkunden →',
      'stack.data_title':      'Daten & Integration',
      'stack.app_title':       'Anwendungsschicht',
      'stack.infra_title':     'Infrastruktur',
      'stack.security_title':  'Sicherheit',
      'stack.fintech_title':   'Finanzprotokolle',

      'section.approach.eyebrow': 'Unsere Arbeitsweise',
      'section.approach.h2':      'Von Legacy-Chaos zu zuverlässigen Pipelines.',
      'approach.step1.title': '1. Audit & Architektur',
      'approach.step1.desc':  'Wir kartieren Ihre bestehende Integrationslandschaft, identifizieren Engpässe und Fehlermodi und entwerfen eine Zielarchitektur mit klaren Migrationspfaden.',
      'approach.step2.title': '2. Entwicklung & Integration',
      'approach.step2.desc':  'Wir implementieren Pipelines, APIs und Konnektoren mit Production-Monitoring, Fehlerbehandlung und Exactly-Once-Liefergarantien wo erforderlich.',
      'approach.step3.title': '3. Deployment & Betrieb',
      'approach.step3.desc':  'GitOps-Deployment, Runbooks, Alerting und SLA-Monitoring. Wir verschwinden nicht nach dem Go-Live — wir bleiben, bis das System stabil ist.',

      'cta.eyebrow': 'Bereit für Integration?',
      'cta.h2':      "Lassen Sie uns Ihr schwierigstes Integrationsproblem lösen.",
      'cta.lead':    "Ob Legacy-SWIFT-Connector, überlastete NiFi-Pipeline oder neue ereignisgesteuerte Architektur — wir kennen das.",
      'cta.btn1':    'Kontakt aufnehmen',
      'cta.btn2':    'Unsere Arbeit ansehen',

      'livefeed.eyebrow': 'Systemaktivität',
      'livefeed.h2':      'Production-Pipelines. Gerade jetzt.',
      'livefeed.lead':    'Echtzeit-Integration bedeutet echte Konsequenzen. Solche Systeme halten wir 24/7 am Laufen.',

      'page.services.eyebrow': 'Was wir anbieten',
      'page.services.h1':      'Leistungen',
      'page.services.lead':    'Wir liefern End-to-End-Integrationsengineering — von der Architekturberatung bis zur Production-Unterstützung.',
      'svc.pipeline.badge': 'Kernangebot',
      'svc.pipeline.title': 'Datenpipeline-Engineering',
      'svc.pipeline.lead':  'Design und Implementierung von Enterprise-Datenpipelines mit Apache NiFi und Apache Kafka.',
      'svc.pipeline.price': 'Engagement: Projekt oder Retainer · ab €8.000 / Projekt',
      'svc.fintech.badge': 'Fintech-Spezialisierung',
      'svc.fintech.title': 'Finanzielle Systemintegration',
      'svc.fintech.lead':  'Wir haben Production-Konnektoren für die anspruchsvollste Finanzinfrastruktur in Russland und der GUS gebaut.',
      'svc.fintech.price': 'Engagement: Festpreisvertrag · ab €15.000',
      'svc.java.badge': 'Anwendungsschicht',
      'svc.java.title': 'Java-Microservices & API-Design',
      'svc.java.lead':  'Modernes Java 17/21 Backend-Engineering mit Spring Boot 3, reaktivem WebFlux und Enterprise-Integrationsmustern.',
      'svc.java.price': 'Engagement: T&M oder Projekt · ab €6.000 / Monat',
      'svc.devops.badge': 'Infrastruktur',
      'svc.devops.title': 'DevSecOps & Kubernetes',
      'svc.devops.lead':  'Wir bauen und betreiben Kubernetes-basierte Infrastruktur mit GitOps-Workflows und vollständiger Observability.',
      'svc.devops.price': 'Engagement: Retainer oder Projekt · ab €5.000 / Monat',
      'svc.network.badge': 'Unabhängigkeit',
      'svc.network.title': 'Private Unternehmensinfrastruktur',
      'svc.network.lead':  'Self-hosted Unternehmensinfrastruktur ohne Big-Tech-Cloud-Abhängigkeit. Volle Kontrolle, volle Privatsphäre.',
      'svc.network.price': 'Engagement: Setup + Support · ab €3.500',
      'svc.advisory.badge': 'Beratung',
      'svc.advisory.title': 'Architekturberatung',
      'svc.advisory.lead':  'Noch nicht bereit für Outsourcing? Wir bieten Architektur-Reviews, Workshops und Entscheidungsunterstützung.',
      'svc.advisory.price': 'Engagement: Stundenrate · ab €200 / Stunde',

      'page.cases.eyebrow': 'Echte Projekte, echte Ergebnisse',
      'page.cases.h1':      'Fallstudien',
      'page.cases.lead':    'Alle Projekte sind anonymisiert. Metriken und Zeitpläne sind real.',
      'case1.title': 'SWIFT-ETL-Pipeline: Von 3-tägigen Ausfällen zu 99,97 % Uptime',
      'case2.title': 'МосБиржа Echtzeit-Feed: 60 % Latenzreduzierung bei Marktdaten-Pipeline',
      'case3.title': 'ДИТ Moskau: Stadtweite Datenintegration für 40+ Quellsysteme',
      'case4.title': 'Privates Unternehmensnetzwerk: Null Big-Tech-Abhängigkeit für ein 30-köpfiges Team',
      'case5.title': 'FluidTrader — Reaktive Algorithmische Handelsplattform (Fintech F&E)',

      'page.stack.eyebrow': 'Unsere Werkzeuge',
      'page.stack.h1':      'Technologie-Stack',
      'page.stack.lead':    'Technologieauswahl basiert auf Production-Erfahrung und Betriebseinfachheit — nicht auf Hype.',
      'stack.section.data.eyebrow': 'Daten & Integration',
      'stack.section.data.h2':     'Die Integrationsschicht',
      'stack.section.data.desc':   'Apache NiFi ist unser primäres Werkzeug für Datenbewegung und -transformation.',
      'stack.section.app.eyebrow':  'Anwendungsschicht',
      'stack.section.app.h2':      'Java-Ökosystem',
      'stack.section.app.desc':    'Java 21 mit Virtual Threads eliminiert in den meisten Fällen die Notwendigkeit reaktiven Codes.',
      'stack.section.infra.eyebrow': 'Infrastruktur & DevOps',
      'stack.section.infra.h2':    'Cloud-native Betrieb',
      'stack.section.infra.desc':  'Kubernetes für Orchestrierung, GitLab CI / GitHub Actions für Delivery, Helm für Packaging, ArgoCD für GitOps.',
      'stack.section.security.eyebrow': 'Sicherheit',
      'stack.section.security.h2':  'Zero-Trust als Standard',
      'stack.section.security.desc': 'OpenBao verwaltet alle Secrets — keine Anmeldedaten in Umgebungsvariablen. mTLS überall.',
      'stack.section.fintech.eyebrow': 'Finanzprotokolle',
      'stack.section.fintech.h2':   'Fintech-spezifische Expertise',
      'stack.section.fintech.desc': 'Wir kennen SWIFT, FIX und FAST aus jahrelanger Production-Erfahrung.',

      'page.contact.eyebrow': "Sprechen wir",
      'page.contact.h1':      'Kontakt',
      'page.contact.lead':    'Beschreiben Sie Ihre Integrationsherausforderung — wir antworten innerhalb von 24 Stunden.',
      'contact.direct.h2':    'Direkt kontaktieren',
      'contact.email.label':  'E-Mail',
      'contact.linkedin.label': 'LinkedIn',
      'contact.telegram.label': 'Telegram',
      'contact.where.title':  '📍 Wo wir arbeiten',
      'contact.where.text':   'Remote-first. Unser Team arbeitet in Russland, Georgien und Israel. Zeitzonen: Europa und GUS.',
      'contact.tips.h2':      'Was in Ihre erste Nachricht gehört',
      'contact.tip1.title':   'Ihre Integrationsherausforderung',
      'contact.tip1.desc':    'Welche Systeme müssen verbunden werden? Was funktioniert nicht oder fehlt?',
      'contact.tip2.title':   'Branche & Umfang',
      'contact.tip2.desc':    'Fintech, Banking, Industrie, öffentlicher Sektor? Ungefähre Datenmengen und Teamgröße.',
      'contact.tip3.title':   'Zeitplan & Dringlichkeit',
      'contact.tip3.desc':    'Neues Projekt, Legacy-Migration oder Production-Vorfall?',
      'contact.tip4.title':   'Bestehender Stack (optional)',
      'contact.tip4.desc':    'Welche Technologien sind bereits im Einsatz? Bekannte Einschränkungen?',
      'contact.note':         'Wir antworten in der Regel innerhalb von 24 Stunden mit einer 1-seitigen technischen Bewertung.',
      'contact.avail.title':  'Aktuell verfügbar',
      'contact.avail.text':   'Kapazität für 1–2 neue Projekte ab Q3 2026. Langfristige Retainer bevorzugt.',

      '404.h1':   'Seite nicht gefunden',
      '404.desc': 'Dieser Integrations-Endpunkt existiert (noch) nicht.',
      '404.back': '← Zurück zur Startseite',
    },

    /* ═══════════════════════════════════════════════════════════ */
      /* ── auto-added translations ── */
      'page.services.lead': 'Wir liefern ganzheitliches Integrationsengineering — von der Architekturberatung bis zur produktionsfertigen Systemimplementierung und Langzeitunterstützung. Jedes Engagement ist auf Ihren Stack und Ihre Zeitplanung zugeschnitten.',
      'svc.pipeline.body': 'Konzeption und Implementierung von Enterprise-Datenpipelines mit Apache NiFi und Apache Kafka als Backbone. Wir bewältigen Hochdurchsatz-Szenarien (50k+ Nachrichten/Sek.), Exactly-Once-Delivery, CDC aus Oracle/PostgreSQL und Integration mit analytischen Datenbanken einschließlich Greenplum.',
      'svc.pipeline.list': '<li>Apache-NiFi-Flowdesign, Cluster-Setup und Tuning</li><li>Kafka-Topic-Architektur, Schema Registry, Stream Processing</li><li>Debezium-CDC-Konnektoren für Echtzeit-Datenbanksynchronisation</li><li>Greenplum / PostgreSQL analytische Integration</li><li>Dead-Letter-Queues, Replay, Monitoring und Alerting</li>',
      'svc.fintech.body': 'Wir haben produktionsreife Konnektoren und Adapter für die anspruchsvollste Finanzinfrastruktur in Russland und der GUS entwickelt. SWIFT, НРД, МосБиржа — wir kennen diese Protokolle von innen und liefern Integrationen, die nicht stillschweigend versagen.',
      'svc.fintech.list': '<li>SWIFT MT103 / MT202 / MX ISO 20022 Nachrichtenverarbeitung</li><li>НРД API-Integration — Abwicklung, Depotbankoperationen</li><li>МосБиржа WebSocket- und REST-API-Konnektoren</li><li>Bankkernystem-Adapter (kundenspezifische Protokolle, Legacy-XML)</li><li>FIX-Protokoll-Implementierung für Handelssysteme</li>',
      'svc.java.body': 'Modernes Java-17/21-Backend-Engineering mit Spring Boot 3, WebFlux-Reaktiv-Stack und virtuellen Threads. Wir entwerfen API-Gateways mit Zero-Trust-Sicherheit und ereignisgesteuerten Architekturen, die ohne Re-Architektur skalieren.',
      'svc.java.list': '<li>Spring-Boot-3-Microservices mit reaktivem WebFlux</li><li>Java-21-Virtual-Threads für hochnebenläufige Workloads</li><li>OAuth2 / JWT / mTLS API-Gateway-Design</li><li>Ereignisgesteuerte Architektur mit Kafka und Outbox-Pattern</li><li>Groovy-Scripting für NiFi-Prozessoren und DSL-Tooling</li>',
      'svc.devops.body': 'Wir bauen und betreiben Kubernetes-basierte Infrastruktur mit GitOps-Workflows, Secrets-Management und einem Sicherheitsniveau, das Finanzaufsichtsbehörden erfüllt. Zero-Downtime-Deployments, Auto-Scaling und Runbooks inklusive.',
      'svc.devops.list': '<li>Kubernetes-Cluster-Design, Helm-Chart-Erstellung</li><li>GitLab-CI / GitHub-Actions-Pipeline-Architektur</li><li>OpenBao / HashiCorp Vault Secrets-Management</li><li>Netzwerksicherheitsrichtlinien, Pod-Security-Standards</li><li>Observability: Prometheus, Grafana, Loki, Alerting</li>',
      'svc.network.body': 'Self-gehostete Unternehmensinfrastruktur ohne Abhängigkeit von Big-Tech-Clouds. Mesh-VPN-Netzwerke für sichere Remote-Teams, private XMPP-Messaging-Server und Secrets-Management-Systeme unter Ihrer vollen Kontrolle.',
      'svc.network.list': '<li>Headscale + Tailscale Mesh-VPN für verteilte Teams</li><li>XMPP / Prosody selbst-gehosteter Unternehmensmessenger</li><li>OpenBao Secrets- und Anmeldedatenverwaltung</li><li>Zugangskontrollrichtlinien und Netzwerksegmentierung</li><li>Client-Onboarding-Automatisierung und Dokumentation</li>',
      'svc.advisory.body': 'Noch nicht bereit, die Implementierung auszulagern? Wir bieten Expertenarchitekturreviews, Integrationsaudits und technische Strategie — damit Ihr Team von Anfang an das Richtige baut.',
      'svc.advisory.list': '<li>Integrationslandschaft-Audit mit Ergebnisbericht</li><li>Architektur-Design-Session + Entscheidungsaufzeichnungen</li><li>NiFi / Kafka Performance-Tuning-Beratung</li><li>Sicherheitsarchitekturreview für Fintech-Workloads</li><li>Team-Mentoring und Tech-Lead-Support</li>',
      'svc.cta.eyebrow': 'Unsicher, welcher Service passt?',
      'svc.cta.h2': 'Lassen Sie uns über Ihr Projekt sprechen.',
      'svc.cta.lead': 'Ein 30-minütiger Anruf reicht aus, um Ihre Integrationsherausforderungen zu verstehen und eine konkrete Empfehlung zu geben.',
      'svc.cta.btn': 'Kostenloses Gespräch buchen →',
      'page.cases.lead': 'Alle Projekte sind anonymisiert. Metriken und Zeitpläne sind real. Wir übertreiben nicht — das sind die tatsächlichen Ergebnisse, die wir geliefert haben.',
      'case1.badge1': '🏦 Banking',
      'case1.badge2': 'NiFi + Kafka',
      'case1.badge3': '3 Wochen',
      'case1.p1': 'Eine der Top-20-Banken Russlands hatte eine SWIFT-MT103-Verarbeitungspipeline auf einem fragilen Java-Monolithen. Das System stürzte unter der Last des Monatsabschlusses ab — jeden Monat. Das Team verbrachte 2–3 Tage pro Incident mit manueller Wiederherstellung.',
      'case1.p2': 'Wir haben die Ingestion- und Transformationsschicht auf Apache NiFi mit Kafka als dauerhaftem Backbone neu aufgebaut. Dead-Letter-Handling, idempotente Prozessoren und automatisiertes Replay ersetzten die fragilen manuellen Verfahren.',
      'case1.list': '<li>Monolithischen SWIFT-Prozessor durch NiFi-Flow + Kafka-Topic pro Nachrichtentyp ersetzt</li><li>Exactly-Once-Semantik für Finanznachrichtenübermittlung implementiert</li><li>Automatisierter Abgleich mit НРД-Abrechnungsdatensätzen</li><li>Null Datenverlust während des ersten Monatsabschlusszyklus nach dem Launch</li>',
      'case1.r1': 'Pipeline-Uptime',
      'case1.r2': 'manuelle Wiederherstellungszeit',
      'case1.r3': 'vom Audit bis zur Produktion',
      'case2.badge1': '📈 Trading',
      'case2.badge2': 'WebSocket + PostgreSQL',
      'case2.badge3': '6 Wochen',
      'case2.p1': 'Ein proprietäres Handelsunternehmen empfing МосБиржа-Marktdaten über einen Drittanbieter-Feed. Die p99-Latenz erreichte 180ms in volatilen Sitzungen — inakzeptabel für algorithmische Strategien.',
      'case2.p2': 'Wir haben eine direkte WebSocket-Verbindung zum МосБиржа FAST/FIXS-Feed aufgebaut, eine Niedriglatenz-Normalisierungsschicht in Java 21 mit virtuellen Threads entworfen und Tick-Daten direkt in partitionierten PostgreSQL-Tabellen gespeichert.',
      'case2.list': '<li>Direkter FAST-Protokoll-Decoder — kein Anbieter-Intermediär</li><li>Java-21-Virtual-Threads für 12.000 gleichzeitige Instrument-Abonnements</li><li>Partitionierter PostgreSQL-Tick-Speicher mit Sub-Millisekunden-Schreiblatenz</li><li>Grafana-Dashboard für Latenz-Perzentile, Lückenerkennung und Reconnects</li>',
      'case2.r1': 'Latenzreduzierung',
      'case2.r2': 'p99 Marktdaten-Latenz',
      'case2.r3': 'gleichzeitige Abonnements',
      'case3.badge1': '🏛️ Behörde',
      'case3.badge2': 'NiFi + Greenplum',
      'case3.badge3': '4 Monate',
      'case3.p1': 'Das Moskauer Departement für Informationstechnologie benötigte eine einheitliche Datenintegrationsschicht zur Konsolidierung operativer Daten aus 40+ Kommunalsystemen in eine Greenplum-Analyseplattform.',
      'case3.p2': 'Wir haben einen Apache-NiFi-Cluster konzipiert und bereitgestellt, der den gesamten Ingestion-Lebenszyklus verwaltet — von REST- und SOAP-Quell-APIs bis zur Schemavalidierung, Transformation und Lineage-Tracking.',
      'case3.list': '<li>NiFi-Cluster: 3-Node-HA mit ZooKeeper, 40+ aktive Flows</li><li>Schema Registry für alle Quellverträge</li><li>Vollständige Daten-Lineage von Quell-API bis Greenplum-Analysetabelle</li><li>On-Call-Runbook und automatisiertes Alerting an internes Team übergeben</li>',
      'case3.r1': 'Quellsysteme',
      'case3.r2': 'Pipeline-Fehler/Monat',
      'case3.r3': 'Design bis Produktion',
      'case4.badge1': '🔐 Enterprise',
      'case4.badge2': 'Headscale + OpenBao',
      'case4.badge3': '2 Wochen',
      'case4.p1': 'Ein Fintech-Unternehmen mit Remote-Mitarbeitern in Russland, Georgien und Israel benötigte ein sicheres internes Netzwerk, das keinen Verkehr über US-kontrollierte Cloud-Anbieter leitete.',
      'case4.p2': 'Wir haben einen self-gehosteten Headscale-Controller mit Tailscale-Clients bereitgestellt, ACL-Richtlinien zur Netzwerksegmentierung implementiert, einen XMPP-Prosody-Messaging-Server hinzugefügt und OpenBao für die Secrets-Rotation integriert.',
      'case4.list': '<li>Headscale-Controller auf privatem VPS, Exit-Nodes in DE und US</li><li>ACL-Richtlinien: benutzerspezifische Zugangsstufen</li><li>Self-gehostetes Prosody XMPP mit Ende-zu-Ende-verschlüsselten Gruppenchats</li><li>QR-Code-basierte Onboarding-Seite — Client-Einrichtung in unter 2 Minuten</li>',
      'case4.r1': 'verbundene Teammitglieder',
      'case4.r2': 'neues Client-Onboarding',
      'case4.r3': 'self-hosted, kein Big Tech',
      'case5.p1': 'Internes F&E-Projekt — ein produktionsreifes reaktives algorithmisches Handelssystem auf Java 21 + Spring WebFlux. Verbunden mit HTX (Huobi) Spot- und Futures-Märkten. Das System läuft 24/7 mit 5 Microservices und 12+ Echtzeit-SSE-Dashboards.',
      'case5.p2': 'Dieses Projekt demonstriert unsere Full-Stack-Fintech-Engineering-Kompetenz: nicht-blockierende reaktive Pipelines, TimescaleDB-Zeitreihenspeicherung, HMAC-SHA256-signed-API-Auth und automatisierte KI-gestützte stündliche Marktberichte.',
      'case5.list': '<li>5 Microservices: fluid-trader, klines-service, prices-service, news-agent, trader-db</li><li>KI-Analyst: Qwen3.7-Max + DeepSeek-V4-Pro, stündliche Marktberichte via Telegram</li><li>TimescaleDB für OHLCV-Zeitreihen, WebSocket-Feed von HTX + Binance</li><li>Zero-Trust-Secrets: OpenBao mit automatischer Rotation</li><li>Vollständiges Kubernetes-Deployment auf Bare-Metal-VPS</li>',
      'case5.r1': 'Tage Dauerbetrieb',
      'case5.r2': 'Live-SSE-Dashboards',
      'case5.r3': 'Order-Ausführungslatenz',
      'case5.access': 'Zugang für Investoren und Unternehmenspartner verfügbar',
      'cases.cta.eyebrow': 'Haben Sie eine ähnliche Herausforderung?',
      'cases.cta.h2': 'Wir würden gerne von Ihrem Projekt hören.',
      'page.stack.lead': 'Wir wählen Technologien anhand von Produktionserfahrung und Betriebseinfachheit. Hier ist, was wir tatsächlich verwenden — und warum.',
      'stack.section.data.desc': 'Apache NiFi ist unser primäres Tool für Datenbewegung und -transformation. Es bietet visuelles Flow-Design, integrierte Datenherkunft (Provenance), Back-Pressure-Handling und 300+ eingebaute Prozessoren. Kafka ist der dauerhafte Backbone, wo Zuverlässigkeit wichtiger ist als Einfachheit.',
      'stack.section.app.desc': 'Java 21 mit virtuellen Threads eliminiert in den meisten Fällen die Notwendigkeit von reaktivem Plumbing bei hohem Durchsatz. Spring Boot 3 mit Spring Security, WebFlux für wirklich asynchrone Workloads und Groovy für Scripting in NiFi-Prozessoren.',
      'stack.section.infra.desc': 'Kubernetes für Orchestrierung, GitLab CI / GitHub Actions für Delivery, Helm für Packaging. Wir instrumentieren alles mit Prometheus + Grafana und leiten Alerts an PagerDuty oder Telegram für On-Call weiter.',
      'stack.section.security.eyebrow': 'Sicherheit',
      'stack.section.security.h2': 'Zero-Trust als Standard',
      'stack.section.security.desc': 'OpenBao (ein Open-Source-HashiCorp-Vault-Fork) verwaltet alle Secrets — keine Anmeldedaten in Umgebungsvariablen. mTLS zwischen Services, OAuth2/JWT an API-Grenzen.',
      'stack.section.fintech.eyebrow': 'Finanzprotokolle',
      'stack.section.fintech.h2': 'Fintech-spezifische Expertise',
      'stack.section.fintech.desc': 'Die meisten Integrationsingenieure kennen den Unterschied zwischen SWIFT und SEPA oder FIX und FAST nicht. Wir schon. Diese Expertise ist selten und wurde durch jahrelange Produktionsarbeit aufgebaut.',
      'stack.philosophy.eyebrow': 'Engineering-Philosophie',
      'stack.philosophy.h2': 'Warum wir keine Trends jagen',
      'stack.phil1.title': 'Wir verwenden NiFi, obwohl alle sagen "einfach Kafka"',
      'stack.phil1.desc': 'Weil NiFi Datenherkunft, Back-Pressure-Handling, visuelles Debugging und 300 eingebaute Prozessoren bietet. Für komplexes ETL mit vielen heterogenen Quellen ist es das richtige Tool.',
      'stack.phil2.title': 'Wir verwenden Java 21, obwohl alle "zu Rust wechseln" sagen',
      'stack.phil2.desc': 'Weil das Spring-Ökosystem, JVM-Tooling und der Java-Talentpool für Enterprise-Integration unübertroffen sind. Virtuelle Threads lösten das Nebenläufigkeitsproblem.',
      'stack.phil3.title': 'Wir verwenden OpenBao statt kommerzieller Vaults',
      'stack.phil3.desc': 'Volle Kontrolle, kein Vendor-Lock-in, keine Lizenzgebühren bei Skalierung. Wir betreiben OpenBao in Produktion für unsere eigene Infrastruktur und Kunden.',
      'stack.phil4.title': 'Wir bauen standardmäßig self-gehostete Infrastruktur',
      'stack.phil4.desc': 'Headscale, Prosody, OpenBao — nicht weil Cloud schlecht ist, sondern weil für Finanzunternehmen und regulierte Branchen Datensouveränität eine Geschäftsanforderung ist.',
      'page.contact.lead': 'Beschreiben Sie Ihre Integrationsherausforderung — wir antworten innerhalb von 24 Stunden mit einer ehrlichen Einschätzung, kein Verkaufsgespräch.',
      'contact.direct.h2': 'Direkt kontaktieren',
      'contact.where.title': '📍 Wo wir arbeiten',
      'contact.where.text': 'Remote-first. Unser Team arbeitet aus Russland, Georgien und Israel. Wir arbeiten mit Kunden in EU, GUS und MENA — Zeitzonabdeckung UTC+0 bis UTC+4.',
      'contact.tips.h2': 'Was in Ihre erste Nachricht gehört',
      'contact.tip1.title': 'Ihre Integrationsherausforderung',
      'contact.tip1.desc': 'Welche Systeme müssen verbunden werden? Was scheitert oder fehlt heute?',
      'contact.tip2.title': 'Branche & Umfang',
      'contact.tip2.desc': 'Fintech, Banking, Industrie, Behörden? Ungefähre Datenmengen und Teamgröße.',
      'contact.tip3.title': 'Zeitplan & Dringlichkeit',
      'contact.tip3.desc': 'Ist das ein neues Projekt, eine Legacy-Migration oder ein Produktionsvorfall?',
      'contact.tip4.title': 'Bestehender Stack (optional)',
      'contact.tip4.desc': 'Welche Technologien werden bereits verwendet? Einschränkungen, die wir kennen sollten?',
      'contact.note': 'Wir antworten typischerweise innerhalb von 24 Stunden mit einer 1-seitigen technischen Einschätzung — keine generische Vorlage, sondern eine echte Meinung zu Ihrer konkreten Situation.',
      'contact.avail.title': 'Derzeit verfügbar',
      'contact.avail.text': 'Wir haben Kapazität für 1–2 neue Projekte ab Q3 2026. Langfristige Engagements bevorzugt.',

    fr: {
      /* ── Nav ── */
      'nav.logo':         'IntegraTech',
      'nav.services':     'Services',
      'nav.case_studies': 'Études de cas',
      'nav.tech_stack':   'Technologies',
      'nav.contact':      'Contact',
      'nav.cta':          'Nous contacter',

      /* ── Footer ── */
      'footer.tagline':     "Ingénierie d'intégration entreprise · fintech · industrie",
      'footer.services':    'Services',
      'footer.case_studies':"Études de cas",
      'footer.tech_stack':  'Technologies',
      'footer.contact':     'Contact',

      /* ── hero ── */
      'hero.eyebrow': "Ingénierie d'intégration entreprise",
      'hero.badge':   '🟢 Disponible à partir de Q3 2026',
      'hero.h1':      'Nous construisons des systèmes là où',
      'hero.lead':    "IntegraTech conçoit et déploie des plateformes d'intégration d'entreprise pour les institutions financières et les entreprises industrielles — des pipelines SWIFT aux architectures événementielles en temps réel.",
      'hero.cta1':    'Démarrer un projet →',
      'hero.cta2':    'Voir les études de cas',
      'typed.strings': [
        "les APIs simples ne suffisent pas.",
        "l'ETL standard est insuffisant.",
        "les solutions prêtes à l'emploi échouent.",
        "la latence devient critique.",
        "la cohérence des données est primordiale.",
      ],

      'metrics.projects_label': 'projets entreprise livrés',
      'metrics.uptime_label':   'SLA uptime des pipelines',
      'metrics.java_label':     'stack moderne, zéro dette technique',

      'section.what.eyebrow': 'Compétences clés',
      'section.what.h2':      "L'ingénierie là où la complexité est la norme.",
      'section.what.lead':    "Nous travaillons sur la couche d'intégration — la partie du stack qui connecte les systèmes financiers hérités à l'infrastructure moderne, où la disponibilité, la cohérence des données et la sécurité ne sont pas négociables.",

      'card.pipeline.title': 'Ingénierie des pipelines de données',
      'card.pipeline.desc':  "Apache NiFi + Kafka pipelines de bout en bout avec sémantique exactly-once, CDC depuis PostgreSQL/Oracle et intégration Greenplum. Gère 50k+ msg/sec.",
      'card.fintech.title':  'Intégration des systèmes financiers',
      'card.fintech.desc':   "SWIFT MT/MX, НРД, API МосБиржа, systèmes bancaires core. Nous avons construit des connecteurs de production pour l'infrastructure financière la plus exigeante.",
      'card.java.title':     'Microservices Java',
      'card.java.desc':      'Java 17/21 avec Spring Boot 3, stack réactif WebFlux, threads virtuels et conception orientée événements. Gateways API avec OAuth2, JWT, mTLS.',
      'card.devsecops.title':'DevSecOps & Infrastructure',
      'card.devsecops.desc': "Kubernetes, GitLab CI/CD, gestion des secrets OpenBao, déploiements sans interruption. La sécurité par conception — pas en option.",
      'card.network.title':  'Infrastructure réseau privée',
      'card.network.desc':   "Réseaux VPN mesh auto-hébergés (Tailscale/headscale), messagerie XMPP privée, infrastructure d'entreprise isolée sans dépendance aux Big Tech.",
      'card.realtime.title': 'Temps réel & Analytics',
      'card.realtime.desc':  "Flux WebSocket, backends de systèmes de trading, analytics de séries temporelles sur Greenplum. Des données brutes à l'intelligence métier en millisecondes.",

      'section.stack.eyebrow': 'Stack technologique',
      'section.stack.h2':      'Un stack éprouvé pour les charges critiques.',
      'section.stack.lead':    "Au cœur : des technologies fiables et éprouvées. Dans les outils développeur : des solutions modernes. Aucune décision architecturale guidée par le buzz.",
      'section.stack.cta':     'Explorer le stack complet →',
      'stack.data_title':      'Données & Intégration',
      'stack.app_title':       "Couche applicative",
      'stack.infra_title':     'Infrastructure',
      'stack.security_title':  'Sécurité',
      'stack.fintech_title':   'Protocoles financiers',

      'section.approach.eyebrow': 'Notre méthode',
      'section.approach.h2':      'Du chaos hérité aux pipelines fiables.',
      'approach.step1.title': '1. Audit & Architecture',
      'approach.step1.desc':  "Nous cartographions votre paysage d'intégration existant, identifions les goulots d'étranglement et concevons une architecture cible.",
      'approach.step2.title': '2. Développement & Intégration',
      'approach.step2.desc':  "Nous implémentons les pipelines, APIs et connecteurs avec monitoring de production et garanties de livraison exactly-once.",
      'approach.step3.title': '3. Déploiement & Exploitation',
      'approach.step3.desc':  "Déploiement GitOps, runbooks, alerting et monitoring SLA. Nous ne disparaissons pas après le lancement.",

      'cta.eyebrow': "Prêt pour l'intégration ?",
      'cta.h2':      "Résolvons ensemble votre problème d'intégration le plus complexe.",
      'cta.lead':    "Qu'il s'agisse d'un connecteur SWIFT hérité, d'un pipeline NiFi surchargé ou d'une nouvelle architecture événementielle — nous connaissons le problème.",
      'cta.btn1':    'Nous contacter',
      'cta.btn2':    'Voir nos réalisations',

      'livefeed.eyebrow': 'Activité système',
      'livefeed.h2':      'Pipelines de production. En ce moment même.',
      'livefeed.lead':    "L'intégration en temps réel a des conséquences réelles. Ce sont les systèmes que nous maintenons 24/7.",

      'page.services.eyebrow': 'Ce que nous proposons',
      'page.services.h1':      'Services',
      'page.services.lead':    "Nous fournissons un ingénierie d'intégration de bout en bout — du conseil en architecture au support de production.",
      'svc.pipeline.badge': 'Service principal',
      'svc.pipeline.title': 'Ingénierie des pipelines de données',
      'svc.pipeline.lead':  "Conception et implémentation de pipelines de données d'entreprise avec Apache NiFi et Apache Kafka.",
      'svc.pipeline.price': 'Engagement : projet ou retainer · à partir de €8 000 / projet',
      'svc.fintech.badge': 'Spécialité fintech',
      'svc.fintech.title': 'Intégration des systèmes financiers',
      'svc.fintech.lead':  "Nous avons construit des connecteurs de production pour l'infrastructure financière la plus exigeante.",
      'svc.fintech.price': 'Engagement : contrat à périmètre fixe · à partir de €15 000',
      'svc.java.badge': 'Couche applicative',
      'svc.java.title': 'Microservices Java & conception API',
      'svc.java.lead':  'Développement backend Java 17/21 moderne avec Spring Boot 3, WebFlux réactif et patterns EIP.',
      'svc.java.price': 'Engagement : T&M ou projet · à partir de €6 000 / mois',
      'svc.devops.badge': 'Infrastructure',
      'svc.devops.title': 'DevSecOps & Kubernetes',
      'svc.devops.lead':  "Nous construisons et opérons une infrastructure basée sur Kubernetes avec des workflows GitOps et une observabilité complète.",
      'svc.devops.price': 'Engagement : retainer ou projet · à partir de €5 000 / mois',
      'svc.network.badge': 'Indépendance',
      'svc.network.title': "Infrastructure d'entreprise privée",
      'svc.network.lead':  "Infrastructure d'entreprise auto-hébergée sans dépendance aux clouds Big Tech. Contrôle total, confidentialité totale.",
      'svc.network.price': 'Engagement : setup + support · à partir de €3 500',
      'svc.advisory.badge': 'Conseil',
      'svc.advisory.title': 'Conseil en architecture',
      'svc.advisory.lead':  "Pas encore prêt pour l'externalisation ? Nous proposons des revues d'architecture expertes et des ateliers.",
      'svc.advisory.price': 'Engagement : tarif horaire · à partir de €200 / heure',

      'page.cases.eyebrow': 'Projets réels, résultats réels',
      'page.cases.h1':      'Études de cas',
      'page.cases.lead':    'Tous les projets sont anonymisés. Les métriques et les délais sont réels.',
      'case1.title': 'Pipeline ETL SWIFT : Des pannes de 3 jours à 99,97 % de disponibilité',
      'case2.title': 'Flux temps réel МосБиржа : Réduction de latence de 60 % sur le pipeline de données de marché',
      'case3.title': 'ДИТ Moscou : Intégration de données à léchelle urbaine pour 40+ systèmes sources',
      'case4.title': "Réseau d'entreprise privé : Zéro dépendance Big Tech pour une équipe de 30 personnes",
      'case5.title': "FluidTrader — Plateforme de Trading Algorithmique Réactif (Fintech R&D)",

      'page.stack.eyebrow': 'Notre boîte à outils',
      'page.stack.h1':      'Stack technologique',
      'page.stack.lead':    "Nous choisissons les technologies en fonction de leur historique de production et de leur simplicité opérationnelle.",
      'stack.section.data.eyebrow': 'Données & Intégration',
      'stack.section.data.h2':     "La couche d'intégration",
      'stack.section.data.desc':   "Apache NiFi est notre outil principal pour le mouvement et la transformation des données.",
      'stack.section.app.eyebrow':  'Couche applicative',
      'stack.section.app.h2':      'Écosystème Java',
      'stack.section.app.desc':    "Java 21 avec les threads virtuels élimine le besoin de code réactif complexe dans la plupart des cas.",
      'stack.section.infra.eyebrow': 'Infrastructure & DevOps',
      'stack.section.infra.h2':    'Opérations cloud-native',
      'stack.section.infra.desc':  'Kubernetes pour l\'orchestration, GitLab CI / GitHub Actions pour la livraison, Helm, ArgoCD pour GitOps.',
      'stack.section.security.eyebrow': 'Sécurité',
      'stack.section.security.h2':  'Zero-trust par défaut',
      'stack.section.security.desc': 'OpenBao gère tous les secrets — aucune information d\'identification dans les variables d\'environnement. mTLS partout.',
      'stack.section.fintech.eyebrow': 'Protocoles financiers',
      'stack.section.fintech.h2':   'Expertise fintech spécifique',
      'stack.section.fintech.desc': 'Nous connaissons SWIFT, FIX et FAST grâce à des années d\'expérience en production.',

      'page.contact.eyebrow': 'Parlons-en',
      'page.contact.h1':      'Contact',
      'page.contact.lead':    "Décrivez votre défi d'intégration — nous répondrons dans les 24 heures avec une évaluation technique.",
      'contact.direct.h2':    'Nous contacter directement',
      'contact.email.label':  'E-mail',
      'contact.linkedin.label': 'LinkedIn',
      'contact.telegram.label': 'Telegram',
      'contact.where.title':  '📍 Où nous travaillons',
      'contact.where.text':   'Remote-first. Notre équipe travaille en Russie, Géorgie et Israël. Fuseaux horaires : Europe et CEI.',
      'contact.tips.h2':      'Que mettre dans votre premier message',
      'contact.tip1.title':   "Votre défi d'intégration",
      'contact.tip1.desc':    'Quels systèmes doivent être connectés ? Qu\'est-ce qui ne fonctionne pas aujourd\'hui ?',
      'contact.tip2.title':   'Secteur & échelle',
      'contact.tip2.desc':    'Fintech, banque, industrie, secteur public ? Volumes de données approximatifs.',
      'contact.tip3.title':   'Calendrier & urgence',
      'contact.tip3.desc':    'Nouveau projet, migration legacy ou incident de production ?',
      'contact.tip4.title':   'Stack existant (optionnel)',
      'contact.tip4.desc':    'Quelles technologies sont déjà en place ? Contraintes à connaître ?',
      'contact.note':         "Nous répondons généralement dans les 24 heures avec une évaluation technique d'une page.",
      'contact.avail.title':  'Actuellement disponible',
      'contact.avail.text':   'Capacité pour 1 à 2 nouveaux projets à partir de Q3 2026. Engagements retainer préférés.',

      '404.h1':   'Page introuvable',
      '404.desc': "Ce point de terminaison d'intégration n'existe pas (encore).",
      '404.back': '← Retour à l\'accueil',
      /* ── auto-added translations ── */
      'page.services.lead': 'Nous fournissons un ingénierie d\'intégration de bout en bout — du conseil en architecture à l\'implémentation de systèmes en production et au support à long terme. Chaque engagement est adapté à votre stack et à votre calendrier.',
      'svc.pipeline.body': 'Conception et implémentation de pipelines de données d\'entreprise avec Apache NiFi et Apache Kafka comme backbone. Nous gérons les scénarios à haut débit (50k+ msg/sec), la livraison exactly-once, le CDC depuis Oracle/PostgreSQL et l\'intégration avec des bases de données analytiques incluant Greenplum.',
      'svc.pipeline.list': '<li>Conception de flows Apache NiFi, configuration de cluster et tuning</li><li>Architecture de topics Kafka, Schema Registry, traitement de flux</li><li>Connecteurs Debezium CDC pour la synchronisation de bases de données en temps réel</li><li>Intégration analytique Greenplum / PostgreSQL</li><li>Files dead-letter, replay, monitoring et alerting</li>',
      'svc.fintech.body': 'Nous avons construit des connecteurs et adaptateurs de production pour l\'infrastructure financière la plus exigeante en Russie et dans la CEI. SWIFT, НРД, МосБиржа — nous connaissons ces protocoles de l\'intérieur.',
      'svc.fintech.list': '<li>Traitement des messages SWIFT MT103 / MT202 / MX ISO 20022</li><li>Intégration API НРД — règlement, opérations dépositaires</li><li>Connecteurs WebSocket et REST API МосБиржа</li><li>Adaptateurs système bancaire cœur (protocoles personnalisés, XML legacy)</li><li>Implémentation du protocole FIX pour les systèmes de trading</li>',
      'svc.java.body': 'Ingénierie backend Java 17/21 moderne avec Spring Boot 3, la stack réactive WebFlux et les threads virtuels. Nous concevons des API gateways avec une sécurité zero-trust et des architectures événementielles qui évoluent sans re-architecture.',
      'svc.java.list': '<li>Microservices Spring Boot 3 avec WebFlux réactif</li><li>Threads virtuels Java 21 pour les workloads haute concurrence</li><li>Conception d\'API gateway OAuth2 / JWT / mTLS</li><li>Architecture événementielle avec Kafka et le pattern Outbox</li><li>Scripting Groovy pour les processeurs NiFi et l\'outillage DSL</li>',
      'svc.devops.body': 'Nous construisons et exploitons une infrastructure basée sur Kubernetes avec des workflows GitOps, la gestion des secrets et une posture de sécurité satisfaisant les régulateurs financiers. Déploiements sans temps d\'arrêt, auto-scaling et runbooks inclus.',
      'svc.devops.list': '<li>Conception de cluster Kubernetes, rédaction de Helm charts</li><li>Architecture de pipeline GitLab CI / GitHub Actions</li><li>Gestion des secrets OpenBao / HashiCorp Vault</li><li>Politiques de sécurité réseau, standards Pod Security</li><li>Observabilité : Prometheus, Grafana, Loki, alerting</li>',
      'svc.network.body': 'Infrastructure d\'entreprise auto-hébergée sans dépendance aux clouds Big Tech. Réseaux VPN mesh pour équipes distantes sécurisées, serveurs de messagerie XMPP privés et systèmes de gestion des secrets sous votre contrôle total.',
      'svc.network.list': '<li>Headscale + Tailscale mesh VPN pour équipes distribuées</li><li>Messagerie d\'entreprise XMPP / Prosody auto-hébergée</li><li>Gestion des secrets et des identifiants OpenBao</li><li>Politiques de contrôle d\'accès et segmentation réseau</li><li>Automatisation de l\'onboarding client et documentation</li>',
      'svc.advisory.body': 'Pas encore prêt à externaliser l\'implémentation ? Nous fournissons des revues d\'architecture expertes, des audits d\'intégration et une stratégie technique — pour que votre équipe construise la bonne chose dès le départ.',
      'svc.advisory.list': '<li>Audit du paysage d\'intégration avec rapport de conclusions</li><li>Session de conception d\'architecture + enregistrements de décisions</li><li>Consultation sur le réglage des performances NiFi / Kafka</li><li>Revue d\'architecture de sécurité pour les workloads fintech</li><li>Mentorat d\'équipe et support tech lead</li>',
      'svc.cta.eyebrow': 'Vous ne savez pas quel service convient ?',
      'svc.cta.h2': 'Parlons de votre projet.',
      'svc.cta.lead': 'Un appel de 30 minutes suffit pour comprendre vos défis d\'intégration et vous donner une recommandation concrète.',
      'svc.cta.btn': 'Réserver un appel gratuit →',
      'page.cases.lead': 'Tous les projets sont anonymisés. Les métriques et les délais sont réels. Nous n\'exagérons pas — ce sont les résultats réels que nous avons livrés.',
      'case1.badge1': '🏦 Banque',
      'case1.badge2': 'NiFi + Kafka',
      'case1.badge3': '3 semaines',
      'case1.p1': 'Une banque russe du top 20 avait un pipeline de traitement SWIFT MT103 construit sur un monolithe Java fragile. Le système tombait en panne sous la charge de fin de mois — tous les mois. L\'équipe passait 2 à 3 jours par incident en récupération manuelle.',
      'case1.p2': 'Nous avons reconstruit la couche d\'ingestion et de transformation sur Apache NiFi avec Kafka comme backbone durable. La gestion dead-letter, les processeurs idempotents et le replay automatisé ont remplacé les procédures manuelles fragiles.',
      'case1.list': '<li>Processeur SWIFT monolithique remplacé par un flow NiFi + topic Kafka par type de message</li><li>Sémantique exactly-once implémentée pour la livraison de messages financiers</li><li>Réconciliation automatisée avec les enregistrements de règlement НРД</li><li>Zéro perte de données lors du premier cycle de fin de mois après le lancement</li>',
      'case1.r1': 'uptime du pipeline',
      'case1.r2': 'temps de récupération manuelle',
      'case1.r3': 'de l\'audit à la production',
      'case2.badge1': '📈 Trading',
      'case2.badge2': 'WebSocket + PostgreSQL',
      'case2.badge3': '6 semaines',
      'case2.p1': 'Une entreprise de trading propriétaire recevait les données de marché МосБиржа via un feed vendeur tiers. La latence p99 atteignait 180ms lors de sessions volatiles — inacceptable pour leurs stratégies algorithmiques.',
      'case2.p2': 'Nous avons construit une connexion WebSocket directe au feed МосБиржа FAST/FIXS, conçu une couche de normalisation basse latence en Java 21 avec des threads virtuels. Le p99 est passé de 180ms à 72ms le premier jour.',
      'case2.list': '<li>Décodeur de protocole FAST direct — sans intermédiaire fournisseur</li><li>Threads virtuels Java 21 gérant 12 000 abonnements d\'instruments simultanés</li><li>Stockage de ticks PostgreSQL partitionné avec latence d\'écriture sous la milliseconde</li><li>Dashboard Grafana pour les percentiles de latence et la détection des écarts</li>',
      'case2.r1': 'réduction de latence',
      'case2.r2': 'latence données de marché p99',
      'case2.r3': 'abonnements simultanés',
      'case3.badge1': '🏛️ Gouvernement',
      'case3.badge2': 'NiFi + Greenplum',
      'case3.badge3': '4 mois',
      'case3.p1': 'Le Département des technologies de l\'information de Moscou avait besoin d\'une couche unifiée d\'intégration de données pour consolider les données opérationnelles de plus de 40 systèmes municipaux dans une plateforme analytique Greenplum.',
      'case3.p2': 'Nous avons conçu et déployé un cluster Apache NiFi qui gère le cycle de vie complet d\'ingestion — des API sources REST et SOAP à la validation de schéma, la transformation, la gestion des erreurs et le suivi de lignage.',
      'case3.list': '<li>Cluster NiFi : 3 nœuds HA avec ZooKeeper, 40+ flows actifs</li><li>Schema Registry pour tous les contrats sources</li><li>Lignage de données complet de l\'API source à la table analytique Greenplum</li><li>Runbook on-call et alerting automatisé remis à l\'équipe interne</li>',
      'case3.r1': 'systèmes sources',
      'case3.r2': 'erreurs de pipeline/mois',
      'case3.r3': 'conception à la production',
      'case4.badge1': '🔐 Entreprise',
      'case4.badge2': 'Headscale + OpenBao',
      'case4.badge3': '2 semaines',
      'case4.p1': 'Une entreprise fintech avec des employés distants en Russie, Géorgie et Israël avait besoin d\'un réseau interne sécurisé qui ne routait pas le trafic via des fournisseurs cloud contrôlés par les États-Unis.',
      'case4.p2': 'Nous avons déployé un contrôleur Headscale auto-hébergé avec des clients Tailscale, implémenté des politiques ACL pour la segmentation réseau, ajouté un serveur de messagerie XMPP Prosody et intégré OpenBao pour la rotation des secrets.',
      'case4.list': '<li>Contrôleur Headscale sur VPS privé, nœuds de sortie en DE et US</li><li>Politiques ACL : niveaux d\'accès par utilisateur</li><li>Prosody XMPP auto-hébergé avec chats de groupe chiffrés de bout en bout</li><li>Page d\'onboarding basée sur QR code — configuration client en moins de 2 minutes</li>',
      'case4.r1': 'membres connectés',
      'case4.r2': 'onboarding nouveau client',
      'case4.r3': 'auto-hébergé, zéro Big Tech',
      'case5.p1': 'Projet R&D interne — un système de trading algorithmique réactif de qualité production construit sur Java 21 + Spring WebFlux. Connecté aux marchés spot et futures HTX (Huobi). Le système fonctionne 24/7 avec 5 microservices et 12+ dashboards SSE en temps réel.',
      'case5.p2': 'Ce projet démontre notre capacité d\'ingénierie fintech full-stack : pipelines réactifs non-bloquants, stockage de séries temporelles TimescaleDB, auth API signée HMAC-SHA256 et rapports de marché IA automatisés toutes les heures.',
      'case5.list': '<li>5 microservices : fluid-trader, klines-service, prices-service, news-agent, trader-db</li><li>Analyste IA : Qwen3.7-Max + DeepSeek-V4-Pro, rapports de marché horaires via Telegram</li><li>TimescaleDB pour les séries temporelles OHLCV, feed WebSocket HTX + Binance</li><li>Secrets Zero-Trust : OpenBao avec rotation automatique</li><li>Déploiement Kubernetes complet sur VPS bare-metal</li>',
      'case5.r1': 'jours de fonctionnement continu',
      'case5.r2': 'dashboards SSE en direct',
      'case5.r3': 'latence d\'exécution des ordres',
      'case5.access': 'Accès disponible pour les investisseurs et partenaires entreprise',
      'cases.cta.eyebrow': 'Vous avez un défi similaire ?',
      'cases.cta.h2': 'Nous serions ravis d\'entendre parler de votre projet.',
      'page.stack.lead': 'Nous choisissons les technologies en fonction de l\'expérience en production et de la simplicité opérationnelle. Voici ce que nous utilisons réellement — et pourquoi.',
      'stack.section.data.desc': 'Apache NiFi est notre outil principal pour le mouvement et la transformation des données. Il offre une conception visuelle de flux, une traçabilité intégrée, la gestion du back-pressure et plus de 300 processeurs intégrés. Kafka est le backbone durable où la fiabilité prime sur la simplicité.',
      'stack.section.app.desc': 'Java 21 avec les threads virtuels élimine le besoin de plomberie réactive dans la plupart des cas tout en maintenant un débit élevé. Spring Boot 3 avec Spring Security, WebFlux pour les charges de travail vraiment asynchrones.',
      'stack.section.infra.desc': 'Kubernetes pour l\'orchestration, GitLab CI / GitHub Actions pour la livraison, Helm pour le packaging. Nous instrumentons tout avec Prometheus + Grafana et acheminons les alertes vers PagerDuty ou Telegram.',
      'stack.section.security.eyebrow': 'Sécurité',
      'stack.section.security.h2': 'Zero-trust par défaut',
      'stack.section.security.desc': 'OpenBao (un fork open-source de HashiCorp Vault) gère tous les secrets — aucune information d\'identification dans les variables d\'environnement. mTLS entre services, OAuth2/JWT aux frontières API.',
      'stack.section.fintech.eyebrow': 'Protocoles financiers',
      'stack.section.fintech.h2': 'Expertise spécifique fintech',
      'stack.section.fintech.desc': 'La plupart des ingénieurs d\'intégration ne connaissent pas la différence entre SWIFT et SEPA ou FIX et FAST. Nous, oui. Cette expertise est rare et a été accumulée grâce à des années de travail en production.',
      'stack.philosophy.eyebrow': 'Philosophie d\'ingénierie',
      'stack.philosophy.h2': 'Pourquoi nous ne courons pas après les tendances',
      'stack.phil1.title': 'Nous utilisons NiFi même si tout le monde dit "juste Kafka"',
      'stack.phil1.desc': 'Parce que NiFi vous donne la traçabilité des données, la gestion du back-pressure, le débogage visuel et 300 processeurs intégrés. Pour l\'ETL complexe avec de nombreuses sources hétérogènes, c\'est le bon outil.',
      'stack.phil2.title': 'Nous utilisons Java 21 même si tout le monde dit "allez sur Rust"',
      'stack.phil2.desc': 'Parce que l\'écosystème Spring, l\'outillage JVM et le vivier de talents Java sont inégalés pour l\'intégration d\'entreprise. Les threads virtuels ont résolu le problème de concurrence.',
      'stack.phil3.title': 'Nous utilisons OpenBao plutôt que des coffres-forts commerciaux',
      'stack.phil3.desc': 'Contrôle total, pas de vendor lock-in, pas de frais de licence à l\'échelle. Nous opérons OpenBao en production pour notre propre infrastructure et nos clients.',
      'stack.phil4.title': 'Nous construisons une infrastructure auto-hébergée par défaut',
      'stack.phil4.desc': 'Headscale, Prosody, OpenBao — non pas parce que le cloud est mauvais, mais parce que pour les entreprises financières et les industries réglementées, la souveraineté des données est une exigence métier.',
      'page.contact.lead': 'Décrivez votre défi d\'intégration — nous répondrons dans les 24 heures avec une évaluation honnête, pas un argumentaire de vente.',
      'contact.direct.h2': 'Nous contacter directement',
      'contact.where.title': '📍 Où nous travaillons',
      'contact.where.text': 'Remote-first. Notre équipe opère depuis la Russie, la Géorgie et Israël. Nous travaillons avec des clients en EU, CEI et MENA — couverture UTC+0 à UTC+4.',
      'contact.tips.h2': 'Que mettre dans votre premier message',
      'contact.tip1.title': 'Votre défi d\'intégration',
      'contact.tip1.desc': 'Quels systèmes doivent être connectés ? Qu\'est-ce qui échoue ou manque aujourd\'hui ?',
      'contact.tip2.title': 'Secteur & échelle',
      'contact.tip2.desc': 'Fintech, banque, industrie, gouvernement ? Volumes de données approximatifs et taille de l\'équipe.',
      'contact.tip3.title': 'Calendrier & urgence',
      'contact.tip3.desc': 'Est-ce un nouveau projet, une migration legacy ou un incident en production ?',
      'contact.tip4.title': 'Stack existant (optionnel)',
      'contact.tip4.desc': 'Quelles technologies sont déjà utilisées ? Contraintes que nous devrions connaître ?',
      'contact.note': 'Nous répondons généralement avec une évaluation technique d\'une page dans les 24 heures — pas une proposition générique, mais un vrai avis sur votre situation spécifique.',
      'contact.avail.title': 'Actuellement disponible',
      'contact.avail.text': 'Nous avons de la capacité pour 1 à 2 nouveaux projets démarrant au T3 2026. Engagements à long terme préférés.',

    },
  };

  /* ── LANGUAGE SWITCHER STATE ──────────────────────────── */
  var currentLang = 'en';
  var typedInstance = null; // will be set by index.html

  var LANG_META = {
    en: { flag: '🇬🇧', code: 'EN', htmlLang: 'en' },
    ru: { flag: '🇷🇺', code: 'RU', htmlLang: 'ru' },
    kz: { flag: '🇰🇿', code: 'KZ', htmlLang: 'kk' },
    de: { flag: '🇩🇪', code: 'DE', htmlLang: 'de' },
    fr: { flag: '🇫🇷', code: 'FR', htmlLang: 'fr' },
  };

  /* ── APPLY TRANSLATIONS ───────────────────────────────── */
  function applyLang(lang, isUserAction) {
    var t = I18N[lang] || I18N.en;
    var prevLang = currentLang;
    currentLang = lang;

    // Text content — safe: only update elements whose key resolves to a string
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      var val = t[key];
      if (typeof val === 'string') el.textContent = val;
    });

    // HTML content
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-html');
      if (typeof t[key] === 'string') el.innerHTML = t[key];
    });

    // Page title
    var titleKey = 'page.' + (document.body.getAttribute('data-page') || '') + '.title';
    if (t[titleKey]) document.title = t[titleKey];

    // html lang attr
    var meta = LANG_META[lang] || LANG_META.en;
    document.documentElement.lang = meta.htmlLang;

    // Update switcher UI
    var flagEl = document.getElementById('lang-flag');
    var codeEl = document.getElementById('lang-code');
    if (flagEl) flagEl.textContent = meta.flag;
    if (codeEl) codeEl.textContent = meta.code;

    document.querySelectorAll('.lang-option').forEach(function (btn) {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });

    // Re-init Typed.js ONLY when user explicitly switches language (not on initial load)
    if (isUserAction && t['typed.strings'] && typeof window.__reinitTyped === 'function') {
      window.__reinitTyped(t['typed.strings']);
    }

    // Refresh AOS after DOM changes so hidden elements get recalculated
    if (typeof window.AOS !== 'undefined' && typeof window.AOS.refresh === 'function') {
      window.AOS.refresh();
    }

    localStorage.setItem('it_lang', lang);
  }

  /* ── SWITCHER DROPDOWN LOGIC ──────────────────────────── */
  function initSwitcher() {
    var btn = document.getElementById('lang-btn');
    var dropdown = document.getElementById('lang-dropdown');
    if (!btn || !dropdown) return;

    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      var open = !dropdown.hasAttribute('hidden');
      if (open) {
        dropdown.setAttribute('hidden', '');
        btn.setAttribute('aria-expanded', 'false');
      } else {
        dropdown.removeAttribute('hidden');
        btn.setAttribute('aria-expanded', 'true');
      }
    });

    document.querySelectorAll('.lang-option').forEach(function (opt) {
      opt.addEventListener('click', function () {
        applyLang(opt.getAttribute('data-lang'), true);
        dropdown.setAttribute('hidden', '');
        btn.setAttribute('aria-expanded', 'false');
      });
    });

    document.addEventListener('click', function () {
      dropdown.setAttribute('hidden', '');
      btn.setAttribute('aria-expanded', 'false');
    });
  }

  /* ── AUTO-DETECT & INIT ───────────────────────────────── */
  function detectLang() {
    var saved = localStorage.getItem('it_lang');
    if (saved && I18N[saved]) return saved;
    var nav = (navigator.language || navigator.userLanguage || 'en').toLowerCase();
    if (nav.startsWith('ru')) return 'ru';
    if (nav.startsWith('kk') || nav.startsWith('kz')) return 'kz';
    if (nav.startsWith('de')) return 'de';
    if (nav.startsWith('fr')) return 'fr';
    return 'en';
  }

  function init() {
    initSwitcher();
    var lang = detectLang();
    // Small delay: let inline animation scripts (AOS, Vanta, Typed) finish init first
    if (document.readyState === 'complete') {
      setTimeout(function() { applyLang(lang); }, 50);
    } else {
      applyLang(lang);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Expose for external use (Typed.js re-init from index.html)
  window.I18N = I18N;
  window.setLang = applyLang;

}());
