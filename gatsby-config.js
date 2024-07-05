const siteTitle = 'Cúram Performance Tuning & Sizing guide'

var activeEnv = 'local'

var sitePrefix = process.env.SITE_PREFIX || "/"
console.log(`Using SITE_PREFIX: '${sitePrefix}'`)

module.exports = {
  siteMetadata: {
    title: siteTitle,
    description: "Cúram Performance Tuning Guide",
    keywords: 'cúram,containers,performance,tuning',
  },
  pathPrefix: sitePrefix,
  plugins: [
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: siteTitle,
        short_name: siteTitle,
        start_url: sitePrefix,
        background_color: '#ffffff',
        theme_color: '#0062ff',
        display: 'browser',
        icon: 'node_modules/gatsby-theme-carbon/src/images/favicon.svg'
      },
    },
    {
      resolve: 'gatsby-theme-carbon',
      options: {
        isSearchEnabled: true,
        withWebp: true,
        imageQuality: 75,
        iconPath: "./src/images/curam-favicon-32.svg"
      },
    },
  ],
};
