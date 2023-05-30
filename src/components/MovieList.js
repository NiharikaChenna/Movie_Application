import { useDispatch, useSelector } from "react-redux";
import Card from "./Card";
import { Link } from "react-router-dom";
import { fetchTopMovies } from "../redux/moviesSlice";
import { useEffect, useState } from "react";

const MovieList = () => {
  // Get the movies, loading state, and error from the Redux store
  const { loading, movies, error } = useSelector((state) => state.movies);
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const [filteredMovies, setFilteredMovies] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();
     // Filter movies based on the search input
    const searchResults = movies.filter((movie) =>
      movie.title.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredMovies(searchResults);
    setSearch("");
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
  };
   // Fetch the top movies when the component mounts
  useEffect(() => {
    dispatch(fetchTopMovies());
  }, []);

  return (
    <div className="container" style={{ marginTop: "6rem" }}>
      <div>
        <form onSubmit={handleSearch} className="d-flex">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search movies"
            value={search}
            onChange={handleChange}
          />
          <button className="btn btn-primary" type="submit">
            Search
          </button>
        </form>
        <div className="row">
          {loading ? (
            <div className="text-center">
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          ) : error ? (
            <div>{error}</div>
          ) : filteredMovies.length > 0 ? (
            filteredMovies.map((movie, index) => (
              <div
                className="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 my-3"
                key={movie.title}
              >
                <Link
                  style={{ textDecoration: "none" }}
                  to={`/movie/${movie.title}`}
                  state={{ data: movie }}
                >
                  <Card
                    image={movie.image}
                    title={movie.title}
                    description={movie.description}
                    director={movie.director}
                  />
                </Link>
              </div>
            ))
          ) : (
            movies.map((movie, index) => (
              <div
                className="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 my-3"
                key={movie.title}
              >
                <Link
                  style={{ textDecoration: "none" }}
                  to={`/movie/${movie.title}`}
                  state={{ data: movie }}
                >
                  <Card
                    image={movie.image}
                    title={movie.title}
                    description={movie.description}
                    director={movie.director}
                  />
                </Link>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
