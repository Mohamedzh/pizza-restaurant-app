import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navibar from './pages/Navbar';
import Home from './pages/Home';
import Checkout from './pages/Checkout';
import PendingOrder from './pages/PendingOrders'
import CompletedOrders from './pages/CompletedOrders'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import axios from 'axios';
import Success from './pages/Success';
import { setMenu } from './Actions/menu.actions';


function App() {

  const dispatch = useDispatch()
  useEffect(() => { axios.get('http://localhost:5000/product')
  .then((response) => {dispatch(setMenu(response.data.products)); console.log(response.data.products)}) }, [])

  return (
    <div className="App">
      <Navibar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/success" element={<Success />} />
        <Route path='/kitchen/pending' element={<PendingOrder />} />
        <Route path="/kitchen/completed" element={<CompletedOrders />} />
      </Routes>
    </div>
  );
}

export default App;
