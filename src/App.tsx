import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navibar from './pages/navbar';
import Home from './pages/home';
import Checkout from './pages/checkout';
import PendingOrder from './pages/pendingOrders'
import CompletedOrders from './pages/completedOrders'
import { useEffect, useState } from 'react'
import axios from 'axios';
import Success from './pages/success';
import Footer from './pages/footer'
import { useAppDispatch } from './App/hooks'
import { setMenu2 } from './Redux/menu-slice'


function App() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_BASE_URL}/product`)
      .then((response) => { dispatch(setMenu2(response.data.products)) }
      )
  }, [])

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
      <Footer />
    </div>
  );
}

export default App;
