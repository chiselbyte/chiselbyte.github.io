import Link from "next/link";
import { ArrowRight } from "lucide-react";

const pillarColorMap: Record<string, string> = {
  AI: "bg-emerald-100 text-emerald-700",
  Lending: "bg-indigo-100 text-indigo-700",
  WhatsApp: "bg-green-100 text-green-700",
  Automation: "bg-orange-100 text-orange-700",
};

export interface CaseStudy {
  slug: string;
  pillar: string;
  date: string;
  title: string;
  summary: string;
  techBadges: string[];
}

/**
 * Presentational grid, shared by the interactive filtered list and by the
 * server-rendered fallback. Keeping it server-safe means the prerendered HTML
 * for /work always contains every case study link, even though the filter
 * itself only comes alive after hydration.
 */
export default function WorkCards({ studies }: { studies: CaseStudy[] }) {
  if (studies.length === 0) {
    return <p className="text-gray-600">No case studies in this category yet.</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
      {studies.map((study) => (
        <Link
          key={study.slug}
          href={`/work/${study.slug}`}
          className="group bg-gray-50 hover:bg-white border border-gray-100 hover:border-gray-200 rounded-2xl p-6 sm:p-8 hover:shadow-xl transition-all duration-300"
        >
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span
                className={`inline-block text-xs font-semibold px-3 py-1 rounded-full ${
                  pillarColorMap[study.pillar] ?? "bg-gray-100 text-gray-700"
                }`}
              >
                {study.pillar}
              </span>
              <span className="text-xs text-gray-500">{study.date}</span>
            </div>

            <h2 className="text-base sm:text-lg font-bold text-gray-900 leading-tight">
              {study.title}
            </h2>

            <p className="text-gray-600 leading-relaxed text-xs sm:text-sm">
              {study.summary}
            </p>

            <div className="flex flex-wrap gap-2 pt-1">
              {study.techBadges.map((badge) => (
                <span
                  key={badge}
                  className="text-xs font-medium px-2.5 py-1 rounded-md bg-white border border-gray-200 text-gray-700"
                >
                  {badge}
                </span>
              ))}
            </div>

            <div className="flex items-center text-sm font-semibold text-gray-900 pt-2 group-hover:text-green-700 transition-colors">
              Read case study
              <ArrowRight className="w-4 h-4 ml-1 motion-safe:group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
