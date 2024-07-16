import React from "react";
import { vehicles } from "../itemsData/rented";
import DisplayVehicles from "./rentalFolder/DisplayVehicles";
import SaleVehicles from "./SaleVehicles";

function RentedVehicles() {
  return (
    <>
      <div className="rental-backGround">
        <h1 className="rent-page-heading">Rental Vehicles</h1>
        <p className="ps-2">
          Trust our well-maintained vehicles and dedicated team to keep your
          operations running smoothly.
        </p>
        <div className="rentalVehicles">
          {vehicles.map((i, index) => {
            return (
              <DisplayVehicles
                key={i.ID}
                category={i.VehicleName}
                imgUrl={i["IMG URL"]}
              />
            );
          })}
        </div>
        <SaleVehicles />
      </div>
    </>
  );
}

export default RentedVehicles;
