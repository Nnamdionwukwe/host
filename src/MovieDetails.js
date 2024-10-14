import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const tempWatchedData = [
  {
    imdbID: "tt1375666",
    Title: "Inception",
    Year: "2010",
    Poster: "https://i.pravatar.cc/48?u=118836",
    runtime: 148,
    imdbRating: 8.8,
    userRating: 10,
  },
  {
    imdbID: "tt0088763",
    Title: "Back to the Future",
    Year: "1985",
    Poster: "https://i.pravatar.cc/48?u=118836",
    runtime: 116,
    imdbRating: 8.5,
    userRating: 9,
  },
];

console.log(tempWatchedData);

function MovieDetails() {
  return <Movies />;
}

function Movies() {
  return (
    <ul>
      {tempWatchedData.map((movie) => (
        <Movie movie={movie} key={movie.imdbID} />
      ))}
    </ul>
  );
}

function Movie({ movie }) {
  return <li>{movie.Poster}</li>;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <MovieDetails />
  </React.StrictMode>
);
