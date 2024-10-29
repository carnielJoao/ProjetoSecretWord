import { Fragment, useState } from 'react'
import './App.css'

import City from './assets/City.jpg';
import ManagerData from './components/ManagerData';
import ListRender from './components/ListRender';
import ConditionalRender from './components/ConditionalRender';
import ShowUserName from './components/ShowUserName';
import CarDetails from './components/CarDetails';
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';
import UserDetails from './components/UserDetails';
// import Message from './components/Message';

function App() {
  const [count, setCount] = useState(0)

  const cars = [
    {id: 1, brand: "Ferrari", color: "Amarela", newCar: true, km: 0},
    {id: 2, brand: "Kia", color: "branco", newCar: false, km: 3200},
    {id: 3, brand: "Renault", color: "Azul", newCar: false, km: 430}
  ]

  function showMessage() {
    console.log("Mostrando a mensagem")
  }

  const [messagem, setMessage] = useState("");

  const handleMessage = (msg) => {
    setMessage(msg);
  };



  const pessoas = [
    {nome: "Pedro", idade: 33, profissao: "Programador"},
    {nome: "João", idade: 21, profissao: "Estagiario"},
    {nome: "Marcos", idade: 53, profissao: "Medico"}
  ]


  return (
    <>
      <div>
        <h1>Avançando no React!</h1>
        {/* Imagem em public */}
        <div>
          <img src="/img1.jpg" alt="Paisagem" />
        </div>
        {/* Imagem em asset */}
        <div>
          <img src={City} alt="Cidade" />
        </div>
        <ManagerData />
        <ListRender />
        <ConditionalRender />
        {/* props */}
        <ShowUserName name="João" />
        {/* destructuring */}
        <CarDetails brand="VW" km={10000} color="Azul" newCar={false}/>
        {/* reaproveitamento */}
        <CarDetails brand="Ford" color="Vermelha" km={0} newCar={true}/>
        <CarDetails brand="Fiat" color="Branco" km={500} newCar={false}/>
        { /* Loop em array de objetos */}
        {cars.map((car) => (
          <CarDetails 
            brand={car.brand} 
            color={car.color} 
            km={car.km} 
            newCar={car.newCar} 
          />
        ))}
        {/* fragement */}
        <Fragment propFragment="Teste"/>
        {/* children */}
        <Container myValue="testando">
          <p>este é o conteudo </p>
        </Container>
        <Container myValue="testando 2">
         <h5>Tesdando o container</h5>
        </Container>
        {/* executar função */}
        <ExecuteFunction myFunction={showMessage} />
        {/* State lite */}
        {/* <Message msg={message} /> */}
        {/* Desafio 4 */}
        {pessoas.map((pessoa) => (
          <UserDetails 
            nome={pessoa.nome}
            idade={pessoa.idade}
            profissao={pessoa.profissao}
          />
        ))}
      </div>
    </>
  )
}

export default App
