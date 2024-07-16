import React from "react";
import { Link } from "react-router-dom";
import "./equipmentLand.css";
import { LandingpageProducts } from "../../itemsData/productsData";
import equipmentBg from "../../Assets/EquipmentLand.png";
import { Slide } from "react-awesome-reveal";
function EquipmentLand() {
  return (
    <>
      <div className="EquipmentLand-bgcontainer">
        <h2 className="EquipmentLand-heading">
          Building Construction Equipment Materials
        </h2>
        <div className="EquipmentLand-container">
          <Slide direction="left" triggerOnce>
            <div
              style={{
                backgroundImage: `url("${equipmentBg}")`,
              }}
              className="EquipmentLand"
            >
              <p className="EquipmentLand-para">
                Construction equipment for building construction and
                construction machinery used in construction projects.
                Construction equipment refers to heavy-duty vehicles specially
                designed for executing construction tasks, most frequently
                involving earthwork operations
              </p>
              <Link to="/EquipmentItems">
                <button className="EquipmentLand-btn">View All</button>
              </Link>
            </div>
          </Slide>

          <div className="EquipmentLand-products">
            {LandingpageProducts.map((i) => {
              if (i.GROUP === "EquipmentItems") {
                return (
                  <div className="EquipmentLand-product" key={i.ID}>
                    <Link to={`/product/${i.ID}`}>
                      <img
                        src={i["IMG URL"]}
                        alt="#"
                        className="EquipmentLand-img"
                      />
                    </Link>
                    <div>
                      <h6>{i.ITEMNAME}</h6>
                      <p className="EquipmentLand-product-para">
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

export default EquipmentLand;
