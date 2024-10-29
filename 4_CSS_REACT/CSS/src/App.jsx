import { useState } from 'react';
import MyComponents from '../components/MyComponents'

import './App.css'
import Title from '../components/Title';

function App() {
  const n = 15;
  const [name] = useState("Matheus");
  const  redTitle = false;

  return (
    <>
      <div>
        {/* css global */}
        <h1>React com CSS</h1>
        {/* css componente */}
        <MyComponents />
        <p>Este paragrafo é do app.js</p>
        {/* Inline Css */}
        <p style={{color: "blue", padding: "25px", borderTop: "2px solid red"}}>
          Este elemento foi estilizado de forma inline
        </p>
        {/* CSS Inline Dinamico */}
        <h2 style={n < 10 ? ({color: "purple"}) : ({color: "pink"})}>CSS Dinamico</h2>
        <h2 style={n > 10 ? ({color: "purple"}) : ({color: "pink"})}>CSS Dinamico</h2>
        <h2 style={name === "Matheus" ? ({color: "green", backgroundColor: "#000"}) : null }>Teste nome</h2>
        {/* Classe dinamica */}
        <h2 className={redTitle ? "red-title" : "title"}>Este título vai ter classe dinamica</h2>
        {/* CSS Modules */}
        <Title />
      </div>
    </>
  )
}

export default App
