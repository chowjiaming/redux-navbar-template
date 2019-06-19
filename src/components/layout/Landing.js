import React, { Component, Fragment } from "react";
import { switchPages } from "redux/navbar/actions";
import store from "redux/store";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class Landing extends Component {
  componentDidMount() {
    const { pageRoute } = this.props.navbar;
    // set all route key values to false, then flip gallery value
    if (pageRoute) {
      Object.keys(pageRoute).forEach(route => (pageRoute[route] = false));
      pageRoute.landing = !pageRoute.landing;
    }
    store.dispatch(switchPages(pageRoute));
  }
  render() {
    return (
      <Fragment>
        <div
          className="slider-container rev_slider_wrapper"
          style={{ height: "600px" }}
        >
          <div
            id="revolutionSlider"
            className="slider rev_slider manual"
            data-version="5.4.8"
          >
            <ul>
              <li data-transition="fade">
                <img
                  src="img/demos/church/slides/slide-1.jpg"
                  alt="Proceed to the Next Steps"
                  data-bgposition="center center"
                  data-bgfit="cover"
                  data-bgrepeat="no-repeat"
                  className="rev-slidebg"
                />

                <div
                  className="tp-caption text-color-light custom-secondary-font"
                  data-x="center"
                  data-hoffset="0"
                  data-y="center"
                  data-voffset="-90"
                  data-start="800"
                  data-whitespace="nowrap"
                  data-transform_in="y:[100%];opacity:0;s:500;"
                  data-transform_out="opacity:0;s:500;"
                  style={{ fontSize: "22px" }}
                >
                  introducing
                </div>

                <h1
                  className="tp-caption text-color-light custom-secondary-font font-weight-bold"
                  data-x="center"
                  data-hoffset="0"
                  data-y="center"
                  data-voffset="-50"
                  data-start="1100"
                  data-whitespace="nowrap"
                  data-transform_in="y:[100%];opacity:0;s:500;"
                  data-transform_out="opacity:0;s:500;"
                  style={{ fontSize: "54px" }}
                >
                  Proceed to the Next Steps
                </h1>

                <div
                  className="tp-caption text-uppercase text-color-light custom-secondary-font"
                  data-x="center"
                  data-hoffset="0"
                  data-y="center"
                  data-voffset="0"
                  data-start="1400"
                  data-whitespace="nowrap"
                  data-transform_in="y:[100%];opacity:0;s:500;"
                  data-transform_out="opacity:0;s:500;"
                  style={{ fontSize: "22px" }}
                >
                  Join our community church
                </div>

                <a
                  href="/about"
                  className="tp-caption btn btn-primary custom-btn-style-1 text-uppercase"
                  data-x="center"
                  data-hoffset="0"
                  data-y="center"
                  data-voffset="90"
                  data-start="1700"
                  data-whitespace="nowrap"
                  data-transform_in="y:[100%];opacity:0;s:500;"
                  data-transform_out="opacity:0;s:500;"
                  data-fontsize="['16','16','16','24']"
                >
                  Learn More
                </a>
              </li>
              <li data-transition="fade">
                <img
                  src="img/demos/church/slides/slide-2.jpg"
                  alt="Proceed to the Next Steps"
                  data-bgposition="center center"
                  data-bgfit="cover"
                  data-bgrepeat="no-repeat"
                  className="rev-slidebg"
                />

                <div
                  className="tp-caption text-color-light custom-secondary-font"
                  data-x="center"
                  data-hoffset="0"
                  data-y="center"
                  data-voffset="-90"
                  data-start="800"
                  data-whitespace="nowrap"
                  data-transform_in="y:[100%];opacity:0;s:500;"
                  data-transform_out="opacity:0;s:500;"
                  style={{ fontSize: "22px" }}
                >
                  together
                </div>

                <h1
                  className="tp-caption text-color-light custom-secondary-font font-weight-bold"
                  data-x="center"
                  data-hoffset="0"
                  data-y="center"
                  data-voffset="-50"
                  data-start="1100"
                  data-whitespace="nowrap"
                  data-transform_in="y:[100%];opacity:0;s:500;"
                  data-transform_out="opacity:0;s:500;"
                  style={{ fontSize: "54px" }}
                >
                  We can make difference
                </h1>

                <div
                  className="tp-caption text-uppercase text-color-light custom-secondary-font"
                  data-x="center"
                  data-hoffset="0"
                  data-y="center"
                  data-voffset="0"
                  data-start="1400"
                  data-whitespace="nowrap"
                  data-transform_in="y:[100%];opacity:0;s:500;"
                  data-transform_out="opacity:0;s:500;"
                  style={{ fontSize: "22px" }}
                >
                  Join our community church
                </div>

                <a
                  href="/about"
                  className="tp-caption btn btn-primary custom-btn-style-1 text-uppercase"
                  data-x="center"
                  data-hoffset="0"
                  data-y="center"
                  data-voffset="90"
                  data-start="1700"
                  data-whitespace="nowrap"
                  data-transform_in="y:[100%];opacity:0;s:500;"
                  data-transform_out="opacity:0;s:500;"
                  data-fontsize="['16','16','16','24']"
                >
                  Learn More
                </a>
              </li>
            </ul>
          </div>
        </div>

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

        <section className="section section-no-border custom-position-relative custom-section-padding-1 bg-color-light m-0">
          <img
            className="custom-cloud left-pos d-none d-md-block appear-animation"
            data-appear-animation="customFadeInLeftNoRotate"
            data-appear-animation-delay="0"
            data-plugin-options="{'accY': -300}"
            src="img/demos/church/others/left-cloud.png"
            alt="."
          />
          <div
            className="custom-big-square left-pos d-none d-md-block custom-box-shadow appear-animation"
            data-appear-animation="customFadeInLeft"
            data-appear-animation-delay="500"
            data-plugin-options="{'accY': -300}"
            style={{
              background:
                "url('img/demos/church/others/big-left-square-img.jpg')",
              backgroundSize: "cover"
            }}
          />
          <div
            className="custom-small-square left-pos d-none d-md-block custom-box-shadow appear-animation"
            data-appear-animation="customFadeInLeft"
            data-appear-animation-delay="1000"
            data-plugin-options="{'accY': -300}"
            style={{
              background:
                "url('img/demos/church/others/small-left-square-img.jpg')",
              backgroundSize: "cover"
            }}
          />
          <img
            className="custom-cloud right-pos d-none d-md-block appear-animation"
            data-appear-animation="customFadeInRightNoRotate"
            data-appear-animation-delay="0"
            data-plugin-options="{'accY': -300}"
            src="img/demos/church/others/right-cloud.png"
            alt=""
          />
          <div
            className="custom-big-square right-pos d-none d-md-block custom-box-shadow appear-animation"
            data-appear-animation="customFadeInRight"
            data-appear-animation-delay="500"
            data-plugin-options="{'accY': -300}"
            style={{
              background:
                "url('img/demos/church/others/big-right-square-img.jpg')",
              backgroundsize: "cover"
            }}
          />
          <div
            className="custom-small-square right-pos d-none d-md-block custom-box-shadow appear-animation"
            data-appear-animation="customFadeInRight"
            data-appear-animation-delay="1000"
            data-plugin-options="{'accY': -300}"
            style={{
              background:
                "url('img/demos/church/others/small-right-square-img.jpg')",
              backgroundSize: "cover"
            }}
          />
          <div className="container">
            <div className="row justify-content-center text-center">
              <div className="col-md-8 col-xl-10">
                <h2 className="font-weight-bold">
                  We seek love God above all thing
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  quam tortor, elementum vel facilisis quis, elementum sit amet
                  lacus. Nam ornare ante et vulputate fringilla. Nullam sed orci
                  eu urna dapibus vestibulum non a augue. Mauris dapibus vel
                  massa at volutpat. Sed hendrerit congue leo, eget ornare enim
                  imperdiet vitae. Sed mi nibh, suscipit a enim ac, aliquam
                  tempus lacus.
                </p>
                <a
                  href="/about"
                  className="btn btn-primary custom-btn-style-1 text-uppercase mt-4"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-secondary section-no-border m-0">
          <div className="container">
            <div className="row justify-content-center text-center custom-negative-margin-1">
              <div className="col">
                <div
                  className="countdown custom-newcomers-class custom-secondary-font custom-box-shadow font-weight-bold text-color-dark"
                  data-plugin-countdown
                  data-plugin-options="{'date': '2019/06/10 12:00:00', 'numberClass': 'font-weight-bold text-color-primary', 'wrapperClass': 'text-color-dark', 'insertHTMLbefore': 'Newcomers Class', 'textDay': 'Day', 'textHour': 'Hrs', 'textMin': 'Min', 'textSec': 'Sec', 'uppercase': false}"
                />
              </div>
            </div>
            <div className="row justify-content-center text-center">
              <div className="col-lg-4 col-sm-8 mb-4 mb-lg-0">
                <img
                  src="img/demos/church/icons/custom-icon-1.png"
                  alt="."
                  className="img-repsonsive"
                />
                <h2 className="font-weight-bold text-color-light">
                  Our Values
                </h2>
                <p className="custom-text-color-2">
                  Lorem ipsum dolor sit amet, adipiscing elit.
                  <br /> Mauris accumsan tortor ut posuere consequat.
                  <br /> Fusce aliquet, dolor eget tempus ultricies, eros.
                </p>
              </div>
              <div className="col-lg-4 col-sm-8 mb-4 mb-lg-0">
                <img
                  src="img/demos/church/icons/custom-icon-2.png"
                  alt="."
                  className="img-repsonsive"
                />
                <h2 className="font-weight-bold text-color-light">
                  Join with Us
                </h2>
                <p className="custom-text-color-2">
                  <strong className="text-color-light">
                    Sundays at 8.00pm - 9.00pm
                  </strong>
                  <br /> at Porto Church, 123 porto
                  <br /> ave porto, PT 12345
                </p>
              </div>
              <div className="col-lg-4 col-sm-8">
                <img
                  src="img/demos/church/icons/custom-icon-3.png"
                  alt="."
                  className="img-repsonsive"
                />
                <h2 className="font-weight-bold text-color-light">
                  Our Mission
                </h2>
                <p className="custom-text-color-2">
                  Lorem ipsum dolor sit amet, adipiscing elit.
                  <br /> Mauris accumsan tortor ut posuere consequat.
                  <br /> Fusce aliquet, dolor eget tempus ultricies, eros.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-no-border bg-color-light m-0">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6 mb-4 mb-lg-0">
                <h2 className="font-weight-bold">Next Event</h2>
                <article className="thumb-info custom-thumb-info custom-box-shadow">
                  <span className="thumb-info-wrapper">
                    <a href="/event">
                      <img
                        src="img/demos/church/event/event-1.jpg"
                        alt="."
                        className="img-fluid"
                      />
                    </a>
                  </span>
                  <span className="thumb-info-caption">
                    <span className="custom-event-infos">
                      <ul>
                        <li>
                          <i className="far fa-clock" />
                          5:00 PM
                        </li>
                        <li className="text-uppercase">
                          <i className="fas fa-map-marker-alt" />
                          New York
                        </li>
                      </ul>
                    </span>
                    <span className="thumb-info-caption-text">
                      <h4 className="font-weight-bold mb-2">
                        <a
                          href="/event"
                          className="text-decoration-none custom-secondary-font text-color-dark"
                        >
                          Mauris sagitis urna molestie
                        </a>
                      </h4>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Quisque a lectus vitae arcu bibendum condimentum. In a
                        porta nunc ...
                      </p>
                    </span>
                  </span>
                </article>
              </div>
              <div className="col-lg-6">
                <h2 className="font-weight-bold">Upcoming Event</h2>
                <article className="custom-post-event">
                  <div className="post-event-date bg-color-primary text-center">
                    <span className="month text-uppercase custom-secondary-font text-color-light">
                      Nov
                    </span>
                    <span className="day font-weight-bold text-color-light">
                      10
                    </span>
                    <span className="year text-color-light">2017</span>
                  </div>
                  <div className="post-event-content custom-margin-1">
                    <span className="custom-event-infos">
                      <ul>
                        <li>
                          <i className="far fa-clock" />
                          5:00 PM
                        </li>
                        <li className="text-uppercase">
                          <i className="fas fa-map-marker-alt" />
                          New York
                        </li>
                      </ul>
                    </span>
                    <h4 className="font-weight-bold">
                      <a
                        href="/event"
                        className="text-decoration-none custom-secondary-font text-color-dark"
                      >
                        Mauris ornare semeu lorem
                      </a>
                    </h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Proin commodo nisl a fermentum varius. Aenean interdum
                      lectus at tortor ullamcorper, eu maximus...
                    </p>
                  </div>
                </article>
                <hr className="solid" />
                <article className="custom-post-event">
                  <div className="post-event-date bg-color-primary text-center">
                    <span className="month text-uppercase custom-secondary-font text-color-light">
                      Nov
                    </span>
                    <span className="day font-weight-bold text-color-light">
                      11
                    </span>
                    <span className="year text-color-light">2017</span>
                  </div>
                  <div className="post-event-content custom-margin-1">
                    <span className="custom-event-infos">
                      <ul>
                        <li>
                          <i className="far fa-clock" />
                          5:00 PM
                        </li>
                        <li className="text-uppercase">
                          <i className="fas fa-map-marker-alt" />
                          New York
                        </li>
                      </ul>
                    </span>
                    <h4 className="font-weight-bold">
                      <a
                        href="/event"
                        className="text-decoration-none custom-secondary-font text-color-dark"
                      >
                        Curabitur vehicula massa
                      </a>
                    </h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Aenean congue dui non libero tincidunt commodo. Proin eget
                      venenatis mauris.
                    </p>
                  </div>
                </article>
                <a
                  href="/events"
                  className="btn btn-primary custom-btn-style-1 text-uppercase custom-margin-1 mt-4"
                >
                  All Events
                </a>
              </div>
            </div>
          </div>
        </section>

        <section
          className="section section-background section-no-border m-0"
          style={{
            background: "url(img/demos/church/testimonial/testimonial-bg-1.jpg)"
          }}
        >
          <div className="container">
            <div className="row justify-content-center text-center">
              <div className="col">
                <h2 className="font-weight-bold">Testimonials</h2>
                <div
                  className="owl-carousel owl-theme custom-arrows-style-1 custom-sm-nav-bottom"
                  data-plugin-options="{'items': 1, 'loop': false, 'dots': false, 'nav': true}"
                >
                  <div className="row justify-content-center">
                    <div className="col-sm-10 col-lg-8">
                      <div className="testimonial testimonial-style-2 custom-testimonial-style text-center">
                        <div className="testimonial-quote bg-color-light">
                          <i className="fas fa-quote-left text-color-primary" />
                        </div>
                        <blockquote>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. In ac auctor eros, id gravida libero. Proin
                            elit tellus, sollicitudin et ultrices a, hendrerit
                            efficitur enim. Etiam pulvinar et risus nec
                            pulvinar. Morbi eget enim scelerisque, imperdiet
                            ligula sit amet, porta enim. Ut eros quam, venenatis
                            at placerat.
                          </p>
                        </blockquote>
                        <hr className="divider dashed divider-xs mt-0 mb-3" />
                        <div className="testimonial-author">
                          <p>
                            <strong className="text-uppercase">
                              Joe Albert Doe{" "}
                            </strong>
                            <span className="text-color-primary">
                              {" "}
                              - The Reverend
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row justify-content-center">
                    <div className="col-sm-10 col-lg-8">
                      <div className="testimonial testimonial-style-2 custom-testimonial-style text-center">
                        <div className="testimonial-quote bg-color-light">
                          <i className="fas fa-quote-left text-color-primary" />
                        </div>
                        <blockquote>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Nunc dapibus feugiat diam, nec luctus orci
                            molestie vel. Suspendisse potenti. Quisque id
                            aliquet dolor, posuere posuere purus. Aenean mauris
                            ipsum, pulvinar ut rutrum eget, maximus in libero.
                            Praesent.
                          </p>
                        </blockquote>
                        <hr className="divider dashed divider-xs mt-0 mb-3" />
                        <div className="testimonial-author">
                          <p>
                            <strong className="text-uppercase">
                              Henry Doe
                            </strong>
                            <span className="text-color-primary">
                              {" "}
                              - Associate Minister
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-no-border bg-color-light m-0">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-12 col-sm-8">
                <h2 className="font-weight-bold">Blog Post</h2>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-md-10 col-lg-4 mb-4 mb-lg-0">
                <article className="custom-post-blog">
                  <span className="thumb-info custom-thumb-info-2">
                    <span className="thumb-info-wrapper">
                      <a href="demo-church-blog-detail.html">
                        <img
                          src="img/demos/church/blog/blog-1.jpg"
                          alt="."
                          className="img-fluid"
                        />
                      </a>
                    </span>
                    <span className="thumb-info-caption custom-box-shadow">
                      <span className="thumb-info-caption-text">
                        <h4 className="font-weight-bold mb-4">
                          <a
                            href="demo-church-blog-detail.html"
                            className="text-decoration-none custom-secondary-font text-color-dark"
                          >
                            Vestibulum tristique ipsum sed neque
                          </a>
                        </h4>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Curabitur at arcu sit amet.
                        </p>
                      </span>
                      <span className="custom-thumb-info-post-infos text-center">
                        <ul>
                          <li className="text-uppercase">
                            <i className="icon-calendar icons" />
                            Nov 18
                          </li>
                          <li className="text-uppercase">
                            <i className="icon-user icons" />
                            John Doe
                          </li>
                        </ul>
                      </span>
                    </span>
                  </span>
                </article>
              </div>
              <div className="col-md-10 col-lg-4 mb-4 mb-lg-0">
                <article className="custom-post-blog">
                  <span className="thumb-info custom-thumb-info-2">
                    <span className="thumb-info-wrapper">
                      <a href="demo-church-blog-detail.html">
                        <img
                          src="img/demos/church/blog/blog-2.jpg"
                          alt="."
                          className="img-fluid"
                        />
                      </a>
                    </span>
                    <span className="thumb-info-caption custom-box-shadow">
                      <span className="thumb-info-caption-text">
                        <h4 className="font-weight-bold mb-4">
                          <a
                            href="demo-church-blog-detail.html"
                            className="text-decoration-none custom-secondary-font text-color-dark"
                          >
                            Mauris egestas dui ut dolor bibendum
                          </a>
                        </h4>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Curabitur at arcu sit amet.
                        </p>
                      </span>
                      <span className="custom-thumb-info-post-infos text-center">
                        <ul>
                          <li className="text-uppercase">
                            <i className="icon-calendar icons" />
                            Nov 20
                          </li>
                          <li className="text-uppercase">
                            <i className="icon-user icons" />
                            John Doe
                          </li>
                        </ul>
                      </span>
                    </span>
                  </span>
                </article>
              </div>
              <div className="col-md-10 col-lg-4">
                <article className="custom-post-blog">
                  <span className="thumb-info custom-thumb-info-2">
                    <span className="thumb-info-wrapper">
                      <a href="demo-church-blog-detail.html">
                        <img
                          src="img/demos/church/blog/blog-3.jpg"
                          alt="."
                          className="img-fluid"
                        />
                      </a>
                    </span>
                    <span className="thumb-info-caption custom-box-shadow">
                      <span className="thumb-info-caption-text">
                        <h4 className="font-weight-bold mb-4">
                          <a
                            href="demo-church-blog-detail.html"
                            className="text-decoration-none custom-secondary-font text-color-dark"
                          >
                            Etiam id ex eu velit vestibulum congue
                          </a>
                        </h4>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Curabitur at arcu sit amet.
                        </p>
                      </span>
                      <span className="custom-thumb-info-post-infos text-center">
                        <ul>
                          <li className="text-uppercase">
                            <i className="icon-calendar icons" />
                            Nov 25
                          </li>
                          <li className="text-uppercase">
                            <i className="icon-user icons" />
                            John Doe
                          </li>
                        </ul>
                      </span>
                    </span>
                  </span>
                </article>
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

Landing.propTypes = {
  navbar: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  navbar: state.navbar
});

export default connect(
  mapStateToProps,
  {}
)(Landing);
