import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies)
  return (
    movies.nowPlayingMovies && (
      <div className='  bg-black'> 
      <div className='z-30 relative -mt-52 pl-12'>
      <MovieList title={`Now Playing`} movies={movies.nowPlayingMovies} />
      <MovieList title={`Up Coming Movies`} movies={movies.upComingMovies} />
      <MovieList title={`Popular movies`} movies={movies.popularMovies} />
      <MovieList title={`Top Rated Movies`} movies={movies.topRatedMovies} />
     
      </div>
    </div>
    )
  )
}

export default SecondaryContainer
