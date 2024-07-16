import React from "react";
import { Link } from "react-router-dom";
import "./buildingConstruction.css";
import { LandingpageProducts } from "../../itemsData/productsData";
import buildingBg from "../../Assets/building-construction-materials.png";
import { Slide } from "react-awesome-reveal";
function BuildingConstruction() {
  return (
    <>
      <div className="building-construction-materials-bgcontainer">
        <h2 className="building-construction-materials-heading">
          Building Construction Materials
        </h2>
        <div className="building-construction-materials-container">
          <Slide direction="left" triggerOnce>
            <div
              style={{
                backgroundImage: `url("${buildingBg}")`,
              }}
              className="building-construction-materials"
            >
              <p className="building-construction-materials-para">
                Building material is material used for construction. Many
                naturally occurring substances, such as clay, rocks, sand, wood,
                and even twigs and leaves, have been used to construct buildings
                and other structures, like bridges
              </p>
              <Link to="/buildingItem">
                <button className="building-construction-materials-btn">
                  View All
                </button>
              </Link>
            </div>
          </Slide>
          <div className="building-construction-materials-products">
            {LandingpageProducts.map((i) => {
              if (i.GROUP === "buildingItem") {
                return (
                  <div
                    className="building-construction-materials-product"
                    key={i.ID}
                  >
                    <Link to={`/product/${i.ID}`}>
                      <img
                        src={i["IMG URL"]}
                        alt="#"
                        className="building-construction-materials-img"
                      />
                    </Link>
                    <div>
                      <h6>{i.ITEMNAME}</h6>
                      <p className="building-construction-materials-product-para">
                        {i.DESCRIPTION}
                      </p>
                      <span>
                        &#8377; {i.PRICE} <br />
                      </span>
                      <span className="oldprice"> &#8377; {i.OLDPRICE}</span>
                      <span className="offer">{i.OFFER}% OFF</span>
                    </div>
                  </div>
                );
              } else {
                return null;
              }
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default BuildingConstruction;
