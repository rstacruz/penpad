# Developer notes

## Testing

```js
# Install denpedencies
yarn

# Start the Gatsby demo
yarn develop
```

Check package.json's `scripts` for some other useful things for development.

## Yarn workspaces

Everything is managed in a Yarn workspace.

- **Most dev dependencies are in the workspace level**. This avoids having to add all the necessary boilerplate in each sub-package (eg, Rollup, Jest, TypeScript).

### Makefile?

The [Makefile](./Makefile) is just a tool to conveniently run a dev setup in Docker.
