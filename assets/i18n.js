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
  function applyLang(lang) {
    var t = I18N[lang] || I18N.en;
    currentLang = lang;

    // Text content
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (t[key] !== undefined) el.textContent = t[key];
    });

    // HTML content (for elements with inner markup)
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-html');
      if (t[key] !== undefined) el.innerHTML = t[key];
    });

    // Page title
    var titleKey = 'page.' + document.body.getAttribute('data-page') + '.title';
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

    // Re-init Typed.js if available (index page only)
    if (t['typed.strings'] && typeof window.__reinitTyped === 'function') {
      window.__reinitTyped(t['typed.strings']);
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
        applyLang(opt.getAttribute('data-lang'));
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
    applyLang(detectLang());
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
