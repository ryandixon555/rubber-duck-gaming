const tailwind = require('../tailwind')

module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: 'Rubber Duck Gaming', // Navigation and Site Title
  siteTitleAlt: 'Rubber Duck Gaming', // Alternative Site title for SEO
  siteTitleShort: 'Rubber Duck Gaming', // short_name for manifest
  siteHeadline: 'Rubber Duck Gaming', // Headline for schema.org JSONLD
  siteUrl: 'https://www.rubberduckgaming.com', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteLogo: '/logo.png', // Used for SEO and manifest
  siteDescription: 'Rubber Duck Gaming',
  author: 'Rubber Duck Gaming', // Author for schema.org JSONLD

  // Google Analytics
  //googleAnalyticsID: 'UA-138619516-1',

  // Manifest and Progress color
  themeColor: tailwind.colors.orange,
  backgroundColor: tailwind.colors.blue,
}
