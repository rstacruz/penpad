# Generic installation instructions

```js
import { Penpad } from 'penpad'
```

Put the `Penpad` component anywhere in your website.

```js
<Penpad
  specimens={{
    'SpecimenOne': {
      view: () => <button>I am a button!</button>,
      width: 200
    },

    'SpecimenTwo': {
      view: () => <button>I am a button!</button>
      width: 200
    }
  }}
/>
```
