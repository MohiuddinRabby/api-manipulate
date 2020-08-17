import React, { useContext } from "react";
import { CartContext } from "../../global/CartContext";
import { Link } from "react-router-dom";

const Nav = () => {
  const [cart, setCart] = useContext(CartContext);
  const totalPrice = cart.reduce((acc, curr) => acc + curr.price, 0);
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav m-auto">
          <li className="nav-item active">
            <span className="nav-link">
              Cart [ items: {cart.length} price: {totalPrice} ]
            </span>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
