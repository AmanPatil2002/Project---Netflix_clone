import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import MovieCard from '../../components/MoviesCard/MovieCard' // ensure this path is correct

function MyList() {
  const [myList, setMyList] = useState([])

  // Load My List from localStorage
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('myList')) || []
    setMyList(stored)
  }, [])

  // Remove movie from My List
  const handleRemove = (id) => {
    const updatedList = myList.filter(m => m.id !== id)
    setMyList(updatedList)
    localStorage.setItem('myList', JSON.stringify(updatedList))
  }

  return (
    <div className="mylist">
      <Navbar />
      <h1 style={{ textAlign: 'center', marginTop: '1rem' }}>My List</h1>

      <div className="movie-list" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem', padding: '20px' }}>
        {myList.length === 0 ? (
          <p style={{ textAlign: 'center' }}>No movies in your list yet.</p>
        ) : (
          myList.map((movie) => (
            <div key={movie.id} style={{ position: 'relative' }}>
              <MovieCard movie={movie} />
              <button
                onClick={() => handleRemove(movie.id)}
                style={{
                  position: 'absolute',
                  top: '10px',
                  right: '10px',
                  backgroundColor: 'red',
                  color: 'white',
                  border: 'none',
                  borderRadius: '5px',
                  padding: '5px 8px',
                  cursor: 'pointer',
                }}
              >
                Remove
              </button>
            </div>
          ))
        )}
      </div>

      <Footer />
    </div>
  )
}

export default MyList
