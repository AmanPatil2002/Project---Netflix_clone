import React, { useState, useEffect } from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar.jsx'
import NetflixCarousel from '../../components/NetflixCarousel/NetflixCarousel.jsx'
import MovieCard from '../../components/MoviesCard/MovieCard.jsx'
import axios from 'axios'
import Footer from '../../components/Footer/Footer.jsx'


function Home() {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/movies/')
      .then(resp => setMovies(resp.data))
      .catch(err => console.error('Failed to load movies:', err))
  }, [])

 
  return (
    <div className='home'>
      <Navbar />
      <div className="carousel_design">
        <NetflixCarousel />
      </div>

      <div className="movies_design">
  <h1>Popular on Netflix</h1>
  <div className="movie_list">
    <div className="scroll_container">
      <div className="movie_grid">
        {movies
          .sort((a, b) => a.id - b.id)
          .slice(0, 10) // limit for clean UI
          .map((m) => (
            <MovieCard key={m.id} movie={m} />
          ))}
      </div>
    </div>
  </div>
</div>

<div className="movies_design">
  <h1>Newly Released</h1>
  <div className="movie_list">
    <div className="scroll_container">
      <div className="movie_grid">
        {movies
          .filter((m) => m.release_year >= new Date().getFullYear()) // future or current year
          .map((m) => (
            <MovieCard key={m.id} movie={m} />
          ))}
      </div>
    </div>
  </div>
</div>

<div className="movies_design">
  <h1>Top Picks for You</h1>
  <div className="movie_list">
    <div className="scroll_container">
      <div className="movie_grid">
        {movies
          .filter((m) => m.category && m.category.toLowerCase().includes('Thriller'.toLowerCase())) // example category filter
          .map((m) => (
            <MovieCard key={m.id} movie={m} />
          ))}
      </div>
    </div>
  </div>
</div>

      <Footer />
    </div>
  )
}

export default Home

