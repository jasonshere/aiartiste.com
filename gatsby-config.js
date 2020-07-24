const {
  NODE_ENV,
  URL: NETLIFY_SITE_URL = "https://www.aiartiste.com",
  DEPLOY_PRIME_URL: NETLIFY_DEPLOY_URL = NETLIFY_SITE_URL,
  CONTEXT: NETLIFY_ENV = NODE_ENV,
} = process.env;
const isNetlifyProduction = NETLIFY_ENV === "production";
const siteUrl = isNetlifyProduction ? NETLIFY_SITE_URL : NETLIFY_DEPLOY_URL;
const contentPosts = "content/blog";
const contentAuthors = "content/authors";
const contentTopics = "content/topics";
const path = require("path");

const templatesDirectory = path.resolve(__dirname, "src/templates");
const templates = {
  page: path.resolve(templatesDirectory, "page-template.js"),
};

module.exports = {
  siteMetadata: {
    title: "Jason Li",
    description:
      "A PhD Candidate in Computer Science at RMIT University.",
    siteUrl,
    author: {
      name: "Jason Li",
      minibio: `
        Jason is committed to the research of Recommender System algorithms.
      `,
      url: `https://twitter.com/JasonLi45756873`,
      image: `https://www.aiartiste.com/img/jason.jpg`,
    },
    image: `https://www.aiartiste.com/img/jason.jpg`,
    social: {
      twitter: "@Jason",
      fbAppID: "100001472784145",
    },
  },
  mapping: {
    "Mdx.frontmatter.author": `AuthorsYaml`,
  },
  plugins: [
    `gatsby-image`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-yaml`,
    `gatsby-transformer-json`,
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              linkImagesToOriginal: false,
              quality: 90,
              withWebp: true,
              maxWidth: 1920,
              showCaptions: true,
            },
          },
          {
            resolve: `gatsby-remark-images-medium-zoom`,
          },
          `gatsby-remark-autolink-headers`,
          `gatsby-remark-external-links`,
        ],
      },
    },
    `gatsby-plugin-twitter`,
    `gatsby-plugin-theme-ui`,
    `gatsby-plugin-catch-links`,
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/static/img`,
        name: "uploads",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/data`,
        name: "data",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: contentPosts,
        name: contentPosts,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: contentAuthors,
        name: contentAuthors,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: contentTopics,
        name: contentTopics,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: { default: templates.page },
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              linkImagesToOriginal: false,
              quality: 90,
              withWebp: true,
              maxWidth: 1920,
              showCaptions: true,
            },
          },
          {
            resolve: `gatsby-remark-copy-linked-files`,
            options: {
              destinationDir: "static",
            },
          },
          { resolve: `gatsby-remark-numbered-footnotes` },
          { resolve: `gatsby-remark-smartypants` },
          {
            resolve: "gatsby-remark-external-links",
            options: {
              target: "_blank",
              rel: "nofollow noopener",
            },
          },
          {
            resolve: "@weknow/gatsby-remark-twitter",
            options: {
              align: "center",
            },
          },
          `gatsby-remark-autolink-headers`,
          {
            resolve: "gatsby-remark-embed-video",
            options: {
              width: 800,
              ratio: 1.77, // Optional: Defaults to 16/9 = 1.77
              height: 400, // Optional: Overrides optional.ratio
              related: false, //Optional: Will remove related videos from the end of an embedded YouTube video.
              noIframeBorder: true, //Optional: Disable insertion of <style> border: 0
            },
          },
          { resolve: `gatsby-remark-responsive-iframe` },
        ],
        remarkPlugins: [require("remark-emoji")],
      },
    },
    {
      resolve: `gatsby-plugin-emotion`,
      options: {
        displayName: process.env.NODE_ENV === `development`,
      },
    },
    {
      resolve: "gatsby-plugin-sass",
      options: {
        useResolveUrlLoader: true,
      },
    },
    `gatsby-plugin-sitemap`,

    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-134618486-1",
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Jason Li`,
        short_name: `Jason`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `static/img/site/brand/icon-64x64.png`,
      },
    },
    {
      resolve: `gatsby-plugin-polyfill-io`,
      options: {
        features: [`Array.prototype.map`, `fetch`],
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        resolveEnv: () => NETLIFY_ENV,
        env: {
          production: {
            policy: [{ userAgent: "*" }],
          },
          "branch-deploy": {
            policy: [{ userAgent: "*", disallow: ["/"] }],
            sitemap: null,
            host: null,
          },
          "deploy-preview": {
            policy: [{ userAgent: "*", disallow: ["/"] }],
            sitemap: null,
            host: null,
          },
        },
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional.
        color: `#00d1b2`,
        // Disable the loading spinner.
        showSpinner: false,
      },
    },
    `gatsby-plugin-recaptcha`,
    {
      resolve: `gatsby-plugin-webmention`,
      options: {
        username: "www.aiartiste.com",
        identity: {
          github: "jasonshere",
          twitter: "JasonLi45756873",
        },
        mentions: true,
        pingbacks: false,
        domain: "www.aiartiste.com",
        fetchLimit: 10000,
        token: process.env.WEBMENTIONS_TOKEN,
      },
    },
    `gatsby-plugin-offline`, // make sure to keep it last in the array
  ],
};
