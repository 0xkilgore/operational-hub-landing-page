export const navigation = {
  logo: "Achra",
  productLabel: "Operational Hub",
  links: [
    { label: "What's Included", href: "/included" },
    { label: "Swiss Entity", href: "/swiss-entity" },
    { label: "Pricing", href: "/pricing" },
    { label: "Blog", href: "/blog" },
  ],
  cta: { label: "Book a Call", href: "/contact" },
}

export const hero = {
  title: "Less Admin. More Building",
  subtitle:
    "A turnkey back-office platform for global teams. Workflow software for invoicing, payouts, compliance, and reporting; regulated services delivered by operator partners on the marketplace. Plus your own legal entity for contracts and member privacy.",
  primaryCta: { label: "Schedule a call", href: "/contact" },
  secondaryCta: { label: "See Pricing", href: "/pricing" },
  badges: ["Operator Partner Network", "Invoicing + Approval Workflows", "Global Payout Coordination", "Monthly Close Workflows", "Agreement Templates"],
}

export const problem = {
  title: "Stop Doing Ops as a Side Job",
  body: "Running an entity creates recurring work: invoices, approvals, payouts, close, and reporting. The Operational Hub provides workflow software and access to a curated marketplace of operator partners who handle the day-to-day, so the project can run smoothly without admin becoming a second job. You remain the founder of your entity; operator partners deliver regulated services directly to you.",
}

export const audience = {
  title: "Who This Is For",
  subtitle:
    "Built for teams with $250k+ in annual operating spend who need a repeatable way to run invoicing, payouts, and reporting without building a full back office.",
  items: [
    {
      label: "DevCo and builder teams",
      description:
        "Teams paying contributors and vendors on a recurring cadence who want operations handled without adding full-time admin headcount.",
    },
    {
      label: "Open-source builders",
      description:
        "Teams maintaining open-source projects who want to own their entity and run a repeatable back office for invoicing, approvals, payouts, and reporting, even when funding comes from many different sources.",
    },
    {
      label: "Privacy-first teams",
      description:
        "Teams that want to run real-world operations with member privacy by default and less personal exposure for signers.",
    },
  ],
}

export const benefits = {
  title: "Why Teams Choose An Operational Hub",
  items: [
    {
      title: "Spend less time on operations",
      description:
        "Turn invoicing, approvals, payouts, close and reporting into a repeatable system so ops work stops consuming your week",
    },
    {
      title: "Standard templates reduce legal costs",
      description:
        "Start from a proven agreement stack and templates so you spend less on custom drafting and repeated reviews.",
    },
    {
      title: "Payments and compliance, without the maze",
      description:
        "Coordinate payouts via Stripe Connect (in fiat or stablecoins) with operator-as-merchant-of-record, and keep records that prepare you for audit when needed.",
    },
    {
      title: "Privacy and personal protection",
      description:
        "Operate with member privacy by default and reduce personal exposure when the project interacts with the real world",
    },
    {
      title: "Legal entity behind your operations",
      description:
        "Keep onchain control while your entity handles contracts, invoicing, and vendor relationships.",
    },
    {
      title: "Flexible structure, no lock-in",
      description: "Start lightweight, add structure as you grow, and wind down cleanly if your needs change.",
    },
  ],
}

export const whatYouGet = {
  title: "What You Get",
  subtitle:
    "A complete operating platform, including workflow software, access to a network of operator partners on the marketplace to run the day to day, plus your own entity that can sign, pay, and keep records.",
  items: [
    {
      id: "operator",
      label: "Operator Partner Network",
      description:
        "Operator partners on the marketplace run recurring workflows for you, with Achra providing coordination and workflow software, so invoicing, approvals, payouts, and close do not become a constant distraction.",
    },
    {
      id: "workflow",
      label: "Workflow System",
      description:
        "Repeatable workflows for invoices, approvals, payouts, and records so operations are consistent month to month, with documentation organized for reporting and tax filings.",
    },
    {
      id: "payments",
      label: "Payments Layer",
      description:
        "Payout coordination in fiat or stablecoins via Stripe Connect, with clean approval workflows and recordkeeping, designed for contributor-heavy teams.",
    },
    {
      id: "agreements",
      label: "Agreement Stack",
      description:
        "A proven set of templates and agreements that reduces legal costs and gets you to a working setup faster.",
    },
    {
      id: "entity",
      label: "Legal Entity",
      description:
        "Your own legal entity (Swiss Association at MVP) that can sign contracts, issue invoices, hold IP and other assets, and run operations through the entity instead of through individuals. Achra provides workflow software and coordination with counsel partners who form the entity for you.",
    },
  ],
}

