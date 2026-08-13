import { Arrow, Branch, DiagramFrame, NodeBox, Pipeline } from "./DiagramPrimitives";

/**
 * Condensed version of AIArchDiagram for the homepage hero.
 *
 * The hero previously held a generic stock illustration of dashboards and
 * gears — the same image any agency could buy. The work page says "We don't
 * show logos. We show architecture." This is that promise, above the fold:
 * the shape of a real pipeline, showing that the model call is one node
 * among several and that invalid output goes to a human rather than being
 * silently coerced.
 */
export default function HeroPipelineDiagram() {
  return (
    <DiagramFrame
      className="my-0 w-full"
      caption="The model call is one node. Schemas, retries, and audit are the rest."
    >
      <Pipeline className="max-w-md">
        <NodeBox label="Input" sublabel="records + source content" color="sky" size="sm" />
        <Arrow />
        <NodeBox label="Claude API" sublabel="pinned model, low temp" color="emerald" />
        <Arrow />
        {/* The failure path hangs off to the side so the trunk of the pipeline
            still reads top-to-bottom: validation -> valid -> Postgres. */}
        <Branch>
          <NodeBox label="Schema validation" sublabel="strict" color="emerald" size="sm" />
          <Arrow direction="right" label="invalid" variant="dashed" />
          <NodeBox label="Human review" sublabel="never coerced" color="rose" size="sm" dashed />
        </Branch>
        <Arrow label="valid" />
        <NodeBox label="Postgres" sublabel="verdict + reasoning + audit" color="indigo" size="sm" />
      </Pipeline>
    </DiagramFrame>
  );
}
