import {
  Arrow,
  Branch,
  DiagramFrame,
  NodeBox,
  Pipeline,
} from "./DiagramPrimitives";

export default function AIArchDiagram() {
  return (
    <DiagramFrame caption="An LLM call is one node in a pipeline. Schemas, retries, audit, and orchestration are the rest.">
      <Pipeline>
        <NodeBox label="Input" sublabel="user record + content URLs" color="sky" />
        <Arrow />
        <NodeBox label="Fetch & clean" sublabel="bounded token budget" color="gray" />
        <Arrow />
        <NodeBox label="Prompt assembly" sublabel="rubric + schema + few-shot" color="gray" />
        <Arrow />
        <NodeBox label="Claude API" sublabel="pinned model + low temp" color="emerald" size="lg" />
        <Arrow />
        <NodeBox label="Pydantic validation" sublabel="strict schema check" color="emerald" />
        <Arrow label="invalid" variant="dashed" />
        <Branch>
          <NodeBox label="Retry once" sublabel="fix-it prompt" color="amber" size="sm" dashed />
          <Arrow direction="right" label="still invalid" variant="dashed" />
          <NodeBox label="Human review queue" sublabel="never silently coerced" color="rose" size="sm" dashed />
        </Branch>
        <Arrow label="valid" />
        <NodeBox label="Postgres" sublabel="verdict + reasoning + audit metadata" color="indigo" size="lg" />
        <Arrow />
        <NodeBox label="n8n orchestration" sublabel="CRM sync, retries, notifications" color="orange" />
      </Pipeline>
    </DiagramFrame>
  );
}
