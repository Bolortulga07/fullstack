import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  layout("routes/layouts.tsx", [
    route("movies", "routes/movies.tsx"),
    route("movies/:movieId", "routes/movieDetail.tsx"),
    route("movies/create", "modules/movies/create.tsx"),
    route("movies/update/:id", "modules/movies/update.tsx"),
    route("auth/register", "modules/auth/register.tsx"),
    route("auth/login", "modules/auth/login.tsx"),
  ]),
] satisfies RouteConfig;
