import { Icon } from "@/components/ui";
import { taskFlowCaseStudy as content, type FlowNode } from "@/content/taskflow-case-study";

/** DOM order is the flow order, including when the layout stacks on small screens. */
export function TaskFlowDiagram({ nodes, label, code = false }: { nodes: readonly FlowNode[]; label: string; code?: boolean }) {
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

export function ObservabilityStack() {
  const data = content.observability;
  return <figure aria-labelledby="observability-diagram-title" className="min-w-0">
    <figcaption id="observability-diagram-title" className="mb-6 font-medium">{data.title}</figcaption>
    <div className="grid gap-4 md:grid-cols-3">
      {data.layers.map((layer) => <div key={layer.title} className="min-w-0">
        <div className="border border-control bg-surface p-4">
          <p className="font-medium">{layer.title}</p>
          <p className="mt-2 text-label text-muted">{layer.detail}</p>
        </div>
      </div>)}
    </div>
  </figure>;
}

export function SecurityStack() {
  const data = content.security;
  return <div className="divide-y divide-border border-y border-border">
    {data.mechanisms.map((mechanism) => <div key={mechanism.title} className="py-4">
      <p className="font-medium">{mechanism.title}</p>
      <p className="mt-2 text-label text-muted">{mechanism.detail}</p>
    </div>)}
  </div>;
}
