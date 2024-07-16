import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "./product.css";
import { pro } from "../../itemsData/productsData";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { BiMailSend } from "react-icons/bi";
import { RiContactsBook3Line } from "react-icons/ri";

function SingleProduct(props) {
  const { id } = useParams();
  const item = pro.find((i) => i.ID === id);
  const similar_products = pro.filter((product) =>
    product.CATEGORY.includes(item.CATEGORY)
  );
  // console.log(fil);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    scrollToTop();
  });
  return (
    <>
      <div className="m-2">
        <Breadcrumb>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="/products">Products</Breadcrumb.Item>
          <Breadcrumb.Item href={`/${item.GROUP}`}>
            {item.GROUP}
          </Breadcrumb.Item>
          <Breadcrumb.Item active>{item.ITEMNAME}</Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <div className="singleItem">
        <div>
          <img src={item["IMG URL"]} alt="#" className="singleimg" />
          <p className="ps-2">{item.DESCRIPTION}</p>
        </div>
        <div className="singleitem-details">
          <div>
            <h3 className="singleitem-heading">{item.ITEMNAME}</h3>
            <p className="singleitem-price">
              &#8377; {item.PRICE}
              <strong>/{item.unit_of_measurement}</strong>
              <span className="offer">{item.OFFER}% OFF</span>
            </p>
            <p className="varients">All type of variants avalible</p>
            <p>
              This essential construction item is a heavy-duty apparatus
              designed to blend various construction materials with precision
              and efficiency.
            </p>
            <p className="wholesale-retail">Wholesale/Retail</p>
          </div>
          <div className="btns-container">
            <button type="button" className="cartBtn">
              <span>
                <RiContactsBook3Line />
              </span>{" "}
              View Contact
            </button>
            <button type="button" className="buyBtn">
              <span>
                <BiMailSend />
              </span>{" "}
              Send Quote
            </button>
          </div>
        </div>
      </div>
      <h4 className="py-3 ps-2">Similar Products</h4>
      <div className="similar-products-container ps-2">
        {similar_products.map((item) => {
          return (
            <div
              key={item.ID}
              className="text-center ms-3 similar-product-container p-3 my-2"
            >
              <Link to={`/product/${item.ID}`}>
                <img
                  src={item["IMG URL"]}
                  alt="#"
                  loading="lazy"
                  className="img"
                />
              </Link>
              <h5>{item.ITEMNAME}</h5>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default SingleProduct;
