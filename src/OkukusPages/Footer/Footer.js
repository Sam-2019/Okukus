import React from "react";

import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_wrapper ">
        <div className="company_overview ">
          <h5>Company Overview</h5>

          <p>
            Online marketplace for shops with a wide selection of books,
            magazines & just about anything else.
          </p>
        </div>

        <div className="mission ">
          <h5>Mission</h5>
          <p>
            Our aim is to be the digital marketplace for local and physical
            shops. We are a total customer focused company.
          </p>
        </div>

        <div className="visit ">
          <h5>Visit Our Office</h5>
          <p>
            OKUKUS
            <br />
            Community 1, Site 4, F7 Tema
            <br />
            <span className="d-none d-sm-block ">+233 30 321 7258</span>
          </p>
        </div>

        <div className="reach ">
          <h5>Reach out</h5>

          <div className="reach_wrapper ">
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

            <span className="d-sm-none">
              <a
                href="tel:+233303217258"
                className=" text-decoration-none      "
              >
                <span>
                  <i className="icon fas fa-phone fa-flip-horizontal phone"></i>
                </span>
              </a>
            </span>
          </div>
        </div>
      </div>
      <div className="copyright">
        &#169; Copyright {new Date().getFullYear()}. All rights reserved. Okukus
      </div>
    </div>
  );
};

export default Footer;
