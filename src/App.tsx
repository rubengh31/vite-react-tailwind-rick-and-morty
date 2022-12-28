import { Route, Routes } from 'react-router-dom'
import { Navbar } from './components'
import { Characters, Episodes, Locations } from './pages'

function App () {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/episodes" element={<Episodes />}></Route>
        <Route path="/characters" element={<Characters />}></Route>
        <Route path="/locations" element={<Locations />}></Route>
      </Routes>
    </>
  )
}

export default App
