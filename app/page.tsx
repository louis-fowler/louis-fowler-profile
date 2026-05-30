import { Link } from "next-view-transitions";
import ThemeToggle from "./components/ThemeToggle";
import { caseStudies } from "./data/caseStudies";

const coreSkills = [
  "Vue 2/3",
  "Vuex / Pinia",
  "Vite",
  "JS ES6+",
  "SCSS",
  "REST",
  "Vitest",
  "SSR",
  "GitHub Actions",
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
            Senior front-end developer &amp; people lead. Six years building high-traffic web products, mentoring devs, and shipping fast.
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
            href="https://github.com/louis-fowler"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/louis-fowler →
          </a>
          <a
            className="link"
            href="https://www.linkedin.com/in/louis-fowler-9046aa195/"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/louis-fowler →
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
          <div className="meta meta-accent">04 — Selected Work</div>
          <div className="work">
            {Object.entries(caseStudies).map(([slug, study]) => (
              <Link key={slug} className="work-row" href={`/work/${slug}`}>
                <span className="num">{study.num}</span>
                <div>
                  <div className="title">{study.name}</div>
                  <div className="desc">{study.tagline}</div>
                </div>
                <span className="arrow">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <footer className="colophon">
        <div className="built-row">
          <a href="https://github.com/louis-fowler/louis-fowler-profile" target="_blank" rel="noopener noreferrer" className="github-link">
            <svg height="18" viewBox="0 0 16 16" width="18" aria-hidden="true" fill="currentColor">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
            </svg>
            <span className="sr-only">GitHub</span>
          </a>
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
      </footer>
    </main>
  );
}
