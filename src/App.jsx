import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AddForm from './pages/AddForm'

const App = () => {

  return (
    <BrowserRouter>
    <Routes>
        <Route path= "/" element = {<HomePage />}/>
        <Route path= "/Add" element = {<AddForm />}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
