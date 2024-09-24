import Home from './Components/Home/Home'
import Services from './Components/Services/Services'
import ContactUs from './Components/ContactUs/ContactUs'
import './Components/Boilerplate/Navbar.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/cdn/twg/TheWebGator' element={<Home />} />
        <Route path='/cdn/twg/TheWebGator/services' element={<Services />} />
        <Route path='/cdn/twg/TheWebGator/contactus' element={<ContactUs />} />
      </Routes>
    </Router>
  )
}

export default App
