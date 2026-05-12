"use client";

import SectionHeader from "@/components/ui/SectionHeader";

interface TechGroup {
  category: string;
  items: string[];
}

const techGroups: TechGroup[] = [
  {
    category: "AI & Data",
    items: ["Anthropic Claude API", "MCP", "Pydantic", "FastAPI", "Python"],
  },
  {
    category: "Backend",
    items: ["Java / Spring Boot", "Node.js / Express", "PostgreSQL"],
  },
  {
    category: "Frontend",
    items: ["Next.js", "React", "Tailwind", "shadcn/ui"],
  },
  {
    category: "Automation & Integrations",
    items: ["n8n (self-hosted)", "WhatsApp Business API", "Meta Graph API"],
  },
  {
    category: "Infra",
    items: ["Railway", "Firebase", "Docker"],
  },
];

export default function TechStackSection() {
  return (
    <section className="relative py-12 sm:py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Tech we use"
          title="A small, deliberate toolkit."
          subtitle="Boring technologies, picked because they survive production. No resume-driven engineering."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {techGroups.map((group) => (
            <div
              key={group.category}
              className="bg-gray-50 border border-gray-100 rounded-2xl p-6 sm:p-8"
            >
              <h3 className="text-sm font-semibold tracking-wider uppercase text-green-600 mb-4">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="text-sm font-medium px-3 py-1.5 rounded-md bg-white border border-gray-200 text-gray-800"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
