# Top-level API

## Penpad

The main component.

```jsx
<Penpad />
```

## useAppContext

Hook for using the Penpad app's state. Useful for plugins.

```jsx
const MyPlugin = () => {
  const { state, actions } = useAppContext()
  actions.addPanel(<Hello />, { order: 30 })
  return null
}
```

```jsx
<Penpad>
  <MyPlugin />
</Penpad>
```
