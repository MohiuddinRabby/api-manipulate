import React from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import Product from "../Product/Product";

const ProductDetails = () => {
  const { key } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://mighty-earth-81475.herokuapp.com/product/" + key)
      .then((res) => res.json())
      .then((data) => {
        const values = Object.values(data);
        console.log(values);
        setProduct(values.slice(3, 7));
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <h1>Product details</h1>
      {loading ? (
        <h1>details loading ...</h1>
      ) : (
        product.map((pd) => <li>{pd}</li>)
      )}
    </div>
  );
};

export default ProductDetails;
