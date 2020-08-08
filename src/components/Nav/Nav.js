import React from "react";

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav m-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              Cart
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
