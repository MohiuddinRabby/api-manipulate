import React from "react";
import Shop from "./components/Shop/Shop";
import Nav from "./components/Nav/Nav";
import { CartProvider } from "./global/CartContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductDetails from "./components/ProductDetails/ProductDetails";
function App() {
  return (
    <>
      <Router>
        <Switch>
          <CartProvider>
            <Nav></Nav>
            <Route exact path="/">
              <Shop></Shop>
            </Route>
            <Route path="/details/:key">
              <ProductDetails></ProductDetails>
            </Route>
          </CartProvider>
        </Switch>
      </Router>
    </>
  );
}

export default App;
