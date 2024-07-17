import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/app",
    },
    sitemap: "https://artesvidroswrr.com.br/sitemap.xml",
  };
}
