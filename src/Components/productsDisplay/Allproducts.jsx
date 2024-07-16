import React from "react";
import { Link } from "react-router-dom";
import "./product.css";
import { CgMoveRight } from "react-icons/cg";

function Allproducts(props) {
  return (
    <div className="item-con">
      <h5 className="itemname-heading">{props.itemname}</h5>
      <Link to={`/product/${props.id}`}>
        <img src={props.imgUrl} alt="#img" loading="lazy" className="img" />
      </Link>
      <p>
        Price: &#8377;{props.price} <br />
        <span className="oldprice"> &#8377; {props.oldprice}</span>
        <span className="offer">{props.offer}% OFF</span>
      </p>
      <div className="text-center">
        <Link to={`/product/${props.id}`}>
          <button className="view-btn">
            More Details{" "}
            <span>
              <CgMoveRight />
            </span>
          </button>
        </Link>
        {/* <button className="best-btn">Get Best Price</button> */}
      </div>
    </div>
  );
}

export default Allproducts;
