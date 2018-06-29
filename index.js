// @flow
'use strict'

module.exports = (input /*: { tmp: number, hmd: number } */) => {
  const { tmp, hmd } = input || {}
  if (typeof tmp !== 'number' || typeof hmd !== 'number') {
    throw new TypeError(
      `Expected a { tmp: number, hmd: number }, got ${typeof tmp} ${typeof hmd}`
    )
  }
  // vaporPressur
  const vp = 6.1078 * Math.pow(10, (7.5 * tmp) / (tmp + 237.3))
  const swv = (217 * vp) / (tmp + 273.15)
  // amount of saturated water vapor
  const vpd = ((100 - hmd) * swv) / 100
  return { vp, swv, vpd }
}
