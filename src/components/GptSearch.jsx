import React, { useEffect } from 'react'
import GptSearchBar from './GptSearchBar'
import { BG_URL } from '../utils/constants'
import GptMovieSuggestion from './GptMovieSuggestion'


const GptSearch = () => {
  
  return (
    <>
    <img className="absolute -z-20 h-screen object-cover md:w-screen" src={BG_URL} alt="background" />
    <div className='h-screen md:pt-0 pt-[30%]'>
        <GptSearchBar/>
        <GptMovieSuggestion/>
    </div>
    </>
  )
}

export default GptSearch