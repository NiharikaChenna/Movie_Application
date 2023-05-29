import React from "react";
import { Link, useLocation } from "react-router-dom";
import icon from "../assets/youtube.png";

const MovieData = () => {
  //current location object from the router
  const location = useLocation();
  // the data object from the location state
  const data = location.state.data;

  return (
    <div className="container my-5">
      <div className="row my-5">
        <div className="col-md-4 card card-body">
          <img src={data.image} className="thumbnail" alt="Poster" />
        </div>
        <div className="col-md-8 my-3">
          <h2 className="mb-4">{data.title}</h2>
          <ul className="list-group">
            <li className="list-group-item">
              <strong>Genre:</strong> {data.genre}
            </li>
            <li className="list-group-item">
              <strong>Rated:</strong> {data.rating}
            </li>
            <li className="list-group-item">
              <strong>Director:</strong> {data.director}
            </li>
            <li className="list-group-item">
              <strong>Writers:</strong> {data.writers}
            </li>
            <li className="list-group-item">
              <strong>Year:</strong> {data.year}
            </li>
            <li className="list-group-item">
              <strong>trailer:</strong>{" "}
              <Link to={data.trailer}>
                <img
                  src={icon}
                  className="img-fluid rounded-start"
                  alt="..."
                  width="30"
                  height="30"
                />
              </Link>
            </li>
          </ul>
          <div className="card card-body bg-dark my-5 text-light">
            <div className="col-md-12">
              <h3>About </h3>
              {data.description}
              <hr />
              <Link to="/topRated" className="btn btn-default text-light">
                Go Back
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MovieData;
