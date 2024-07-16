import React from "react";
import { Slide } from "react-awesome-reveal";
import { Link } from "react-router-dom";

function SellVehicles(props) {
  return (
    <Slide direction="up" cascade>
      <div className="rentalVehiclesCon">
        <Link to={`/sales/${props.category}`}>
          <img src={props.imgUrl} alt="#" className="rent-img" />
        </Link>
        <h5>{props.category}</h5>
      </div>
    </Slide>
  );
}

export default SellVehicles;
