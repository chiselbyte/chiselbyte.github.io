import type { MetadataRoute } from "next";
import blogData from "@/data/blog.json";
import workData from "@/data/work.json";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://chiselbyte.com";

/**
 * Marketing pages have no per-item date in the content layer, so their
 * lastModified is authored here. Bump this when you meaningfully change
 * page copy — NOT on every deploy.
 *
 * Previously every static route reported `new Date()`, i.e. the build time,
 * which told crawlers the whole site changed on each deploy and made the
 * signal worthless.
 */
const CONTENT_LAST_UPDATED = new Date("2026-09-04");

const staticRoutes = [
  { path: "/", priority: 1.0, changeFrequency: "weekly" as const },
  { path: "/about", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/how-we-build", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/work", priority: 0.9, changeFrequency: "weekly" as const },
  { path: "/blog", priority: 0.9, changeFrequency: "weekly" as const },
  { path: "/contact", priority: 0.7, changeFrequency: "yearly" as const },
  { path: "/services/ai-development", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/services/lending", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/services/whatsapp", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/services/automation", priority: 0.9, changeFrequency: "monthly" as const },
];

/** Newest of a set of dates, or the authored fallback when the set is empty. */
function newest(dates: Date[]): Date {
  const valid = dates.filter((d) => !Number.isNaN(d.getTime()));
  return valid.length
    ? new Date(Math.max(...valid.map((d) => d.getTime())))
    : CONTENT_LAST_UPDATED;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const caseStudyDates = workData.caseStudies.map(
    (study) => new Date(`${study.date}-01`),
  );
  const postDatesByCategory = new Map(
    blogData.categories.map((category) => [
      category.slug,
      (category.posts ?? []).map((post) => new Date(post.date)),
    ]),
  );
  const allPostDates = Array.from(postDatesByCategory.values()).flat();

  // Index pages are as fresh as the newest thing they list.
  const derived: Record<string, Date> = {
    "/work": newest(caseStudyDates),
    "/blog": newest(allPostDates),
    "/": newest([...caseStudyDates, ...allPostDates, CONTENT_LAST_UPDATED]),
  };

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${SITE_URL}${route.path}`,
    lastModified: derived[route.path] ?? CONTENT_LAST_UPDATED,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const workEntries: MetadataRoute.Sitemap = workData.caseStudies.map((study) => ({
    url: `${SITE_URL}/work/${study.slug}`,
    lastModified: new Date(`${study.date}-01`),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const blogCategoryEntries: MetadataRoute.Sitemap = blogData.categories.map((category) => ({
    url: `${SITE_URL}/blog/${category.slug}`,
    lastModified: newest(postDatesByCategory.get(category.slug) ?? []),
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  const blogPostEntries: MetadataRoute.Sitemap = blogData.categories.flatMap((category) =>
    (category.posts ?? []).map((post) => ({
      url: `${SITE_URL}/blog/${category.slug}/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  );

  return [...staticEntries, ...workEntries, ...blogCategoryEntries, ...blogPostEntries];
}
