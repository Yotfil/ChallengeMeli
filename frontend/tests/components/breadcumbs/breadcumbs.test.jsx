import { render, screen } from '@testing-library/react'
import Breadcumbs from '../../../src/components/breadcumbs/Breadcumbs'
import { itemsContext } from '../../../src/context/ItemsContext'

describe('Testing breadcumbs component', () => {
  test('should return the same amount of breadcrumbs as those received in the data ', () => {
    const categories = [
      {
        id: 'MLA1132',
        name: 'Juegos y Juguetes',
      },
      {
        id: 'MLA432888',
        name: 'Muñecos y Muñecas',
      },
      {
        id: 'MLA3422',
        name: 'Muñecos y Figuras de Acción',
      },
    ]
    
    render(
      <itemsContext.Provider value={{ categories }}>
        <Breadcumbs />
      </itemsContext.Provider>
    )
    const items = screen.getAllByTestId('breadcumbs')
    expect(items).toHaveLength(categories.length)
  })

  test('should return a void div', () => {
    const categories = []
    render(
      <itemsContext.Provider value={{ categories }}>
        <Breadcumbs />
      </itemsContext.Provider>
    )
    const voidItem = screen.getByTestId('void')
    expect(voidItem.innerHTML).toBe('')
  })
})
