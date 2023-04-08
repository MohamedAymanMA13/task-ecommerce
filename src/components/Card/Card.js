import React, { Component } from "react";
import similarProduct1 from "../../assests/images/similarProduct1.png";
import brandLogo from "../../assests/images/brandLogo.svg";
import icon360 from "../../assests/images/icon360.svg";
import Rate from "../Rate/Rate.";
class Card extends Component {
  constructor(props) {
    super(props);
    this.state = { item: undefined };
  }

  // Runs after component is mounted on the DOM
  componentDidMount() {
    if (this.props.item) {
      // Sets the state item value to the passed prop item value
      this.setState({ item: this.props.item });
    }
  }

  // Renders the component
  render() {
    return (
      <button className="w-100 flex flex-wrap border darkShadow p border-radius-5 cursor non-btn">
        {this.state.item ? (
          <>
            {/* Item Image */}
            <div className="w-100 relative">
              <img
                src={this.state.item.imageSrc}
                alt=""
                style={{
                  width: "210px",
                  height: "210px",
                  objectFit: "contain",
                }}
              />
              {/* 360° icon */}
              <div className="icon-360 flex align-center justify-center">
                <img src={icon360} alt="" width={25} height={25} />
              </div>
            </div>

            {/* Item Description */}
            <div className="w-90 p">
              <p className="fz-12 bold m-0">{this.state.item.description}</p>
            </div>

            {/* Item Price and Discount */}
            <div className="w-100 flex justify-between">
              <div className="flex flex-wrap px">
                <div className="flex font-secondary bold fz-16">
                  {this.state.item.priceAfterDiscount}
                  <span className="fz-12 w-medium flex align-end p">
                    LE
                  </span>
                </div>
                {/* If discount percentage exists */}
                {this.state.item.discountPercentage ? (
                  <div className="w-100 flex">
                    <div className="flex align-center font-lightGray line-through fz-12 ">
                      {this.state.item.price} LE
                    </div>
                    {/* Discount percentage badge */}
                    <div className="flex align-center px-1">
                      <div
                        className="bg-primary fz-10 border-radius-3 w-medium"
                        style={{ padding: "2px" }}
                      >
                        {this.state.item.discountPercentage}% off
                      </div>
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </div>
              {/* Item Brand Logo */}
              <div className="flex align-center px">
                <img
                  src={this.state.item.brandLogo}
                  alt=""
                  width={50}
                  height={45}
                />
              </div>
            </div>

            {/* Item Rating */}
            <div className="w-100 flex justify-center py">
              <Rate
                id={`similar${this.state.item.id}`}
                rateValue={this.state.item.rateValue}
                totalCountOfRates={this.state.item.totalCountOfRates}
              />
            </div>

            {/* Item Store Availability */}
            {this.state.item.storeAvailability ? (
              <div className="w-100 flex justify-center fz-10 w-medium pb-1">
                <p className="m-0">
                  Pickup From:
                  <span className="bold px fz-12">Genena Mall</span>
                </p>
              </div>
            ) : (
              // If item is not available in store
              <div className="w-100 flex justify-between px fz-10 w-medium pb-1">
                <p className=" m-0">
                  From:
                  <span className="bold px fz-12">UK</span>
                </p>
                <p className=" m-0">
                  To:
                  <span className="bold px fz-12">Egypt</span>
                </p>
                <p className=" m-0">
                  In:
                  <span className="bold px fz-12">2 Days</span>
                </p>
              </div>
            )}
          </>
        ) : (
          ""
        )}
      </button>
    );
  }
}
export default Card;
