import React, { useState, useEffect } from "react";
import Product from "../Product/Product";
import loader from "../../assets/img/loader.gif";
const Shop = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://mighty-earth-81475.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.slice(0, 20));
        setLoading(false);
      });
  }, []);
  const handleCart = (product) => {
    console.log("cart click",product);
  };
  return (
    <div className="container">
      <div className="row py-5">
        {loading ? (
          <div className="text-center">
            <h1>Loading Products ...</h1>
            <img src={loader} alt="loading" />
          </div>
        ) : (
          products.map((product) => (
            <div key={product.key} className="col-md-3 py-2">
              <Product products={product} handleCart={handleCart}></Product>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Shop;
