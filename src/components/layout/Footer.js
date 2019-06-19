import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <footer
        id="footer"
        className="bg-color-secondary custom-footer m-0"
        style={{
          background: "url('img/demos/church/footer-bg.jpg')",
          backgroundSize: "cover"
        }}
      >
        <div className="container pt-5">
          <div className="row text-center">
            <div className="col">
              <a href="demo-church.html" className="text-decoration-none">
                <img
                  src="img/demos/church/logo-white.png"
                  width="90"
                  height="41"
                  alt="."
                  className="img-fluid custom-img-fluid-center"
                />
              </a>
            </div>
          </div>
          <hr className="solid tall custom-hr-color-1" />
          <div className="row text-center">
            <div className="col-lg-4 custom-sm-margin-bottom-1">
              <i className="fas fa-map-marker-alt text-color-primary custom-icon-size-1" />
              <p className="custom-text-color-2">
                <strong className="text-color-light">Porto Church</strong>
                <br />
                Porto Church 123 Porto Blvd, <br />
                Suite 100 New York, NY
              </p>
            </div>
            <div className="col-lg-4 custom-sm-margin-bottom-1">
              <i className="far fa-clock text-color-primary custom-icon-size-1" />
              <p className="custom-text-color-2">
                <strong className="text-color-light">
                  Join us on <br />
                  Sunday for worship
                </strong>
                <br />
                8.00pm - 9.00pm
              </p>
            </div>
            <div className="col-lg-4">
              <i className="fas fa-phone-volume text-color-primary custom-icon-size-1" />
              <p>
                <strong className="text-color-light">Contact us now</strong>
                <br />
                <a
                  href="tel:+91123456789"
                  className="text-decoration-none custom-text-color-2"
                >
                  Phone : (123) 456-789
                </a>
                <br />
                <a
                  href="mail:mail@example.com"
                  className="text-decoration-none custom-text-color-2"
                >
                  Email : mail@example.com
                </a>
              </p>
            </div>
          </div>
          <hr className="solid tall custom-hr-color-1" />
          <div className="row text-center pb-5">
            <div className="col">
              <ul className="social-icons social-icons-clean custom-social-icons mb-3">
                <li className="social-icons-facebook">
                  <a href="http://www.facebook.com/" title="Facebook">
                    <i className="fab fa-facebook-f" />
                  </a>
                </li>
                <li className="social-icons-googleplus">
                  <a href="http://www.google.com/" title="Google Plus">
                    <i className="fab fa-google-plus-g" />
                  </a>
                </li>
                <li className="social-icons-twitter">
                  <a href="http://www.twitter.com/" title="Twitter">
                    <i className="fab fa-twitter" />
                  </a>
                </li>
                <li className="social-icons-instagram">
                  <a href="http://www.instagram.com/" title="Instagram">
                    <i className="fab fa-instagram" />
                  </a>
                </li>
              </ul>
              <p className="text-1 text-color-light opacity-7">
                © Copyright 2019. All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
