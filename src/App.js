import React from "react";
import Shop from "./components/Shop/Shop";
import Nav from "./components/Nav/Nav";
import { CartProvider } from "./global/CartContext";

function App() {
  return (
    <>
      <CartProvider>
        <Nav></Nav>
        <Shop></Shop>
      </CartProvider>
    </>
  );
}

export default App;
