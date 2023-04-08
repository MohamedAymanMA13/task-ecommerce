import React, { Component } from "react";
import product1 from "../../assests/images/product1.png";
import product2 from "../../assests/images/product2.png";
import product3 from "../../assests/images/product3.png";
import product4 from "../../assests/images/product4.png";
import product5 from "../../assests/images/product5.png";
import leftArrow2 from "../../assests/images/leftArrow2.svg";
import rightArrow2 from "../../assests/images/rightArrow2.svg";

class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSlideIndex: 0
    };
    this.nextSlide = this.nextSlide.bind(this);
    this.prevSlide = this.prevSlide.bind(this);
  }

  nextSlide() {
    const { currentSlideIndex } = this.state;
    this.setState({
      currentSlideIndex: currentSlideIndex + 1 < 5 ? currentSlideIndex + 1 : 0
    });
  }

  prevSlide() {
    const { currentSlideIndex } = this.state;
    this.setState({
      currentSlideIndex: currentSlideIndex - 1 >= 0 ? currentSlideIndex - 1 : 4
    });
  }

  render() {
    const { currentSlideIndex } = this.state;
    const images = [product1, product2, product3, product4, product5];
    return (
      <div className="w-100">
        {/* main product image */}
        <div className="w-100 relative flex justify-center">
          <img
            src={images[currentSlideIndex]}
            style={{ width: "100%", height: "470px", objectFit: "contain" }}
            alt=""
          />
        </div>

        {/* product images */}
        <div className="flex flex-wrap">
          {/* left arrow */}
          <button
            className="w-5 flex justify-center align-center cursor non-btn"
            onClick={this.prevSlide}
          >
            <img src={leftArrow2} width={20} height={20} alt="" />
          </button>

          {/* product images container */}
          <div className="flex w-90 flex">
            {images.map((image, index) => (
              <button key={index} className="w-25 px non-btn ">
                <img
                className="cursor"
                  src={image}
                  style={{
                    width: "100%",
                    height: "120px",
                    objectFit: "contain"
                  }}
                  alt=""
                  onClick={() => {
                    this.setState({ currentSlideIndex: index });
                  }}
                />
              </button>
            ))}
          </div>

          {/* right arrow */}
          <button
            className="w-5 flex justify-center align-center cursor non-btn"
            onClick={this.nextSlide}
          >
            <img src={rightArrow2} width={20} height={20} alt="" />
          </button>
        </div>
      </div>
    );
  }
}

export default Slider;
