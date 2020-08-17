import React from "react";
import { useParams, useHistory } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

const ProductDetails = () => {
  const [currentProduct, setCurrentProduct] = useState({});
  const { key } = useParams();
  const [loading, setLoading] = useState(true);
  let goHome = useHistory();
  useEffect(() => {
    fetch("https://mighty-earth-81475.herokuapp.com/product/" + key)
      .then((res) => res.json())
      .then((data) => {
        setCurrentProduct(data);
        setLoading(false);
      });
  }, []);
  const handleHome = () => {
    goHome.push("/");
  };
  return (
    <div className="container py-5">
      <h1 className="py-2">Product details</h1>
      <button className="btn btn-primary" onClick={handleHome}>
        Go Home
      </button>
      {loading ? (
        <h1 className="text-info py-3">Loading..</h1>
      ) : (
        currentProduct.name && (
          <div className="container">
            <div>
              <img src={currentProduct.img} alt="" />
            </div>
            <h5>Name: {currentProduct.name}</h5>
            <h5>Price: ${currentProduct.price}</h5>
            <h5>Seller: {currentProduct.seller}</h5>
            <h5>Review: {currentProduct.star}*</h5>
          </div>
        )
      )}
    </div>
  );
};

export default ProductDetails;
