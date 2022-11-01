import {
  render,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react'
import { getItemRequest } from '../../src/api/items'
import Detail from '../../src/pages/detail/Detail'

jest.mock('../../src/api/items')

jest.mock('../../src/context/ItemsContext', () => ({
  useItems: () => ({
    setCategories: jest.fn(),
  }),
}))

describe('Testing Detail component', () => {

  test('should find the title and description of the product', async () => {
    const data = {
      ok: true,
      response: {
        author: {
          name: 'Jefry',
          lastname: 'Guevara',
        },
        item: {
          id: 'MLA1200097949',
          title: 'Toy',
          price: { currency: 'ARS', amount: '4.348', decimals: '0.00' },
          picture:
            'http://http2.mlstatic.com/D_675847-MLA41745865015_052020-I.jpg',
          free_shipping: false,
          condition: 'new',
          sold_quantity: 1,
          description: 'Description',
          category: [
            { id: 'MLA1132', name: 'Juegos y Juguetes' },
            { id: 'MLA432888', name: 'Muñecos y Muñecas' },
            { id: 'MLA3422', name: 'Muñecos y Figuras de Acción' },
          ],
        },
      },
    }
    getItemRequest.mockReturnValue(data)
    render(<Detail />)
    waitForElementToBeRemoved(() => screen.findByTestId('loading'))

    const title = await screen.findByText('Toy')
    const descrption = await screen.findByText('Description')

    expect(title).toBeTruthy()
    expect(descrption).toBeTruthy()
  })
})
