import React from "react";
import "./Product.css";
import { Link } from "react-router-dom";
const Product = (props) => {
  const { price, img, category, key } = props.products;
  return (
    <div className="card">
      <div className="card-body text-center" style={{ height: "15rem" }}>
        <img
          src={img}
          alt="productImage"
          className="img-fluid"
          style={{ width: "100px" }}
        />
        <p>
          price: ${price} <Link to={"/details/" + key}>Details...</Link>
        </p>
        <p>category: {category}</p>
        <button
          className="btn btn-info"
          onClick={() => props.handleCart(props.products)}
        >
          add to cart
        </button>
      </div>
    </div>
  );
};

export default Product;
