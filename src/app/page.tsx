import Link from "next/link";
import { SiteHeader, FeaturedProject, EngineeringSystems } from "@/components/portfolio";
import { Icon } from "@/components/ui";
import { contact, experience, profile, resume } from "@/content/profile";
import { engineeringSystems, featuredCaseStudies } from "@/content/projects";
import { hangarFlow, homepage, portfolioLabels, siteMetadata } from "@/content/site";
import { hangarCaseStudy } from "@/content/hangar-case-study";

export const metadata = {
  title: `${profile.name} · ${profile.role}`,
  description: profile.introduction.text,
  alternates: {
    canonical: `${siteMetadata.siteUrl}/`,
  },
  openGraph: {
    title: `${profile.name} · ${profile.role}`,
    description: profile.introduction.text,
    type: "website",
    url: `${siteMetadata.siteUrl}/`,
    images: [
      {
        url: `${siteMetadata.siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: `${profile.name} · Portafolio`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} · ${profile.role}`,
    description: profile.introduction.text,
    images: [`${siteMetadata.siteUrl}/og-image.png`],
  },
} as const;

export default function Home() {
  const featured = homepage.projects.featured.projectIds.flatMap((id) =>
    featuredCaseStudies.filter((project) => project.id === id && project.status !== "draft"));
  const systems = homepage.projects.engineering.projectIds.flatMap((id) =>
    engineeringSystems.filter((project) => project.id === id && project.status === "ready"));

  return (
    <>
      <a className="skip-link" href="#contenido">{portfolioLabels.skip}</a>
      <SiteHeader />
      <main id="contenido" tabIndex={-1}>
        <section aria-labelledby="presentacion-title" className="page-container grid items-center gap-8 py-section md:grid-cols-12 md:gap-gutter">
          <div className="min-w-0 md:col-span-7 lg:col-span-6">
            <h1 id="presentacion-title" className="text-display">{homepage.hero.headline}</h1>
            <p className="mt-6 max-w-measure text-muted">{homepage.hero.introduction.text}</p>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
              <a className="button" href={`#${homepage.hero.primaryAction.sectionId}`}>{homepage.hero.primaryAction.label}<Icon name="arrow" /></a>
              <a className="text-link" href={`#${homepage.hero.secondaryAction.sectionId}`}>{homepage.hero.secondaryAction.label}</a>
            </div>
          </div>
          <figure className="border-y border-border bg-surface-muted p-6 md:col-span-5 lg:col-start-8">
            <figcaption className="text-title font-medium">{hangarFlow.title}</figcaption>
            <p className="mt-1 text-label text-muted">{hangarFlow.caption}</p>
            <ol className="my-6 divide-y divide-border border-y border-border">
              {hangarFlow.steps.map((step, index) => <li key={step.code} className="flex items-center justify-between gap-3 py-3">
                <div className="flex items-center gap-3">
                  <span aria-hidden="true" className="font-mono text-label tabular-nums text-muted">{String(index + 1).padStart(2, "0")}</span>
                  <code className="text-label text-accent">{step.code}</code>
                </div>
                <span className="text-label text-muted">{step.label}</span>
              </li>)}
            </ol>
            <p className="text-label text-muted">{hangarFlow.description.text}</p>
            <Link className="text-link mt-3 text-label" href={hangarCaseStudy.href}>{hangarFlow.action}<Icon name="arrow" /></Link>
          </figure>
        </section>

        <section id={homepage.projects.id} aria-labelledby="proyectos-title" className="portfolio-section bg-surface">
          <div className="page-container">
            <div className="mb-8 grid gap-4 md:grid-cols-12 md:gap-gutter">
              <h2 id="proyectos-title" className="text-heading md:col-span-4">{homepage.projects.title}</h2>
              <p className="max-w-measure text-muted md:col-span-8 lg:col-span-7 lg:col-start-6">{homepage.projects.introduction}</p>
            </div>
            <div id={homepage.projects.featured.id}>
              {featured.map((project) => <FeaturedProject key={project.id} project={project} />)}
            </div>
            <section id={homepage.projects.engineering.id} aria-labelledby="sistemas-title" className="mt-8 lg:mt-12">
              <h3 id="sistemas-title" className="portfolio-heading">{homepage.projects.engineering.title}</h3>
              <EngineeringSystems systems={systems} />
            </section>
          </div>
        </section>

        <section id={homepage.about.id} aria-labelledby="sobre-mi-title" className="portfolio-section">
          <div className="page-container grid gap-8 lg:grid-cols-12 lg:gap-gutter">
            <div className="lg:col-span-5">
              <h2 id="sobre-mi-title" className="portfolio-heading">{homepage.about.title}</h2>
              <div className="space-y-4 text-muted">
                {profile.about.paragraphs.map((paragraph) => <p key={paragraph.text} className="max-w-measure">{paragraph.text}</p>)}
              </div>
            </div>
            <div className="min-w-0 lg:col-span-6 lg:col-start-7">
              <h3 className="mb-6 text-title">{homepage.education.title}</h3>
              <dl className="space-y-6">
                <div>
                  <dt className="font-medium">{profile.education.program}</dt>
                  <dd className="mt-1 text-muted">{profile.education.institution}</dd>
                  <dd className="mt-2 text-label text-muted">{profile.education.status} · {profile.education.dates}</dd>
                </div>
                <div>
                  <dt className="font-medium">{profile.priorEducation.qualification}</dt>
                  <dd className="mt-1 text-muted">{profile.priorEducation.institution}</dd>
                  <dd className="mt-2 text-label text-muted">{profile.priorEducation.year}</dd>
                </div>
              </dl>
              {resume.file && <a className="text-link mt-6" href={resume.file.href} download>{resume.label}<Icon name="arrow" /></a>}
            </div>
          </div>
          <section id={homepage.experience.id} aria-labelledby="experiencia-title" className="page-container mt-section">
            <h3 id="experiencia-title" className="portfolio-heading">{homepage.experience.title}</h3>
            {experience.filter((item) => item.status === "ready").map((item) => <article key={item.organization} className="grid gap-4 border-t border-border pt-6 md:grid-cols-12 md:gap-gutter">
              <div className="md:col-span-4 lg:col-span-5">
                <h4 className="text-title font-medium">{item.organization}</h4>
                <p className="mt-2 text-label text-muted">{item.dates}</p>
              </div>
              <div className="md:col-span-8 lg:col-span-6 lg:col-start-7">
                <p className="font-medium">{item.role}</p>
                {item.description && <p className="mt-3 max-w-measure text-muted">{item.description.text}</p>}
              </div>
            </article>)}
          </section>
        </section>

        <section id={homepage.skills.id} aria-labelledby="tecnologias-title" className="portfolio-section">
          <div className="page-container grid gap-8 lg:grid-cols-12 lg:gap-gutter">
            <div className="lg:col-span-4">
              <h2 id="tecnologias-title" className="portfolio-heading">{homepage.skills.title}</h2>
              <p className="max-w-measure text-muted">{homepage.skills.introduction}</p>
            </div>
            <dl className="min-w-0 divide-y divide-border border-y border-border lg:col-span-7 lg:col-start-6">
              {profile.technicalBackground.groups.map((group) => <div key={group.label} className="grid gap-2 py-5 md:grid-cols-3 md:gap-gutter">
                <dt className="font-medium">{group.label}</dt>
                <dd className="text-muted md:col-span-2">{group.items.join(" · ")}</dd>
              </div>)}
            </dl>
          </div>
        </section>

        <section id={homepage.contact.id} aria-labelledby="contacto-title" className="contact-surface py-section">
          <div className="page-container grid gap-8 md:grid-cols-12 md:gap-gutter">
            <div className="md:col-span-6">
              <h2 id="contacto-title" className="mb-4 text-heading">{homepage.contact.title}</h2>
              <p className="max-w-measure text-title">{homepage.contact.invitation}</p>
            </div>
            <div className="min-w-0 md:col-span-5 md:col-start-8">
              {contact.email && <>
                <a className="button button-secondary" href={contact.email.href}>{portfolioLabels.emailAction}<Icon name="arrow" /></a>
                <p className="mt-3 break-words text-label">{contact.email.label}</p>
              </>}
              <p className="mt-6 text-label">{portfolioLabels.profiles}</p>
              <ul className="mt-1 flex flex-wrap gap-x-6 gap-y-2">
                {contact.professionalLinks.map((link) => <li key={link.href}><a className="inverse-link" href={link.href}>{link.label}<Icon name="external" /></a></li>)}
              </ul>
            </div>
          </div>
        </section>
      </main>
      <footer className="page-container flex flex-wrap items-center justify-between gap-x-8 gap-y-4 py-6">
        <div><p className="text-label font-medium">{profile.name}</p><p className="mt-1 text-label text-muted">{portfolioLabels.footer}</p></div>
        <a className="text-link text-label" href="#inicio">{portfolioLabels.backToTop}</a>
      </footer>
    </>
  );
}
