import { notFound } from "next/navigation";
import { Link } from "next-view-transitions";
import ThemeToggle from "../../components/ThemeToggle";
import { BackLink } from "../../components/BackLink";

interface CaseStudy {
  kicker: string;
  title: string;
  meta: { role: string; team: string; year: string; stack: string };
  brief: string;
  approach: string;
  outcomes: string[];
  stackTags: string[];
  prev: string | null;
  next: string | null;
  num: string;
}

const caseStudies: Record<string, CaseStudy> = {
  "checkout-rebuild": {
    kicker: "01 · eCommerce",
    title: "Checkout, rebuilt from scratch.",
    meta: {
      role: "Senior FE Dev",
      team: "Blackpepper",
      year: "2023 — 2024",
      stack: "Vue 3, Vite",
    },
    brief:
      "Build a new B2C checkout flow from scratch for high-traffic eCommerce sites, optimised for performance, reliability, and mobile UX. Replace a legacy implementation that was slow, hard to extend, and bleeding conversions on mobile.",
    approach:
      "Designed and built the front-end in Vue 3 + Vite, with state in Pinia and SSR for first-paint speed. Worked closely with back-end and product teams to integrate four payment providers in parallel.",
    outcomes: [
      "Shipped across multiple merchants on a shared, universal codebase.",
      "Mobile-first interactions tuned to the realities of thumb-typing card numbers at 10pm.",
      "PayPal, Windcave, Google Pay and Apple Pay all live and stable.",
      "Foundations clean enough that adding a new payment method is a day's work, not a sprint.",
    ],
    stackTags: ["Vue 3", "Vite", "Pinia", "SSR", "SCSS", "REST", "Sentry"],
    prev: null,
    next: "vue-ui-framework",
    num: "01",
  },
  "vue-ui-framework": {
    kicker: "02 · Tooling",
    title: "A component library the team actually uses.",
    meta: {
      role: "Lead",
      team: "Blackpepper",
      year: "2022 — 2023",
      stack: "Vue, SCSS",
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
    stackTags: ["Vue", "SCSS", "a11y"],
    prev: "checkout-rebuild",
    next: "growthbook",
    num: "02",
  },
  growthbook: {
    kicker: "03 · Experimentation",
    title: "Data-driven UX, wired end to end.",
    meta: {
      role: "Senior FE Dev",
      team: "Blackpepper",
      year: "2023",
      stack: "GrowthBook, GTM, BigQuery",
    },
    brief:
      "Integrate GrowthBook for A/B testing and feature flags, plus GTM and BigQuery for experiment metric logging — giving the product team real data on what actually moves the needle.",
    approach:
      "Wired GrowthBook into the Vue SSR stack, set up GTM triggers for experiment exposure and conversion events, and piped everything into BigQuery for analysis. Kept the instrumentation lightweight so engineers could add new experiments without touching the core setup.",
    outcomes: [
      "Enabled data-driven product and UX decisions across the platform.",
      "First live experiments shipped within two weeks of integration.",
      "Experiment logging reliable enough to trust the numbers.",
    ],
    stackTags: ["GrowthBook", "GTM", "BigQuery", "Vue"],
    prev: "vue-ui-framework",
    next: null,
    num: "03",
  },
};

export function generateStaticParams() {
  return Object.keys(caseStudies).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = caseStudies[slug];
  if (!study) return {};
  return { title: `${study.title} — Louis Fowler` };
}

export default async function WorkPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = caseStudies[slug];
  if (!study) notFound();

  return (
    <main className="case-page">
      <header className="topbar">
        <BackLink href="/" className="back-link">
          <span>←</span> Back to portfolio
        </BackLink>
        <span>Case study / {study.num}</span>
        <ThemeToggle />
      </header>

      <section className="case-hero">
        <div>
          <div className="kicker">{study.kicker}</div>
          <h1>{study.title}</h1>
        </div>
        <div className="case-meta-block">
          <div>
            <span className="lbl">ROLE</span>
            {study.meta.role}
          </div>
          <div>
            <span className="lbl">TEAM</span>
            {study.meta.team}
          </div>
          <div>
            <span className="lbl">YEAR</span>
            {study.meta.year}
          </div>
          <div>
            <span className="lbl">STACK</span>
            {study.meta.stack}
          </div>
        </div>
      </section>

      <section className="case-body">
        <div className="case-gallery">
          <div className="frame" />
          <div className="frame" />
        </div>

        <div className="case-content">
          <section>
            <h2>01 — Brief</h2>
            <p>{study.brief}</p>
          </section>

          <section>
            <h2>02 — Approach</h2>
            <p>{study.approach}</p>
          </section>

          <section>
            <h2>03 — Outcomes</h2>
            <ul className="bullets">
              {study.outcomes.map((o) => (
                <li key={o}>{o}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2>04 — Stack</h2>
            <div className="tags">
              {study.stackTags.map((t) => (
                <span key={t} className="tag">
                  {t}
                </span>
              ))}
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
