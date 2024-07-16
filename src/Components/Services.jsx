import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Serviceslanding from "./serviceFolder/Serviceslanding";
import { mostDemanded, services } from "../itemsData/services";
import serviceBg from "../Assets/workers/Group28.png";

function Services() {
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
      <div className="service-bgcontainer">
        <h1 className="service-main-heading">Service </h1>
        <div className="services-main-container">
          <div className="all-services-container">
            <h6 className="lookingFor-heading">What are you Looking for ?</h6>
            <div className="all-services">
              {services.slice(0, 15).map((i) => {
                // services data came from itemsdata folder(services.js file)
                return (
                  <Link
                    to={`/services/${i.SERVICE}`}
                    key={i.ID}
                    style={{
                      textDecoration: "none",
                    }}
                  >
                    <div className="service-solo">
                      <img
                        src={i["IMG URL"]}
                        alt="#"
                        className="servicers-logo"
                      />
                      <h6 className="service-heading">{i.SERVICE}</h6>
                    </div>
                  </Link>
                );
              })}

              <button>
                <Link
                  to="/allservices"
                  style={{ textDecoration: "none", color: "#000" }}
                >
                  More
                </Link>
              </button>
            </div>
          </div>
          <div>
            <img src={serviceBg} alt="#" className="imguuu" />
          </div>
        </div>
        <div className="Most-demand-servicesContainer">
          <h2 className="Most-demand-heading">Most demand services</h2>
          <div className="Most-demand-services">
            {mostDemanded.map((i) => {
              // mostDemanded data came from itemsdata folder(services.js file)
              return (
                <div key={i.ID}>
                  <div
                    style={{
                      backgroundImage: `url(${i["IMG URL"]})`,
                    }}
                    className="demand-services"
                  >
                    <Link to={`/services/${i.SERVICE}`}>
                      <button className="book-button">Book now</button>
                    </Link>
                  </div>
                  <h6 className="book-heading">{i.SERVICE}</h6>
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <h2 className="Most-demand-heading">Painting service</h2>
          <p>
            Enhance your home with our professional painting services, where
            quality meets affordability. Our experienced team uses top-grade
            materials to ensure a flawless finish that revitalizes any space.
            Trust us to bring your vision to life with precision and care.
          </p>
          <Serviceslanding service="Painters" />{" "}
          {/* this component goes to service folder(Serviceslanding) */}
        </div>
        <hr />
        <div>
          <h2 className="Most-demand-heading">Roofing service </h2>
          <p>
            Roofing services encompass a wide range of sub-services to address
            different aspects of roof installation, maintenance, repair, and
            inspection.
          </p>
          <Serviceslanding service="Roofing" />
          {/* this component goes to service folder(Serviceslanding) */}
        </div>
        <div>
          <h2 className="Most-demand-heading">HVAC service </h2>
          <p>
            HVAC (Heating, Ventilation, and Air Conditioning) systems involve
            various components and tasks to ensure proper functioning,
            efficiency, and comfort in residential, commercial, and industrial
            environments.
          </p>
          <Serviceslanding service="HVAC" />
          {/* this component goes to service folder(Serviceslanding) */}
        </div>
        <div>
          <h2 className="Most-demand-heading">CCTV service </h2>
          <p>
            Our top-notch CCTV service offers reliable, high-definition
            surveillance solutions tailored to your security needs. We provide
            expert installation, 24/7 monitoring, and seamless integration with
            mobile devices for real-time access. Enhance your safety with our
            state-of-the-art technology and professional support. Secure your
            premises with the best CCTV service, ensuring peace of mind and
            comprehensive protection.
          </p>
          <Serviceslanding service="CCTV" />
          {/* this component goes to service folder(Serviceslanding) */}
        </div>
      </div>
    </>
  );
}

export default Services;
