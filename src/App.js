
import './App.css';
import { Header } from './components/Header';
import { ProductList } from './components/ProductList';
import { useState } from 'react';

function App() {
  const [allProducts, setProducts] = useState([])
  const [total, setTotal] = useState(0)
  const [countProducts, setCount] = useState(0)


  return (

    <>
      <Header allProducts={allProducts} 
      setProducts={setProducts} 
      total = {total}
      setTotal={setTotal}
      countProducts = {countProducts}
      setCount = {setCount}
      />
      <ProductList allProducts={allProducts} 
      setProducts={setProducts} 
      total = {total}
      setTotal={setTotal}
      countProducts={countProducts}
      setCount = {setCount}
      />
    </>

  );
}

export default App;
