import React from "react";
import Helmet from "react-helmet";

export default React.memo(
  ({
    author,
    siteUrl,
    datePublished,
    dateModified,
    description,
    image,
    isBlogPost,
    organization,
    title,
    url
  }) => {
    const baseSchema = [
      {
        "@context": "http://schema.org",
        "@type": "Organization",
        "@id": "https://wwww.aiartiste.com#organization",
        name: "Jason Li",
        url: "https://wwww.aiartiste.com",
        sameAs: ["https://twitter.com/JasonLi45756873"],
        legalName: "Jie Li",
        logo: {
          "@type": "ImageObject",
          url: "https://www.aiartiste.com/img/logo-lg.png",
          width: 144,
          height: 144
        },
        founder: {
          "@type": "Person",
          name: "Jason Li",
          image: {
            "@type": "ImageObject",
            url: "https://wwww.aiartiste.com/img/jason.jpg",
            width: 300,
            height: 300
          }
        }
      },
      {
        "@context": "http://schema.org",
        "@type": "WebSite",
        "@id": "https://wwww.aiartiste.com#website",
        url: "https://wwww.aiartiste.com",
        name: "Jason Li",
        alternateName: "AI Researcher | Jason Li",
        author: {
          "@id": "https://wwww.aiartiste.com#organization"
        }
      },
      {
        "@context": "http://schema.org",
        "@type": "WebPage",
        "@id": url,
        url,
        headline: title,
        description,
        publisher: {
          "@id": "https://wwww.aiartiste.com#organization"
        },
        sourceOrganization: {
          "@id": "https://wwww.aiartiste.com#organization"
        }
      }
    ];

    const schema = isBlogPost
      ? [
          ...baseSchema,
          {
            "@context": "http://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                item: {
                  "@id": url,
                  name: title,
                  image
                }
              }
            ]
          },
          {
            "@context": "http://schema.org",
            "@type": "BlogPosting",
            url,
            name: title,
            headline: title,
            image: {
              "@type": "ImageObject",
              url: image
            },
            description,
            author: {
              "@id": "https://wwww.aiartiste.com#organization"
            },
            publisher: {
              "@id": "https://wwww.aiartiste.com#organization"
            },
            mainEntityOfPage: {
              "@type": "WebSite",
              "@id": siteUrl
            },
            datePublished,
            dateModified: dateModified ? dateModified : datePublished
          }
        ]
      : baseSchema;

    return (
      <Helmet>
        {/* Schema.org tags */}
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>
    );
  }
);
