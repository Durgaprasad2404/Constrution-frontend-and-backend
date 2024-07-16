import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "./bestdeal.css";
import { bestDeals } from "../../itemsData/productsData";

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "red",
        padding: "25px",
        borderRadius: "50px",
      }}
      onClick={onClick}
    />
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "none",
        background: "green",
      }}
      onClick={onClick}
    />
  );
}
function BestDeal() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="best-deals-bgcontainer">
        <h2 className="best-deals-heading">Best Deal's</h2>
        <div className="slider-container px-3">
          <Slider {...settings}>
            {bestDeals.map((i) => {
              return (
                <div key={i.ID}>
                  <div className="best-deal-product">
                    <Link to={`/product/${i.ID}`}>
                      <img src={i["IMG URL"]} alt="#img" />
                    </Link>
                    <h5>{i.ITEMNAME}</h5>
                    <div className="off-Con">
                      <p className="best-deal-offer">{i.OFFER}% OFF</p>
                      <i>Limited Offer</i>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default BestDeal;
