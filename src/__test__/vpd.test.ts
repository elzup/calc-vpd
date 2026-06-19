import { describe, expect, it } from 'vitest'
import { calcVpd } from '../vpd.js'

describe('calcVpd', () => {
  it('computes vp / swv / vpd (29.2℃, 76.5%)', () => {
    expect(calcVpd({ tmp: 29.2, hmd: 76.5 })).toEqual({
      vp: 40.518038231,
      swv: 29.080252344,
      vpd: 6.833859301,
    })
  })

  it('computes vp / swv / vpd (29℃, 75%)', () => {
    expect(calcVpd({ tmp: 29, hmd: 75 })).toEqual({
      vp: 40.052795772,
      swv: 28.765370453,
      vpd: 7.191342613,
    })
  })

  it('computes vp / swv / vpd (10℃, 92%)', () => {
    expect(calcVpd({ tmp: 10, hmd: 92 })).toEqual({
      vp: 12.278920335,
      swv: 9.410297414,
      vpd: 0.752823793,
    })
  })

  it('returns vpd = 0 at 100% humidity (saturated)', () => {
    expect(calcVpd({ tmp: 25, hmd: 100 }).vpd).toBe(0)
  })

  it('rounds all outputs to 9 decimal places', () => {
    const { vp, swv, vpd } = calcVpd({ tmp: 21.3, hmd: 48.2 })
    for (const value of [vp, swv, vpd]) {
      expect(Number(value.toFixed(9))).toBe(value)
    }
  })

  it('handles 0℃ without dividing by zero', () => {
    const result = calcVpd({ tmp: 0, hmd: 50 })
    expect(Number.isFinite(result.vp)).toBe(true)
    expect(Number.isFinite(result.swv)).toBe(true)
    expect(Number.isFinite(result.vpd)).toBe(true)
  })

  describe('invalid arguments', () => {
    it('throws TypeError when tmp is missing', () => {
      // @ts-expect-error intentionally invalid
      expect(() => calcVpd({ hmd: 92 })).toThrow(TypeError)
      // @ts-expect-error intentionally invalid
      expect(() => calcVpd({ hmd: 92 })).toThrow(
        'Expected a { tmp: number, hmd: number }, got undefined number'
      )
    })

    it('throws TypeError when hmd is not a number', () => {
      // @ts-expect-error intentionally invalid
      expect(() => calcVpd({ tmp: 10, hmd: 'abc' })).toThrow(
        'Expected a { tmp: number, hmd: number }, got number string'
      )
    })

    it('throws TypeError when called with no argument', () => {
      // @ts-expect-error intentionally invalid
      expect(() => calcVpd()).toThrow(TypeError)
    })
  })
})
