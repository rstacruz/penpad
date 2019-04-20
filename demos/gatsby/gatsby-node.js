// https://github.com/gatsbyjs/gatsby/issues/11934#issuecomment-469046186
exports.onCreateWebpackConfig = ({ getConfig, stage }) => {
  const config = getConfig()
  // could also use actions.setWebpackConfig()
  config.resolve.alias = {
    ...config.resolve.alias,
    '@rstacruz/penpad': require.resolve('../../packages/penpad/src/index.tsx'),
    '@penpad/plugin-logger': require.resolve(
      '../../packages/plugin-logger/src/index.tsx'
    ),
    '@penpad/plugin-color': require.resolve(
      '../../packages/plugin-color/src/index.tsx'
    )
  }
  if (stage.startsWith('develop') && config.resolve) {
    config.resolve.alias = {
      ...config.resolve.alias,
      'react-dom': '@hot-loader/react-dom'
    }
  }
}
