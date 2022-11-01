import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { itemsContext } from '../../src/context/ItemsContext'
import Items from '../../src/pages/items/Items'

describe('first', () => {
  test('should first', async () => {
    const items = [
      {
        id: 'MLA1116449990',
        title: 'Cactus Oscar Juguete Luminoso Baila Habla Imitador Para Bebe',
        price: { currency: 'ARS', amount: '5.059', decimals: '0.08' },
        picture:
          'http://http2.mlstatic.com/D_749546-MLA51277717954_082022-O.jpg',
        free_shipping: false,
        condition: 'new',
      },
      {
        id: 'MLA864156020',
        title: 'Combo Figuras Dc. Batman, El Guason Y Nightwing',
        price: { currency: 'ARS', amount: '5.490', decimals: '0.00' },
        picture:
          'http://http2.mlstatic.com/D_945505-MLA42330082810_062020-I.jpg',
        free_shipping: false,
        condition: 'new',
      },
      {
        id: 'MLA849382617',
        title: 'Muñeco Batman Missions 15cm Mattel Original!!',
        price: { currency: 'ARS', amount: '1.305', decimals: '0.00' },
        picture:
          'http://http2.mlstatic.com/D_997212-MLA41913881928_052020-I.jpg',
        free_shipping: false,
        condition: 'new',
      },
    ]

    render(
      <BrowserRouter>
        <itemsContext.Provider value={{ items }}>
          <Items />
        </itemsContext.Provider>
      </BrowserRouter>
    )

    const itemsRendered = await screen.findAllByRole('list')
    expect(itemsRendered).toBeTruthy()
  })
})
