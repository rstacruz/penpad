import postcssModules from 'rollup-plugin-postcss-modules'
import postcssImport from 'postcss-import'
import postcssApply from 'postcss-apply'
import postcssColorMod from 'postcss-color-mod-function'
import postcssPresetEnv from 'postcss-preset-env'

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

export default postcss
