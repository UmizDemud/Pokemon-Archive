import { Navigate, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { Home } from './pages/Home'
import { PokemonPage } from './pages/Pokemon/PokemonPage'
import { Pokedex } from './pages/Pokemon/Pokedex'
import { MovesPage } from './pages/Move/MovesPage'
import { NotFound } from './pages/NotFound'
import { Gallery } from './pages/Gallery'


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="pokedex" element={<Pokedex />} />
        <Route path="pokemon/:id" element={<PokemonPage />} />          
        <Route path="move">
          <Route index element={<MovesPage />} />
        </Route>
        <Route path="gallery/:id?" element={<Gallery />} />
        <Route index element={<Home />} />
        <Route path="home" element={<Navigate to="/" />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
export default App
