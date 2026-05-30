import fs from "fs";
import path from "path";
import Image from "next/image";
import { notFound } from "next/navigation";
import ThemeToggle from "../../components/ThemeToggle";
import { BackLink } from "../../components/BackLink";
import { caseStudies } from "../../data/caseStudies";

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

  const imagesDir = path.join(process.cwd(), "public/caseStudyImages", slug);
  const images = fs.existsSync(imagesDir)
    ? fs.readdirSync(imagesDir).filter((f) => /\.(png|jpe?g|webp)$/i.test(f))
    : [];

  return (
    <main className="case-page">
      <header className="topbar">
        <BackLink href="/" className="back-link">
          <span>←</span><span>Back to portfolio</span>
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
          {study.meta.github && (
            <div>
              <a href={study.meta.github} target="_blank" rel="noopener noreferrer" className="github-link">
                <svg height="18" viewBox="0 0 16 16" width="18" aria-hidden="true" fill="currentColor">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
                </svg>
                <span className="sr-only">GitHub</span>
              </a>
            </div>
          )}
        </div>
      </section>

      <section className="case-body">
        {images.length > 0 && (
          <div className="case-gallery">
            {images.map((img, i) => (
              <div className="frame" key={img}>
                <Image
                  src={`/caseStudyImages/${slug}/${img}`}
                  alt=""
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", height: "auto" }}
                  priority={i === 0}
                />
              </div>
            ))}
          </div>
        )}

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
