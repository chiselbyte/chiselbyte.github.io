import {
  Arrow,
  DiagramFrame,
  NodeBox,
  Pipeline,
} from "./DiagramPrimitives";

export default function WhatsAppArchDiagram() {
  return (
    <DiagramFrame caption="What looks like 'click a button to connect WhatsApp' is actually six moving parts. We've shipped them all.">
      <Pipeline>
        <NodeBox label="Meta App configured" sublabel="permissions + webhook URLs + app review" color="green" />
        <Arrow />
        <NodeBox label="Tenant clicks Embedded Signup" sublabel="modal launches with WABA scoping" color="sky" />
        <Arrow />
        <NodeBox label="OAuth code exchange" sublabel="→ long-lived access token" color="gray" />
        <Arrow />
        <NodeBox label="System User token generated" sublabel="per-WABA programmatic access, encrypted at rest" color="emerald" size="lg" />
        <Arrow />
        <NodeBox label="Webhook subscription" sublabel="per-WABA scoping + tenant routing" color="gray" />
        <Arrow />
        <NodeBox label="Phone verification + templates" sublabel="status-tracked through approval" color="indigo" />
        <Arrow />
        <NodeBox label="Tenant sends & receives at scale" sublabel="no per-message BSP markup" color="green" size="lg" />
      </Pipeline>
    </DiagramFrame>
  );
}
