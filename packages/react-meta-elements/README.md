# react-meta-elements

Sets document title and meta tags using React elements (or hooks!). A lightweight alternative to React Helmet.

This project was developed for [Penpad] but can be used anywhere.

## Usage

This package exposes `Title` and `Meta` components.

```js
import { Title, Meta } from 'react-head'

const MyComponent = () => {
  return (
    <>
      <Title title='Hello world!' />
      <Meta name='description' content='This is a description' />
    </>
  )
}
```

## Prior art

react-simple-head is not the first package to let you manage Title and Meta elements. There are other alternatives you can consider:

- [Helmet]: Helmet is a full-featured head tag manager. At time of writing, you need to use v6 (beta) to make it work in a project with React hooks, which is incompatible with the stable v5.

  Unfortunately, this incompatibility makes Helmet not viable for use in reusable packages that may be embedded into projects that may use different versions of Helmet.

- [react-head]: This package follows a very similar API to react-head's. However, react-head requires that you place your entire application into a provider component (`HeadProvider`), while this package doesn't require that.

[helmet]: https://yarn.pm/react-helmet
[react-head]: https://yarn.pm/react-head
[penpad]: https://github.com/rstacruz/penpad
