"use client";

import { useSearchParams } from "next/navigation";
import workData from "@/data/work.json";
import FilterChips, { resolveFilter } from "@/components/FilterChips";
import WorkCards from "@/components/WorkCards";

const filters = ["All", "AI", "Lending", "WhatsApp", "Automation"];

export default function WorkFilteredList() {
  const searchParams = useSearchParams();
  const activeFilter = resolveFilter(filters, searchParams.get("pillar"));

  const studies = workData.caseStudies.filter(
    (study) => activeFilter === "All" || study.pillar === activeFilter,
  );

  return (
    <>
      <FilterChips
        filters={filters}
        paramName="pillar"
        active={activeFilter}
        label="Filter case studies by pillar"
      />

      {/* Announces the new count when a chip changes the list — otherwise the
          result of pressing a filter is invisible to a screen reader. */}
      <p role="status" aria-live="polite" className="mt-4 mb-10 text-sm text-gray-600">
        {studies.length === 1 ? "1 case study" : `${studies.length} case studies`}
        {activeFilter === "All" ? "" : ` in ${activeFilter}`}
      </p>

      <WorkCards studies={studies} />
    </>
  );
}
