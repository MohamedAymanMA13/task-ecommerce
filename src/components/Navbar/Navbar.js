import React, { Component } from "react";
import { Link } from "react-router-dom";
import menu from "../../assests/images/menu.svg";
import logo from "../../assests/images/logo.svg";
import leftArrow1 from "../../assests/images/leftArrow1.svg";
import rightArrow1 from "../../assests/images/rightArrow1.svg";
import contact from "../../assests/images/contact.svg";
import trackOrder from "../../assests/images/trackOrder.svg";
import location from "../../assests/images/location.svg";
import search from "../../assests/images/search.svg";
import bag from "../../assests/images/bag.svg";
import closeCart from "../../assests/images/closeCart.svg";
import wishList from "../../assests/images/wishList.svg";
import client from "../../assests/images/client.svg";

class Navbar extends Component {
  // Constructor to initialize the state of the component
  constructor(props) {
    super(props);
    this.state = {
      openCart: false, // variable to control the cart overlay
      totalCart: 0, // total cost of all items in the cart
    };
  }

  // Lifecycle method called after the component has mounted on the DOM
  componentDidMount() {}

  // Lifecycle method called after the component has updated
  componentDidUpdate(prevProps) {
    // If the previous cart items are not equal to the current cart items
    if (prevProps.cartItems !== this.props.cartItems) {
      let total = 0;
      // Loop through each item in the cart and add its price to the total
      this.props.cartItems?.forEach((item) => {
        total += parseInt(item.price);
      });
      // Update the state with the total cost of all items in the cart
      this.setState({ totalCart: total });
    }
  }

  // Method to remove an item from the cart
  removeItemCart = (index) => {
    const UpdatedItem = [...this.props.cartItems];
    UpdatedItem.splice(index, 1); // Remove the selected item from the cart
    console.log(UpdatedItem, "UpdatedItem");
    this.props.setCartItems(UpdatedItem); // Update the cart items in the parent component
    let count = 0;
    // Calculate the total quantity of all items in the cart
    UpdatedItem.forEach((item) => {
      count += item.quantity;
    });
    this.props.setCartItemsTotalCount(count); // Update the total count of items in the cart in the parent component
  };

