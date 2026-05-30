export interface CaseStudy {
  num: string;
  name: string;
  tagline: string;
  kicker: string;
  title: string;
  meta: { role: string; team: string; year: string; stack: string, github: string | null };
  brief: string;
  approach: string;
  outcomes: string[];
  stackTags: string[];
}

const raw: Record<string, Omit<CaseStudy, "num">> = {
  "checkout-rebuild": {
    name: "eCommerce Checkout Rebuild",
    tagline: "PayPal · Windcave · Apple/Google Pay",
    kicker: "eCommerce",
    title: "Checkout, rebuilt from scratch.",
    meta: {
      role: "Senior FE Dev",
      team: "Blackpepper",
      year: "2023 — 2024",
      stack: "Vue 3, Vite, Pinia",
      github: null,
    },
    brief:
      "Build a new B2C checkout flow from scratch for high-traffic eCommerce sites, optimised for performance, reliability, and mobile UX. Replace a legacy implementation that was slow, and hard to extend",
    approach:
      "Built the front-end in Vue 3 + Vite, with state in Pinia. Worked closely with back-end and product teams to integrate four payment providers in parallel.",
    outcomes: [
      "Shipped across multiple merchants on a shared, universal codebase.",
      "Mobile-first interactions tuned to the realities of thumb-typing card numbers at 10pm.",
      "PayPal, Windcave, Google Pay and Apple Pay all live and stable.",
      "Foundations clean enough that adding a new payment method is a day's work, not a sprint.",
    ],
    stackTags: ["Vue 3", "Vite", "Pinia", "SCSS", "REST", "Sentry"],
  },
  "jf-restoration": {
    name: "John Fowler Restoration",
    tagline: "Next.js · AWS · MUI",
    kicker: "Full-stack",
    title: "A furniture shop, and the tools to run it.",
    meta: {
      role: "Full-stack Dev",
      team: "Solo",
      year: "2025",
      stack: "Next.js, AWS, MUI",
      github: 'https://github.com/louis-fowler/jf-restoration',
    },
    brief:
      "Build a clean eCommerce site for a New Zealand furniture restorer — and give the client the tools to manage it themselves. No CMS licence, no database, no third-party lock-in.",
    approach:
      "Shipped a Next.js App Router storefront with ISR so pages stay fresh without a backend round-trip. The admin panel is a custom MUI interface gated by AWS Cognito — authenticated users write directly to S3, where a single items.json file is the source of truth for the entire catalogue. Images upload from the browser straight to S3 via Amplify Storage, with no server in the loop. Deployed on Vercel.",
    outcomes: [
      "A non-technical client can add, edit, and mark items as sold without any developer involvement.",
      "No database to provision or maintain — S3 JSON is more than enough for the catalogue.",
      "Zero ongoing CMS licence costs.",
      "Sub-second storefront loads with incremental static regeneration.",
    ],
    stackTags: ["Next.js", "React", "TypeScript", "AWS Cognito", "S3", "Amplify", "MUI", "Vercel"],
  },
  "vue-ui-framework": {
    name: "Vue UI Framework",
    tagline: "Internal CMS component library",
    kicker: "Tooling",
    title: "A component library the team actually uses.",
    meta: {
      role: "Senior FE Dev",
      team: "Blackpepper",
      year: "2023 — 2024",
      stack: "Vue, SCSS",
      github: null,
    },
    brief:
      "Design and build a reusable Vue component library for internal tools — consistent patterns, shared styling conventions, and baked-in accessibility standards.",
    approach:
      "Built the library from the ground up with Vue 3, SCSS, and a strict BEM naming convention. Created living documentation so the team could adopt components without hunting through source code.",
    outcomes: [
      "Measurably faster feature delivery — teams stopped rebuilding the same UI from scratch.",
      "Consistent look and feel across projects without per-project negotiations.",
      "Docs tight enough that a new dev could ship a feature on day one.",
    ],
    stackTags: ["Vue", "SCSS", "Vitepress"],
  },
  growthbook: {
    name: "GrowthBook A/B Testing",
    tagline: "GTM + BigQuery experiment logging",
    kicker: "Experimentation",
    title: "Data-driven UX, wired end to end.",
    meta: {
      role: "Lead",
      team: "Blackpepper",
      year: "2025",
      stack: "GrowthBook, GTM, BigQuery",
      github: null,
    },
    brief:
      "Integrate GrowthBook for A/B testing and feature flags, plus GTM and BigQuery for experiment metric logging — giving the product team real data on what actually moves the needle.",
    approach:
      "Wired GrowthBook into the Vue stack, used existing GTM triggers for experiment exposure and conversion events, and piped everything into BigQuery for analysis. Kept the instrumentation lightweight so engineers could add new experiments without touching the core setup.",
    outcomes: [
      "Enabled data-driven product and UX decisions across the platform.",
      "First live experiments shipped within two weeks of integration.",
      "Experiment logging reliable enough to trust the numbers.",
    ],
    stackTags: ["GrowthBook", "GTM", "BigQuery", "Vue"],
  },
};

export const caseStudies: Record<string, CaseStudy> = Object.fromEntries(
  Object.entries(raw).map(([slug, study], i) => {
    const num = String(i + 1).padStart(2, "0");
    return [slug, { ...study, num, kicker: `${num} · ${study.kicker}` }];
  })
);
