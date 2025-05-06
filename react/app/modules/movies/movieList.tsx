import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
import DeleteMovie from "./delete";

export default function MovieList() {
  const navigate = useNavigate();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/movies/getMovies")
      .then((response) => response.json())
      .then((data) => setMovies(data));
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        background: "#f0f2f5",
        minHeight: "100vh",
      }}
    >
      {movies.map((movie) => (
        <div
          key={movie._id}
          style={{
            width: "80%",
            maxWidth: "600px",
            padding: "20px",
            margin: "15px 0",
            background: "#ffffff",
            borderRadius: "12px",
            boxShadow: "0 6px 18px rgba(0, 0, 0, 0.1)",
            cursor: "pointer",
            transition: "transform 0.2s ease, box-shadow 0.2s ease",
          }}
          onMouseEnter={(e) => {
            const target = e.currentTarget;
            target.style.transform = "translateY(-5px)";
            target.style.boxShadow = "0 12px 24px rgba(0, 0, 0, 0.2)";
          }}
          onMouseLeave={(e) => {
            const target = e.currentTarget;
            target.style.transform = "translateY(0)";
            target.style.boxShadow = "0 6px 18px rgba(0, 0, 0, 0.1)";
          }}
        >
          <h2
            onClick={() => navigate(`/movies/${movie._id}`)}
            style={{ margin: 0, color: "#333" }}
          >
            {movie.title}
          </h2>

          <Link to={`update/${movie._id}`}>
            <div style={{ color: "#000" }}>edit</div>
          </Link>

          <DeleteMovie id={movie._id} setMovies={setMovies} />
        </div>
      ))}
    </div>
  );
}
