import React from "react";
import { SITE_NAME, SITE_NAME_AR, BASE_URL } from "@/utils/metadata";

export default function JsonLd() {
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${BASE_URL}/#organization`,

        name: SITE_NAME_AR,
        alternateName: SITE_NAME,

        url: BASE_URL,

        logo: {
          "@type": "ImageObject",
          "@id": `${BASE_URL}/#logo`,
          url: `${BASE_URL}/assets/img/horizontal.png`,
          contentUrl: `${BASE_URL}/assets/img/horizontal.png`,
          width: 1200,
          height: 400,
          caption: "الملكية للاستثمار | Almalakiyah Investment",
        },

        image: {
          "@id": `${BASE_URL}/#logo`,
        },

        description:
          "الملكية للاستثمار شركة عمانية متخصصة في الاستثمار والتطوير العقاري والسياحي والتقني في سلطنة عُمان. Almalakiyah Investment is an Oman-based investment company focused on real estate, tourism, and technology investments.",

        areaServed: {
          "@type": "Country",
          name: "Oman",
        },

        foundingLocation: {
          "@type": "Place",
          name: "Salalah, Dhofar, Oman",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Salalah",
            addressRegion: "Dhofar",
            addressCountry: "OM",
          },
        },

        knowsAbout: [
          "Real Estate Investment",
          "Property Development",
          "Tourism Investment",
          "Technology Investment",
          "Oman Investment Opportunities",
        ],

        contactPoint: {
          "@type": "ContactPoint",
          contactType: "Customer Service",
          availableLanguage: [
            "Arabic",
            "English",
          ],
        },

        sameAs: [
          "https://x.com/almalakiyah_inv",
          "https://www.instagram.com/almalakiyah_inv",
          "https://www.facebook.com/almalakiyah.inv/",
          "https://www.snapchat.com/@almalakiyah_inv",
        ],
      },


      {
        "@type": "WebSite",

        "@id": `${BASE_URL}/#website`,

        name: SITE_NAME_AR,

        alternateName: SITE_NAME,

        url: BASE_URL,

        description:
          "الملكية للاستثمار | Almalakiyah Investment - Strategic investment and development projects in Oman.",

        publisher: {
          "@id": `${BASE_URL}/#organization`,
        },

        inLanguage: [
          "ar-OM",
          "en",
        ],
      },


      {
        "@type": "WebPage",

        "@id": `${BASE_URL}/#webpage`,

        url: BASE_URL,

        name:
          "الملكية للاستثمار | Almalakiyah Investment",

        description:
          "شريكك الموثوق للاستثمار والتطوير العقاري والسياحي في سلطنة عُمان.",

        isPartOf: {
          "@id": `${BASE_URL}/#website`,
        },

        about: {
          "@id": `${BASE_URL}/#organization`,
        },

        primaryImageOfPage: {
          "@id": `${BASE_URL}/#logo`,
        },

        inLanguage: [
          "ar-OM",
          "en",
        ],

        breadcrumb: {
          "@type": "BreadcrumbList",

          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "الرئيسية",
              item: BASE_URL,
            },
          ],
        },
      },


      {
        "@type": "LocalBusiness",

        "@id": `${BASE_URL}/#business`,

        name: SITE_NAME_AR,

        alternateName: SITE_NAME,

        image: `${BASE_URL}/assets/img/horizontal.png`,

        url: BASE_URL,

        address: {
          "@type": "PostalAddress",
          addressLocality: "Salalah",
          addressRegion: "Dhofar",
          addressCountry: "OM",
        },

        areaServed: {
          "@type": "Country",
          name: "Oman",
        },

        priceRange: "$$$",
      },
    ],
  };


  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(graph),
      }}
    />
  );
}