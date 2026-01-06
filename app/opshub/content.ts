export const navigation = {
  logo: "Achra",
  services: [
    { label: "Finance", href: "#services" },
    { label: "HR", href: "#services" },
    { label: "Bookkeeping", href: "#services" },
  ],
  links: [{ label: "Operational Hub", href: "/opshub", active: true }],
  cta: { label: "Book a demo", href: "/demo" },
  secondaryCta: { label: "Request a needs analysis", href: "/contact" },
}

export const hero = {
  title: "Keep Building. Offload the Busywork.",
  subtitle:
    "The Operational Hub is a turnkey solution that gives your project a legal shield, member privacy, and a compliant bridge to the real world, without corporate bloat. Ongoing operations are handled through an operator team so you can stay focused on shipping.",
  primaryCta: { label: "Request a needs analysis", href: "/contact" },
  secondaryCta: { label: "Talk to an operator", href: "/contact" },
  badges: ["Swiss Association", "Legal Personhood", "Member Privacy", "Invoicing + Payouts", "Compliance-Ready"],
}

export const problem = {
  title: "Stop doing ops as a side job",
  body: "The Operational Hub turns recurring admin into a system: invoicing, payouts, approvals, records, and reporting, supported by an operator team so your builders stay focused on shipping.",
}

export const audience = {
  title: "Who This Is For",
  subtitle: "If you see yourself here, start with the needs analysis.",
  items: [
    {
      label: "Multisig Operators",
      description: "Budget owners, protocol ops, and permanent contributor groups",
    },
    {
      label: "Grantees",
      description: "Teams applying for or receiving DAO grants",
    },
    {
      label: "Security Councils And Admin Multisigs",
      description: "Upgrade keys, pausing rights, and high-stakes permissions",
    },
    {
      label: "Professional Delegates And Governance Teams",
      description: "Public work with clean separation",
    },
    {
      label: "Privacy-First Builders",
      description: "Sovereignty and discretion by default",
    },
  ],
}

export const benefits = {
  title: "Why Teams Choose An Operational Hub",
  items: [
    {
      title: "Spend less time on operations",
      points: [
        "Replace admin chaos with workflows",
        "Keep payouts, records, approvals on track",
        "Free contributors to ship",
      ],
    },
    {
      title: "Standard templates reduce legal overhead",
      points: [
        "Start from a proven agreement stack",
        "Fewer drafting and review cycles",
        "Counsel time on specifics, not basics",
      ],
    },
    {
      title: "Payments and compliance, without the maze",
      points: [
        "Pay vendors in fiat or stablecoins",
        "Clean invoicing and approval flows",
        "Reporting that scales with you",
      ],
    },
    {
      title: "Privacy and personal protection",
      points: [
        "Members are not doxxed by default",
        "Put a legal shield between you and ops",
        "Reduce exposure in real-world interactions",
      ],
    },
    {
      title: "Legal wrapper around your multisig",
      points: [
        "Put a legal entity behind your treasury",
        "Sign agreements and pay vendors through the Association",
        "Keep onchain control while operating credibly offchain",
      ],
    },
    {
      title: "Flexible structure, no lock-in",
      points: ["Start lightweight and evolve", "Add structure as you grow", "Wind down if needs change"],
    },
  ],
}

export const whatYouGet = {
  title: "What You Get",
  items: [
    {
      id: "multisig",
      label: "Multisig",
      subtitle: "Technical layer",
      description: "Keep control onchain while moving fast with clear signing and approvals.",
    },
    {
      id: "association",
      label: "Swiss Association",
      subtitle: "Legal shield",
      description:
        "Put a legal person between contributors and real-world obligations, without heavy corporate overhead.",
    },
    {
      id: "mpa",
      label: "MPA",
      subtitle: "Multisig Participation Agreement",
      description:
        "Standardize how signers operate through the Association, with defined roles, accountability, and process.",
      tooltip: "MPA = Multisig Participation Agreement",
    },
    {
      id: "network",
      label: "Network",
      subtitle: "Agreements + relationships",
      description: "Make contributor and vendor relationships legible with a reusable agreement stack.",
    },
    {
      id: "operations",
      label: "Operations",
      subtitle: "Billing, payments, accounting",
      description:
        "Run invoicing, payouts, records, and reporting through repeatable workflows, supported by an operator team.",
    },
  ],
  trustSignal: {
    text: "Coordinated with Swiss counsel (starting with MME).",
    logoAlt: "MME Legal Partner",
  },
}

export const differentiation = {
  title: "More Than Entity Setup",
  intro:
    "Entity brokers can form a wrapper. The Operational Hub is the operating bundle: entity + agreement stack + workflows + operator support.",
}

export const switzerland = {
  title: "A Predictable Jurisdiction For Crypto Teams",
  intro:
    "Switzerland is a stable, crypto-native jurisdiction with clear legal frameworks, credible service providers, and a long track record supporting global open-source and protocol teams.",
  cryptoFriendly: {
    title: "Crypto-Friendly By Design",
    points: [
      "Established ecosystem of counsel, accounting, and banking providers familiar with crypto",
      "Credible home base for teams signing agreements and paying contributors globally",
      "Predictable processes and documentation standards",
    ],
    trustNote: "Coordinated with Swiss counsel (starting with MME).",
  },
  taxEfficiency: {
    title: "Tax Efficiency, When Eligible",
    summary: [
      "Taxable income may be ~5% of annual operating costs (when eligible)",
      "Zug effective tax rate is often ~11% of taxable income",
      "Overall effective rate can be ~0.55% of total costs",
    ],
    accordion: {
      suitable: {
        title: "Suitable for:",
        content:
          "Typically aligns with low-risk service activity such as open-source development, consultancy, R&D, or administrative support.",
      },
      unsuitable: {
        title: "Usually not suitable for:",
        content:
          "Usually not suitable for higher-risk activity like token sales, active crypto trading, staking or mining, or DeFi yield activity.",
      },
      requirements: {
        title: "Requirements:",
        content:
          "Requires robust cost accounting and is typically pursued case by case via a tax ruling with Swiss tax advisors.",
      },
    },
    disclaimer: "Informational only. Not legal, financial, or tax advice.",
  },
  protectionPrivacy: {
    title: "Protection and discretion",
    points: [
      "Member privacy by default",
      "A legal shield between contributors and real-world obligations",
      "Designed to reduce personal exposure while operating credibly",
    ],
  },
}

