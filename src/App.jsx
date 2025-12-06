import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AddForm from './pages/AddForm'
import UpdateForm from './pages/UpdateForm'

const App = () => {

  return (
    <BrowserRouter>
    <Routes>
        <Route path= "/" element = {<HomePage />}/>
        <Route path= "/Add" element = {<AddForm />}/>
        <Route path= "/Edit" element = {<UpdateForm />}/>

    </Routes>
    </BrowserRouter>
  )
}

export default App
