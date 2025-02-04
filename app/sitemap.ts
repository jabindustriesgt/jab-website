import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
      {
        url: "/",
        lastModified: new Date(),
      },
      {
        url: "/beneficios-maduro",
        lastModified: new Date(),
      },
      {
        url: "/beneficios-seco",
        lastModified: new Date(),
      },
      {
        url: "/tostador",
        lastModified: new Date(),
      },
      {
        url: "/trilla",
        lastModified: new Date(),
      },
      {
        url: "/molino",
        lastModified: new Date(),
      },
      {
        url: "/contacto",
        lastModified: new Date(),
      },
  ];
}