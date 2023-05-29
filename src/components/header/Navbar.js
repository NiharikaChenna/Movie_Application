import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { fetchPopularMovies, fetchTopMovies } from "../../redux/moviesSlice";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();

  const toggleOffcanvas = () => {
    setShow((prevState) => !prevState);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container">
        <Link
          className="navbar-brand"
          to="/"
          onClick={() => dispatch(fetchPopularMovies())}
        >
          Movie App
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={toggleOffcanvas}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/topRated"
                onClick={() => dispatch(fetchTopMovies())}
              >
                Top Rated Movies
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
