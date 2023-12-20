
import {  Link, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Home/Home'
import Cart from './Moviedisplay/Cart'
import { useSelector } from 'react-redux';

function App() {

  interface Movie {
    imdbID: string;
    Poster: string;
    Title: string;
    Type: string;
    Year: string;
}


  const cartItems: Movie[] = useSelector(addcart=>addcart.cart.carts);

  return (
    <>
    <ul style={{ position: 'fixed', width: '100%', top: '0', zIndex: '9999' }}>
                        <Link to="/"><li><a style={{ fontSize: '45px' }}>Movies</a></li></Link>
                        <Link to="/carts">    <li className="active" style={{float:'right'}}>
                    <p style={{ position: 'relative', display: 'inline-block' }}>
                    <i className="fa fa-shopping-cart" style={{ fontSize: '25px' }}>
                        <span>
                            {cartItems.length}
                        </span>
                    </i>
                </p>
                        </li></Link>
                    </ul>
      <Routes>
          <Route index element={<Home />} />
          <Route path="/carts" element={<Cart />} />
      </Routes>
    </>
  )
}

export default App
