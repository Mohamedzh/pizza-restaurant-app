import './App.css';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/navbar';
import Home from './pages/home';
import Checkout from './pages/checkout';
import PendingOrder from './pages/pendingOrders'
import CompletedOrders from './pages/completedOrders'
import { useEffect, useState } from 'react'
import axios from 'axios';
import Success from './pages/success';
import Footer from './pages/footer'
import { useAppDispatch } from './App/hooks'
import { setMenu } from './Redux/menu-slice'


const App = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_BASE_URL}/product`)
      .then((response) => { dispatch(setMenu(response.data.products)) }
      )
  }, [])

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/:id" element={<Home />} /> */}
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
