import { useDispatch, useSelector } from "react-redux";
import "./display.scss";
import { addcart, removecart } from "../Home/Feature/Movies/Cartslice";

function Cart() {
    
    interface MovieData {
        imdbID: string;
        Poster: string;
        Title: string;
        Type: string;
        Year: string;
    }

    const dispatch = useDispatch();

    const cartItems: MovieData[] = useSelector(addcart=>addcart.cart.carts);

    console.log("Cart items:", cartItems);

    const cartquantity = (itemId: string) => {
        const count = cartItems.filter((item) => item.Title === itemId).length;
        return count;
    };

    const getUniqueMovies = (movies: MovieData[]) => {
        return movies.reduce((unique: MovieData[], current: MovieData) => {
            const exists = unique.some((movie) => movie.imdbID === current.imdbID);
            if (!exists) {
                unique.push(current);
            }
            return unique;
        }, []);
    };

    const uniqueMovies = getUniqueMovies(cartItems);



    const handleAddToCart = (data: string) => {
        const filtercart = cartItems?.find((x: MovieData)=>x.Title == data)
  
        dispatch(addcart(filtercart));
    };

    return (
        <>
            {(uniqueMovies.length>0)?uniqueMovies.map((val: MovieData, key: number)=>(
                <div className="itemcontainer">               
                <div className="card-item">
                <div className="card-inner">
                  <div className="card-top">
                    <img src={val.Poster} alt={val.Title} />
                  </div>
                  <div className="card-bottom">
                    <div className="card-info">
                      <h4>{val.Title}</h4>
                      <p>{val.Year}</p>
                    </div>
                  </div>
                  <div className="cart-footer">
                    <button className="cart-btn" onClick={()=>dispatch(removecart(key))}>-</button>
                  <label className="cart-quantity"> {cartquantity(val.Title)} </label>
                  <button className="cart-btn" onClick={()=>handleAddToCart(val.Title)}>+</button>
             </div>
                </div>

            </div>  
            </div>
            )):<div className="center">
            <h2>Empty Cart!!!</h2>
          </div>}
        </>
    );
}

export default Cart;




