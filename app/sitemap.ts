import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
export default function sitemap(): MetadataRoute.Sitemap {
  return process.env.INDEXABLE === "true"
    ? [
        "",
        "/naplestechmeetup",
        "/entrepreneurialjourneys",
        "/pricing-plans/expertondemand",
        "/technologydelegations",
        "/realestateinnovation",
        "/about",
        "/contact",
      ].map((path) => ({ url: site.url + path }))
    : [];
}
