import {
  Arrow,
  Branch,
  DiagramFrame,
  NodeBox,
  Pipeline,
} from "./DiagramPrimitives";

export default function LeadQualificationDiagram() {
  return (
    <DiagramFrame caption="The actual production pipeline. The model is one node in a workflow that mostly looks like normal software.">
      <Pipeline>
        <NodeBox label="Inbound lead" sublabel="record + long-form content URLs" color="sky" />
        <Arrow />
        <NodeBox label="Content fetch + clean" sublabel="bounded token budget" color="gray" />
        <Arrow />
        <NodeBox label="Prompt assembly" sublabel="rubric + Pydantic schema + few-shot" color="gray" />
        <Arrow />
        <NodeBox label="Claude API" sublabel="pinned version, low temp" color="emerald" size="lg" />
        <Arrow />
        <NodeBox label="Pydantic validation" sublabel="tier · confidence · reasoning · sources" color="emerald" />
        <Arrow label="invalid" variant="dashed" />
        <Branch>
          <NodeBox label="Retry once" sublabel="fix-it prompt + error" color="amber" size="sm" dashed />
          <Arrow direction="right" label="still invalid" variant="dashed" />
          <NodeBox label="Human review queue" sublabel="ops cleans via n8n form" color="rose" size="sm" dashed />
        </Branch>
        <Arrow label="valid" />
        <NodeBox label="Postgres write" sublabel="verdict + reasoning + audit metadata" color="indigo" size="lg" />
        <Arrow />
        <NodeBox label="n8n syncs to CRM" sublabel="warm leads to AE, lukewarm queued, cold archived" color="orange" />
      </Pipeline>
    </DiagramFrame>
  );
}
