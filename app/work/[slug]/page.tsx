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
