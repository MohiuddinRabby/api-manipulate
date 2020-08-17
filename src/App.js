import React from "react";
import Shop from "./components/Shop/Shop";
import Nav from "./components/Nav/Nav";
import { CartProvider } from "./global/CartContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import NotFound from "./components/NotFound/NotFound";
import About from "./components/About/About";
function App() {
  return (
    <div>
      <CartProvider>
        <Nav></Nav>
        <Router>
          <Switch>
            <Route exact path="/">
              <Shop></Shop>
            </Route>
            <Route path="/details/:key">
              <ProductDetails></ProductDetails>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </CartProvider>
    </div>
  );
}

export default App;
