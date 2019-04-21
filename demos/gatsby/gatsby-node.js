// https://github.com/gatsbyjs/gatsby/issues/11934#issuecomment-469046186
exports.onCreateWebpackConfig = ({ getConfig, stage }) => {
  const config = getConfig()
  // could also use actions.setWebpackConfig().
  // The $ at the end signifies an exact match. See:
  // https://webpack.js.org/configuration/resolve/#resolve-alias
  config.resolve.alias = {
    ...config.resolve.alias,
    '@rstacruz/penpad$': require.resolve('../../packages/penpad/src/index.tsx'),
    '@penpad/preset-recommended$': require.resolve(
      '../../packages/preset-recommended/src/index.tsx'
    ),
    '@penpad/plugin-logger$': require.resolve(
      '../../packages/plugin-logger/src/index.tsx'
    ),
    '@penpad/plugin-color$': require.resolve(
      '../../packages/plugin-color/src/index.tsx'
    ),
    '@penpad/plugin-responsive-view$': require.resolve(
      '../../packages/plugin-responsive-view/src/index.tsx'
    ),
    '@penpad/plugin-code-panel': require.resolve(
      '../../packages/plugin-code-panel/src/index.tsx'
    )
  }

  if (stage.startsWith('develop') && config.resolve) {
    config.resolve.alias = {
      ...config.resolve.alias,
      'react-dom': '@hot-loader/react-dom'
    }
  }
}
