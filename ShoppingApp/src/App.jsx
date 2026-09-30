import { Route, Routes } from 'react-router'
import './App.css'
import Homepage from './pages/home/Homepage'
import Checkoutpage from './pages/checkout/Checkoutpage'
import Orderpage from './pages/Orderpage'
import Tracking from './pages/Tracking'

function App() {

  return (
    <>
    <Routes>
      <Route index element={<Homepage/>}/>
       <Route path='/checkout' element={<Checkoutpage/>}/>
        <Route path='/orders' element={<Orderpage/>}/>
         <Route path='/tracking' element={<Tracking/>}/>
        
      

    </Routes>
    
    </>
  )
}

export default App
