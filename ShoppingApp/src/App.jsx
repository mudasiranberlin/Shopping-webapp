import { Route, Routes } from 'react-router'
import './App.css'
import Homepage from './pages/home/Homepage'
import Checkoutpage from './pages/checkout/Checkoutpage'
import Orderpage from './pages/Orderpage'
import Tracking from './pages/Tracking'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
  const [cart,setCart]= useState([])
  useEffect(()=>{
    axios.get('http://localhost:8000/api/v1/cart-items')
  .then((response)=>{
    // setProducts(response.data.data);
     setCart(response.data.data);
     console.log(response.data.data);
     
  })
  },[])

  return (
    <>
    <Routes>
      <Route index element={<Homepage cart={cart}/>}/>
       <Route path='/checkout' element={<Checkoutpage cart={cart} />}/>
        <Route path='/orders' element={<Orderpage/>}/>
         <Route path='/tracking' element={<Tracking/>}/>
        
      

    </Routes>
    
    </>
  )
}

export default App
