import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const Secondarycontainer = () => {
  const{nowPlayingMovies,popularMovies,topRatedMovies,upComingMovies}=useSelector(state=>state.movies);
  return (
    <>
    {nowPlayingMovies.length ?
    <div className='bg-black'>
    <div className='-mt-52 z-10 relative pl-12'>
      <MovieList title={"Now Playing"} movies={nowPlayingMovies}/>
      <MovieList title={"Popular"} movies={popularMovies}/>
      <MovieList title={"Top Rated"} movies={topRatedMovies} />
      <MovieList title={"Upcoming"} movies={upComingMovies} />
    </div>
    </div>:null}
    </>
  )
}

export default Secondarycontainer