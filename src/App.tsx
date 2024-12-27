import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import Landing from './page/Landing/Landing'
import AboutMe from './page/AboutMe/AboutMe'
import Docs from './page/Docs/Docs'
import Tools from './page/Tools/Tools'
import Ressource from './page/Ressource/Ressource'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Landing />} />
        <Route path="/docs" element={<Docs />} />
        <Route path="/tools" element={<Tools />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/ressources" element={<Ressource />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
