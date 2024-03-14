import './App.css';
import Navbar from './components/1- Navbar/Navbar';
import Slider from './components/2- Slider/Slider';
import ProductList from './components/3- ProductList/ProductList';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Slider />
      <ProductList />
    </div>
  );
}

export default App;
