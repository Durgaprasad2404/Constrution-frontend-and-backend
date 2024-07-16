import React, { useEffect } from "react";
import { pro } from "../itemsData/productsData";
import Allproducts from "./productsDisplay/Allproducts";
import Productnavbar from "./ProductLandingPart/Productnavbar";

function Equipment() {
  const EquipmentItems = [];
  pro.map((i) => {
    if (i.GROUP === "EquipmentItems") {
      EquipmentItems.push(i);
    }
  });

  return (
    <>
      <Productnavbar />
      <div className="backGround">
        <h1 className="shopSideHeading">Equipment For Construction</h1>
        <div style={{ margin: "10px" }} id="Electrical">
          <div className="allItems">
            {EquipmentItems.length > 0
              ? EquipmentItems.map((i) => {
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

export default Equipment;
