import type { User } from "~/types";
import { Login } from "../movies/form";

type Props = {};

const login = (props: Props) => {
  const onClick = (data: User) => {
    fetch("http://localhost:3000/login", {
      body: JSON.stringify(data),
    })
      .then((response) => response.text())
      .then((token) => {
        if (token) {
          localStorage.setItem("auth-token", token);

          window.location.replace("/movies/movieList");
        }
      })
      .catch((error) => console.log(error));
  };

  return <Login onSave={onClick} />;
};

export default login;
