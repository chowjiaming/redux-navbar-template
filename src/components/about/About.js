import React, { Component, Fragment } from "react";
import { switchPages } from "redux/navbar/actions";
import store from "redux/store";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class About extends Component {
  componentDidMount() {
    const { pageRoute } = this.props.navbar;
    // set all route key values to false, then flip gallery value
    if (pageRoute) {
      Object.keys(pageRoute).forEach(route => (pageRoute[route] = false));
      pageRoute.about = !pageRoute.about;
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
                  Who We Are
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
              <div className="col-lg-7 col-sm-7">
                <h2 className="font-weight-bold">
                  We seek love God above all thing
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  ornare diam at lectus ultrices rutrum. Fusce et lobortis orci,
                  vel rutrum nisl. Praesent ut eros blandit risus fermentum
                  mattis. Ut eleifend metus in arcu malesuada, nec tincidunt
                  lectus luctus. Suspendisse dignissim velit eu lacinia egestas.
                  Duis posuere mi a est vestibulum congue. Pellentesque quis
                  velit in velit maximus varius. Donec.
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
              </div>
              <div className="col-lg-5 col-sm-5 d-none d-sm-block">
                <div className="custom-box-squares">
                  <img
                    className="custom-cloud left-pos-2"
                    alt="church"
                    src="img/demos/church/others/left-cloud.png"
                  />
                  <div
                    className="custom-big-square left-pos-2 custom-box-shadow"
                    style={{
                      background:
                        "url('img/demos/church/others/big-left-square-img.jpg')",
                      backgroundSize: "cover"
                    }}
                  />
                  <div
                    className="custom-small-square left-pos-2 custom-box-shadow"
                    style={{
                      background:
                        "url('img/demos/church/others/small-left-square-img.jpg')",
                      backgroundSize: "cover"
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-secondary section-no-border m-0">
          <div className="container">
            <div className="row text-center justify-content-center">
              <div className="col-sm-8 col-lg-4 mb-4 mb-lg-0">
                <img
                  src="img/demos/church/icons/custom-icon-1.png"
                  alt="church"
                  className="img-repsonsive"
                />
                <h2 className="font-weight-bold text-color-light">
                  Our Values
                </h2>
                <p className="custom-text-color-2 mb-0">
                  Lorem ipsum dolor sit amet, adipiscing elit.
                  <br /> Mauris accumsan tortor ut posuere consequat.
                  <br /> Fusce aliquet, dolor eget tempus ultricies, eros.
                </p>
              </div>
              <div className="col-sm-8 col-lg-4 mb-4 mb-lg-0">
                <img
                  src="img/demos/church/icons/custom-icon-2.png"
                  alt="church"
                  className="img-repsonsive"
                />
                <h2 className="font-weight-bold text-color-light">
                  Join with Us
                </h2>
                <p className="custom-text-color-2 mb-0">
                  <strong className="text-color-light">
                    Sundays at 8.00pm - 9.00pm
                  </strong>
                  <br /> at Porto Church 123 Porto Blvd, <br />
                  Suite 100 New York, NY
                </p>
              </div>
              <div className="col-sm-8 col-lg-4">
                <img
                  src="img/demos/church/icons/custom-icon-3.png"
                  alt="church"
                  className="img-repsonsive"
                />
                <h2 className="font-weight-bold text-color-light">
                  Our Mission
                </h2>
                <p className="custom-text-color-2 mb-0">
                  Lorem ipsum dolor sit amet, adipiscing elit.
                  <br /> Mauris accumsan tortor ut posuere consequat.
                  <br /> Fusce aliquet, dolor eget tempus ultricies, eros.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section bg-color-tertiary section-no-border m-0">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-sm-4">
                <span className="thumb-info custom-thumb-info-3 thumb-info-no-zoom">
                  <span className="thumb-info-wrapper">
                    <img
                      src="img/demos/church/about-us/about-us-expect-1.jpg"
                      alt="church"
                      className="img-fluid"
                    />
                  </span>
                  <span className="thumb-info-caption">
                    <span className="thumb-info-caption-text">
                      <h4 className="font-weight-bold custom-primary-font mb-0 mt-3">
                        Joe Albert Doe
                      </h4>
                      <p className="mb-0">The Reverend</p>
                    </span>
                  </span>
                </span>
                <a
                  href="/staff"
                  className="btn btn-primary custom-btn-style-1 text-uppercase mb-4 mb-lg-0 mt-4"
                  title="Meet Our Staff"
                >
                  Meet our Staff
                </a>
              </div>
              <div className="col-lg-9 col-sm-8">
                <h2 className="font-weight-bold">What to Expect</h2>
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
              </div>
            </div>
          </div>
        </section>

        <section className="section section-no-border bg-color-light m-0">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 mb-4 mb-md-0">
                <h2 className="font-weight-bold">Talk to Us</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam tempor ligula nec.
                </p>
                <div className="row">
                  <div className="col-lg-6 col-sm-12">
                    <div className="custom-location">
                      <img
                        src="img/demos/church/others/pin.png"
                        alt="church"
                        className="img-fluid"
                      />
                      <h4 className="font-weight-bold custom-primary-font mb-1">
                        Los Angeles
                      </h4>
                      <p>
                        Porto Blvd, Suite 100
                        <br />
                        Los Angeles/CA
                        <br />
                        <strong>Phone:</strong>{" "}
                        <a
                          className="custom-text-color-default"
                          href="tel:+123456789"
                        >
                          123-456-7890
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6 col-sm-12">
                    <div className="custom-location">
                      <img
                        src="img/demos/church/others/pin.png"
                        alt="church"
                        className="img-fluid"
                      />
                      <h4 className="font-weight-bold custom-primary-font mb-1">
                        New York
                      </h4>
                      <p>
                        Porto Blvd, Suite 100
                        <br />
                        New York/NY
                        <br />
                        <strong>Phone:</strong>{" "}
                        <a
                          className="custom-text-color-default"
                          href="tel:+123456789"
                        >
                          123-456-7890
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
                <form
                  id="contactFormMessage"
                  className="contact-form custom-form-style-1 mt-4"
                  action="php/contact-form.php"
                  method="POST"
                >
                  <h6 className="font-weight-bold custom-primary-font">
                    Send a Message:
                  </h6>
                  <div
                    className="contact-form-success alert alert-success d-none mt-4"
                    id="contactFormMessageSuccess"
                  >
                    <strong>Success!</strong> Your message has been sent to us.
                  </div>

                  <div
                    className="contact-form-error alert alert-danger d-none mt-4"
                    id="contactFormMessageError"
                  >
                    <strong>Error!</strong> There was an error sending your
                    message.
                    <span
                      className="mail-error-message text-1 mt-2 d-block"
                      id="contactFormMessageErrorMessage"
                    />
                  </div>

                  <input
                    type="hidden"
                    name="subject"
                    value="Church - Subject"
                  />
                  <div className="form-row mb-3">
                    <div className="form-group col-sm-6">
                      <input
                        type="text"
                        value=""
                        data-msg-required="Please enter your name."
                        maxlength="100"
                        className="form-control custom-xs-mb"
                        name="name"
                        id="contactName"
                        placeholder="Your Name"
                        required
                      />
                    </div>
                    <div className="form-group col-sm-6">
                      <input
                        type="email"
                        value=""
                        data-msg-required="Please enter your email address."
                        data-msg-email="Please enter a valid email address."
                        maxlength="100"
                        className="form-control"
                        name="email"
                        id="contactEmail"
                        placeholder="Your E-mail"
                        required
                      />
                    </div>
                  </div>
                  <div className="form-row mb-3">
                    <div className="form-group col">
                      <textarea
                        maxlength="5000"
                        data-msg-required="Please enter your message."
                        rows="4"
                        className="form-control"
                        name="message"
                        id="contactMessage"
                        placeholder="Your Message"
                        required
                      />
                    </div>
                  </div>
                  <div className="form-row mb-3">
                    <div className="form-group col">
                      <input
                        type="submit"
                        value="Send Message"
                        className="btn btn-primary custom-btn-style-1 text-uppercase float-right"
                        data-loading-text="Loading..."
                      />
                    </div>
                  </div>
                </form>
              </div>
              <div className="col-lg-6">
                <img
                  src="img/demos/church/about-us/about-us-gallery-1.jpg"
                  alt="church"
                  className="img-fluid custom-border-1 custom-box-shadow"
                />
                <a
                  href="/gallery"
                  className="btn btn-primary custom-btn-style-1 text-uppercase float-right mt-3"
                >
                  View Gallery
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-no-border custom-position-relative custom-overflow-hidden p-0 m-0">
          <div className="custom-view-our-location text-center">
            <img
              src="img/demos/church/others/view-our-location.png"
              alt="church"
            />
            <a
              href="/about"
              onclick="initMapAt({latitude: 40.75198, longitude: -73.96978, zoom: 16}, event)"
              className="custom-view-location custom-secondary-font font-weight-bold text-color-light"
            >
              View Our Location
            </a>
          </div>
          <div id="googlemaps" />
        </section>
      </Fragment>
    );
  }
}

About.propTypes = {
  navbar: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  navbar: state.navbar
});

export default connect(
  mapStateToProps,
  {}
)(About);
