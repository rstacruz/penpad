# @penpad/plugin-logger

Logger plugin for Penpad

## Usage

Add `<LoggerPlugin />` to your Penpad component.

```js
import { LoggerPlugin } from '@penpad/plugin-logger'
```

```js
<Penpad>
  <LoggerPlugin />

  {/* other Penpad definitioms here */}
</Penpad>
```

### Logging entries

Use the `useLogger()` React hook to return a logging function.

```js
import { useLogger } from '@penpad/plugin-logger'

const YourComponent = () => {
  const log = useLogger()

  return (
    <button
      onClick={() => {
        log('Clicked!')
      }}
    >
      Click me!
    </button>
  )
}
```

### Logging entries in class components

There is also a `<UseLogger>` render prop component.

```js
import { UseLogger } from '@penpad/plugin-logger'
```

```jsx
<UseLogger>
  {({ log }) => (
    <Specimen id='Another specimen'>
      <button
        onClick={() => {
          log('Hello, I was clicked on ' + new Date().toString())
        }}
      >
        Click me
      </button>
    </Specimen>
  )}
</UseLogger>
```
