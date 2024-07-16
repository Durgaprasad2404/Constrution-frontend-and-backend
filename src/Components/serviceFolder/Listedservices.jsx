import React, { useEffect } from "react";
import "./services.css";
import { Link } from "react-router-dom";
import { TbArrowMoveDown } from "react-icons/tb";
import { services } from "../../itemsData/services";

function Listedservices() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    scrollToTop(); //by this page scroll to top
  });
  return (
    <>
      <h3 className="listed-services-heading">
        Services to be Provided
        <TbArrowMoveDown />
      </h3>
      <p className="ps-4 ms-2">
        services are integral to developing and maintaining the built
        environment, encompassing a wide range of activities from initial
        planning to the completion and maintenance of structures
      </p>
      <div className="listed-services">
        {services.map((i) => {
          return (
            <div className="single-service" key={i.ID}>
              <Link to={`/services/${i.SERVICE}`}>
                <img src={i["IMG URL"]} alt="#" className="servicers-logo" />
              </Link>
              <h5 className="service-heading mt-3 text-bold">{i.SERVICE}</h5>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Listedservices;
