import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Register from './Components/Register'
import Login from './Components/Login'
import Index from './Components/Index'

export default function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Register />} />
      <Route path="/index" element={<Index/>} />
      <Route path="/login" element={<Login />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}
