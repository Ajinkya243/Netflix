import React from 'react'
import { IMG_CDN } from '../utils/constants'

const MovieCard = ({poster}) => {
  if(!poster) return;
  return (
    <div className='w-48'>
        <img src={`${IMG_CDN}${poster}`} alt="Movie Card" className='w-[200px] h-[200px] md:w-[200px] md:h-[300px]' />
    </div>
  )
}

export default MovieCard