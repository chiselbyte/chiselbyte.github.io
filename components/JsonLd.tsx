/**
 * Renders a JSON-LD block. Next.js recommends inlining structured data as a
 * plain <script> in the component tree rather than via next/script, so it is
 * present in the server-rendered HTML crawlers read.
 */
export default function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      // Content is authored in-repo, never user input.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
