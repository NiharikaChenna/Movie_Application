import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPopularMovies } from "../redux/moviesSlice";
import { Link } from "react-router-dom";
import CardDetails from "../components/CardDetails";

const Home = () => {
  const dispatch = useDispatch();
  const { loading, movies, error } = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(fetchPopularMovies());
  }, []);

  return (
    <div className="row my-5">
      <div id="carouselExample" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          {loading ? (
            <div className="text-center">
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          ) : error ? (
            <div>{error}</div>
          ) : (
            movies &&
            movies.results &&
            movies.results.map((movie, index) => (
              <div
                key={index}
                className={`carousel-item ${index === 0 ? "active" : ""}`}
              >
                <Link
                  style={{ textDecoration: "none" }}
                  key={movie.title}
                  to={`/movieDetails/${movie.original_title}`}
                  state={{ data: movie }}
                ></Link>
                <img
                  className="d-block w-100"
                  src={`https://image.tmdb.org/t/p/original${
                    movie && movie.backdrop_path
                  }`}
                  alt={`Slide ${index}`}
                />
                <div className="text-white">
                  <h1 className="position-absolute my-5 top-0 start-50 translate-middle">
                    {movie.title}
                  </h1>
                  <p className="position-absolute bottom-0 start-50 translate-middle">
                    {movie.overview}
                  </p>
                </div>
              </div>
            ))
          )}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <CardDetails />
    </div>
  );
};

export default Home;
