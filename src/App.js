import React from "react";
import "./App.css";
import Navbar from "./components/header/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MovieList from "./components/MovieList";
import MovieData from "./pages/MovieData";
import MovieDetails from "./pages/MovieDetails";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/topRated" element={<MovieList />} />
        <Route path="movie/:title" element={<MovieData />} />
        <Route path="movieDetails/:title" element={<MovieDetails />} />
      </Routes>
    </div>
  );
};

export default App;
