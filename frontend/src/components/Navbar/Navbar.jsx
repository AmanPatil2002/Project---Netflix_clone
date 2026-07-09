import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  const navigate = useNavigate()
  const [showSearch, setShowSearch] = useState(false)
  const [query, setQuery] = useState('')
  
  const handleSearchSubmit = (e) => {
  e.preventDefault()
  if (query.trim() !== '') {
    navigate(`/movies?search=${encodeURIComponent(query)}`)
    setShowSearch(false)
    setQuery('')
  }
}


  const handleLogout = () => {
    localStorage.removeItem('token')
    navigate('/login')
  }

  return (
    <div className="navbar">
      <div className="navbar-left">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
          alt="Netflix Logo"
          className="navbar-logo"
          onClick={() => navigate('/home')}
        />
        <ul>
          <li>
            <NavLink to="/home" className={({ isActive }) => (isActive ? 'active-link' : '')}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/movies" className={({ isActive }) => (isActive ? 'active-link' : '')}>
              Movies
            </NavLink>
          </li>
          <li>
            <NavLink to="/mylist" className={({ isActive }) => (isActive ? 'active-link' : '')}>
              My List
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="navbar-right">
        <div className={`search-container ${showSearch ? 'active' : ''}`}>
          <i
            className="fas fa-search navbar-icon"
            onClick={() => setShowSearch(!showSearch)}
          ></i>
          {showSearch && (
            <form onSubmit={handleSearchSubmit}>
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search movies..."
                className="search-input"
                autoFocus
              />
            </form>
          )}
        </div>


        <i className="fas fa-bell navbar-icon"></i>

        <div className="navbar-profile">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt="Profile"
            className="navbar-profile-icon"
          />
          <i className="fas fa-caret-down navbar-icon"></i>
          <div className="navbar-dropdown">
            <ul>
              <li onClick={handleLogout}>Logout</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
