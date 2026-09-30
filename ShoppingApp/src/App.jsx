import { Route, Routes } from 'react-router'
import './App.css'
import Homepage from './pages/home/Homepage'
import Checkoutpage from './pages/checkout/Checkoutpage'

function App() {

  return (
    <>
    <Routes>
      <Route index element={<Homepage/>}/>
       <Route path='/checkout' element={<Checkoutpage/>}/>
      

    </Routes>
    
    </>
  )
}

export default App
