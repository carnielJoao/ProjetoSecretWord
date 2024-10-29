import './App.css';

import { useEffect, useState } from 'react';

// 4 - custom hook
import { useFetch } from './hooks/useFetch';

const url = "http://localhost:3000/products";

function App() {

  // 4 - custom Hooks
  const {data: items, httpConfig, loading, error } = useFetch(url)


  const [products, setProducts] = useState([]);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  // 1 - Resgatando dados
  // useEffect(() => {
  //   async function fetchData() {
  //     const res = await fetch(url)
  //     const data = await res.json();

  //     setProducts(data);
  //   }

  //   fetchData();
  // }, []);

  // 2 - Add de produtos
  const handleSubmit = async (e) => {
    e.preventDefault()

    const product = {
      name,
      price,
    };

    // const res = await fetch(url, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json"
    //   },
    //   body: JSON.stringify(product),
    // });

    // // 3 - Carregamento dinamico 
    // const addProduct = await res.json();

    // setProducts((prevProducts) => [...prevProducts, addProduct])

    // 5 - refatorando post
    httpConfig(product, "POST");

    setName("");
    setPrice("");
  };

  // Desafio 6 Remover Produto

  const handleRemove = (id) => {
   httpConfig(id, "DELETE");
  };


  return (
    <>
      <div className='App'>
        <h1>Lista de Produtos</h1>
        {/* 6 - loading */}
        {loading && <p>Carregando os dados...</p>}
        {error && <p>{error}</p>}
        {!error && (
          <ul>
            {items && items.map((product) => (
              <li key={product.key}>{product.name} - R${product.price} <button onClick={() => handleRemove(product.id)}>Deletar</button></li>
            ))}
          </ul>
        )}
        <div className="add-procuct">
          <form onSubmit={handleSubmit}>
            <label>
              Nome:
              <input type="text" value={name} name='name' onChange={(e) => setName(e.target.value)}></input>
            </label>
            <label>
              Preço:
              <input type="number" value={price} name='price' onChange={(e) => setPrice(e.target.value)}></input>
            </label>
            {/* 7 - state de loading no post */}
            {loading && <input type='submit' value='Aguarde' disabled/>}
            {!loading && <input type='submit' value='Criar' />} 
          </form>
        </div>
      </div>
    </>
  )
}

export default App
