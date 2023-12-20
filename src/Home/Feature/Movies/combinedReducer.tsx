import { combineReducers } from "redux";
import MovieslistReducer from "../Movies/Movieslice";
import cartlistReducer from "../Movies/Cartslice";

const rootReducer = combineReducers({
  movies: MovieslistReducer,
  cart: cartlistReducer
});

export default rootReducer;