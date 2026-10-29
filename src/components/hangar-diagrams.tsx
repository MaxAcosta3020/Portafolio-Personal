import { Icon } from "@/components/ui";
import { hangarCaseStudy as content, type FlowNode } from "@/content/hangar-case-study";

/** DOM order is the flow order, including when the layout stacks on small screens. */
export function FlowDiagram({ nodes, label, code = false }: { nodes: readonly FlowNode[]; label: string; code?: boolean }) {
  return (
    <ol aria-label={label} className="case-flow">
      {nodes.map((node, index) => <li key={node.title} className="case-flow-step">
        <div className="min-w-0 flex-1">
          <p className={code ? "font-mono text-title text-accent" : "font-medium"}>{node.title}</p>
          <p className="mt-2 text-label text-muted">{node.detail}</p>
        </div>
        {index < nodes.length - 1 && <span className="case-flow-arrow"><Icon name="arrow" /></span>}
      </li>)}
    </ol>
  );
}

export function IsolationDiagram() {
  const data = content.isolation;
  return <figure aria-labelledby="isolation-diagram-title" className="min-w-0">
    <figcaption id="isolation-diagram-title" className="mb-6 font-medium">{data.diagramTitle}</figcaption>
    <div className="grid grid-cols-2 gap-4 md:gap-8">
      {data.apps.map((app) => <div key={app.title} className="min-w-0">
        <div className="border border-control bg-surface p-4">
          <p className="font-medium">{app.title}</p>
          <p className="mt-2 text-label text-muted">{app.network}</p>
        </div>
        <div aria-hidden="true" className="mx-auto h-8 w-0 border-l border-control" />
      </div>)}
    </div>
    <div className="border-y border-control bg-selected p-4 text-center">
      <p className="font-medium text-accent">{data.sharedNetwork}</p>
      <p className="mt-1 text-label text-muted">{data.sharedDetail}</p>
    </div>
    <p className="mt-4 text-label text-muted">{data.caption}</p>
  </figure>;
}
