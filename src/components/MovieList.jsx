import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title,movies}) => {
  return (
    <div className='px-6 py-2'>
        <h1 className="py-2 text-3xl text-white">{title}</h1>
    <div className='px-6 py-2 overflow-x-scroll scrollbar-hover'>
    <div className='flex'>  
        <div className='flex gap-3'>
         {movies.map(el=>(
            <MovieCard key={el.id} poster={el.poster_path}/>
         ))  
        }
        </div>
    </div>
    </div>
    </div>
  )
}

export default MovieList