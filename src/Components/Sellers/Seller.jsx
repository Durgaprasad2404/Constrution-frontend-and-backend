import React, { useEffect } from "react";
import "./sellers.css";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import { MdOutlineMyLocation } from "react-icons/md";
import { sellers } from "../../itemsData/rented";
import { Link, useParams } from "react-router-dom";
import { TfiControlBackward } from "react-icons/tfi";

function Seller() {
  const { vehicle } = useParams();
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    scrollTop();
  });
  return (
    <>
      <section className="sell-container">
        <h2 className="sellers-heading">Vehicles for Sell</h2>
        <div className="text-end m-1 strick-btn">
          <Link to="/rentalSale">
            <button className="back-btn ">
              <i>
                <TfiControlBackward />
              </i>
              Back
            </button>
          </Link>
        </div>
        {sellers.map((i) => {
          if (i.vehicle === vehicle) {
            return (
              <div className="seller-container my-2 py-2" key={i.id}>
                <div>
                  <div className="vehicle-caro">
                    <Carousel>
                      <Carousel.Item>
                        <img
                          src={i.imagesList[0]}
                          alt="#rent"
                          className="vehicle-caro-img"
                        />
                      </Carousel.Item>
                      <Carousel.Item>
                        <img
                          src={i.imagesList[1]}
                          alt="#rent"
                          className="vehicle-caro-img"
                        />
                      </Carousel.Item>
                      <Carousel.Item>
                        <img
                          src={i.imagesList[2]}
                          alt="#rent"
                          className="vehicle-caro-img"
                        />
                      </Carousel.Item>
                      <Carousel.Item>
                        <img
                          src={i.imagesList[3]}
                          alt="#rent"
                          className="vehicle-caro-img"
                        />
                      </Carousel.Item>
                    </Carousel>
                  </div>
                  <p className="seller-para">{i.description}</p>
                </div>
                <div className="vehicle-details-container">
                  <div className="vehicle-details">
                    <p className="selling-price">&#8377; {i.price}</p>
                    <p className="selling-model">{i.model}</p>
                    <p className="owner-location">
                      <i>
                        <MdOutlineMyLocation />
                      </i>{" "}
                      {i.Location}
                    </p>
                  </div>
                  <div className="owner-details">
                    <h5>{i.owner}</h5>
                    <div className="mt-4 btn-container">
                      <button className="btn btn-primary me-2">
                        Talk with Seller
                      </button>
                      <button className="btn btn-success">
                        Chat with Seller
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          } else {
            return null;
          }
        })}
      </section>
    </>
  );
}

export default Seller;
