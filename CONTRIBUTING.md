# Developer notes

## Testing

`yarn` will install deps. `yarn develop` will start a server.

<details>
<summary>···</summary>

```js
# Install dependencies
yarn

# Start the Gatsby demo
yarn develop

# ...alternatively, you can use this to spawn a
# test watcher and tsc watcher too
yarn watch
```

Check package.json's `scripts` for some other useful things for development.

</details>

## Yarn workspaces

Everything is managed in a Yarn workspace.

<details>
<summary>···</summary>

- Most dev dependencies are in the workspace level. This avoids having to add all the necessary boilerplate in each sub-package (eg, Rollup, Jest, TypeScript).

</details>

## Makefile?

The [Makefile](./Makefile) is just a tool to conveniently run a dev setup in Docker.

## Package management

Managed using [Lerna](https://github.com/lerna/lerna). Use `yarn lerna publish` to publish a new version.

<details>
<summary>···</summary>

```js
# List packages with changes
# (ie, that need to be published)
yarn lerna changed

# Bump versions without publishing
# (Interactive prompt)
yarn lerna version

# Bump versions, then publish
yarn lerna publish
```

Some other useful commands:

```js
# Run all Rollup configs
# (careful, bumping up concurrency may thrash your CPU)
yarn lerna exec --stream --concurrency 1 yarn prepare

# Publish things even without changes (caution!)
yarn lerna publish --force-publish="*"
```

</details>

## Creating new packages

When creating packages, these files will need to be updated. See [Internal voodoo](#internal-voodoo) for explanation on these.

- `/demos/gatsby/gatsby-node.js`
- `/tsconfig.json`

## Internal voodoo

Most everything in this setup are 'standard issue' things, with a few exceptions.

<details>
<summary>···</summary>

### Jest module resolution

```
/jest.config.js  →  moduleNameMapper
```

The moduleNameMapper that maps `@penpad/xxx` to `packages/xxx/src/index.tsx`. This allows Jest to work without having to compile things with Rollup.

### TypeScript compiler paths

```
/tsconfig.json  →  compilerOptions.paths
```

Tells Rollup (building/bundling) and `tsc` (type checking) to look at source files ('src') instead of built files ('dist').

### Gatsby Webpack aliases

```
/demos/gatsby/gatsby-node.js  →  onCreateWebpackConfig()  →  config.resolve.alias
```

Tells Gatsby to look at source files ('src') instead of built files ('dist'). Without this, we'll need to build Rollup files (`yarn prepare` inside packages) so that Gatsby will pick up the built files, which is slow and a waste of RAM for your development machine.

 </details>
