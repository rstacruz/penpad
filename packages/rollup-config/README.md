# @penpad/rollup-config

Builds a Rollup configuration for use in Penpad plugins. The `buildConfig` function gets you a Rollup config with some basic necessities:

- [rollup-plugin-typescript2] for TypeScript support
- [rollup-plugin-react-svg] for loading icons
- [rollup-plugin-postcss-modules] for CSS modules support with PostCSS
- [postcss-import] for `@import` support in CSS
- [postcss-preset-env] for auto-prefixing and other new CSS features
- [postcss-apply] for `@apply` support

[rollup-plugin-node-resolve]: https://yarn.pm/rollup-plugin-node-resolve
[rollup-plugin-typescript2]: https://yarn.pm/rollup-plugin-typescript2
[rollup-plugin-commonjs]: https://yarn.pm/rollup-plugin-commonjs
[rollup-plugin-postcss-modules]: https://yarn.pm/rollup-plugin-postcss-modules
[rollup-plugin-react-svg]: https://yarn.pm/rollup-plugin-react-svg
[postcss-import]: https://yarn.pm/postcss-import
[postcss-apply]: https://yarn.pm/postcss-apply
[postcss-preset-env]: https://yarn.pm/postcss-preset-env

## Usage

Write a `rollup.config.js` for your plugin:

```js
// rollup.config.js
import buildConfig from '@penpad/rollup-config'
import pkg from './package.json'

export default buildConfig({
  // Entry point
  input: 'src/index.tsx',
  pkg
})
```

Configure npm scripts for `scripts.prepare`:

```js
/* package.json */
{
  "scripts": {
    "prepare": "rollup --config"
  }
}
```
