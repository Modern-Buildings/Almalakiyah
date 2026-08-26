import { Metadata } from "next";

// ─── Single source of truth for brand identity ───────────────────────────────

export const SITE_NAME = "Almalakiyah Investment";
export const SITE_NAME_AR = "الملكية للاستثمار";

export const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://almalakiyah.com";

export const TWITTER_HANDLE = "@almalakiyah_inv";

export const OG_IMAGE_PATH =
  "/assets/img/og-preview.png";

export const LOGO_PATH =
  "/assets/img/horizontal.png";

export const ICON_PATH =
  "/assets/img/icon.png";

export const FAVICON_PATH =
  "/assets/img/favicon.png";

// ─────────────────────────────────────────────────────────────────────────────


export interface DynamicMetadataProps {
  title: string;
  description: string;
  path?: string;
  version?: string;
  keywords?: string[];
  noIndex?: boolean;
}


// ─── Cache versioning ────────────────────────────────────────────────────────

export function getCacheBustingVersion(version?: string): string {
  return (
    version ||
    process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA ||
    "1"
  );
}


// ─── Metadata Factory ────────────────────────────────────────────────────────

export function constructMetadata({
  title,
  description,
  path = "",
  version,
  keywords = [],
  noIndex = false,
}: DynamicMetadataProps): Metadata {

  const cacheVersion = getCacheBustingVersion(version);

  const canonicalUrl =
    `${BASE_URL}${path}`;

  const ogImageUrl =
    `${BASE_URL}${OG_IMAGE_PATH}?v=${cacheVersion}`;


  return {

    metadataBase: new URL(BASE_URL),


    // Core SEO
    title,
    description,
    keywords,

    applicationName: SITE_NAME_AR,

    authors: [
      {
        name:
          `${SITE_NAME_AR} | ${SITE_NAME}`,
      },
    ],


    category:
      "Real Estate Investment",


    // Icons
    icons: {

      icon: [
        {
          url: FAVICON_PATH,
          type: "image/png",
        },
      ],

      shortcut:
        FAVICON_PATH,

      apple:
        ICON_PATH,
    },


    // Canonical
    alternates: {

      canonical:
        canonicalUrl,

    },


    // Robots
    robots: noIndex
      ? {
          index: false,
          follow: false,
        }
      : {

          index: true,
          follow: true,

          googleBot: {

            index: true,
            follow: true,

            "max-video-preview": -1,

            "max-image-preview":
              "large",

            "max-snippet": -1,

          },

        },



    // Open Graph

    openGraph: {

      siteName:
        SITE_NAME_AR,

      title,

      description,

      url:
        canonicalUrl,

      type:
        "website",

      locale:
        "ar_OM",


      images: [

        {

          url:
            ogImageUrl,

          width:
            1200,

          height:
            630,

          alt:
            `${SITE_NAME_AR} | ${SITE_NAME}`,

        },

      ],

    },



    // Twitter / X

    twitter: {

      card:
        "summary_large_image",

      site:
        TWITTER_HANDLE,

      creator:
        TWITTER_HANDLE,

      title,

      description,

      images:
        [
          ogImageUrl
        ],

    },


    // Google / Bing verification
    // verification: {
    //   google: "TOKEN",
    //   other: {
    //     "msvalidate.01": "TOKEN"
    //   }
    // },

  };

}