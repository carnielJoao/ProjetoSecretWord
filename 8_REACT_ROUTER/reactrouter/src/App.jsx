import { useState } from 'react'

import './App.css'

// 1 - Cofiguração do React Router
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';

// pages
import Home from './pages/Home';
import About from './pages/About';
import Product from './pages/Product';
import Info from './pages/Info';
import NotFound from './pages/NotFound';
import Search from './pages/Search';

// components
import NavBar from './components/NavBar';
import SearchForm from './components/SearchForm';




function App() {
  

  return (
    <>
      {/* Tudo que estiver fora do BrowserRouter vai aparecer em todas as paginas, exemplo comuns cabeçalho e rodape */}
      <div>
        <h1>React Router</h1>
        <BrowserRouter>
        <NavBar/>
        {/* 9 - search */}
        <SearchForm />
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/about' element={<About />}/>
            {/* 6 - nested router */}
            <Route path='/products/:id/info' element={<Info/>} />
            {/* 4 - rota dinamica */}
            <Route path='/products/:id' element={<Product/>} />
            {/* 9 - search */}
            <Route path='/search' element={<Search />}/>
            {/* 10 - redirect */}
            <Route path='/company' element={<Navigate to="/about" />}/>
            {/* 7 - no match route */}
            <Route path='*' element={<NotFound />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
