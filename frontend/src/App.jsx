import { Route, Routes } from 'react-router-dom'
import SearchBar from './components/searchBar/SearchBar'
import { ItemsProvider } from './context/ItemsContext'
import Detail from './pages/detail/Detail'
import Items from './pages/items/Items'

function App() {
  return (
    <div className='App'>
      <ItemsProvider>
        <SearchBar></SearchBar>
        <Routes>
          <Route
            path='/'
            element={<></>}
          />
          <Route
            path='/items'
            element={<Items />}
          />
          <Route
            path='/items/:id'
            element={<Detail />}
          />
        </Routes>
      </ItemsProvider>
    </div>
  )
}

export default App
