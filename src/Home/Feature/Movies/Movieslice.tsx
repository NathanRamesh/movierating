import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import APIMovies from '../../../API/APIMovies';
import { apikey } from '../../../API/APIMovieKey';

interface Movie {
    imdbID: string;
    Poster: string;
    Title: string;
    Type: string;
    Year: string;
}

interface RootState {
    movies: Movie[]; 
}

export const fetchmovie = createAsyncThunk<Movie[], string | number>(
    'Movieslist/fetchmovie',
    async (moviesearch: string | number) => {
        try {
            const response = await APIMovies.get(`?apikey=${apikey}&s=${moviesearch}&type=movie`);
            return response.data.Search as Movie[];
        } catch (error) {
            throw new Error('Error fetching movies');
        }
    }
);

const initialState: RootState = {
    movies: []
};

const movieslice = createSlice({
    name: "Movieslist",
    initialState,
    reducers: {    
    },
    extraReducers: (builder) => {
        builder.addCase(fetchmovie.pending, () => {
            console.log('Pending!!!');
        });
        builder.addCase(fetchmovie.fulfilled, (state, action: PayloadAction<Movie[]>) => {
            console.log('Successfully Completed');
            state.movies = action.payload; 
        });
        builder.addCase(fetchmovie.rejected, () => {
            console.log('Rejected');
        });
    }
});



export const getAllMovies = (state: RootState): Movie[] => state.movies;

console.log(getAllMovies);

export default movieslice.reducer;
