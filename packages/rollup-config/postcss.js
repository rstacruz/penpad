const postcssModules = require('rollup-plugin-postcss-modules').default
const postcssImport = require('postcss-import')
const postcssApply = require('postcss-apply')
const postcssColorMod = require('postcss-color-mod-function')
const postcssPresetEnv = require('postcss-preset-env')

const postcss = (options = {}) => {
  return postcssModules({
    ...options,
    plugins: [
      postcssImport(),
      postcssApply(),
      postcssPresetEnv({
        stage: 0,
        preserve: false,
        insertBefore: {
          'all-property': postcssColorMod
        }
      }),
      ...(options.plugins || [])
    ]
  })
}

module.exports = postcss
