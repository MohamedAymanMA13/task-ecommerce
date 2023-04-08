import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";
import footerLogo from "../../assests/images/footerLogo.svg";
import send from "../../assests/images/send.svg";
import fb from "../../assests/images/fb.svg";
import linkedIn from "../../assests/images/linkedIn.svg";
import insta from "../../assests/images/insta.svg";
import twitter from "../../assests/images/twitter.svg";
import nasnavLogo from "../../assests/images/nasnavLogo.svg";
import cashOnDelivery from "../../assests/images/cashOnDelivery.png";
import visa from "../../assests/images/visa.png";
import masterCard from "../../assests/images/masterCard.png";

class Footer extends Component {
  render() {
    return (
      // The outermost div with class name footer
      <div className="w-100 bg-gray py-3 font-lg footer">
        <div className="container">
          <div className="w-100 flex border-b">
            {/* The left half of the footer */}
            <div className="w-40 pb-2">
              <div className="flex flex-wrap w-100 border-end">
                <div className="w-100 ">
                  <img src={footerLogo} alt="" width={130} height={40} />
                </div>
                <div className="w-90  fz-10 w-medium">
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                    magna aliquam erat volutpat.
                  </p>
                  <p>
                    Ut wisi enim ad minim veniam, quis nostrud exerci tation
                    ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
                    consequat. Duis autem vel eum iriure dolor in hendrerit in
                    vulputate velit esse molestie consequat, vel illum dolore eu
                    feugiat nulla. Lorem ipsum dolor sit amet, consectetuer
                    adipiscing elit, sed dia
                  </p>
                  <p>
                    m nonummy nibh euismod tincidunt ut laoreet dolore magna
                    aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                    nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                    aliquip ex ea commodo consequat. Duis autem vel eum iriure
                    dolor in hendrerit in vulputate velit esse molestie
                    consequat, vel illum dolore eu feugiat nulla facilisis at
                    vero eros et accumsan et iusto odio dignissim qui blandit
                  </p>
                </div>
              </div>
            </div>
            {/* The right half of the footer */}
            <div className="w-60 p-3 flex flex-wrap pt-0">
              {/* Newsletter subscription form */}
              <p className="fz-12 bold m-1">Subscribe to our newsletter</p>
              <div className="w-100 pb-2">
                <div className="subscribe-input">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Your Mail"
                  />
                  <button className="flex align-center px-2 ">
                    <div className="flex">
                      <div className="fz-12 bold px-1">Subscribe</div>
                      <img src={send} alt="" width={15} height={15} />
                    </div>
                  </button>
                </div>
              </div>
              {/* Navigation links */}
              <div className="w-100 flex">
                <div className="w-60 border-end flex flex-wrap">
                  <Link className="link font-lg fz-12 w-100 py" to="/">
                    About Us
                  </Link>
                  <Link className="link font-lg fz-12 w-100 py" to="/">
                    Contact Us
                  </Link>
                  <Link className="link font-lg fz-12 w-100 py" to="/">
                    Track Order
                  </Link>
                  <Link className="link font-lg fz-12 w-100 py" to="/">
                    Terms & Conditions
                  </Link>
                  <Link className="link font-lg fz-12 w-100 py" to="/">
                    Privacy Policy
                  </Link>
                  <Link className="link font-lg fz-12 w-100 py" to="/">
                    Sell With Us
                  </Link>
                  <Link className="link font-lg fz-12 w-100 py" to="/">
                    Shipping And Returns
                  </Link>
                </div>
                {/* Social media links */}
                <div className="w-40 px-2 ">
                  <div className="flex flex-wrap">
                    <Link
                      className="w-100 link font-lg fz-12 w-100 py flex align-center"
                      to="/"
                    >
                      <div className="flex">
                        <img src={fb} alt="" width={25} height={25} />
                        <p className="px-2 m-0 fz-12 flex align-center">
                          /YESHTERY
                        </p>
                      </div>
                    </Link>
                    <Link
                      className="w-100 link font-lg fz-12 w-100 py flex align-center"
                      to="/"
                    >
                      <div className="flex">
                        <img src={linkedIn} alt="" width={25} height={25} />
                        <p className="px-2 m-0 fz-12 flex align-center">
                          /YESHTERY
                        </p>
                      </div>
                    </Link>
                    <Link
                      className="w-100 link font-lg fz-12 w-100 py flex align-center"
                      to="/"
                    >
                      <div className="flex">
                        <img src={insta} alt="" width={25} height={25} />
                        <p className="px-2 m-0 fz-12 flex align-center">
                          /YESHTERY
                        </p>
                      </div>
                    </Link>
                    <Link
                      className="w-100 link font-lg fz-12 w-100 py flex align-center"
                      to="/"
                    >
                      <div className="flex">
                        <img src={twitter} alt="" width={25} height={25} />
                        <p className="px-2 m-0 fz-12 flex align-center">
                          /YESHTERY
                        </p>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-100 flex justify-between fz-12 pt-2">
            <div>© 2023 yeshtery, all rights reserved.</div> {/* copyright */}
            <div className="flex">
              <div className="">
                <img
                  src={cashOnDelivery} // image source for cash on delivery
                  alt=""
                  width={80}
                  height={30}
                />
              </div>

              <div className="ms-1">
                <img
                  src={visa} // image source for visa
                  alt=""
                  width={60}
                  height={30}
                />
              </div>

              <div className="ms-1">
                <img
                  src={masterCard} // image source for mastercard
                  alt=""
                  width={60}
                  height={30}
                />
              </div>
            </div>
            <div className="flex">
              <div className="flex align-center px-1">Powered by</div>{" "}
              {/* powered by */}
              <img
                src={nasnavLogo} // image source for nasnav logo
                alt=""
                width={100}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Footer;
