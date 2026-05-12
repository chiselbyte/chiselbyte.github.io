import {
  Arrow,
  Branch,
  DiagramFrame,
  NodeBox,
  Pipeline,
} from "./DiagramPrimitives";

export default function AutomationArchDiagram() {
  return (
    <DiagramFrame caption="An n8n flow is the smallest unit of internal tooling. Triggered, observable, and replayable from any failure point.">
      <Pipeline>
        <Branch>
          <NodeBox label="Webhook trigger" sublabel="form / API / WhatsApp" color="sky" size="sm" />
          <NodeBox label="Schedule trigger" sublabel="cron" color="sky" size="sm" />
          <NodeBox label="Event trigger" sublabel="DB row / message" color="sky" size="sm" />
        </Branch>
        <Arrow />
        <NodeBox label="Conditions & branching" sublabel="IF nodes, switch, rules" color="gray" />
        <Arrow />
        <NodeBox label="LLM decision node (optional)" sublabel="Claude inside the flow" color="emerald" />
        <Arrow />
        <NodeBox label="Actions" sublabel="Sheets · CRM · Email · WhatsApp · custom API" color="orange" size="lg" />
        <Arrow />
        <Branch>
          <NodeBox label="Notification" sublabel="Slack / WhatsApp / SMS" color="orange" size="sm" />
          <NodeBox label="Persistence" sublabel="Postgres / Sheets" color="indigo" size="sm" />
          <NodeBox label="Audit log" sublabel="execution history" color="gray" size="sm" />
        </Branch>
      </Pipeline>
    </DiagramFrame>
  );
}
