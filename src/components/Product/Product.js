import React from "react";
import "./Product.css";
const Product = (props) => {
  const { price, img, category } = props.products;
  return (
    <div className="card">
      <div className="card-body text-center" style={{ height: "15rem" }}>
        <img
          src={img}
          alt="productImage"
          className="img-fluid"
          style={{ width: "100px" }}
        />
        <p>price: ${price}</p>
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
