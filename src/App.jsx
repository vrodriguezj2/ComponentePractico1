import './App.css'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import About from './pages/About'
import Navbar from './complementos/Navbar'
import Footer from './complementos/Footer'

function App() {
 

  return (
    <BrowserRouter>
    <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/About' element={<About/>}></Route>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
    
  )
}

export default App
