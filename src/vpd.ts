export type VpdInput = {
  /** 気温 (℃) */
  tmp: number
  /** 相対湿度 (%) */
  hmd: number
}

export type VpdResult = {
  /** 水蒸気圧 */
  vp: number
  /** 飽和水蒸気量 */
  swv: number
  /** 飽差 (Vapor Pressure Deficit) */
  vpd: number
}

const floor8 = (n: number): number => Math.round(n * 10 ** 9) / 10 ** 9

/**
 * VPD (Vapor Pressure Deficit / 飽差) を気温・相対湿度から求める。
 *
 * - 水蒸気圧 vp = 6.1078 * 10 ^ (7.5 * 気温 / (気温 + 237.3))
 * - 飽和水蒸気量 swv = 217 * vp / (気温 + 273.15)
 * - 飽差 vpd = (100 - 相対湿度) * swv / 100
 */
export const calcVpd = (input: VpdInput): VpdResult => {
  const { tmp, hmd } = input ?? ({} as Partial<VpdInput>)

  if (typeof tmp !== 'number' || typeof hmd !== 'number') {
    throw new TypeError(
      `Expected a { tmp: number, hmd: number }, got ${typeof tmp} ${typeof hmd}`
    )
  }

  const vp = floor8(6.1078 * 10 ** ((7.5 * tmp) / (tmp + 237.3)))
  const swv = floor8((217 * vp) / (tmp + 273.15))
  const vpd = floor8(((100 - hmd) * swv) / 100)

  return { vp, swv, vpd }
}
