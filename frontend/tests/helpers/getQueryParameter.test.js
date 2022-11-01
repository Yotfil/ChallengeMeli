import { getQueryParameter } from '../../src/helpers/getQueryParameter'

describe('test getQueryParameter function', () => {
  test('should receive a string with a param and return an object', () => {
    const param = '?search=batman'
    const resDesired = {
      search: 'batman',
    }

    const res = getQueryParameter(param)
    expect(res).toEqual(resDesired)
  })
})
