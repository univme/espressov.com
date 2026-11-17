import { isIndexable } from "@/lib/indexing";
import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
export default function robots(): MetadataRoute.Robots {
  return isIndexable
    ? {
        rules: [
          { userAgent: "*", allow: "/", disallow: ["/*?lightbox="] },
          {
            userAgent: ["AdsBot-Google-Mobile", "AdsBot-Google"],
            disallow: ["/_partials*", "/pro-gallery-webapp/v1/galleries/*"],
          },
          { userAgent: "PetalBot", disallow: "/" },
          { userAgent: ["dotbot", "AhrefsBot"], crawlDelay: 10 },
        ],
        sitemap: site.url + "/sitemap.xml",
      }
    : { rules: { userAgent: "*", disallow: "/" } };
}
