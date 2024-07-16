import React from "react";
import { Link } from "react-router-dom";
import { Slide } from "react-awesome-reveal";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import { services } from "../itemsData/services";
import { RiShareForward2Fill } from "react-icons/ri";
import imagerent1 from "../Assets/bgs/autonomous-construction.jpg";
import imagerent2 from "../Assets/bgs/crane.jpg";
import imagerent3 from "../Assets/bgs/G5wnPiuLhIYcDNXqlwi7GmOhlfPLCtx01697554568.jpg";
import imagerent4 from "../Assets/bgs/istockphoto-887224718-612x612.jpg";
import imagerent5 from "../Assets/bgs/off-highway-truck.jpg";
import homeCaro1 from "../Assets/bgs/Caro1.jpg";
import homeCaro2 from "../Assets/bgs/Caro2.jpg";
import homeCaro3 from "../Assets/bgs/Caro3.jpg";
import constructionEquipmentImg from "../Assets/EquipmentLand.png";
import ContactUs from "./contactus/ContactUs";
function Home() {
  return (
    <>
      <div className="HomepageBg">
        <div className="homePageCon">
          <div>
            <Slide direction="down">
              <h1 className="homeHeading">
                Destination for
                <br /> Construction Materials and Equipment
              </h1>
            </Slide>
            <Slide direction="up">
              <p className="homePara">
                where quality meets construction. Explore our curated collection
                of top-tier equipment and materials to elevate your projects
                with confidence.
              </p>
            </Slide>
          </div>
        </div>
      </div>
      <div className="linebt"></div>
      <div className="rental-home-bgcontainer">
        <h2 className="rental-home-Heading">Get Vehicles for Rent and Sale</h2>
        <div className="heading-line"></div>
        <div className="rental-home-container">
          <Slide direction="left">
            <div className="rental-home-container1">
              <h3 className="rent-heading">For Rent</h3>
              <div className="rent-home-image-container my-2">
                <Carousel>
                  <Carousel.Item>
                    <img
                      src={imagerent1}
                      alt="#rent"
                      className="rent-home-image"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      src={imagerent2}
                      alt="#rent"
                      className="rent-home-image"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      src={imagerent3}
                      alt="#rent"
                      className="rent-home-image"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      src={imagerent4}
                      alt="#rent"
                      className="rent-home-image"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      src={imagerent5}
                      alt="#rent"
                      className="rent-home-image"
                    />
                  </Carousel.Item>
                </Carousel>
              </div>
              <p className="rent-sale-para">
                Access top-quality construction vehicles without ownership
                commitments through our rental service. With a diverse fleet,
                flexible rental plans, and expert support, we ensure your
                project gets the right equipment, precisely when needed. Trust
                our well-maintained vehicles and dedicated team to keep your
                operations running smoothly.
              </p>
              <Link to="/rentalSale">
                <button className="rent-home-btn">Click here</button>
              </Link>
            </div>
          </Slide>
          <Slide direction="right">
            <div className="rental-home-container2">
              <h3 className="rent-heading">For Sale</h3>
              <div className="rent-home-image-container my-2">
                <Carousel>
                  <Carousel.Item>
                    <img
                      src={imagerent2}
                      alt="#rent"
                      className="rent-home-image"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      src={imagerent4}
                      alt="#rent"
                      className="rent-home-image"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      src={imagerent5}
                      alt="#rent"
                      className="rent-home-image"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      src={imagerent1}
                      alt="#rent"
                      className="rent-home-image"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      src={imagerent3}
                      alt="#rent"
                      className="rent-home-image"
                    />
                  </Carousel.Item>
                </Carousel>
              </div>
              <p className="rent-sale-para">
                Invest in long-term construction fleet solutions with our
                diverse inventory of new and used vehicles for sale. Benefit
                from quality-assured equipment, customizable options, and
                flexible financing plans tailored to your needs. Plus, our
                commitment to after-sales support guarantees your satisfaction
                throughout the lifespan of your equipment.
              </p>
              <Link to="/Sales">
                <button className="rent-home-btn">Click here</button>
              </Link>
            </div>
          </Slide>
        </div>
      </div>
      <div className="Caros">
        <Carousel>
          <Carousel.Item>
            <img src={homeCaro1} alt="#Caro" className="carImg" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={homeCaro2} alt="#Caro" className="carImg" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={homeCaro3} alt="#Caro" className="carImg" />
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="linebt"></div>
      <div className="shopCategory">
        <h2 className="categoryHeading">Shop By Category Wise</h2>
        <Slide direction="left" triggerOnce="true">
          <div className="shopItemCon">
            <h4>Construction Equipment</h4>
            <div className="shoplanding">
              <div>
                <img
                  src={constructionEquipmentImg}
                  alt="#"
                  className="shopImg"
                />
              </div>
              <div>
                <p className="shopPara">
                  Construction equipment, from excavators to cranes, is
                  essential for project execution. Advancements enhance
                  efficiency, safety, and environmental impact. Proper equipment
                  selection boosts productivity and reduces costs. Utilizing the
                  right tools ensures timely project completion and shapes
                  infrastructure development.
                </p>
                <Link to="/EquipmentItems">
                  <button className="shopBtn">Shop Now</button>
                </Link>
              </div>
            </div>
          </div>
        </Slide>
        <Slide direction="left" triggerOnce="true">
          <div className="shopItemCon">
            <h4>Electronics & Electrical</h4>
            <div className="shoplanding">
              <div>
                <img
                  src="https://res.cloudinary.com/dppxcekqu/image/upload/v1717564688/EElanding_lfbhgz.jpg"
                  alt="#"
                  className="shopImg"
                />
              </div>
              <div>
                <p className="shopPara">
                  Electronics and electrical items are essential in
                  construction, powering lighting, HVAC, security, and
                  automation systems. They encompass wiring, circuitry, and
                  power distribution, ensuring buildings are functional and
                  safe. Incorporating smart technologies optimizes resource
                  usage, driving innovation for smarter, more connected spaces.
                </p>
                <Link to="/Electrical_Electronic_Items">
                  <button className="shopBtn">Shop Now</button>
                </Link>
              </div>
            </div>
          </div>
        </Slide>
        <Slide direction="left" triggerOnce="true">
          <div className="shopItemCon">
            <h4>Building & Construction Material</h4>
            <div className="shoplanding">
              <div>
                <img
                  src="https://res.cloudinary.com/dppxcekqu/image/upload/v1717564688/Blanding_nrqzxg.png"
                  alt="#"
                  className="shopImg"
                />
              </div>
              <div>
                <p className="shopPara">
                  Building materials are the backbone of construction, ranging
                  from wood and concrete to advanced composites. They determine
                  structural integrity, aesthetics, and environmental impact.
                  Innovations in material science offer enhanced durability and
                  sustainability. Careful selection shapes functional excellence
                  and sustainability goals in the built environment.
                </p>
                <Link to="/buildingItem">
                  <button className="shopBtn">Shop Now</button>
                </Link>
              </div>
            </div>
          </div>
        </Slide>
      </div>
      <div className="home-page-service-mainContainer">
        <h2 className="home-page-service-heading">Services To be Provided</h2>
        <div className="heading-line"></div>
        <div className="home-page-service-bgContainer">
          <div className="home-page-services-para">
            <p>
              Construction services involve a range of specialized trades
              essential for building projects. Skilled laborers manage site
              preparation and material handling. Electricians install and
              maintain electrical systems, ensuring safety and functionality.
              Plumbers handle water, sewage, and drainage systems, ensuring
              reliable plumbing and sanitation. Together, these professionals
              ensure the successful completion of construction projects
            </p>
            <Link to="/allservices">
              <button>
                services <RiShareForward2Fill />
              </button>
            </Link>
          </div>
          <div className="home-page-services">
            {services.slice(0, 7).map((i) => {
              return (
                <div className="home-page-service" key={i.ID}>
                  <Link to={`/services/${i.SERVICE}`}>
                    <img
                      src={i["IMG URL"]}
                      alt="#"
                      className="home-page-services-img"
                    />
                  </Link>
                  <h6>{i.SERVICE}</h6>
                </div>
              );
            })}
            <div className="home-page-service-btnContainer">
              <Link to="/services">
                <button className="home-page-service-btn">See All</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Slide direction="up" triggerOnce>
        <div className="promot">
          <h1>
            Buy Building & Construction Materials Online in{" "}
            <span className="nalgonda">Nalgonda</span>
          </h1>
          <p>
            We supply complete building and construction materials like Cement,
            TMT Steel, Bricks & Blocks, Sand, Tiles, Electrical Materials,
            Plywood, Plumbing Materials, etc. at wholesale prices across
            nalgonda.{" "}
          </p>
        </div>
      </Slide>
      {/* <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15254.691156704232!2d79.24744082672204!3d17.088650750495194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb293a8ff6284d%3A0xa5dc723f39670e3!2sIndustrial%20Area%2C%20Nalgonda%2C%20Telangana%20508001!5e0!3m2!1sen!2sin!4v1718774511690!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div> */}
      <ContactUs />
    </>
  );
}

export default Home;
