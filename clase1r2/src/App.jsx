
import './App.css'
import HomePage from './HomePage'
import Contacto from './Contacto'

import { Route, Routes } from 'react-router-dom'

function App() {
  

  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/Contacto' element={<Contacto/>} />
      </Routes> 
    </>
  )
}

export default App
