import { Form } from "./form";
import type { Movie } from "~/types.tsx";

type Props = {};

const create = (props: Props) => {
  const onClick = (data: Movie) => {
    fetch("http://localhost:3000/movies/postMovies", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((response) => response.json());
  };

  return <Form onSave={onClick} />;
};

export default create;
