import React, { useEffect } from 'react'
import GptSearchBar from './GptSearchBar'
import { BG_URL } from '../utils/constants'
import GptMovieSuggestion from './GptMovieSuggestion'


const GptSearch = () => {
  
  return (
    <div className='h-screen'>
         <img className="absolute -z-20" src={BG_URL} alt="background" />
        <GptSearchBar/>
        <GptMovieSuggestion/>
    </div>
  )
}

export default GptSearch