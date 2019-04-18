# Developer notes

## Testing

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

## Yarn workspaces

Everything is managed in a Yarn workspace.

- **Most dev dependencies are in the workspace level**. This avoids having to add all the necessary boilerplate in each sub-package (eg, Rollup, Jest, TypeScript).

### Makefile?

The [Makefile](./Makefile) is just a tool to conveniently run a dev setup in Docker.

## Package management

Managed using [Lerna](https://github.com/lerna/lerna).

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
