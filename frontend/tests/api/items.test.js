import { getItemRequest, getItemsRequest } from '../../src/api/items'

describe('test getItemRequest function', () => {
  test('should receive an ID and return an item object', async () => {
    const itemDesired = {
      id: expect.any(String),
      title: expect.any(String),
      price: {
        currency: expect.any(String),
        amount: expect.any(String),
        decimals: expect.any(String),
      },
      picture: expect.any(String),
      free_shipping: expect.any(Boolean),
      condition: expect.any(String),
      sold_quantity: expect.any(Number),
      category: expect.anything(),
    }

    const id = 'MLA896788691'

    const { response } = await getItemRequest(id)
    expect(response.item).toEqual(itemDesired)
  })

  test('should receive an ID and return a signature object', async () => {
    const signatureDesired = {
      name: 'Jefry',
      lastname: 'Guevara',
    }

    const id = 'MLA896788691'

    const { response } = await getItemRequest(id)
    expect(response.author).toEqual(signatureDesired)
  })

  test('should receive a wrong ID and return an error message', async () => {
    const id = 'MLA89678869100'

    const errorMessage = 'Something went wrong'

    const res = await getItemRequest(id)
    expect(res.msg).toBe(errorMessage)
  })
})

describe('test getItemsRequest', () => {
  const query = 'sailormoon'

  test('should receive a query and return an array with 50 items', async () => {
    const { response } = await getItemsRequest(query)
    expect(response.items).toHaveLength(50)
  })

  test('should receive a query and return a signature object', async () => {
    const signatureDesired = {
      name: 'Jefry',
      lastname: 'Guevara',
    }

    const { response } = await getItemsRequest(query)
    expect(response.author).toEqual(signatureDesired)
  })

  test('should receive a query and return a array of categories', async () => {
    const categoryDesired = {
      id: expect.any(String),
      name: expect.any(String),
    }

    const { response } = await getItemsRequest(query)
    const [item] = response.categories
    expect(item).toEqual(categoryDesired)
  })

  test('should receive a wrong query and return an error message', async () => {
    const errorMessage = 'Something went wrong'
    const wrongQuery = 'aasdfasdf'

    const res = await getItemsRequest(wrongQuery)
    expect(res.msg).toEqual(errorMessage)
  })
})
