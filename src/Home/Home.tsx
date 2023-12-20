import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchmovie, getAllMovies } from './Feature/Movies/Movieslice';
import "../App.css";
import Display from '../Moviedisplay/Display';
import "../Moviedisplay/display.scss";
import { Link } from 'react-router-dom';


 function Home() {

    const [moviesearch, setMoviesearch] = useState<string | number>();

    interface Movie {
        imdbID: string;
        Poster: string;
        Title: string;
        Type: string;
        Year: string;
    }


    const dispatch = useDispatch();
    
    useEffect(() => {
        
        if (moviesearch) {
            dispatch<any>(fetchmovie(moviesearch));
        }
    }, [dispatch, moviesearch]);
    
    const user = useSelector(getAllMovies);

    


        return (
            <div className='movie-wrapper'>

                <div className='movie-list'>
                <input className="Searchbox" type="text" placeholder='Enter the Movies Name' onChange={(e)=>setMoviesearch(e.target.value)} />
                </div>
                <div className='movie-container'>
                {user.movies?.map((val: Movie)=> (
                    <>
                    <Display data={val} />
                    </>
                ))}
                </div>
                
            </div>
        );    
}

export default Home;