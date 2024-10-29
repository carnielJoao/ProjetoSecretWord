import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ListerCarros from '../components/ListerCarros'

function App() {

  const carros = [
    {Modelo: "Golf", km: 0, color: "Vermelho"},
    {Modelo: "Nivus", km: 22000, color: "Verde"},
    {Modelo: "Jetta", km: 100, color: "Branco"}
  ]

  return (
    <>
      <div>
        <h1 className='h1Escolhido'>Titulo escolhido</h1>
        {carros.map((carro) => (
          <ListerCarros 
            Modelo={carro.Modelo}
            km={carro.km}
            color={carro.color}
          />
        ))}
      </div>
    </>
  )
}

export default App