export const howItWorks = {
  title: "How It Works",
  subhead: "Legal setup comes first. Operational setup follows. Then you run day to day through the entity.",
  steps: [
    {
      number: 1,
      title: "Legal Setup (templates + counsel review)",
      description:
        "Create your Operational Hub with templates for Articles/Bylaws, MPA, governance minutes, and membership records. Counsel reviews and customizes templates.",
      counselNote: "External Swiss counsel reviews and customizes templates (not legal advice).",
    },
    {
      number: 2,
      title: "Operational Setup",
      description:
        "Operator team sets up admin workflows: payouts, vendors, approvals, reporting. Connect the operational pieces you need to run cleanly.",
    },
    {
      number: 3,
      title: "Operate",
      description:
        "Run payments and agreements through the entity, not as individuals. Your team focuses on building while the operator team handles day-to-day admin.",
    },
  ],
}

export const ownership = {
  title: "What You Own vs What Your Operator Team Handles",
  subtitle: "You retain ultimate responsibility. The operator team handles day-to-day administration.",
  youOwn: [
    "Appoint and confirm roles",
    "Approve major actions",
    "Ensure compliance intent and assumptions are accurate",
    "Engage counsel/accountants when needed",
  ],
  operatorHandles: [
    "Maintain records and checklists",
    "Coordinate filings workflows with accountants",
    "Keep operational roles and approvals current in process",
    "Coordinate invoice approvals, payouts, vendor ops",
  ],
  disclaimer: "Informational only. Not legal, financial, or tax advice.",
}

export const faq = {
  title: "FAQ",
  disclaimer: "Note: The FAQ below is for informational purposes only. It is not legal, financial, or tax advice.",
  items: [
    {
      question: "What is an Operational Hub?",
      answer:
        "An Operational Hub is a turnkey structure for open-source builders and DAO contributor teams. It bundles a compliant Swiss Association with operational and payment workflows so globally distributed teams can operate professionally without sacrificing privacy or autonomy.",
    },
    {
      question: "How does this protect multisig signers and contributors?",
      answer:
        'The goal is to separate "you the person" from "you acting on behalf of the organization." When contracts, invoices, and operations are handled through the Association, operational liability is generally shifted away from individuals and onto the entity. However, it does not protect against all risks—managers and multisig signers can still have personal exposure in criminal, regulatory, tax, or employment-law matters, or in cases of willful misconduct or gross negligence.',
    },
    {
      question: "Do members have to be public or doxxed?",
      answer:
        "Not by default. Swiss Associations are generally not required to be publicly listed in a registry in the standard case, which supports privacy-first operations for distributed contributor teams.",
    },
    {
      question: "Why Switzerland and why Zug?",
      answer:
        'Switzerland is a stable, internationally recognized jurisdiction with mature financial infrastructure. The Hub is based in Canton Zug ("Crypto Valley"), known for crypto-friendly business policies and the presence of many high-profile projects.',
    },
    {
      question: "What are the key constraints of a Swiss Association?",
      answer:
        "Swiss Associations are non-profit entities. That means: commercial activities are typically allowed if secondary and supportive to the main purpose; there are no shares (so you cannot receive external investments or issue security tokens as equity); and you cannot pay dividends or distribute profits (members have no claim on the Association's assets).",
    },
    {
      question: "What does tax efficiency mean here?",
      answer:
        "In some cases, a Zug-based structure may pursue a cost plus 5% model via a tax ruling. This is not automatic and depends on your activities. Example: CHF 1,000,000 in annual operating costs → CHF 50,000 taxable income (5% of costs) → at Zug's effective tax rate of ~11%, approximately CHF 5,500 in tax, or ~0.55% of total annual costs. This typically aligns with low-risk service activity (open-source development, consultancy, R&D, admin support) and is usually not suitable for higher risk activity (token sales, active trading, staking/mining, DeFi yield). Requires robust cost accounting and is typically pursued case by case via a tax ruling with Swiss tax advisors. Informational only. Not legal or tax advice.",
    },
    {
      question: "Can we wind down the Operational Hub later?",
      answer:
        "Yes. The structure is intended to be flexible: you can start lightweight, evolve as your needs change, and wind down the Hub if it no longer fits your operating model.",
    },
    {
      question: "What does liability protection mean?",
      answer:
        "Liability is not absolute. The Association structure provides a layer of separation, but managers and signers may still have personal exposure in certain situations including criminal, regulatory, tax, or employment matters, or cases involving willful misconduct or gross negligence.",
    },
  ],
}

export const footerCta = {
  prompt: "Stay protected while you build. Offload the busywork.",
  primaryCta: { label: "Request a needs analysis", href: "/contact" },
  secondaryCta: { label: "Talk to an operator", href: "/contact" },
}

export const footer = {
  copyright: "© 2026 Achra.",
  disclaimer: "Informational only. Not legal, financial, or tax advice.",
}

export const taxCompliance = {
  title: "",
  summary: [],
  accordion: {},
  disclaimer: "",
}