  render() {
    return (
      <div className="w-100">
        {/* Top Header */}
        <div className="w-100 bg-primary darkShadow">
          <div className="container py flex justify-between flex-wrap">
            {/* Left Section */}
            <div className="flex">
              <div className="flex align-center">
                <img src={menu} alt="Menu" width={20} height={20} />
              </div>
              <div className="flex align-center px-2">
                <img src={logo} alt="Menu" width={75} height={20} />
              </div>
            </div>
            {/* Center Section */}
            <div className="flex">
              <div className="flex align-center">
                <img src={leftArrow1} alt="" width={20} height={12} />
              </div>
              <label className="flex align-start fz-12 px-1 py ">
                Valentine’s Day Offers! Buy Two Get One Free
                <Link
                  className="link ps-1 w-medium text-underline "
                  to="/"
                >
                  Shop Now
                </Link>
              </label>
              <div className="flex align-center">
                <img src={rightArrow1} alt="" width={20} height={12} />
              </div>
            </div>
            {/* Right Section */}
            <div className="flex ">
              <div className="flex align-center ps-2">
                <div className="flex ">
                  <div className="flex align-center">
                    <img src={contact} alt="" width={20} height={18} />
                  </div>
                  <label className="fz-12 w-medium px-1">Contact Us</label>
                </div>
              </div>
              <div className="flex align-center ps-2">
                <div className="flex ">
                  <div className="flex align-center">
                    <img src={trackOrder} alt="" width={20} height={18} />
                  </div>
                  <label className="fz-12 w-medium px-1">
                    Track Order
                  </label>
                </div>
              </div>
              <div className="flex align-center ps-2">
                <div className="flex ">
                  <div className="flex align-center">
                    <img src={location} alt="" width={20} height={18} />
                  </div>
                  <label className="fz-12 w-medium ps-1">
                    Find A Store
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End of Right Section */}

        <div className="w-100 darkShadow">
          <div className="container py-1 flex justify-between">
            <div className="flex align-center">
              {/* Search bar */}
              <div className="left-inner-addon">
                <img src={search} alt="" width={15} height={15} />
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search"
                />
              </div>
            </div>
            <div className="flex align-center">
              {/* Brand logo */}
              {this.props.brandLogo ? (
                <img src={this.props.brandLogo} alt="" width={70} height={50} />
              ) : (
                ""
              )}
            </div>
            <div className="flex">
              {/* Cart button */}
              <div
                className="flex px-2 cursor"
                onClick={() => {
                  this.setState({ openCart: true });
                }}
              >
                <div className="flex align-center relative">
                  <img width={30} height={30} src={bag} alt="" />
                  <div className="cart-count">
                    {this.props.cartItemsTotalCount > 9
                      ? "9+"
                      : this.props.cartItemsTotalCount}
                  </div>
                </div>
                <div className="flex align-center fz-14 bold ps-1">Cart</div>
              </div>
              {/* Wishlist button */}
              <div className="flex px-2">
                <div className="flex align-center">
                  <img width={25} height={25} src={wishList} alt="" />
                </div>
                <label className="flex align-center fz-14 bold ps-1">
                  Wishlist
                </label>
              </div>
              {/* Login button */}
              <div className="flex ps-2">
                <div className="flex align-center ">
                  <img width={20} height={25} src={client} alt="" />
                </div>
                <label className="flex align-center fz-14 bold ps-1">
                  Login
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className="w-100 bg-black lightShadow">
          <div className="container py-1 flex justify-between">
            {/* Navigation links */}
            <Link className="link w-medium font-white fz-16" to="/">
              Men
            </Link>
            <Link className="link ps-1 w-medium font-white fz-16" to="/">
              Women
            </Link>
            <Link className="link ps-1 w-medium font-white fz-16" to="/">
              Unisex
            </Link>
            <Link className="link ps-1 w-medium font-white fz-16" to="/">
              Kids
            </Link>
            <Link className="link ps-1 w-medium font-white fz-16" to="/">
              Best Sellers
            </Link>
            <Link className="link ps-1 w-medium font-white fz-16" to="/">
              New Arrivals
            </Link>
            <Link className="link ps-1 w-medium font-red fz-16" to="/">
              Offers
            </Link>
          </div>
        </div>
        <div className="w-100 py-2 border-b">
          <div className="container flex fz-12">
            {/* Breadcrumbs */}

            <Link className="link w-medium text-underline" to="/">
              Men
            </Link>
            <label className="w-medium px-1">/</label>
            <Link className="link w-medium text-underline" to="/">
              Clothing
            </Link>
            <label className="w-medium px-1">/</label>
            <Link className="link w-medium text-underline" to="/">
              Tops
            </Link>
            <label className="w-medium px-1">/</label>
            <Link className="link w-medium text-underline" to="/">
              Adidas
            </Link>
            <label className="w-medium px-1">/</label>
            <label className="w-medium">Adidas Black T-Shirt</label>
          </div>
        </div>
        {this.state.openCart ? (
          <div className="cart-overlay flex justify-end">
            <div className="bg-white w-400px h-100  p-2 scroll-y">
              <div className="flex flex-wrap">
                <button
                  className="w-100 non-btn flex justify-end cursor non-btn"
                  onClick={() => {
                    this.setState({ openCart: false });
                  }}
                >
                  <img src={closeCart} alt="" width={15} height={15} />
                </button>
                {/* Cart Header */}
                <div className="w-100 flex justify-center fz-20 font-secondary bold">
                  My Cart
                </div>
                <div className="w-100  fz-14 py-3 w-medium">
                  Cart Summary
                </div>
                {/* Check if cart is empty */}
                {this.props.cartItems?.length ? (
                  <>
                    {/* Cart Items */}
                    {this.props.cartItems.map((item, index) => (
                      <div className="w-100 mb-2 flex flex-wrap border-radius-5 darkShadow p-1">
                        <div
                          className="w-30  flex align-center border-radius-5"
                          style={{ backgroundColor: "#ECEEF0" }}
                        >
                          <img
                            src={item.color?.imageSrc}
                            alt=""
                            style={{ width: "100%", objectFit: "contain" }}
                          />
                        </div>
                        <div className="w-70 px-1">
                          <div className="w-100 bold fz-12 pb-1">
                            {item.description}
                          </div>
                          <div className="w-100 flex flex-wrap">
                            <div className="w-60">
                              <div className="w-100 fz-10 w-medium ">
                                {`Quantity: ${item.quantity}`}
                              </div>
                              <div className="w-100 fz-10 w-medium ">
                                {`Size: ${item.size?.value}`}
                              </div>
                              <div className="w-100 fz-14 bold font-secondary flex py">
                                {item.price}
                                <span className="fz-12 w-medium flex align-end px">
                                  {item.currency}
                                </span>
                              </div>
                            </div>
                            <div className="flex w-40 align-end">
                              <button
                                className="w-100 bg-primary flex justify-center align-center fz-12 br-20 p bold border-0 cursor"
                                onClick={() => {
                                  this.removeItemCart(index);
                                }}
                              >
                                Remove
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                    {/* Cart Total */}
                    <div className="w-100 flex justify-center fz-24 bold">
                      {`Total: ${this.state.totalCart} ${this.props.cartItems[0]?.currency}`}
                    </div>
                    {/* Cart Buttons */}
                    <div className="flex w-100 flex-wrap">
                      <div className="w-50 py-2">
                        <button className="w-100  bg-primary flex justify-center align-center fz-12 br-20 p-1  bold border-0 cursor">
                          Review Cart
                        </button>
                      </div>
                      <div className="w-50 px-1 py-2">
                        <button className="w-100 bg-secondary flex justify-center align-center fz-12 br-20 p-1 bold font-white cursor">
                          Complete Checkout
                        </button>
                      </div>
                    </div>
                  </>
                ) : (
                  // Empty Cart
                  ""
                )}
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}
export default Navbar;
