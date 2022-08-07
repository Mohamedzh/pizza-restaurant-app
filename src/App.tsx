import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navibar from './pages/Navbar';
import Home from './pages/Home';
import Checkout from './pages/Checkout';
import PendingOrder from './pages/PendingOrders'
import CompletedOrders from './pages/CompletedOrders'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import axios from 'axios';
import Success from './pages/Success';
import { setMenu } from './Actions/menu.actions';
import Footer from './pages/Footer'

import { createClient } from '@supabase/supabase-js'
import { OrdersReducerType } from './types';
import { addOrder } from './Actions/order.actions';



function App() {
  const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxqZ2pub3h1YmJzcHhpbHFqcHNrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTgyNDE3NDEsImV4cCI6MTk3MzgxNzc0MX0.X5an_7ZDeHSz5as2SsByafHCM9C_SbtjmsHAnEMuqKA';
  const SUPABASE_URL = "https://ljgjnoxubbspxilqjpsk.supabase.co"

  const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);


  const dispatch = useDispatch()
  useEffect(() => {
    axios.get('http://localhost:5000/product')
      .then((response) => { dispatch(setMenu(response.data.products)); console.log(response.data.products) })
  }, [])

  const supa = async () => {
    let { data: product, error } = await supabase
      .from('product')
      .select(`
    *,
    category (
      *
    )
  `)
    console.log(product)
    // dispatch(setMenu(product))
  }
  supa()

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
