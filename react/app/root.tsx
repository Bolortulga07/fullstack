import { useState } from "react";
import { Outlet } from "react-router";

function MovieForm({ addMovie }) {
  const formSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const input = form.movie;
    const newMovie = input.value.trim();
    if (newMovie) {
      addMovie(newMovie);
      input.value = "";
    }
  };

  return (
    <form onSubmit={formSubmit}>
      <input type="text" name="movie" placeholder="Add a new movie" />
      <button type="submit">Add Movie</button>
    </form>
  );
}

function Movie({ movie, index, updateMovie, deleteMovie }) {
  const [isEdit, setIsEdit] = useState(false);
  const [editedMovie, setEditedMovie] = useState(movie);

  const handleSave = () => {
    updateMovie(index, editedMovie);
    setIsEdit(false);
  };

  return (
    <div>
      {!isEdit ? (
        <h3>{movie}</h3>
      ) : (
        <input
          value={editedMovie}
          onChange={(e) => setEditedMovie(e.target.value)}
        />
      )}
      <button onClick={() => deleteMovie(index)}>Delete</button>
      <button onClick={() => (isEdit ? handleSave() : setIsEdit(true))}>
        {isEdit ? "Save" : "Edit"}
      </button>
    </div>
  );
}

export default function App() {
  return <Outlet />;
}

// shaden/ui
// tailwind
// tanstack
