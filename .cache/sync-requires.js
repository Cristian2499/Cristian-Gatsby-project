
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/workspaces/Cristian-Gatsby-project/.cache/dev-404-page.js")),
  "component---src-pages-index-js": preferDefault(require("/workspaces/Cristian-Gatsby-project/src/pages/index.js")),
  "component---src-templates-blog-post-js": preferDefault(require("/workspaces/Cristian-Gatsby-project/src/templates/blog-post.js"))
}

