import React, { Component, Fragment } from "react";
import { switchPages } from "redux/navbar/actions";
import store from "redux/store";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class Staff extends Component {
  componentDidMount() {
    const { pageRoute } = this.props.navbar;
    // set all route key values to false, then flip gallery value
    if (pageRoute) {
      Object.keys(pageRoute).forEach(route => (pageRoute[route] = false));
      pageRoute.staff = !pageRoute.staff;
    }
    store.dispatch(switchPages(pageRoute));
  }
  render() {
    return (
      <Fragment>
        <section
          className="page-header page-header-modern page-header-background page-header-background-sm parallax overlay overlay-color-dark overlay-show overlay-op-1 my-0"
          data-plugin-parallax
          data-plugin-options="{'speed': 1.5}"
          data-image-src="img/demos/church/about-us/about-us-parallax-1.jpg"
        >
          <div className="container">
            <div className="row my-5">
              <div className="col-md-12 align-self-center text-center">
                <h1 className="text-9 text-color-light custom-secondary-font font-weight-bold mb-1">
                  Meet Our Staff
                </h1>
                <p className="text-color-light custom-secondary-font text-uppercase mb-0">
                  About Us
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-no-border bg-color-light m-0">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 mb-4 mb-lg-0">
                <span className="thumb-info custom-thumb-info-3 thumb-info-no-zoom custom-box-shadow mb-4">
                  <span className="thumb-info-wrapper">
                    <img
                      src="img/demos/church/about-us/about-us-staff-1.jpg"
                      alt="img/demos/church/about-us/about-us-staff-1.jpg"
                      className="img-fluid"
                    />
                  </span>
                </span>
                <ul className="social-icons custom-social-icons-3">
                  <li className="social-icons-facebook">
                    <a href="http://www.facebook.com/" title="Facebook">
                      <i className="fab fa-facebook-f" />
                    </a>
                  </li>
                  <li className="social-icons-twitter">
                    <a href="http://www.twitter.com/" title="Twitter">
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                  <li className="social-icons-linkedin">
                    <a href="http://www.linkedin.com/" title="Linkedin">
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-8">
                <h2 className="font-weight-bold mb-1">Joe Albert Doe</h2>
                <p className="lead text-4">The Reverend</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  interdum felis ac turpis consectetur molestie. Donec rutrum
                  nibh ac felis convallis tempor. Nunc non consequat lorem. Duis
                  a porta sapien. Aliquam erat volutpat. Suspendisse aliquam, mi
                  in elementum lacinia, orci erat hendrerit sem, eget varius
                  elit magna sagittis velit. Proin posuere malesuada sem, nec
                  venenatis justo sodales eget. Nunc imperdiet.
                </p>
                <p className="text-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Maecenas quis mauris urna. Donec pellentesque eros non sapien
                  malesuada, at facilisis diam interdum. Praesent non cursus
                  dui, et consectetur risus. Pellentesque eu arcu sollicitudin,
                  viverra neque ut, facilisis ligula. In faucibus tellus ac
                  metus ullamcorper aliquet. Aliquam sem dui, cursus quis magna
                  vitae, convallis malesuada tellus. Nam malesuada.
                </p>
                <p className="text-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Maecenas quis mauris urna. Donec pellentesque eros non sapien
                  malesuada, at facilisis diam interdum. Praesent non cursus
                  dui, et consectetur risus. Pellentesque eu arcu sollicitudin,
                  viverra neque ut, facilisis ligula. In faucibus tellus ac
                  metus ullamcorper aliquet. Aliquam sem dui, cursus quis magna
                  vitae, convallis malesuada tellus. Nam malesuada.
                </p>

                <h6 className="custom-primary-font font-weight-bold mt-4">
                  History
                </h6>
                <ul className="list list-unstyled list-primary list-borders">
                  <li className="pt-2 pb-2">
                    <strong className="text-color-dark">2017 - </strong> History
                    fact 1 lorem ipsum dolor ametorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Curabitur hendrerit, leo vitae
                    interdum pretium.
                  </li>
                  <li className="pt-2 pb-2">
                    <strong className="text-color-dark">2014 - </strong> History
                    fact 2 lorem ipsum dolor ametorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Curabitur hendrerit, leo vitae
                    interdum pretium lorem ipsum dolor ametorem ipsum dolor sit
                    amet, consectetur addis.
                  </li>
                  <li className="pt-2 pb-2">
                    <strong className="text-color-dark">2006 - </strong> History
                    fact 3 lorem ipsum dolor sit.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-tertiary section-no-border m-0">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-10">
                <span className="custom-secondary-font font-weight-bold custom-text-color-1 text-4">
                  First time visitor
                </span>
                <h2 className="font-weight-bold custom-text-color-1 m-0">
                  Find out more about the Church.{" "}
                  <span className="font-weight-normal custom-secondary-font custom-font-italic">
                    You belong here
                  </span>
                </h2>
              </div>
              <div className="col-lg-2 mt-4 mt-lg-0">
                <a
                  href="/about"
                  className="btn btn-primary custom-btn-style-1 text-uppercase"
                >
                  Visitors Guide
                </a>
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}

Staff.propTypes = {
  navbar: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  navbar: state.navbar
});

export default connect(
  mapStateToProps,
  {}
)(Staff);
