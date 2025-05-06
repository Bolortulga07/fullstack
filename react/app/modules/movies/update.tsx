import type { Movie } from "~/types";
import { Form } from "./form";
import { useParams } from "react-router";
import Movies from "~/routes/movies";
import { useEffect, useState } from "react";

const Update = () => {
  const { id } = useParams();

  const [movie, setMovie] = useState({} as Movie);

  useEffect(() => {
    fetch(`http://localhost:3000/movies/movieDetail/${id}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.message) {
          return window.alert(data.message);
        }

        setMovie(data);
      })
      .catch((error) => window.alert(error));
  }, []);

  const onUpdate = async (data: any) => {
    await fetch(`http://localhost:3000/movies/updateMovie/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((response) => response.json());
  };

  return <Form movie={movie} onSave={onUpdate} />;
};

export default Update;
