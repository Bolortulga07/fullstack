import { useParams, useNavigate } from "react-router";

const DeleteMovie = ({
  id,
  setMovies,
}: {
  id: string;
  setMovies: (movies) => void;
}) => {
  const onDelete = async () => {
    const response = await fetch(
      `http://localhost:3000/movies/deleteMovie/${id}`,
      {
        method: "DELETE",
      }
    ).then((response) => response.json());

    if (response.status) {
      setMovies((prevState) => {
        return prevState.filter((m) => m._id !== id);
      });
    }
  };
  return (
    <button style={{ background: "red" }} onClick={onDelete}>
      remove
    </button>
  );
};

export default DeleteMovie;
