const applyDefaults = require('@servicesite/gatsby-theme-appliance-repair/src/helpers/apply-defaults');
const siteConfig = require('./site-config.json');
const siteConfigDefaults = require('@servicesite/gatsby-theme-appliance-repair/site-config-defaults.json');

const config = applyDefaults(siteConfig, siteConfigDefaults);
const { name, title, area, googleMapsApiKey, mapZoomLevel, googleTagManagerId } = config;

module.exports = {
  pathPrefix: '',
  siteMetadata: {
    author: '@servicesite'
  },
  plugins: [
    {
      resolve: '@servicesite/gatsby-theme-appliance-repair',
      options: { name, title, area, googleMapsApiKey, mapZoomLevel, googleTagManagerId }
    }
  ],
}