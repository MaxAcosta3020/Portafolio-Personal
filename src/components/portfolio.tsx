import Link from "next/link";
import { Icon } from "@/components/ui";
import { navigation, portfolioLabels, projectLinkLabels } from "@/content/site";
import { resume } from "@/content/profile";
import { hangarCaseStudy } from "@/content/hangar-case-study";
import { taskFlowCaseStudy } from "@/content/taskflow-case-study";
import type { EngineeringSystem, FeaturedCaseStudy, Project } from "@/content/types";

export function SiteHeader({ homeLinks = false }: { homeLinks?: boolean }) {
  return (
    <header id="inicio" className="border-b border-border">
      <div className="page-container flex flex-wrap items-center justify-between gap-x-8 gap-y-2 py-4 md:py-6">
        <a href={navigation.brand.href} className="inline-flex min-h-target items-center font-medium">
          {navigation.brand.label}
        </a>
        <nav aria-label={portfolioLabels.navigation} className="flex flex-wrap items-center gap-1">
          {navigation.items.map((item) => (
            <a key={item.sectionId} href={`${homeLinks ? "/" : ""}#${item.sectionId}`} className="portfolio-nav-link">{item.label}</a>
          ))}
          {resume.file && <a className="text-link px-3" href={resume.file.href} download>{resume.label}</a>}
        </nav>
      </div>
    </header>
  );
}

function ProjectLinks({ project }: { project: Project }) {
  const links = [
    { link: project.repository, label: projectLinkLabels.repository },
    { link: project.demo, label: projectLinkLabels.demo },
  ].filter(({ link }) => link !== null);
  if (!links.length) return null;
  return <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
    {links.map(({ link, label }) => link && <a key={link.href} className="text-link" href={link.href}>{label}<Icon name="external" /></a>)}
  </div>;
}

export function FeaturedProject({ project }: { project: FeaturedCaseStudy }) {
  return (
    <article id={project.id} aria-labelledby={`${project.id}-title`} className="grid gap-6 border-t border-border py-8 md:grid-cols-12 md:gap-gutter lg:py-12">
      <div className="md:col-span-4">
        <h3 id={`${project.id}-title`} className="text-heading">{project.name}</h3>
        <ul aria-label={`${portfolioLabels.stack} de ${project.name}`} className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-label text-muted">
          {project.stack.map((technology) => <li key={technology.name}>{technology.name}</li>)}
        </ul>
      </div>
      <div className="min-w-0 md:col-span-8 lg:col-span-7 lg:col-start-6">
        {project.summary && <p className="max-w-measure text-title">{project.summary.text}</p>}
        {project.contribution && <div className="mt-6">
          <h4 className="font-medium">{portfolioLabels.contribution}</h4>
          <p className="mt-2 max-w-measure text-muted">{project.contribution.text}</p>
        </div>}
        {project.architecture && <details className="project-details">
          <summary>{portfolioLabels.technicalDetails}<span className="sr-only"> de {project.name}</span></summary>
          <div className="space-y-6 pt-2 pb-4">
            <div>
              <h4 className="font-medium">{portfolioLabels.architecture}</h4>
              <p className="mt-2 text-muted">{project.architecture.text}</p>
            </div>
            <dl className="space-y-4">
              {project.stack.map((technology) => <div key={technology.name}>
                <dt className="font-medium">{technology.name}</dt>
                <dd className="mt-1 text-muted">{technology.usage}</dd>
              </div>)}
            </dl>
          </div>
        </details>}
        <ProjectLinks project={project} />
        {project.id === "hangar" && <Link className="text-link mt-4" href={hangarCaseStudy.href}>{hangarCaseStudy.read}<Icon name="arrow" /></Link>}
        {project.id === "taskflow-pro" && <Link className="text-link mt-4" href={taskFlowCaseStudy.href}>{taskFlowCaseStudy.read}<Icon name="arrow" /></Link>}
      </div>
    </article>
  );
}

export function EngineeringSystems({ systems }: { systems: readonly EngineeringSystem[] }) {
  return <ul className="border-t border-border">
    {systems.map((project) => <li key={project.id} id={project.id} className="grid gap-3 border-b border-border py-6 md:grid-cols-12 md:gap-gutter">
      <h4 className="text-title md:col-span-3">{project.name}</h4>
      <div className="min-w-0 md:col-span-6">
        {project.summary && <p className="max-w-measure text-muted">{project.summary.text}</p>}
        <ProjectLinks project={project} />
      </div>
      <ul aria-label={`${portfolioLabels.stack} de ${project.name}`} className="space-y-1 text-label text-muted md:col-span-3">
        {project.stack.map((technology) => <li key={technology.name}>{technology.name}</li>)}
      </ul>
    </li>)}
  </ul>;
}
