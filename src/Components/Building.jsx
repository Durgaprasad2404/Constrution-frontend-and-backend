import React from "react";
import { pro } from "../itemsData/productsData";
import Allproducts from "./productsDisplay/Allproducts";
import Productnavbar from "./ProductLandingPart/Productnavbar";

function Building() {
  const buildingItem = [];
  pro.map((i) => {
    if (i.GROUP === "buildingItem") {
      buildingItem.push(i);
    }
  });
  return (
    <>
      <Productnavbar />
      <div className="backGround">
        <h1 className="shopSideHeading">Building & Construction</h1>
        <div style={{ margin: "10px" }} id="Bricks">
          <div className="allItems">
            {buildingItem.length > 0
              ? buildingItem.map((i) => {
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

export default Building;
