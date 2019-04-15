import combineContext from './combineContext'

it('works', () => {
  const ctx = key => ({ [key]: key })
  ctx.keys = () => ['a', 'b']

  const result = combineContext(ctx)

  expect(result).toEqual({
    a: 'a',
    b: 'b'
  })
})
