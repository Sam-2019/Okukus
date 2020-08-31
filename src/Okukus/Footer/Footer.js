import React from "react";
import {okukus} from '../apis'
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer footer_bg text-white text-center">
      <div>
        <img src={`${okukus}/img/okukus.png`} alt="Okuku Store" className="logo" />
      </div>
      <div className="row">
        <div className="col-12 col-md-4 px-3 pt-2 ">
          <div>
            <h5>Company Overview</h5>

            <p>
              Online marketplace for shops with a wide selection of books,
              magazines & just about
              anything else.
            </p>
          </div>

          <div>
            <h5>Mission</h5>
            <p>
              Our aim is to be the  digital marketplace for local
              and physical shops. We are a total customer focused company.
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
          <a
            href="https://www.facebook.com/Okukus-Marketplace-108501647170509/"
            className=" text-decoration-none  "
          >
            <span className="">
              <i className="icon fab fa-facebook-square facebook"></i>
            </span>
          </a>

          {/* <a href="#" className=" text-decoration-none ">
              <span className=" ">
                <i className="icon fab fa-instagram instagram"></i>
              </span>
            </a> */}

          <a
            href="https://twitter.com/okukus_com"
            className=" text-decoration-none "
          >
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
            rel="noopener noreferrer"
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

          <span className="d-none d-sm-block ">
            <p className="  ">+23324 508 6885</p>
          </span>

          <span className="d-sm-none   ">
            <a href="tel:+233245086885" className=" text-decoration-none ">
              <span>
                <i className="icon fas fa-phone fa-flip-horizontal phone"></i>
              </span>
            </a>
          </span>
        </div>

        <div className="col-12 p-2  text-center">
          <p>
            &#169; Copyright {new Date().getFullYear()}. All rights reserved.
            Okukus
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
