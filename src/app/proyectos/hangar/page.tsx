import Link from "next/link";
import type { ReactNode } from "react";
import { SiteHeader } from "@/components/portfolio";
import { FlowDiagram, IsolationDiagram } from "@/components/hangar-diagrams";
import { PipelineReveal } from "@/components/pipeline-reveal";
import { Icon } from "@/components/ui";
import { hangarCaseStudy as content, hangarSources } from "@/content/hangar-case-study";
import { hangar } from "@/content/projects";
import { profile } from "@/content/profile";
import { portfolioLabels, siteMetadata } from "@/content/site";

export const metadata = {
  title: `Hangar · Caso de estudio · ${profile.name}`,
  description: content.introduction,
  alternates: {
    canonical: `${siteMetadata.siteUrl}/proyectos/hangar`,
  },
  openGraph: {
    title: `Hangar · Caso de estudio · ${profile.name}`,
    description: content.introduction,
    type: "website",
    url: `${siteMetadata.siteUrl}/proyectos/hangar`,
    images: [
      {
        url: `${siteMetadata.siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: `Caso de estudio: Hangar`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Hangar · Caso de estudio · ${profile.name}`,
    description: content.introduction,
    images: [`${siteMetadata.siteUrl}/og-image.png`],
  },
} as const;

function CaseSection({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return <section id={id} aria-labelledby={`${id}-title`} className="portfolio-section">
    <h2 id={`${id}-title`} className="max-w-measure text-heading">{title}</h2>
    <div className="mt-6">{children}</div>
  </section>;
}

function SourceLinks({ sources }: { sources: readonly { label: string; source: string }[] }) {
  return <div className="mt-4 flex flex-wrap gap-x-6 gap-y-1 text-label">
    {sources.map((source) => <a key={source.source} className="text-link" href={source.source}>
      <span className="sr-only">{content.sources.label}: </span>{source.label}<Icon name="external" />
    </a>)}
  </div>;
}

function Configuration({ items }: { items: readonly { label: string; value: string }[] }) {
  return <dl className="mt-4 divide-y divide-border border-y border-border">
    {items.map((item) => <div key={item.label} className="flex flex-wrap justify-between gap-x-6 gap-y-1 py-3">
      <dt className="text-muted">{item.label}</dt>
      <dd className="font-mono tabular-nums">{item.value}</dd>
    </div>)}
  </dl>;
}

export default function HangarCaseStudy() {
  return <>
    <a className="skip-link" href="#contenido">{portfolioLabels.skip}</a>
    <SiteHeader homeLinks />
    <main id="contenido" tabIndex={-1} className="page-container">
      <Link href="/#proyectos" className="text-link mt-6 text-label">{content.back}</Link>
      <header className="py-8 lg:py-12">
        <div className="grid gap-6 md:grid-cols-12 md:gap-gutter">
          <div className="md:col-span-4">
            <h1 className="text-display">{content.title}</h1>
            <p className="mt-3 text-label text-muted">{content.kind}</p>
          </div>
          <div className="md:col-span-8 lg:col-span-7 lg:col-start-6">
            <p className="max-w-measure text-heading text-balance">{content.subtitle}</p>
            <p className="mt-4 max-w-measure text-muted">{content.introduction}</p>
            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
              {hangar.repository && <a className="button" href={hangar.repository.href}>{content.repositoryLabel}<Icon name="external" /></a>}
              {hangar.demo ? <a className="text-link" href={hangar.demo.href}>{hangar.demo.label}<Icon name="external" /></a> : <p className="text-label text-muted">{content.demoUnavailable}</p>}
            </div>
          </div>
        </div>
        <figure aria-labelledby="pipeline-title" className="mt-8 border-y border-border bg-surface-muted px-4 py-6 md:mt-12 md:px-6">
          <figcaption id="pipeline-title" className="mb-6 text-title font-medium">{content.pipeline.title}</figcaption>
          <PipelineReveal>
            <FlowDiagram label={content.pipeline.title} nodes={content.pipeline.steps} code />
          </PipelineReveal>
          <p className="mt-6 max-w-measure text-label text-muted">{content.pipeline.caption}</p>
        </figure>
      </header>
      <div className="grid lg:grid-cols-12 lg:gap-gutter">
        <aside className="border-t border-border py-6 lg:col-span-3 lg:py-section">
          <nav aria-label={content.contentsLabel} className="case-index">
            <p className="mb-3 font-medium">{content.contentsLabel}</p>
            <ul className="flex flex-wrap gap-x-4 lg:block">
              {content.navigation.map((item) => <li key={item.id}><a className="text-link text-label" href={`#${item.id}`}>{item.label}</a></li>)}
            </ul>
          </nav>
        </aside>
        <div className="min-w-0 lg:col-span-9">
          <CaseSection id="problema" title={content.problem.title}>
            <p className="case-copy">{content.problem.text}</p>
            <p className="case-copy mt-4">{content.problem.objective}</p>
            {hangar.contribution && <div className="mt-8 border-t border-border pt-6">
              <h3 className="text-title">{content.problem.contributionTitle}</h3>
              <p className="case-copy mt-3">{hangar.contribution.text}</p>
            </div>}
            <SourceLinks sources={content.problem.evidence} />
          </CaseSection>
          <CaseSection id="arquitectura" title={content.architecture.title}>
            <p className="case-copy">{content.architecture.text}</p>
            <figure aria-labelledby="architecture-diagram-title" className="case-diagram">
              <figcaption id="architecture-diagram-title" className="mb-6 font-medium">{content.architecture.controlTitle}</figcaption>
              <FlowDiagram label={content.architecture.controlTitle} nodes={content.architecture.control} />
              <h3 className="mt-8 mb-6 font-medium">{content.architecture.routingTitle}</h3>
              <FlowDiagram label={content.architecture.routingTitle} nodes={content.architecture.routing} />
              <p className="mt-6 max-w-measure text-label text-muted">{content.architecture.caption}</p>
            </figure>
            <h3 className="mt-6 text-title">{content.architecture.persistenceTitle}</h3>
            <p className="case-copy mt-3">{content.architecture.persistence}</p>
            <SourceLinks sources={content.architecture.evidence} />
          </CaseSection>
          <CaseSection id="workflow" title={content.workflow.title}>
            <p className="case-copy">{content.workflow.text}</p>
            <div className="case-diagram"><FlowDiagram label={content.workflow.statesLabel} nodes={content.workflow.states} code /></div>
            <h3 className="mt-8 text-title">{content.workflow.configurationTitle}</h3>
            <Configuration items={content.workflow.configuration} />
            <p className="mt-3 text-label text-muted">{content.workflow.configurationNote}</p>
            <h3 className="mt-8 text-title">{content.workflow.limitTitle}</h3>
            <p className="case-copy mt-3">{content.workflow.limit}</p>
            <SourceLinks sources={content.workflow.evidence} />
          </CaseSection>
          <CaseSection id="aislamiento" title={content.isolation.title}>
            <p className="case-copy">{content.isolation.text}</p>
            <div className="mt-8 grid items-start gap-8 md:grid-cols-2">
              <IsolationDiagram />
              <div><h3 className="text-title">{content.isolation.resourcesTitle}</h3>
                <Configuration items={content.isolation.resources} />
                <p className="mt-3 text-label text-muted">{content.isolation.resourcesNote}</p>
              </div>
            </div>
            <div className="mt-8 bg-surface-muted p-6">
              <h3 className="text-title">{content.isolation.limitTitle}</h3>
              <p className="case-copy mt-3">{content.isolation.limit}</p>
            </div>
            <SourceLinks sources={content.isolation.evidence} />
          </CaseSection>
          <CaseSection id="logs" title={content.logs.title}>
            <p className="case-copy">{content.logs.text}</p>
            <figure aria-labelledby="logs-diagram-title" className="case-diagram">
              <figcaption id="logs-diagram-title" className="mb-6 font-medium">{content.logs.liveTitle}</figcaption>
              <FlowDiagram label={content.logs.liveTitle} nodes={content.logs.live} />
              <h3 className="mt-8 mb-6 font-medium">{content.logs.historyTitle}</h3>
              <FlowDiagram label={content.logs.historyTitle} nodes={content.logs.history} />
              <p className="mt-6 max-w-measure text-label text-muted">{content.logs.caption}</p>
            </figure>
            <h3 className="mt-8 text-title">{content.logs.limitTitle}</h3>
            <p className="case-copy mt-3">{content.logs.limit}</p>
            <SourceLinks sources={content.logs.evidence} />
          </CaseSection>
          <CaseSection id="decisiones" title={content.decisions.title}>
            <div className="divide-y divide-border">
              {content.decisions.items.map((item) => <article key={item.title} className="py-6 first:pt-0 last:pb-0">
                <h3 className="text-title">{item.title}</h3>
                <dl className="mt-4 grid gap-4 md:grid-cols-2 md:gap-gutter">
                  <div><dt className="font-medium">{content.decisions.rationaleLabel}</dt><dd className="mt-2 text-muted">{item.reason}</dd></div>
                  <div><dt className="font-medium">{content.decisions.tradeoffLabel}</dt><dd className="mt-2 text-muted">{item.tradeoff}</dd></div>
                </dl>
              </article>)}
            </div>
            <SourceLinks sources={[hangarSources.decision, hangarSources.activities, hangarSources.websocket]} />
          </CaseSection>
          <CaseSection id="testing" title={content.testing.title}>
            <p className="case-copy">{content.testing.text}</p>
            <dl className="mt-6 divide-y divide-border border-y border-border">
              {content.testing.checks.map((check) => <div key={check.title} className="grid gap-2 py-4 md:grid-cols-3 md:gap-gutter">
                <dt className="font-medium">{check.title}</dt><dd className="text-muted md:col-span-2">{check.detail}</dd>
              </div>)}
            </dl>
            <p className="mt-6 font-medium">{content.testing.status}</p>
            <p className="case-copy mt-3">{content.testing.result}</p>
            <SourceLinks sources={content.testing.evidence} />
          </CaseSection>
          <CaseSection id="fuentes" title={content.sources.title}>
            <p className="case-copy">{content.sources.description}</p>
            <details className="project-details">
              <summary>{content.sources.toggle}</summary>
              <ul className="pb-4">{Object.values(hangarSources).map((source) => <li key={source.source}><a className="text-link" href={source.source}>{source.label}<Icon name="external" /></a></li>)}</ul>
            </details>
          </CaseSection>
        </div>
      </div>
    </main>
    <footer className="contact-surface py-section">
      <div className="page-container grid gap-6 md:grid-cols-12 md:gap-gutter">
        <div className="md:col-span-8"><h2 className="max-w-measure text-heading">{content.closing.title}</h2><p className="mt-4 max-w-measure">{content.closing.text}</p></div>
        <div className="flex flex-wrap items-start gap-x-6 md:col-span-4 md:justify-end"><Link className="inverse-link" href="/#contacto">{content.closing.action}<Icon name="arrow" /></Link><Link className="inverse-link" href="/#proyectos">{content.back}</Link></div>
      </div>
    </footer>
  </>;
}
