import { MovieDetail } from "~/modules/movies/movieDetail";
export default function MovieDetailRouter({ params }) {
  return <MovieDetail movieId={params.movieId} />;
}
