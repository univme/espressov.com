import type { Metadata } from "next";
export const site = {
  name: "Espresso Ventures",
  email: "partners@espressov.com",
  url: process.env.SITE_URL || "https://www.espressov.com",
  calendar: "https://luma.com/NaplesTechMeetup",
  instagram: "https://www.instagram.com/espressov.club/",
  linkedin: "https://www.linkedin.com/company/espresso-coaching/",
  youtube: "https://www.youtube.com/@espresso4founders",
};
export function meta(
  title: string,
  description: string,
  path: string,
): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      type: "website",
      siteName: site.name,
      images: [
        {
          url: "/images/meetup.webp",
          width: 1600,
          height: 1200,
          alt: "Entrepreneurs gathering at an Espresso Ventures community event",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/images/meetup.webp"],
    },
  };
}
export function JsonLd({ value }: { value: unknown }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(value).replace(/</g, "\\u003c"),
      }}
    />
  );
}
