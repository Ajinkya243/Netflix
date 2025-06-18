import { createSlice } from "@reduxjs/toolkit";

const moviesSlice=createSlice({
    name:'movies',
    initialState:{
        nowPlayingMovies:[],
        trailerId:"",
        popularMovies:[],
        topRatedMovies:[],
        upComingMovies:[]
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.nowPlayingMovies=action.payload
        },
        addTrailerVideo:(state,action)=>{
            state.trailerId=action.payload
        },
        addPopularMovies:(state,action)=>{
            state.popularMovies=action.payload
        },
        addTopRatedMovies:(state,action)=>{
            state.topRatedMovies=action.payload
        },
        addUpcomingMovies:(state,action)=>{
            state.upComingMovies=action.payload
        }
    }
})
export const {addNowPlayingMovies,addTrailerVideo,addPopularMovies,addTopRatedMovies,addUpcomingMovies}=moviesSlice.actions;
export default moviesSlice.reducer;