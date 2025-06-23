import { createSlice } from "@reduxjs/toolkit";

const gptSlice=createSlice({
    name:'gpt',
    initialState:{
        showGptSearch:false,
        movieResult:[]
    },
    reducers:{
        toggleGptSearch:(state,action)=>{
            state.showGptSearch=!state.showGptSearch
        },
        addGptMovie:(state,action)=>{
            state.movieResult=action.payload
        },
        clearMovies:(state)=>{
            state.movieResult.length=0
        }
    }
})
export const{toggleGptSearch,addGptMovie,clearMovies}=gptSlice.actions
export default gptSlice.reducer;