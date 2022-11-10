import React, { useState, useEffect} from 'react'
import instance from "../axios";
import Row from './Row';
import '../components/Banner.css'

const base_url = "https://image.tmdb.org/t/p/original/";

function Banner(props) {
    const [movie, setMovie] = useState([]);
    const { fetchURL } = props;

    const fetchData = async () => {
        const request = await instance.get(fetchURL);
        // setMovie(request.data.results);
        console.log(request.data.results)
        setMovie(
            request.data.results[
                Math.floor(Math.random() * request.data.results.length - 1)
            ]
        );
    };
    // same like componentdidmount()
    useEffect(() => {
        fetchData();
    }, []);
    console.log(movie)
  return (
    <header className='banner' 
    style={{
        backgroundSize: "cover",
        backgroundImage: `url("${base_url.concat(movie.backdrop_path)}")`,
        backgroundPosition: "center center"
    }}
    >
        <div className='banner_contents'>
            <h1 className='banner_title'>{movie?.name || movie.title}</h1>
            <div className='banner_buttons'>
                <button className='banner_button'>Play</button>    
                <button className='banner_button'>More Info</button>    
            </div> 
            <h2 className='banner_description'>{movie?.overview}</h2>
        </div> 
        <div className='banner__fadeBottom'></div>  
    </header>
  )
}

export default Banner