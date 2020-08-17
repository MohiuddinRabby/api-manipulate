import React from "react";
import Shop from "./components/Shop/Shop";
import Nav from "./components/Nav/Nav";
import { CartProvider } from "./global/CartContext";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import About from "./components/About/About";
function App() {
  return (
    <div>
      <CartProvider>
        <Router>
          <Nav></Nav>
          <Switch>
            <Route exact path="/" component={Shop} />
            <Route path="/about" component={About} />
            <Route path="/details/:key" component={ProductDetails} />
          </Switch>
        </Router>
      </CartProvider>
    </div>
  );
}

export default App;
