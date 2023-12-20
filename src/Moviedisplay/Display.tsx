import { addcart, } from "../Home/Feature/Movies/Cartslice";
import { getAllMovies } from "../Home/Feature/Movies/Movieslice";
import "./display.scss";
import { useDispatch, useSelector } from 'react-redux';

interface MovieData {
    imdbID: string;
    Poster: string;
    Title: string;
    Type: string;
    Year: string;
}

interface DisplayProps {
    data: MovieData;
    movies: MovieData;
}

function Display(props: DisplayProps) {

    const {data} = props;

    const user = useSelector(getAllMovies);

    const dispatch = useDispatch();

    const handleAddToCart = (data: string) => {
      const filtercart: MovieData[] = user.movies?.find((x: MovieData)=>x.Title == data)

      dispatch(addcart(filtercart));
  };

  const cartItems: MovieData[] = useSelector(addcart=>addcart.cart.carts);

  const isItemInCart = (data: string) => {
    return cartItems.some((item: MovieData) => item.Title == data);
};

  console.log(cartItems);

    return (
        <div className="card-item">
        <div className="card-inner">
          <div className="card-top">
            <img src={data.Poster} alt={data.Title} />
          </div>
          <div className="card-bottom">
            <div className="card-info">
              <h4>{data.Title}</h4>
              <p>{data.Year}</p>
            </div>
          </div>
          <div className="footer">
              <button className={isItemInCart(data.Title) ? "remove-btn" : "add-btn"} onClick={()=>handleAddToCart(data.Title)}>{isItemInCart(data.Title) ? "Already added" : "Add Cart"}</button>
          </div>
        </div>
    </div>
    );
}

export default Display;