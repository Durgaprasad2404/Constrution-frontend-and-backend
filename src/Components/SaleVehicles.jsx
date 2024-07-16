import React, { useEffect } from "react";
import { vehicles } from "../itemsData/rented";
import SellVehicles from "./Sellers/SellVehicles";

function SaleVehicles() {
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
      <div className="mt-5">
        <h1 className="rent-page-heading">Sale Vehicles</h1>
        <p className="ps-2">
          Trust our well-maintained vehicles and dedicated team to keep your
          operations running smoothly.
        </p>
        <div className="rentalVehicles">
          {vehicles.map((i, index) => {
            return (
              <SellVehicles
                key={i.ID}
                category={i.VehicleName}
                imgUrl={i["IMG URL"]}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default SaleVehicles;
