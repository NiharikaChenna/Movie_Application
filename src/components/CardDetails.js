import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "./Card";
import { useDispatch, useSelector } from "react-redux";
import { fetchPopularMovies } from "../redux/moviesSlice";

const CardDetails = () => {
  // Get the movies and loading state from the Redux store
  const { movies, loading } = useSelector((state) => state.movies);
  const dispatch = useDispatch();

    // Fetch popular movies when the component mounts
  useEffect(() => {
    dispatch(fetchPopularMovies());
  }, []);

  return (
    <div className="row my-5">
      <h2 className="text-center">POPULAR MOVIES</h2>
      <div className="row">
        {loading ? (
          <div>Loading...</div>
        ) : (
          movies &&
          movies.results &&
          movies.results.map((movie, index) => (
            <div
              key={index}
              className="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 my-3"
            >
              <Link
                style={{ textDecoration: "none" }}
                to={`/movieDetails/${movie.title}`}
                state={{ data: movie }}
              >
                <Card
                  image={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                />
              </Link>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default CardDetails;
