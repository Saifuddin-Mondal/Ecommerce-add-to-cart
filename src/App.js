import './App.css';
import Cart from "./Component/Cart"
import Show from "./Component/ShowCart"
import { Routes,Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Cart/>}/>
        <Route path="/cart-show" element={<Show/>}/>
      </Routes>
    </div>
  );
}

export default App;
