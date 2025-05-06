import React, { useEffect } from "react";
import type { Movie } from "~/types";
import { useForm, type SubmitHandler } from "react-hook-form";

import type { Props } from "~/types";

export const Form = (props: Props) => {
  const { movie, onSave } = props;

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: movie?.title || "",
      director: movie?.director || "",
      plot: movie?.plot || "",
      releaseDate: movie?.releaseDate || "",
      image: movie?.image || "",
    },
  });

  useEffect(() => {
    setValue("title", movie?.title || "");
    setValue("director", movie?.director || "");
    setValue("plot", movie?.plot || "");
    setValue("releaseDate", movie?.releaseDate || "");
    setValue("image", movie?.image || "");
  }, [movie]);

  const onSubmit: SubmitHandler<any> = (data) => {
    onSave(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{
        display: "flex",
        flexDirection: "column",
        maxWidth: "500px",
        margin: "0 auto",
        padding: "30px",
        background: "#fff",
        borderRadius: "12px",
        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <label style={{ marginBottom: "10px", color: "#333" }}>
        Title
        <input
          {...register("title")}
          style={{
            width: "100%",
            padding: "10px",
            marginTop: "5px",
            marginBottom: "20px",
            borderRadius: "6px",
            border: "1px solid #ccc",
            fontSize: "16px",
          }}
        />
      </label>
      <label style={{ marginBottom: "10px", color: "#333" }}>
        Director
        <input
          {...register("director")}
          style={{
            width: "100%",
            padding: "10px",
            marginTop: "5px",
            marginBottom: "20px",
            borderRadius: "6px",
            border: "1px solid #ccc",
            fontSize: "16px",
          }}
        />
      </label>
      <label style={{ marginBottom: "10px", color: "#333" }}>
        Plot
        <input
          {...register("plot")}
          style={{
            width: "100%",
            padding: "10px",
            marginTop: "5px",
            marginBottom: "20px",
            borderRadius: "6px",
            border: "1px solid #ccc",
            fontSize: "16px",
          }}
        />
      </label>
      <label style={{ marginBottom: "10px", color: "#333" }}>
        releaseDate
        <input
          {...register("releaseDate")}
          style={{
            width: "100%",
            padding: "10px",
            marginTop: "5px",
            marginBottom: "20px",
            borderRadius: "6px",
            border: "1px solid #ccc",
            fontSize: "16px",
          }}
          type="date"
        />
      </label>
      <label style={{ marginBottom: "10px", color: "#333" }}>
        Image
        <input
          {...register("image")}
          style={{
            width: "100%",
            padding: "10px",
            marginTop: "5px",
            marginBottom: "20px",
            borderRadius: "6px",
            border: "1px solid #ccc",
            fontSize: "16px",
          }}
        />
      </label>
      <button
        type="submit"
        style={{
          padding: "12px",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "6px",
          fontSize: "16px",
          cursor: "pointer",
          transition: "background-color 0.3s ease",
        }}
        onMouseOver={(e) => {
          (e.currentTarget as HTMLButtonElement).style.backgroundColor =
            "#0056b3";
        }}
        onMouseOut={(e) => {
          (e.currentTarget as HTMLButtonElement).style.backgroundColor =
            "#007bff";
        }}
      >
        Save
      </button>
    </form>
  );
};
