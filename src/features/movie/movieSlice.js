import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { endpoints, requests } from "../../utility/requests";
import axios from '../../utility/axios';

const initialState= {
    popularMovies:{
        status: "idle",
        error: null,
        data: null
    },
    topRatedMovies: {
        status: "idle",
        error: null,
        data: null
    }
}

export const fetchPopularMovies = createAsyncThunk(
    'movie/fetchPopularMovies',
    async () => {
        const response = await axios.get(requests.getMovies(endpoints.popular));
        return response.data
    }
)

export const fetchTopRatedMovies = createAsyncThunk(
    'movie/fetchTopRatedMovies',
    async () => {
        const response = await axios.get(requests.getMovies(endpoints.topRated));
        return response.data
    }
)

export const movieSlice = createSlice({
    name: "movie",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchPopularMovies.pending, (state, action)=>{
            state.popularMovies.status = 'loading';
        })
        .addCase(fetchPopularMovies.fulfilled, (state, action)=>{
            state.popularMovies.status = 'success';
            state.popularMovies.data = action.payload;
        })
        .addCase(fetchPopularMovies.rejected, (state, action)=>{
            state.popularMovies.status = 'failed';
            state.popularMovies.error = action.error;
        } )
        .addCase(fetchTopRatedMovies.pending, (state, action)=>{
            state.topRatedMovies.status = 'loading';
        })
        .addCase(fetchTopRatedMovies.fulfilled, (state, action)=>{
            state.topRatedMovies.status = 'success';
            state.topRatedMovies.data = action.payload;
        })
        .addCase(fetchTopRatedMovies.rejected, (state, action)=>{
            state.topRatedMovies.status = 'failed';
            state.topRatedMovies.error = action.error;
        } )
        
    }
});

export const popularMoviesSelector = (state)=>state.movie.popularMovies;
export const topRatedMovieSelector = (state)=>state.movie.topRatedMovies;

export default movieSlice.reducer;

