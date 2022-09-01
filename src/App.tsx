import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navibar from './pages/Navbar';
import Home from './pages/Home';
import Checkout from './pages/Checkout';
import PendingOrder from './pages/PendingOrders'
import CompletedOrders from './pages/CompletedOrders'
import { useEffect, useState } from 'react'
import axios from 'axios';
import Success from './pages/Success';
import Footer from './pages/Footer'
import { createClient } from '@supabase/supabase-js'
import { useAppDispatch } from './App/hooks'
import { setMenu2 } from './Redux/menu-slice'


function App() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    axios.get('http://localhost:5000/product')
      .then((response) => { dispatch(setMenu2(response.data.products)) })
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
