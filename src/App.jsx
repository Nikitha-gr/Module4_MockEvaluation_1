import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/pages/Navbar'
import { Container } from '@chakra-ui/react'
import { Route, Routes } from 'react-router-dom'
import Productlist from './components/pages/ProductList'
import Cart from './components/pages/Cart'
import Checkout from './components/pages/Checkout'
import OrderSuccess from './components/pages/OrderSuccess'

function App() {

  return (
    <div>
      <Navbar />
      <Container fluid mt={8}>
        <Routes>
          <Route path="/" element={<Productlist />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/ordersuccess" element={<OrderSuccess />} />
        </Routes>
      </Container>
    </div>
  )
}

export default App
