import React from 'react'
import './MovieCard.css'

const API_BASE = import.meta.env.VITE_API_BASE_URL || 'http://127.0.0.1:8000'

export default function MovieCard({ movie }) {
  const thumb = movie?.thumbnail
  const src = thumb
    ? (thumb.startsWith('http') ? thumb : `${API_BASE}${thumb}`)
    : 'https://via.placeholder.com/200x300?text=No+Thumb'

  
  return (
    <div className='movies_card'>
      <img src={src} alt={movie?.title || 'Movie'}/>
      <h3>{movie?.title}</h3>
      <p>{movie?.release_year} • {movie?.category}</p>
    </div>

  )
}