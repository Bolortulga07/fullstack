import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import type { Movie } from "~/types";

export function MovieDetail({ movieId }) {
  const navigate = useNavigate();
  const [movies, setMovies] = useState<Movie>({} as Movie);

  useEffect(() => {
    fetch(`http://localhost:3000/movies/movieDetail/${movieId}`)
      .then((response) => response.json())
      .then((data) => setMovies(data));
  }, []);

  return (
    <div>
      <h1>{movies.title}</h1>
      <h1>{movies.director}</h1>
      <h1>{movies.plot}</h1>
      <h1>{movies.releaseDate}</h1>
      <img src={movies.image} />
    </div>
  );
}
