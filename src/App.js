import React, { Component, Suspense, lazy } from "react";
import "./App.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import { history } from "./services/helpers/history";
import Footer from "./components/Footer/Footer";

// Lazy-loading ItemDetails component
const ItemDetails = lazy(() => import("./pages/ItemDetails/ItemDetails"));

class App extends Component {
  constructor(props) {
    super(props);
    // Initialize state
    this.state = {
      cartItems: [],
      brandLogo: undefined,
      breadcrumb: [],
      cartItemsTotalCount: 0,
    };
  }

  // Set brand logo
  setBrandLogo = (logo) => {
    this.setState({ brandLogo: logo });
  };

  // Set cart items
  setCartItems = (updatedItems) => {
    this.setState({ cartItems: [...updatedItems] });
  };
  
  // Set breadcrumb
  setBreadcrumb = (updatedBreadcrumb) => {
    this.setState({ breadcrumb: [...updatedBreadcrumb] });
  };

  // Set total cart items count
  setCartItemsTotalCount = (count) => {
    this.setState({ cartItemsTotalCount: count });
  };

  // Update cart items when cartItemsTotalCount changes
  componentDidUpdate(prevProps, prevState) {
    // Log cart items when cartItemsTotalCount changes
    if (prevState.cartItemsTotalCount !== this.state.cartItemsTotalCount) {
      console.log(this.state.cartItems, "this.state.cartItems");
    }
  }

  render() {
    return (
      <div className="App">
      {/* Set up React Router */}
        <Router history={history}>
          {/* Render Navbar component */}
          <Navbar
            brandLogo={this.state.brandLogo}
            cartItems={this.state.cartItems}
            cartItemsTotalCount={this.state.cartItemsTotalCount}
            breadcrumb={this.state.breadcrumb}
            setCartItems={this.setCartItems}
            setCartItemsTotalCount={this.setCartItemsTotalCount}
          />
          {/* Set up lazy-loading of routes */}
          <Suspense fallback={<div className="loading">Loading ...</div>}>
            <Routes>
              {/* Render ItemDetails component for root route */}
              <Route
                path="/"
                exact
                element={
                  <ItemDetails
                    // Pass state properties 
                    cartItems={this.state.cartItems}
                    setCartItems={this.setCartItems}
                    setBrandLogo={this.setBrandLogo}
                    setBreadcrumb={this.setBreadcrumb}
                    setCartItemsTotalCount={this.setCartItemsTotalCount}
                  />
                }
              />
            </Routes>
          </Suspense>

         {/* Render Footer component */}
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;
