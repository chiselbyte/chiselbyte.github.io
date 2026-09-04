/**
 * Structured data (schema.org) for the site.
 *
 * The Organization node is the anchor: every other node references it by @id,
 * so search engines resolve one consistent entity for "Chiselbyte" rather than
 * inferring a separate one per page.
 */

import {
  BUILD_MAX,
  BUILD_MIN,
  PRICING_HREF,
  RETAINER_MIN,
  SPRINT_MIN,
} from "./pricing";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://chiselbyte.com";

export const ORGANIZATION_ID = `${SITE_URL}/#organization`;

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["ProfessionalService", "Organization"],
  "@id": ORGANIZATION_ID,
  name: "Chiselbyte",
  alternateName: "Chiselbyte Softwares",
  url: SITE_URL,
  logo: `${SITE_URL}/opengraph-image.png`,
  image: `${SITE_URL}/opengraph-image.png`,
  description:
    "Chiselbyte is a small senior software team in Pune, India, building production LLM systems, lending and fintech software, multi-tenant WhatsApp Business API portals, and n8n process automations.",
  email: "info@chiselbyte.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Pune",
    addressRegion: "Maharashtra",
    addressCountry: "IN",
  },
  sameAs: [
    "https://www.instagram.com/chiselbyte/",
    "https://in.linkedin.com/in/chisel-byte-b55817367",
  ],
  areaServed: "IN",
  /**
   * priceRange is a LocalBusiness property, valid here because this node is
   * also typed ProfessionalService. A concrete range rather than "$$$" so
   * answer engines can quote a number instead of a symbol.
   */
  priceRange: `$${SPRINT_MIN}-$${BUILD_MAX}`,
  knowsAbout: [
    "Large Language Model engineering",
    "Production LLM application development",
    "Lending and fintech software",
    "WhatsApp Business API integration",
    "n8n business process automation",
  ],
} as const;

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: "Chiselbyte",
  publisher: { "@id": ORGANIZATION_ID },
} as const;

/**
 * The four engagement offers, priced from lib/pricing.ts. Attached to every
 * Service node and to the OfferCatalog on /how-we-build, so the numbers on the
 * page and the numbers in the markup cannot drift apart.
 */
export function engagementOffers() {
  const url = `${SITE_URL}${PRICING_HREF}`;
  return [
    {
      "@type": "Offer",
      name: "Fit call",
      description:
        "A free 30-minute call with the engineer who would do the work. No written report.",
      priceSpecification: {
        "@type": "PriceSpecification",
        price: 0,
        priceCurrency: "USD",
      },
      availability: "https://schema.org/InStock",
      url,
    },
    {
      "@type": "Offer",
      name: "Scoping sprint",
      description:
        "Three to five days producing a requirements document, schema and architecture design, a working thin slice of real code, and a fixed-price quote for the build. Credited in full against the build.",
      priceSpecification: {
        "@type": "PriceSpecification",
        minPrice: SPRINT_MIN,
        priceCurrency: "USD",
        valueAddedTaxIncluded: false,
      },
      availability: "https://schema.org/InStock",
      url,
    },
    {
      "@type": "Offer",
      name: "Fixed-price build",
      description:
        "One scoped deliverable shipped into production in one to two weeks, at the fixed price quoted at the end of the scoping sprint.",
      priceSpecification: {
        "@type": "PriceSpecification",
        minPrice: BUILD_MIN,
        maxPrice: BUILD_MAX,
        priceCurrency: "USD",
        valueAddedTaxIncluded: false,
      },
      availability: "https://schema.org/InStock",
      url,
    },
    {
      "@type": "Offer",
      name: "Monthly retainer",
      description:
        "Hosting, monitoring, incident response, and incremental additions, starting after the first build ships.",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        minPrice: RETAINER_MIN,
        priceCurrency: "USD",
        // MON is the UN/CEFACT code for month — the correct way to say "per month".
        unitCode: "MON",
        referenceQuantity: {
          "@type": "QuantitativeValue",
          value: 1,
          unitCode: "MON",
        },
      },
      availability: "https://schema.org/InStock",
      url,
    },
  ];
}

/** The engagement model as a catalog, rendered on /how-we-build. */
export const engagementOfferCatalogSchema = {
  "@context": "https://schema.org",
  "@type": "OfferCatalog",
  "@id": `${SITE_URL}/how-we-build#engagement-model`,
  name: "Chiselbyte engagement model",
  url: `${SITE_URL}${PRICING_HREF}`,
  provider: { "@id": ORGANIZATION_ID },
  itemListElement: engagementOffers(),
};

/** One Service node per service page, all provided by the same Organization. */
export function serviceSchema(input: {
  serviceType: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: input.serviceType,
    description: input.description,
    url: `${SITE_URL}${input.path}`,
    provider: { "@id": ORGANIZATION_ID },
    offers: engagementOffers(),
    areaServed: "IN",
  };
}

export function blogPostingSchema(input: {
  headline: string;
  description: string;
  path: string;
  datePublished: string;
  dateModified?: string;
  keywords?: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}${input.path}`,
    },
    headline: input.headline,
    description: input.description,
    datePublished: input.datePublished,
    dateModified: input.dateModified ?? input.datePublished,
    author: { "@id": ORGANIZATION_ID },
    publisher: { "@id": ORGANIZATION_ID },
    ...(input.keywords?.length ? { keywords: input.keywords } : {}),
  };
}

export function breadcrumbSchema(trail: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: `${SITE_URL}${crumb.path}`,
    })),
  };
}
