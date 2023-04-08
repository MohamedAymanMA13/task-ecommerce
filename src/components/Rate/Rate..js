import React, { Component } from "react";
import filledStar from "../../assests/images/filledStar.svg";
import hollowStar from "../../assests/images/hollowStar.svg";

class Rate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rateValue: 0, // the current value of the rating
      remainingRate: 5, // the number of remaining stars to be shown
      totalCountOfRates: 0, // the total number of rates
    };
  }

  // Lifecycle method that is called after the component has mounted
  componentDidMount() {
    if (this.props.rateValue) {
      this.setState({
        rateValue: this.props.rateValue,
        remainingRate: 5 - parseInt(this.props.rateValue),
        totalCountOfRates: this.props.totalCountOfRates,
      });
    }
  }

  // Lifecycle method that is called after the component has updated
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.rateValue !== this.props.rateValue) {
      this.setState({
        rateValue: this.props.rateValue,
        remainingRate: 5 - parseInt(this.props.rateValue),
        totalCountOfRates: this.props.totalCountOfRates,
      });
    }
  }

  render() {
    return (
      <div className="w-100 flex py">
        {/* Display filled stars */}
        <div className="flex">
          {parseInt(this.state.rateValue) > 0
            ? Array.from(Array(parseInt(this.state.rateValue)).keys()).map(
                (x) => (
                  <img
                    key={`${this.props.id}_fill_${x}`}
                    src={filledStar}
                    alt=""
                    width={15}
                    height={15}
                    className="me"
                  />
                ),
              )
            : ""}

          {/* Display hollow stars */}
          {this.state.remainingRate > 0
            ? Array.from(Array(this.state.remainingRate).keys()).map((x) => (
                <img
                  key={`${this.props.id}_hollow_${x}`}
                  src={hollowStar}
                  alt=""
                  width={15}
                  height={15}
                  className="me"
                />
              ))
            : ""}
        </div>
        {/* Display rating value out of 5 */}
        <div className="fz-14 bold px-2">{this.state.rateValue} of 5</div>
        {/* Display total count of rates */}
        <div className="fz-12 w-medium flex align-center font-gray ">
          {this.state.totalCountOfRates} Rates
        </div>
      </div>
    );
  }
}

export default Rate;
