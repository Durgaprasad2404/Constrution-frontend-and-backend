import React from "react";
import { Landingservices } from "../../itemsData/services";
import { Link } from "react-router-dom";
import "./services.css";
import { Slide } from "react-awesome-reveal";

function Serviceslanding(props) {
  return (
    <>
      <Slide cascade direction="up" triggerOnce>
        <div className="service-works-container">
          {Landingservices.map((i) => {
            if (i.category === props.service) {
              return (
                <div className="services-works" key={i.id}>
                  <Link to={`/services/${i.category}`}>
                    <img
                      src={i.imgUrl}
                      alt="#services"
                      loading="lazy"
                      className="services-work-img"
                    />
                  </Link>
                  <h6 className="services-work-heading">{i.name}</h6>
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </Slide>
    </>
  );
}

export default Serviceslanding;
