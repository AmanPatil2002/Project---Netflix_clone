import React, { useState } from 'react'
import './MovieDetails.css'

const API_BASE = import.meta.env.VITE_API_BASE_URL || 'http://127.0.0.1:8000'

export default function MovieDetails({ movie }) {
  const [inList, setInList] = useState(false)
  const [playTrailer, setPlayTrailer] = useState(false)

  if (!movie) return <div className="movie-details-loading">Loading...</div>

  const thumb = movie.thumbnail
  const src = thumb
    ? (thumb.startsWith('http') ? thumb : `${API_BASE}${thumb}`)
    : 'https://via.placeholder.com/500x750?text=No+Thumbnail'

  // Extract YouTube video ID
  const getYouTubeId = (url) => {
    if (!url) return null
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
    const match = url.match(regExp)
    return (match && match[2].length === 11) ? match[2] : null
  }

  const youtubeId = getYouTubeId(movie.video_url)

  // "My List"
  const handleMyList = () => {
    let stored = JSON.parse(localStorage.getItem('myList')) || []
    if (inList) {
      stored = stored.filter(m => m.id !== movie.id)
      setInList(false)
    } else {
      stored.push(movie)
      setInList(true)
    }
    localStorage.setItem('myList', JSON.stringify(stored))
  }

  // Toggle trailer modal
  const handlePlayTrailer = () => setPlayTrailer(!playTrailer)

  return (
    <div className="movie-details">
      <div className="movie-bg" style={{ backgroundImage: `url(${src})` }}></div>

      <div className="movie-content">
        <div className="movie-left">
          <img src={src} alt={movie.title} className="movie-poster" />
        </div>

        <div className="movie-right">
          <h1 className="movie-title">{movie.title}</h1>
          <p className="movie-meta">
            {movie.release_year} • {movie.category}
          </p>

          <div className="movie-buttons">
            {youtubeId && (
              <button className="play-btn" onClick={handlePlayTrailer}>
                {playTrailer ? '❚❚ Stop Trailer' : '▶ Play Trailer'}
              </button>
            )}
            <button className={`mylist-btn ${inList ? 'in-list' : ''}`} onClick={handleMyList}>
  {inList ? (
    <>
      <span className="icon">✔</span> My List
    </>
  ) : (
    <>
      <span className="icon">＋</span> My List
    </>
  )}
</button>

          </div>

          <p className="movie-description">{movie.description}</p>
        </div>
      </div>

      {/* Trailer Modal */}
      {playTrailer && youtubeId && (
        <div className="trailer-modal" onClick={handlePlayTrailer}>
          <div className="trailer-container" onClick={(e) => e.stopPropagation()}>
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1`}
              title={`${movie.title} Trailer`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <button className="close-btn" onClick={handlePlayTrailer}>✕</button>
          </div>
        </div>
      )}
    </div>
  )
}
