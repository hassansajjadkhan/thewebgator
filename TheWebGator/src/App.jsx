import Home from './Components/Home'
import Services from './Components/Services'
import './Components/Navbar.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/cdn/twg/TheWebGator' element={<Home />} />
        <Route path='/cdn/twg/TheWebGator/services' element={<Services />} />
      </Routes>
    </Router>
  )
}

export default App
