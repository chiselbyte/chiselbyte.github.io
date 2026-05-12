import type { MetadataRoute } from "next";
import blogData from "@/data/blog.json";
import workData from "@/data/work.json";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://chiselbyte.com";

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

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${SITE_URL}${route.path}`,
    lastModified: now,
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
    lastModified: now,
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
