import React, { useEffect } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import BuildingConstruction from "./ProductLandingPart/BuildingConstruction";
import BestDeal from "./ProductLandingPart/BestDeal";
import Productnavbar from "./ProductLandingPart/Productnavbar";
import ElectricalElectronic from "./ProductLandingPart/ElectricalElectronic";
// import TopPick from "./ProductLandingPart/TopPick";
import EquipmentLand from "./ProductLandingPart/EquipmentLand";
import productImg1 from "../Assets/most2.png";
import offer1 from "../Assets/offers/bricksOffer.jpg";
import offer2 from "../Assets/offers/cementOffer.jpg";
import offer3 from "../Assets/offers/sand.jpg";
import offer4 from "../Assets/offers/ironOffer.jpg";
import offer5 from "../Assets/offers/bricksOffer.jpg";

function Products() {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    scrollTop();
  });
  const sets = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
  };
  return (
    <>
      <Productnavbar />
      <div className="product-bgcontainer">
        <h1 className="product-main-heading">Products</h1>
        <p className="ps-2">
          Discover our range of premium products designed to elevate your
          everyday living
        </p>
        <div className="most-like-products-bgcontainer">
          <h4>Most Liked Products</h4>
          <div className="most-like-products-container">
            <div className="most-like-product">
              <div className="most-like-product-cont">
                <Link to={`/product/132`}>
                  <img
                    src="https://res.cloudinary.com/dppxcekqu/image/upload/v1717500055/b1_qajugc.png"
                    alt="#img"
                    className="img"
                  />
                </Link>
                <div>
                  <h5>Red Clay Bricks</h5>
                  <p className="most-like-product-para">
                    High-quality red clay bricks for construction
                  </p>
                  &#8377; 12 <br />
                  <span className="oldprice"> &#8377; 20</span>
                  <span className="offer">10% OFF</span>
                </div>
              </div>
              <div className="most-like-product-cont">
                <Link to={`/product/101`}>
                  <img
                    src="https://res.cloudinary.com/dppxcekqu/image/upload/v1718429209/radha-tmt-550-steel-bars-1000x1000-1-removebg-preview_viebgq.png"
                    className="img"
                    alt="#"
                  />
                </Link>
                <div>
                  <h5>TMT Bars</h5>
                  <p className="most-like-product-para">
                    Thermo Mechanically Treated (TMT) bars for superior strength
                  </p>
                  &#8377; 120 <br />
                  <span className="oldprice"> &#8377; 200</span>
                  <span className="offer">10% OFF</span>
                </div>
              </div>
            </div>
            <div className="most-like-product-img">
              <img src={productImg1} alt="#" />
            </div>
          </div>
        </div>
        {/* please navigate folder name ProductLandingPart */}
        <BestDeal />
        <ElectricalElectronic />
        <div className="offerBg">
          <h1 className="offerHeading">Brand New Offers</h1>
          <div className="offerBG">
            <Slider {...sets}>
              <div className="offerCon">
                <img src={offer1} alt="#" className="offer" />
              </div>
              <div className="offerCon">
                <img src={offer2} alt="#" className="offer" />
              </div>
              <div className="offerCon">
                <img src={offer3} alt="#" className="offer" />
              </div>
              <div className="offerCon">
                <img src={offer4} alt="#" className="offer" />
              </div>
              <div className="offerCon">
                <img src={offer5} alt="#" className="offer" />
              </div>
            </Slider>
          </div>
        </div>
        <BuildingConstruction />
        {/* <TopPick /> */}
        <EquipmentLand />
      </div>
    </>
  );
}

export default Products;
