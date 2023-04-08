import React, { Component } from "react";
import Card from "../../components/Card/Card";
import Rate from "../../components/Rate/Rate.";
import Slider from "../../components/Slider/Slider";
import { getProductById } from "../../services/Products/Product";
import minus from "../../assests/images/minus.svg";
import plus from "../../assests/images/plus.svg";

class ItemDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Product: undefined,
      quantity: 0,
      selectedColor: undefined,
      selectedSize: undefined,
    };
  }
  componentDidMount() {
    const product = getProductById();
    this.setState({ Product: { ...product } });
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.Product !== prevState.Product) {
      if (this.state.Product) {
        if (this.state.Product.brandLogo) {
          this.props.setBrandLogo(this.state.Product.brandLogo);
          this.props.setBreadcrumb(this.state.Product.breadcrumb);
        }
      }
    }
  }
  addToCart = () => {
    return new Promise((resolve) => {
      const updatedItems = this.props.cartItems
        ? [...this.props.cartItems]
        : [];
      // create a new cart item object with the selected product, color, size, and quantity

      const cartItem = {
        id: this.state.Product?.id,
        description: this.state.Product?.description,
        price: this.state.Product?.priceAfterDiscount,
        currency: this.state.Product?.currency,
        color: this.state.selectedColor,
        size: this.state.selectedSize,
        quantity: this.state.quantity,
        cartItemId: `${this.state.Product?.id}_${this.state.selectedColor.id}_${this.state.selectedSize.id}`,
      };
      // check if the same cart item already exists in the array

      const foundItemIndex = updatedItems.findIndex(
        (item) => item.cartItemId === cartItem.cartItemId
      );
      if (updatedItems[foundItemIndex]) {
        updatedItems[foundItemIndex].quantity =
          updatedItems[foundItemIndex].quantity + cartItem.quantity;
      } else {
        updatedItems.push(cartItem);
      }
      // update the cart items

      this.props.setCartItems([...updatedItems]);
      let count = 0;
      updatedItems.forEach((item) => {
        count += item.quantity;
      });
      this.props.setCartItemsTotalCount(count);
      resolve();
    });
  };
  render() {
    return (
      <div className="w-100">
        <div className="container flex flex-wrap py-3">
          <div className="w-50">
            {/* Slider component */}
            <Slider images={this.state.Product?.images} />
          </div>
          <div className="w-50 px-4 py">
            {/* Product information */}
            <div className="w-100 flex flex-wrap">
              <div className="w-100">
                {/* Product brand logo */}
                {this.state.Product ? (
                  <img
                    src={this.state.Product.brandLogo}
                    width={45}
                    height={45}
                    alt=""
                  />
                ) : (
                  ""
                )}
              </div>
              <div className="w-100 w-medium fz-14">
                {/* Product description */}
                <p className="w-70 m-0 py">{this.state.Product?.description}</p>
              </div>
              <p className="w-70 m-0 py font-lightGray w-medium fz-14">
                {/* Product category */}
                {this.state.Product?.mainCategory}
              </p>
              {/* Product rating */}
              <Rate
                id={this.state.Product?.id}
                rateValue={this.state.Product?.rateValue}
                totalCountOfRates={this.state.Product?.totalCountOfRates}
              />
              <div className="flex w-100 border-b-lightGray pb-2">
                <div className="flex font-secondary bold fz-24 py">
                  {/* Product price after discount */}
                  {`${this.state.Product?.priceAfterDiscount}`}
                  <span className="fz-14 w-medium flex align-end py px-1">
                    {/* Product currency */}
                    {`${this.state.Product?.currency}`}
                  </span>
                </div>
                {/* Product discount information */}
                {this.state.Product?.discountPercentage ? (
                  <>
                    <div className="flex align-center font-lightGray line-through fz-12 p-1">
                      {/* Product original price */}
                      {`${this.state.Product.price} ${this.state.Product.currency}`}
                    </div>
                    <div className="flex align-center px-1">
                      {/* Product discount percentage */}
                      <div className="bg-primary p fz-12 border-radius-3 w-medium">
                        {this.state.Product.discountPercentage}% off
                      </div>
                    </div>
                  </>
                ) : (
                  ""
                )}
              </div>
              <div className="w-100 bold fz-15">Size</div>
              <div className="w-100 font-secondary fz-10 bold py-1 flex border-b-lightGray">
                {/* Product size options */}
                {this.state.Product?.sizes?.map((x) => (
                  <button className=" non-btn" key={`size${x.id}`}>
                    <p
                      className={`circle-50 border flex align-center justify-center font-secondary cursor fz-12 me ${
                        this.state.selectedSize?.id === x.id
                          ? "selected-size"
                          : ""
                      }`}
                      onClick={() => {
                        if (
                          this.state.selectedSize &&
                          this.state.selectedSize.id === x.id
                        ) {
                          this.setState({ selectedSize: undefined });
                        } else {
                          this.setState({ selectedSize: { ...x } });
                        }
                      }}
                    >
                      {/* Product size value */}
                      {x.value}
                    </p>
                  </button>
                ))}
              </div>
              <div className="w-100 bold fz-14 py-1">Color</div>
              <div className="w-100 py-1 flex flex-wrap border-b-lightGray">
                {/* Product color options */}
                {this.state.Product?.colors?.map((color) => (
                  <img
                    key={`color${color.id}`}
                    src={color.imageSrc}
                    width={70}
                    height={70}
                    className={`me-1  ${
                      this.state.selectedColor?.id === color.id
                        ? "selected-image cursor"
                        : "cursor"
                    }`} /*  */
                    alt=""
                    onClick={() => {
                      if (
                        this.state.selectedColor &&
                        this.state.selectedColor.id === color.id
                      ) {
                        this.setState({ selectedColor: undefined });
                      } else {
                        this.setState({ selectedColor: { ...color } });
                      }
                    }}
                  />
                ))}
              </div>
              <div className="w-100 bold fz-14 py-1">Quantity</div>

              <div className="w-100 py">
                <div className="w-50 br-20 bg-lightGray2 flex justify-between p">
                  {/* Decrease quantity button */}
                  <div
                    className="bg-primary circle-25 flex align-center justify-center cursor"
                    onClick={() => {
                      if (this.state.quantity > 0) {
                        this.setState({ quantity: this.state.quantity - 1 });
                      }
                    }}
                  >
                    <img src={minus} alt="" />
                  </div>

                  {/* Quantity display */}
                  <label className="font-secondary bold fz-14 flex align-center justify-center">
                    {this.state.quantity}
                  </label>

                  {/* Increase quantity button */}
                  <div
                    className="bg-primary circle-25 flex align-center justify-center cursor"
                    onClick={() => {
                      this.setState({ quantity: this.state.quantity + 1 });
                    }}
                  >
                    <img src={plus} alt="" />
                  </div>
                </div>
              </div>

              <div className="flex w-100 flex-wrap">
                {/* Add to cart button */}
                <div className="w-50 py-2">
                  <button
                    className="w-100 bg-secondary flex justify-center align-center fz-12 br-20 p-1 font-white bold border-0 cursor"
                    onClick={() => {
                      this.addToCart().then(() => {
                        this.setState({
                          selectedColor: undefined,
                          selectedSize: undefined,
                          quantity: 0,
                        });
                      });
                    }}
                    disabled={
                      !(
                        this.state.selectedSize &&
                        this.state.selectedColor &&
                        this.state.quantity
                      )
                    }
                  >
                    Add To Cart
                  </button>
                </div>

                {/* Pickup from store button */}
                <div className="w-50 px-1 py-2">
                  <button className="w-100 bg-primary flex justify-center align-center fz-12 br-20 p-1 bold border-0 cursor ">
                    Pickup From Store
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-100 py-2">
            {/* Heading */}
            <h3 className="font-secondary m-0">Similar Products</h3>
            {/* Subheading */}
            <p className="font-lightGray fz-14 py m-0">
              You may like these products also
            </p>

            {/* Horizontal scroll container */}
            <div className="w-100 scroll-x-secondary flex justify-between py-2">
              {/* Map through each similar product */}
              {this.state.Product?.similarProducts?.map((item) => (
                <div
                  key={`SimilarProducts${item.id}`}
                  id={`SimilarProducts${item.id}`}
                  className="me-2"
                  style={{ width: "220px" }}
                >
                  {/* Render each similar product as a card */}
                  <Card item={item} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default ItemDetails;
