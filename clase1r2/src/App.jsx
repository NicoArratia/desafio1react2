
import './App.css'
import HomePage from './components/HomePage'
import Contacto from './components/Contacto'
import NotFound from './components/NotFound'

import { Route, Routes } from 'react-router-dom'

function App() {
  

  return (
    <>
      
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/Contacto' element={<Contacto/>} />
        <Route path='/*' element={<NotFound/>}/>
      </Routes> 
    </>
  )
}

export default App