export const entitySection = {
  title: "Operations built for global teams",
  subtitle:
    "This structure gives teams a credible way to sign contracts, issue invoices, pay contributors, and hold IP through an entity instead of through individuals, while staying compatible with globally distributed operations.",
  switzerlandTitle: "Switzerland, built for modern teams",
  switzerlandDescription:
    "Switzerland offers a stable legal environment with mature banking and professional services, and is widely used by crypto and open-source organizations that need to operate globally.",
  taxTitle: "Tax efficiency, when eligible",
  taxDescription:
    "In some cases, teams can pursue a cost plus 5% model via a tax ruling, which can materially reduce the tax burden on operational spend.",
  taxExample: [
    "CHF 1,000,000 annual operating costs",
    "Taxable income may be 5% of costs → CHF 50,000",
    "Effective tax rate in Zug roughly 11% of taxable income → about CHF 5,500",
    "That is about 0.55% of total annual costs",
  ],
  taxDisclaimer: "Not automatic and depends on activities and structure. Informational only, not tax advice.",
  privacyTitle: "Privacy and discretion",
  privacyDescription:
    "Member privacy is supported by default, which reduces unnecessary exposure while still operating credibly in the real world.",
  jurisdictionNote: "Other jurisdictions and entity options are planned as the product expands.",
}

export const howItWorks = {
  title: "How It Works",
  subtitle: "Legal setup comes first. Operational setup follows. Then you run day to day through the entity.",
  steps: [
    {
      number: 1,
      title: "Swiss Association Formation",
      description:
        "Form your Swiss association with a licensed counsel partner on the marketplace. Achra provides legal document templates and VAT documentation workflows; counsel handles formation and review. Registered address provided by a domicile provider partner on the marketplace. A proven structure for global teams.",
      counselNote: "Formation handled by your chosen licensed Swiss counsel partner on the marketplace.",
    },
    {
      number: 2,
      title: "Operational Setup",
      description:
        "Operator partners you choose on the marketplace set up admin workflows: payouts, vendors, approvals, reporting. Achra provides the workflow platform; you connect the operational pieces you need to run cleanly.",
    },
    {
      number: 3,
      title: "Operate",
      description:
        "Run payments and agreements through your entity, not as individuals. Operator partners on the marketplace handle day-to-day operational tasks (with Achra workflow coordination); your accountant maintains accounting records; your auditor handles audits when needed; your tax advisor handles tax filings.",
      operatorSupportDetails: [
        {
          heading: "Complete operational setup and coordination",
          description: "End-to-end implementation so you can focus on the work, not administration.",
        },
        {
          heading: "Workforce classification and management",
          description:
            "Templates and workflow guidance for contributor and employee structures. Compliant classification analysis performed by your employment counsel and tax advisor on the marketplace (workforce classification rules are jurisdiction-specific and require local expertise).",
        },
        {
          heading: "Compensation and payment infrastructure",
          description:
            "Multi-currency payout coordination via Stripe Connect (regulated payment rails), expense workflows, and payment scheduling. Achra coordinates; Stripe Connect handles settlement; Achra never holds funds.",
        },
        {
          heading: "Swiss-compliant accounting",
          description:
            "Swiss GAAP-aligned bookkeeping, reporting, and annual financial statements — prepared by your Swiss accountant on the marketplace, with Achra workflow support.",
        },
        {
          heading: "Swiss tax and regulatory compliance",
          description:
            "Workflow support for tax filings and VAT — filings performed by your Swiss tax advisor on the marketplace. Record organization that prepares you for reporting and tax filings.",
        },
      ],
    },
  ],
}

export const operatorSupport = {
  title: "What's included in operator support (typical scope)",
  items: [
    "Setup and coordination: end-to-end launch, vendor coordination, timeline and checklist ownership",
    "Payments operations: invoicing intake, approvals workflow, payouts scheduling, multi-currency support",
    "Accounting and reporting: bookkeeping coordination, monthly close support, financial reporting package",
    "Tax and filings readiness: tax-ready records, VAT support where applicable, documentation for tax filings",
    "Contracts and workforce ops: contributor and employment agreement templates, classification support with Swiss specialists",
    "Tools and systems: accounting system setup (for example Xero), records storage, repeatable workflows",
  ],
}

