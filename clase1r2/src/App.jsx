
import './App.css'
import HomePage from './components/HomePage'
import Contacto from './components/Contacto'
import NotFound from './components/NotFound'
import NavBarMenu from './components/NavBarMenu'

import { Route, Routes } from 'react-router-dom'


function App() {
  

  return (
    <>
      <NavBarMenu/>
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/Contacto' element={<Contacto/>} />
        <Route path='/*' element={<NotFound/>}/>
      </Routes> 
    </>
  )
}

export default App
