// @flow
const m = require('.')

test('snapshot', () => {
  expect(m({ tmp: 29.2, hmd: 76.5 })).toMatchSnapshot()
  expect(m({ tmp: 29, hmd: 75 })).toMatchSnapshot()
  expect(m({ tmp: 10, hmd: 92 })).toMatchSnapshot()
})
