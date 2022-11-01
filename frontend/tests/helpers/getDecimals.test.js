import { getDecimals } from '../../src/helpers/getDecimals'

describe('test getDescimals funcstion', () => {
  test('should receive a number with decimals and return the first two decimals only as entire', () => {
    const num = 0.3908
    const res = getDecimals(num)

    expect(res).toBe(39)
  })
})
