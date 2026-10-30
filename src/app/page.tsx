import Link from "next/link";
import { SiteHeader } from "@/components/portfolio";
import { Icon } from "@/components/ui";
import { LinkPreferenciasCookies } from "@/components/cookie-consent";
import { contact, profile } from "@/content/profile";
import { engineeringSystems, featuredCaseStudies } from "@/content/projects";
import { homepage, portfolioLabels, projectLinkLabels, siteMetadata } from "@/content/site";

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
        url: `${siteMetadata.siteUrl}/og-image.svg`,
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
  const featured = featuredCaseStudies.filter((p) => p.status !== "draft");
  const systems = engineeringSystems.filter((p) => p.status === "ready");

  return (
    <>
      <a className="skip-link" href="#contenido">{portfolioLabels.skip}</a>
      <SiteHeader />
      <main id="contenido" tabIndex={-1} className="page-container">

        {/* Hero */}
        <section aria-labelledby="hero-title" className="mb-[4rem]">
          <h1 id="hero-title" className="text-display">{profile.name}</h1>
          <p className="mt-[1rem] max-w-measure text-body">{profile.introduction.text}</p>
          <div className="mt-[2rem]">
            <a className="button" href="#contacto">Contactar<Icon name="arrow" /></a>
          </div>
        </section>

        {/* Casos de estudio */}
        <section id="proyectos" aria-labelledby="casos-title" className="portfolio-section mb-[4rem]">
          <h2 id="casos-title" className="portfolio-heading">Casos de estudio</h2>
          {featured.map((project) => (
            <article key={project.id} id={project.id} className="py-[2rem] border-b border-border last:border-b-0">
              <h3 className="text-heading">{project.name}</h3>
              <p className="mt-[0.5rem] max-w-measure text-body">{project.summary?.text ?? ""}</p>
              <div style={{ fontFamily: "var(--font-mono)", marginTop: "1rem" }}>
                {project.stack.map((t) => (
                  <span key={t.name} className="inline-block mr-[0.75rem] mb-[0.5rem] px-[0.5rem] py-[0.2rem] border border-control rounded-control text-label" style={{ fontSize: "0.875rem" }}>
                    {t.name}
                  </span>
                ))}
              </div>
              <div className="mt-[1.5rem]">
                <Link className="text-link" href={`/proyectos/${project.id}`}>
                  {project.id === "hangar" ? "Leer el caso de Hangar" : "Leer el caso de TaskFlow Pro"}<Icon name="arrow" />
                </Link>
              </div>
            </article>
          ))}
        </section>

        {/* Sistemas secundarios (lista compacta) */}
        <section id="sistemas-backend" aria-labelledby="sistemas-title" className="mb-[4rem]">
          <h2 id="sistemas-title" className="portfolio-heading">Ingeniería y sistemas backend</h2>
          <p className="max-w-measure text-body text-muted mb-[2rem]">Sistemas autodirigidos con enfoque en backend, seguridad y arquitectura.</p>
          <ul className="space-y-[1rem] border-t border-border pt-[1.5rem]">
            {systems.map((project) => (
              <li key={project.id} id={project.id} className="py-[1rem] border-b border-border last:border-b-0">
                <div className="flex flex-wrap items-baseline gap-[1rem]">
                  <h4 className="text-title font-semibold">{project.name}</h4>
                  <p className="text-label text-muted">{project.engineeringFocus?.text ?? project.summary?.text ?? ""}</p>
                </div>
                <div style={{ fontFamily: "var(--font-mono)", marginTop: "0.5rem" }}>
                  {project.stack.map((t) => (
                    <span key={t.name} className="inline-block mr-[0.75rem] mb-[0.5rem] px-[0.5rem] py-[0.2rem] border border-control rounded-control text-label" style={{ fontSize: "0.875rem" }}>
                      {t.name}
                    </span>
                  ))}
                </div>
                {project.repository && (
                  <div className="mt-[0.75rem]">
                    <a className="text-link" href={project.repository.href}>{projectLinkLabels.repository}<Icon name="external" /></a>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </section>

        {/* Contacto */}
        <section id="contacto" aria-labelledby="contacto-title" className="contact-surface py-section">
          <div className="page-container grid gap-[1.5rem] md:grid-cols-12 md:gap-gutter">
            <div className="md:col-span-6">
              <h2 id="contacto-title" className="text-heading">Contacto</h2>
              <p className="mt-[0.5rem] max-w-measure text-on-accent">{homepage.contact.invitation}</p>
              {contact.email && <>
                <a className="button button-secondary mt-[1rem]" href={contact.email.href}>{portfolioLabels.emailAction}<Icon name="arrow" /></a>
                <p className="mt-[1rem] text-on-accent text-label">{contact.email.label}</p>
              </>}
            </div>
            <div className="md:col-span-5 md:col-start-7">
              <p className="text-on-accent text-label">{portfolioLabels.profiles}</p>
              <ul className="mt-[0.5rem] flex flex-wrap gap-x-[1rem] gap-y-[0.5rem]">
                {contact.professionalLinks.map((link) => (
                  <li key={link.href}><a className="inverse-link" href={link.href}>{link.label}<Icon name="external" /></a></li>
                ))}
              </ul>
            </div>
          </div>
        </section>

      </main>
      <footer className="page-container flex flex-wrap items-center justify-between gap-x-[1rem] gap-y-[1rem] py-[1.5rem] border-t border-border">
        <div><p className="text-label font-semibold">{profile.name}</p><p className="mt-[0.25rem] text-label text-muted">{portfolioLabels.footer}</p></div>
        <div className="flex flex-wrap items-center gap-x-[1rem] gap-y-[0.5rem]">
          <LinkPreferenciasCookies />
          <a className="text-link text-label" href="#inicio">{portfolioLabels.backToTop}</a>
        </div>
      </footer>
    </>
  );
}
