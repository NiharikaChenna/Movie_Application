import React from "react";
import { Link, useLocation } from "react-router-dom";

const MovieDetails = () => {
  const location = useLocation();
  const data = location.state.data;
  return (
    <div>
      <div className="row my-5">
        <div className="col-md-4 my-5">
          <img
            src={`https://image.tmdb.org/t/p/original${
              data && data.backdrop_path
            }`}
            className="thumbnail img-fluid"
            alt="Poster"
          />
        </div>
        <div className="col-md-8 my-3">
          <h2 className="mb-4">{data.original_title}</h2>
          <ul className="list-group">
            <li className="list-group-item">
              <strong>Rated:</strong> {data.vote_average}
            </li>
            <li className="list-group-item">
              <strong>Popularity:</strong> {data.popularity}
            </li>
            <li className="list-group-item">
              <strong>Language:</strong> {data.original_language}
            </li>
            <li className="list-group-item">
              <strong>Release_date:</strong> {data.release_date}
            </li>
          </ul>
        </div>
        <div className="row card card-body bg-dark  text-light">
          <div className="col-md-12">
            <h3>About </h3>
            {data.overview}
            <hr />
            <Link to="/" className="btn btn-default text-light">
              Go Back
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MovieDetails;
