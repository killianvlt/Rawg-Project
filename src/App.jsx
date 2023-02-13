import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Search from './pages/Search/Search'
import Game from './pages/Game/Game'
import NotFound from './pages/NotFound/NotFound'
function App() {

  return (
    <>
      <Routes>
        <Route path='*' element={<NotFound/>} />
        <Route path="/" element={<Home />}  />
        <Route path='/search/:id' element={<Search />} />
        <Route path="/game/:id" element={<Game />} />
      </Routes>
    </>
  )
}

export default App
