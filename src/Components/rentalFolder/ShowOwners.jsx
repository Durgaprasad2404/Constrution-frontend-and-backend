import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { RentalData } from "../../itemsData/Rentaldata";
import { MdAddIcCall, MdLocationPin } from "react-icons/md";
import { RiWhatsappFill } from "react-icons/ri";
import "./rentstyle.css";
import { Slide } from "react-awesome-reveal";
function ShowOwners() {
  const { category } = useParams();
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
    <div className="backGround">
      <h1 className="my-2">
        Here are some <q className="category-q">{category}</q> providers
      </h1>
      <Slide direction="up" triggerOnce>
        {RentalData.map((i) => {
          if (i.category === category) {
            return (
              <div className="owners" key={i.id}>
                <div className="vhimgCon">
                  <div>
                    <img src={i.imgUrl} alt="#" className="vhImgfull" />
                  </div>
                  <div className="vhCon pt-2">
                    <img src={i.imgUrl} alt="#" className="vhImg mx-1" />
                    <img src={i.imgUrl} alt="#" className="vhImg mx-1" />
                    <img src={i.imgUrl} alt="#" className="vhImg mx-1" />
                    <img src={i.imgUrl} alt="#" className="vhImg mx-1" />
                  </div>
                </div>
                <div>
                  <h5>{i.ownerName} pvt ltd</h5>
                  <div>
                    <i>
                      <MdLocationPin />
                    </i>
                    <span>Location</span>
                  </div>
                  <div className="ownerContact my-3">
                    <a href="tel:+910000000000">
                      <button className="OwnerContactBtn">
                        <MdAddIcCall /> Connect
                      </button>
                    </a>
                    <a
                      href="https://wa.me/+910000000000?text=Hello,I'm Looking For Rental Vehicle"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="OwnerChatBtn">
                        <i style={{ color: "white" }}>
                          <RiWhatsappFill />
                        </i>
                        Chat
                      </button>
                    </a>
                  </div>
                  <p>
                    &#8377; {i.amount}/-
                    <span className="hourspan">per hour</span>
                  </p>
                </div>
              </div>
            );
          } else {
            return null;
          }
        })}
      </Slide>
    </div>
  );
}

export default ShowOwners;
