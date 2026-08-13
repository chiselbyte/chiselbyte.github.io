"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

interface FilterChipsProps {
  /** Chip labels. The first one is treated as the "no filter" option. */
  filters: string[];
  /** Query-string key this control owns, e.g. "pillar" or "category". */
  paramName: string;
  /** Currently applied filter, resolved from the URL by the parent. */
  active: string;
  /** Accessible name for the group of chips. */
  label: string;
}

/**
 * Filter chips backed by the URL rather than component state.
 *
 * Local `useState` meant a filtered view could not be linked, shared, or
 * reached with the Back button — the whole point of a filter on a public
 * index page. Selection is pushed onto the history stack so Back steps
 * through previous filters, with `scroll: false` so the list doesn't jump
 * to the top of the document on every click.
 */
export default function FilterChips({
  filters,
  paramName,
  active,
  label,
}: FilterChipsProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const defaultFilter = filters[0];

  function select(filter: string) {
    if (filter === active) return;
    const params = new URLSearchParams(searchParams.toString());
    if (filter === defaultFilter) {
      params.delete(paramName);
    } else {
      params.set(paramName, slugify(filter));
    }
    const query = params.toString();
    router.push(query ? `${pathname}?${query}` : pathname, { scroll: false });
  }

  return (
    <div className="flex flex-wrap gap-2" role="group" aria-label={label}>
      {filters.map((filter) => {
        const isActive = filter === active;
        return (
          <button
            key={filter}
            type="button"
            aria-pressed={isActive}
            onClick={() => select(filter)}
            className={`px-4 py-2 rounded-full text-sm font-semibold border transition-colors ${
              isActive
                ? "bg-gray-900 text-white border-gray-900"
                : "bg-white text-gray-700 border-gray-200 hover:border-gray-400"
            }`}
          >
            {filter}
          </button>
        );
      })}
    </div>
  );
}

/** "WhatsApp" -> "whatsapp", "Lending Tech" -> "lending-tech". */
export function slugify(value: string) {
  return value.toLowerCase().replace(/\s+/g, "-");
}

/** Resolve a URL value back to one of the known filter labels. */
export function resolveFilter(
  filters: string[],
  raw: string | null | undefined,
) {
  if (!raw) return filters[0];
  return filters.find((f) => slugify(f) === raw.toLowerCase()) ?? filters[0];
}
