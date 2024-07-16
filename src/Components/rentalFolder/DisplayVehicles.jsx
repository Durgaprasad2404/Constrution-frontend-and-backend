import React from "react";
import { Link } from "react-router-dom";
import "./rentstyle.css";
import { Slide } from "react-awesome-reveal";

function DisplayVehicles(props) {
  return (
    <Slide direction="up" cascade>
      <div className="rentalVehiclesCon">
        <Link to={`/rental/${props.category}`}>
          <img src={props.imgUrl} alt="#" className="rent-img" />
        </Link>
        <h5>{props.category}</h5>
      </div>
    </Slide>
  );
}

export default DisplayVehicles;
