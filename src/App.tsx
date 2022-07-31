import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navibar from './pages/Navbar';
import Home from './pages/Home';
import Checkout from './pages/Checkout';
import PendingOrder from './pages/PendingOrders'
import CompletedOrders from './pages/CompletedOrders'
import { useState } from 'react'
import Success from './pages/Success';


function App() {
  
  
  return (
    <div className="App">
      <Navibar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/success" element={<Success />} />
        <Route path='/kitchen/pending' element={<PendingOrder/>}/>
        <Route path="/kitchen/completed" element={<CompletedOrders/>}/>
      </Routes>
    </div>
  );
}

export default App;
