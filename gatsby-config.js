'use strict'

require('dotenv').config({
  path: `.env`
})

module.exports = {
  siteMetadata: {
    title: `Yastudio.co`,
    description: `Yastudio`,
    siteUrl: `https://yastudio.co`,
    image: `static/images/yass_meta_image.jpg`,
    googleSiteVerification:
      process.env.GOOGLE_SITE_VERIFICATION ||
      'G-W76M8ZLQ1C',
    author: {
      name: `yastudio`,
      intro: `انسان غایت زیبایی هاست . یا استادیو عمق زیباییهات رو پیدا می کنه.`,
      url: `http://yastudio.co`,
      email: `hey@yastudio.co`
    },
    social: [
      {name: `Instagram`, socialUrl: `https://instagram.com/yastudio.official`},
      {name: `Twitter`, socialUrl: `https://twitter.com/yasstaheri.nft`},
      {name: `linkedin`, socialUrl: `https://linkedin.com/yastudio`}
    ]
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/posts`,
        name: `posts`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/projects`,
        name: `projects`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/static/images`,
        name: `images`
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 600,
              showCaptions: [`alt`],
              markdownCaptions: true,
              backgroundColor: 'none',
              wrapperStyle: `border-bottom: none;`
            }
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1rem; max-width: 600px; height: 400px; margin: auto;`
            }
          },
          {
            resolve: 'gatsby-remark-video',
            options: {
              width: 600,
              height: 'auto',
              preload: 'auto',
              muted: true,
              autoplay: true,
              playsinline: true,
              controls: true,
              loop: true
            }
          },
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              offsetY: `100`,
              // eslint-disable-next-line max-len
              icon: `static/images/favicon/yass_fav.png`,
              className: `autolink-headers`,
              maintainCase: true,
              removeAccents: true,
              isIconAfterHeader: true
            }
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: 'language-',
              inlineCodeMarker: true,
              showLineNumbers: false,
              noInlineHighlight: false
            }
          },
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`
        ]
      }
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `http://yastudio.co`
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `YassTaheri`,
        short_name: `yastudio.co`,
        start_url: `/`,
        background_color: `#255799`,
        theme_color: `#255799`,
        display: `standalone`,
        icon: `static/images/favicon/yass_fav.png`, // This path is relative to the root of the site.
        crossOrigin: `use-credentials`
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId:
          process.env.GOOGLE_ANALYTICS_TRACKING_ID ||
          'G-W76M8ZLQ1C'
      }
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-sitemap`,
    `gatsby-transformer-json`,
    `gatsby-plugin-react-svg`,
    `gatsby-plugin-meta-redirect`,
    `gatsby-plugin-image`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ]
}
