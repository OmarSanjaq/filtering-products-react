import logo from './logo.svg';
import './App.css';

function App() {  const products = [
  { name: 'Laptop', category: 'Electronics', price: 999 },
  { name: 'Headphones', category: 'Electronics', price: 199 },
  { name: 'T-Shirt', category: 'Clothing', price: 25 },
  { name: 'Jeans', category: 'Clothing', price: 50 },
];

const [filter, setFilter] = useState('All');

const filteredProducts = filter === 'All'
  ? products
  : products.filter(product => product.category === filter);

return (
  <div>
    <h1>Product List</h1>
    <div id="filter-section">
      <button onClick={() => setFilter('All')}>All</button>
      <button onClick={() => setFilter('Electronics')}>Electronics</button>
      <button onClick={() => setFilter('Clothing')}>Clothing</button>
    </div>
    <ProductList products={filteredProducts} />
  </div>
);
}

export default App;
