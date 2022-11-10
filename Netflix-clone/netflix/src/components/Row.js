import React, { useState, useEffect } from "react";
import instance from "../axios";
import '../components/Row.css'

const base_url = "https://image.tmdb.org/t/p/original/";

function Row(props) {
  const [movies, setMovies] = useState([]);
  const { title, fetchURL, isLargeRow } = props;

  const fetchData = async () => {
    const request = await instance.get(fetchURL);
    setMovies(request.data.results);
  };
  // same like componentdidmount()
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="row">
      <h1>{title}</h1>
      <div className="row__posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            src={base_url.concat(isLargeRow? movie.poster_path : movie.backdrop_path)}
            alt={movie.name}
          />
        ))}
      </div>
    </div>
  );
}

export default Row;
