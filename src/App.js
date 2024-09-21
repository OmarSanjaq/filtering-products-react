import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import ProductList from './components/ProductList';
function App() {  
  const products = [
  { name: 'Laptop', category: 'Electronics', price: 2800 },
  { name: 'Headphones', category: 'Electronics', price: 240 },
  { name: 'T-Shirt', category: 'Clothing', price: 70 },
  { name: 'Jeans', category: 'Clothing', price: 130 },
];

const [filter, setFilter] = useState('All');

const filteredProducts = filter === 'All' ? products: 
products.filter(product => product.category === filter);

return (
  <div>
    <h1>Product List</h1>
    <div id="filter-section">
      <button onClick={() => setFilter('All')}>All</button>
      <button onClick={() => setFilter('Electronics')}>Electro nics</button>
      <button onClick={() => setFilter('Clothing')}>Clothing</button>
    </div>
    <ProductList products={filteredProducts} />
  </div>
);
}

export default App;
