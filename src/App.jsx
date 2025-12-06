import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AddForm from './pages/AddForm'
import UpdateForm from './pages/UpdateForm'
import DetailsPage from './pages/DetailsPage'

const App = () => {

  return (
    <BrowserRouter>
    <Routes>
        <Route path= "/" element = {<HomePage />}/>
        <Route path= "/Add" element = {<AddForm />}/>
        <Route path= "/Edit/:id" element = {<UpdateForm />}/>
        <Route path= "/:id" element = {<DetailsPage />}/>

    </Routes>
    </BrowserRouter>
  )
}

export default App
