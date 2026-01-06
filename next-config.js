// If deploying to a GitHub Pages project site, set REPO_NAME env to the repo name.
// e.g. REPO_NAME=your-repo-name
const repo = process.env.REPO_NAME || '';

module.exports = {
  // when repo is set, serve assets and pages under /repo-name/
  assetPrefix: repo ? `/${repo}/` : undefined,
  basePath: repo ? `/${repo}` : '',
  trailingSlash: true // helpful for static exports on GH Pages
};
