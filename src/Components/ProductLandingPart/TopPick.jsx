import React from "react";
import "./toppicks.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { TopPicks } from "../../itemsData/productsData";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "gray",
        padding: "25px 12px",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "gray",
        padding: "25px 12px",
      }}
      onClick={onClick}
    />
  );
}
function TopPick() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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
      <h1 className="top-picks-Heading">Top Picks</h1>
      <div className="top-picks-bgcontainer">
        <div className="slider-container">
          <Slider {...settings}>
            {TopPicks.map((i) => {
              return (
                <div key={i.ID}>
                  <div className="top-picks">
                    <Link to={`/product/${i.ID}`}>
                      <img
                        src={i["IMG URL"]}
                        alt="#"
                        className="top-picks-img"
                      />
                    </Link>
                    <h5 className="top-picks-heading">{i.ITEMNAME}</h5>
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

export default TopPick;
