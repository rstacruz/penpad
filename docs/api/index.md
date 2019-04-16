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

  useEffect(() => {
    actions.addPanel(MyPanelComponent, { order: 30 })
    return () => {
      actions.removePanel(MyPanelComponent, { order: 30 })
    }
  }, [])

  return null
}
```

```jsx
<Penpad>
  <MyPlugin />
</Penpad>
```
