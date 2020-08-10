import React from "react";
import "./footer.css";
import logo from "./logo.png";

const Footer = () => {
  return (
    <>
      <div className="footer footer_bg text-white text-center">
        <div>
          <img src={logo} alt="Okuku Store" className="logo" />
        </div>
        <div className="row">
          <div className="col-12 col-md-4 px-3 pt-2 ">
            <div>
              <h5>Company Overview</h5>

              <p>
                Online marketplace for shops with a wide selection of books,
                magazines, music, DVDs, apparel & accessories, shoes & just
                about anything else.
              </p>
            </div>

            <div>
              <h5>Mission</h5>
              <p>
                Our aim is to be the world’s largest digital marketplace for
                local and physical shops. We are a total customer focused
                company.
              </p>
            </div>
          </div>

          <div className="col-12 col-md-3 px-4 pt-2 ">
            <h5>Visit Our Office</h5>
            <p>
              Hardhart Bookshop
              <br />
              Community 1, Site 4, F7 Tema
            </p>
          </div>

          <div className="col-12 col-md  pt-2 ">
            <h5>Follow Us</h5>
            <a href="https://www.facebook.com/Okukus-Marketplace-108501647170509/" className=" text-decoration-none  ">
              <span className="">
                <i className="icon fab fa-facebook-square facebook"></i>
              </span>
            </a>

            <a href="#" className=" text-decoration-none ">
              <span className=" ">
                <i className="icon fab fa-instagram instagram"></i>
              </span>
            </a>

            <a href="https://twitter.com/okukus_com" className=" text-decoration-none ">
              <span>
                <i className="icon fab fa-twitter  twitter"></i>
              </span>
            </a>
          </div>

          <div className="col-12 col-md  pt-2  ">
            <h5>Contact Us</h5>

            <a
              tccltracking="click"
              typography="ButtonAlpha"
              rel="noopener"
              data-ux="Button"
              href="https://wa.me/233245086885"
              target="_blank"
              data-aid="CONTACT_INFO_WHATS_APP_REND"
              data-route="whatsApp"
              data-tccl="ux2.contact.whatsapp.click,click"
              className=" text-decoration-none  "
            >
              <span className="">
                <i className="icon fab fa-whatsapp whatsapp"></i>
              </span>
            </a>

            <a href="tel:+233245086885" className=" text-decoration-none ">
              <span className=" ">
                <i className="icon fas fa-phone fa-flip-horizontal phone"></i>
              </span>
            </a>
          </div>

          <div className="col-12 p-2  text-center">
            &#169; Copyright {new Date().getFullYear()}. All rights reserved.
            Okukus
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
