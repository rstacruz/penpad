// https://github.com/gatsbyjs/gatsby/issues/11934#issuecomment-469046186
exports.onCreateWebpackConfig = ({ getConfig, stage }) => {
  const config = getConfig()
  // could also use actions.setWebpackConfig()
    config.resolve.alias = {
      ...config.resolve.alias,
      'penpad': require.resolve('../../packages/penpad/src/index.tsx')
    }
  if (stage.startsWith('develop') && config.resolve) {
    config.resolve.alias = {
      ...config.resolve.alias,
      'react-dom': '@hot-loader/react-dom'
    }
  }
}
