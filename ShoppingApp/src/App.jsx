import { Route, Routes } from 'react-router'
import './App.css'
import Homepage from './pages/Homepage'

function App() {

  return (
    <>
    <Routes>
      <Route index element={<Homepage/>}/>
       <Route path='/checkout' element={<h1>Welcome to checkkout</h1>}/>
      

    </Routes>
    
    </>
  )
}

export default App
