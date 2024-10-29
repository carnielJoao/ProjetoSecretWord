import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom';


import Products from './pages/Products';
import Home from './pages/home';
import About from './pages/About';
import NavBar from './components/NavBar';


function App() {
  

  return (
   <div>
    <h1>Context</h1>
    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </BrowserRouter>
   </div>
  )
}

export default App
