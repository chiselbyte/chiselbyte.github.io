import {
  Arrow,
  Branch,
  DiagramFrame,
  NodeBox,
  Pipeline,
} from "./DiagramPrimitives";

export default function LendingArchDiagram() {
  return (
    <DiagramFrame caption="A state-machine workflow with PostgreSQL as the single source of truth. n8n handles the coordination between humans and systems.">
      <Pipeline>
        <NodeBox label="Application" sublabel="web or WhatsApp-initiated" color="sky" />
        <Arrow />
        <NodeBox label="KYC routing" sublabel="provider selection + result" color="indigo" />
        <Arrow />
        <NodeBox label="Document collection" sublabel="n8n chases via WhatsApp / SMS" color="orange" />
        <Arrow />
        <NodeBox label="Bureau fetch" sublabel="CIBIL · CRIF · Equifax (consumer + commercial)" color="indigo" size="lg" />
        <Arrow />
        <NodeBox label="Normalization & derived insights" sublabel="utilization · tenure · DPD · YoY" color="indigo" />
        <Arrow />
        <NodeBox label="Credit decisioning" sublabel="rules + optional LLM-assist" color="emerald" />
        <Arrow label="approved" />
        <Branch>
          <NodeBox label="Disbursement" sublabel="programmatic trigger" color="emerald" size="sm" />
          <Arrow direction="right" />
          <NodeBox label="Collections & DPD tracking" sublabel="back into the state model" color="orange" size="sm" />
        </Branch>
      </Pipeline>
    </DiagramFrame>
  );
}
