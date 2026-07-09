import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios'
import MovieDetails from '../../components/MovieDetails/MovieDetails.jsx'
import Navbar from '../../components/Navbar/Navbar.jsx'
import Footer from '../../components/Footer/Footer.jsx'

const API_BASE = import.meta.env.VITE_API_BASE_URL || 'http://127.0.0.1:8000'

function Movies() {
  const [allMovies, setAllMovies] = useState([])
  const [filteredMovies, setFilteredMovies] = useState([])
  
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)
  const searchQuery = searchParams.get('search')?.toLowerCase() || ''

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(`${API_BASE}/api/movies/`)
        setAllMovies(response.data)
      } catch (err) {
        console.error('Error fetching movies:', err)
      }
    }
    fetchMovies()
  }, [])

  useEffect(() => {
    if (searchQuery) {
      const filtered = allMovies.filter((movie) =>
        movie.title.toLowerCase().includes(searchQuery)
      )
      setFilteredMovies(filtered)
    } else {
      setFilteredMovies(allMovies)
    }
  }, [searchQuery, allMovies])

  return (
    <div>
      <Navbar />
          <div className="movies-page">
        {searchQuery ? (
          <h2>Search results for "{searchQuery}"</h2>
        ) : (
          <h2 style={{ textAlign: 'center' }}>All Movies</h2>
        )}
        <div className="movies-grid">
          {filteredMovies.length > 0 ? (
            filteredMovies.map((movie) => <MovieDetails key={movie.id} movie={movie} />)
          ) : (
            <p>No movies found.</p>
          )}
        </div>
    </div>
    <Footer />
    </div>
  )
}

export default Movies
