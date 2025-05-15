import { Link } from "react-router";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Movie app" }];
}

export default function Home() {
  return (
    <div>
      <h1>Movie </h1>

      <Link to="movies">Movies</Link>
      <Link to="auth/register">Register</Link>
      <Link to="auth/login">Login</Link>
      <Link to="authors">Authorss</Link>
    </div>
  );
}
