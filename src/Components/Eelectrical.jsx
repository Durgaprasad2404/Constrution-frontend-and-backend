import React from "react";
import { pro } from "../itemsData/productsData";
import Allproducts from "./productsDisplay/Allproducts";
import Productnavbar from "./ProductLandingPart/Productnavbar";

function ElectronicsElectrical() {
  const Electrical_Electronic_Items = [];
  pro.map((i) => {
    if (i.GROUP === "Electrical_Electronic_Items") {
      Electrical_Electronic_Items.push(i);
    }
  });
  return (
    <>
      <Productnavbar />
      <div className="backGround">
        <h1 className="shopSideHeading">Electronics & Electrical</h1>
        <div style={{ margin: "10px" }} id="Cables">
          <div className="allItems">
            {Electrical_Electronic_Items.length > 0
              ? Electrical_Electronic_Items.map((i) => {
                  return (
                    <Allproducts
                      key={i.ID}
                      id={i.ID}
                      itemname={i.ITEMNAME}
                      imgUrl={i["IMG URL"]}
                      price={i.PRICE}
                      oldprice={i.OLDPRICE}
                      offer={i.OFFER}
                    />
                  ); //it goes to ProductDisplay folder (allproducts)
                })
              : "No Products"}
          </div>
        </div>
      </div>
    </>
  );
}

export default ElectronicsElectrical;