export const ownership = {
  title: "What You Own vs What Operator Partners Handle",
  subtitle: "You own the entity and the key approvals. Operator partners on the marketplace run day-to-day administration; Achra provides the workflow platform that coordinates everything.",
  youOwn: [
    "Ultimate control: Core team assigned as founding member of the association, giving them ultimate control over the entity.",
    "Treasury control: You control the treasury and approvals, including a multisig if you use one.",
    "Decision making: You set policies, budgets, and who can approve what.",
    "External advisors: You choose when to engage counsel, accounting, or other specialists.",
  ],
  operatorHandles: [
    "Invoicing and collections workflows: Issuing invoices through your entity, tracking status, and keeping records organized.",
    "Approvals and payout coordination: Preparing payment workflows, collecting approvals, and coordinating payouts via Stripe Connect in fiat or stablecoins. Achra coordinates the workflow; Stripe Connect handles settlement directly between parties.",
    "Monthly close and reporting workflows: Reconciliation tooling, structured records, and monthly reporting inputs prepared in coordination with your accountant on the marketplace.",
    "Admin and coordination: Vendor onboarding workflows, documentation tooling, and coordination with your accountant, tax advisor, and counsel on the marketplace as needed.",
  ],
}

export const faq = {
  title: "FAQ",
  disclaimer: "Note: The FAQ below is for informational purposes only. It is not legal, financial, or tax advice.",
  items: [
    {
      question: "Do I still need someone to run operations?",
      answer:
        "No internal headcount required. The Operational Hub includes workflow software (Achra) plus access to a network of operator partners on the marketplace who run the recurring back-office work — invoicing, payables, approvals, contributor payment coordination, and month-end processes. You engage operator partners directly through the marketplace; they deliver services to you; Achra coordinates the workflows.",
    },
    {
      question: "Do I still need an accountant?",
      answer:
        "Yes — but the Operational Hub makes engaging one straightforward. The platform includes workflow tooling for day-to-day finance ops and keeps records organized, but accounting work itself (bookkeeping, reporting, financial statements) is performed by an accountant. You engage your chosen accountant from the marketplace; the Hub coordinates the workflow. Tax filings are performed by your tax advisor (also engaged via the marketplace).",
    },
    {
      question: "Do I still need legal counsel?",
      answer:
        "Yes — for any regulated legal work, you need licensed counsel. The Hub is built on standardized templates and a proven agreement stack, which significantly reduces the volume of custom drafting and repeated reviews. We connect you with our curated network of Swiss law firm partners on the marketplace; you engage counsel directly through them. Specialized matters (cross-border issues, regulated industries, etc.) typically require additional counsel time.",
    },
    {
      question: "How do invoicing and payments work (fiat and stablecoins)?",
      answer:
        "The Hub provides workflow software for invoices and payouts. Invoices are issued through your entity. Approvals are collected through Achra's workflow. Payouts are coordinated via Stripe Connect (which handles settlement directly to recipients in fiat or stablecoins, with operator or your entity as merchant of record). Records are kept in one place for your accountant's monthly close and tax reporting. Operator partners on the marketplace coordinate the documentation; your core team keeps approval control; Achra never holds funds.",
    },
    {
      question: "How do setup work and how long does it take?",
      answer:
        "Setup is designed to be standardized and fast. You choose the scope of operations you want covered, complete onboarding and compliance steps, and then the entity and operating workflows are put in place using a proven template stack. From there, operator partners on the marketplace help you transition invoicing, payouts, records, and month-end routines into the new system. Timeline depends on complexity and required reviews, but the goal is to get you operational quickly without a custom legal build.",
    },
    {
      question: "Can we wind this down later?",
      answer:
        "Yes. The Operational Hub is designed to be flexible. You can start lightweight, evolve the setup as your needs change, and wind it down cleanly if it is no longer the right fit, without being locked into a heavyweight corporate structure.",
    },
    {
      question: "Do members have to be public or doxxed?",
      answer:
        "Not by default. In the standard case, member names do not need to be published in a public registry, which supports privacy-first operations. Some counterparties and service providers, like banks, payment institutions, and compliance vendors, will require identity verification as part of their KYC/AML obligations — this is standard practice and you should expect it.",
    },
    {
      question: "What does liability protection mean?",
      answer:
        "The entity provides a layer of separation so contracts, invoices, and operations can be handled through the organization instead of in a personal capacity. Liability is not absolute. Individuals can still have personal exposure in certain situations, including criminal, regulatory, tax, or employment matters, or cases involving willful misconduct or gross negligence.",
    },
    {
      question: "What are the key constraints of the entity?",
      answer:
        "This structure is designed for operating, not fundraising. It does not have shares, cannot pay dividends, and is typically used for service and development activity rather than high-risk financial activity. Commercial activity is generally allowed when it is secondary and supports the stated purpose, and activities like token sales or active trading are usually not a fit.",
    },
    {
      question: "Why Switzerland?",
      answer:
        "Switzerland is a stable, internationally recognized jurisdiction with mature banking and professional services, which makes it well-suited for globally distributed teams that need to sign contracts, issue invoices, pay contributors, and hold IP through an entity. Many crypto and open-source organizations use Switzerland for the same reasons. Zug is a common home base because it has deep talent and service provider infrastructure for these teams.",
    },
    {
      question: "What does tax efficiency mean here?",
      answer:
        "In some cases, a Zug-based structure may pursue a cost plus 5% model via a tax ruling, which can reduce the taxable income tied to operational spend. This is not automatic and depends on your activities and documentation.",
      details: [
        "CHF 1,000,000 annual operating costs",
        "Taxable income may be 5% of costs → CHF 50,000",
        "Effective tax rate in Zug roughly 11% of taxable income → about CHF 5,500",
        "That is about 0.55% of total annual costs",
      ],
      additionalInfo:
        "This approach typically aligns with lower-risk service activity, like open-source development, consultancy, R&D, or administrative support, and is usually not suitable for higher-risk activity, like token sales, active trading, staking or mining, or DeFi yield. It requires strong cost accounting and is typically pursued case by case with Swiss tax advisors.",
      disclaimer: "Informational only. Not tax advice.",
    },
  ],
}

