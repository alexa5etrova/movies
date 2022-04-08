import React, { useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [filmData, setFilmData] = useState([]);

  function fetchMoviesHandler() {
    fetch("https://swapi.dev/api/films")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const transformedData = data.results.map((movie) => {
          return {
            ...movie,
            id: movie.episode_id,
            releaseDate: movie.release_date,
            openingText: movie.opening_crawl,
          };
        });
        setFilmData(transformedData);
      });
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={filmData} />
      </section>
    </React.Fragment>
  );
}

export default App;
