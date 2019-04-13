# Generic installation instructions

```js
import { Penpad } from 'penpad'
```

Put the `Penpad` component anywhere in your website.

```js
<Penpad
  specimens={{
    'SpecimenOne': {
      render: () => <button>I am a button!</button>,
      width: 200
    },

    'SpecimenTwo': {
      render: () => <button>I am a button!</button>
      width: 200
    }
  }}
/>
```
