const config = require('./site-config.json');
exports.sourceNodes = ({ actions, createNodeId, createContentDigest }) => {
  const node = {
    ...config,
    id: createNodeId('SiteConfig'),
    internal: {
      type: 'SiteConfig',
      contentDigest: createContentDigest(config)
    },
  }
  actions.createNode(node)
}