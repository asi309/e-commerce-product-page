import { Navbar, ProductDetails } from './components';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <ProductDetails />
      </main>
    </div>
  );
}

export default App;
