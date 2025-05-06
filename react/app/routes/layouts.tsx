import { Link, Outlet } from "react-router";

export default function layout() {
  return (
    <div>
      <h1>Movies</h1>
      <Link to="/">movie list</Link>
      <Link to="/movies/create">create</Link>
      <Outlet />
    </div>
  );
}
