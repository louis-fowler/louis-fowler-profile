import ThemeToggle from "./components/ThemeToggle";

const coreSkills = [
  "Vue 2/3",
  "Vuex / Pinia",
  "Vite",
  "JS ES6+",
  "SCSS",
  "REST",
  "Vitest",
  "SSR",
  "Git Actions",
  "Sentry",
  "Claude Code",
];

const exposureSkills = ["React", "TypeScript", "Next.js", "Jest", "Cypress"];

export default function Home() {
  return (
    <main className="page">
      <header className="topbar">
        <span>LF — Portfolio / 001</span>
        <span>Auckland, NZ — UTC+12</span>
        <span>
          <span className="dot" />
          Available 2026
        </span>
        <ThemeToggle />
      </header>

      <section className="hero">
        <h1>
          Louis
          <br />
          Fowler.
        </h1>
        <div className="hero-foot">
          <p className="lede">
            Senior front-end developer &amp; people lead. Five years building
            high-traffic eCommerce, mentoring devs, and shipping fast.
          </p>
          <div className="role">
            <div>SR. FRONT-END DEV</div>
            <div>FRONT-END PEOPLE LEAD</div>
            <div className="sep">—</div>
            <div>BLACKPEPPER INTERACTIVE</div>
            <div>2020 — PRESENT</div>
          </div>
        </div>
      </section>

      <section className="grid">
        <div className="cell">
          <div className="meta">01 — Contact</div>
          <a className="link" href="mailto:louis.fowler@gmail.com">
            louis.fowler@gmail.com
          </a>
          <a className="link" href="tel:+64210903800">
            +64 21 090 3800
          </a>
          <a
            className="link"
            href="https://github.com/louisfowler"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/louisfowler →
          </a>
          <a
            className="link"
            href="https://linkedin.com/in/louisfowler"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/louisfowler →
          </a>
        </div>

        <div className="cell">
          <div className="meta">02 — Core Stack</div>
          <div className="tags">
            {coreSkills.map((s) => (
              <span key={s} className="tag">
                {s}
              </span>
            ))}
          </div>
        </div>

        <div className="cell">
          <div className="meta">03 — Exposure</div>
          <div className="tags">
            {exposureSkills.map((s) => (
              <span key={s} className="tag outline">
                {s}
              </span>
            ))}
          </div>
        </div>

        <div className="cell">
          <div className="meta">04 — Selected Work</div>
          <div className="work">
            <div className="title">eCommerce Checkout Rebuild</div>
            <div className="desc">PayPal · Windcave · Apple/Google Pay</div>
            <div className="title">Vue UI Framework</div>
            <div className="desc">Internal CMS component library</div>
            <div className="title">GrowthBook A/B Testing</div>
            <div className="desc">GTM + BigQuery experiment logging</div>
          </div>
        </div>
      </section>

      {/* <footer className="colophon">
        <div className="built-row">
          <span className="built-label">Built with</span>
          <span className="tag">Next.js</span>
          <span className="tag">TypeScript</span>
          <span className="tag">Claude Design</span>
          <span className="tag">GitHub Actions</span>
          <span className="tag">S3</span>
          <span className="tag">CloudFront</span>
        </div>
        <p className="quip">
          A CV, basically. <em>Treated like a product.</em>
        </p>
      </footer> */}
    </main>
  );
}