export const footerCta = {
  prompt: "Build the product, not the back office.",
  subtitle: "A back office system for global teams, with clean records for reporting and tax filings.",
  primaryCta: { label: "Schedule a call", href: "/contact" },
  secondaryCta: { label: "See Pricing", href: "/pricing" },
}

export const footer = {
  copyright: "© 2026 Achra.",
  disclaimer: "Informational only. Not legal, financial, or tax advice.",
}

export const achraPlatform = {
  tagline: "Part of something bigger",
  title: "Built on the Achra platform",
  subtitle: "The marketplace for global coordination",
  description:
    "Achra is a platform that connects the tools and operator partners organizations need to operate globally. The Operational Hub is your foundation: your own legal entity, back-office workflow software, and access to a network of operator partners on the marketplace. As the platform grows, you'll be able to manage workstreams, find builders and service providers, coordinate treasury, and run governance. All designed to work together.",
  features: [
    "Manage workstreams and coordinate distributed teams",
    "Find and engage builders, contributors, and service providers",
    "Integrated tooling for operations, governance, and treasury",
    "Modular platform that grows with your organization",
  ],
  cta: { label: "Learn more about Achra", href: "https://achra.com" },
}

export const poweredByPowerhouse = {
  tagline: "Powered by Powerhouse",
  description: "Powerhouse builds tools and infrastructure for decentralized organizations. We help teams coordinate globally through open-source software and a marketplace of operator partners.",
  cta: { label: "Learn more", href: "https://powerhouse.io" },
  vetra: { label: "Explore Vetra", href: "https://www.vetra.io" },
}

export const differentiation = {
  title: "More Than Entity Formation",
  description:
    "Unlike standalone entity brokers, this is an integrated platform with workflow software, access to a network of operator partners on the marketplace, and clean recordkeeping built in from day one.",
}

export const switzerland = {
  title: "Switzerland",
  description: "A stable, internationally recognized jurisdiction with mature banking and professional services.",
}

export const taxCompliance = {
  title: "Tax Efficiency",
  description: "In some cases, teams can pursue a cost plus 5% model via a tax ruling.",
}
