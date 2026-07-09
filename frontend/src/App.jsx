import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home/Home.jsx'
import Movies from './pages/Movies/Movies.jsx'
import MyList from './pages/MyList/MyList.jsx'
import Login from './pages/Login/Login.jsx'

function App() {
  const isAuthenticated = localStorage.getItem('token')

  return (
    
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={isAuthenticated ? <Home /> : <Navigate to="/login" />} />
        <Route path="/movies" element={isAuthenticated ? <Movies /> : <Navigate to="/login" />} />
        <Route path="/mylist" element={isAuthenticated ? <MyList /> : <Navigate to="/login" />} />
      </Routes>
    
  )
}

export default App
