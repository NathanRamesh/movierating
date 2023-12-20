import { createSlice } from "@reduxjs/toolkit";

interface Movie {
    imdbID: string;
    Poster: string;
    Title: string;
    Type: string;
    Year: string;
}

interface RootState {
    carts: Movie[]; 
}

const initialState: RootState = {
    carts: []
};

const cartslice = createSlice({
    name: "cartlist",
    initialState,
    reducers: {
        addcart: (state, { payload }) => {
            state.carts = [...state.carts, payload]; 
        },
        removecart: (state, {payload}) => {
            if (state.carts.length > payload) {
                state.carts.splice(payload, 1); 
            }
        }
    },
});

export const { addcart, removecart } = cartslice.actions;
console.log(addcart)
export const getAllCarts = (state: RootState): Movie[] => state.carts;

console.log(getAllCarts)

export default cartslice.reducer;
