import React, { Component, Fragment } from "react";
import { switchPages } from "redux/navbar/actions";
import store from "redux/store";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class Gallery extends Component {
  componentDidMount() {
    const { pageRoute } = this.props.navbar;
    // set all route key values to false, then flip gallery value
    if (pageRoute) {
      Object.keys(pageRoute).forEach(route => (pageRoute[route] = false));
      pageRoute.gallery = !pageRoute.gallery;
    }
    store.dispatch(switchPages(pageRoute));
  }
  render() {
    return (
      <Fragment>
        <section className="page-header page-header-modern bg-color-secondary page-header-lg mb-0">
          <div className="container">
            <div className="row my-4">
              <div className="col-md-12 align-self-center text-center">
                <h1 className="text-9 text-color-light custom-secondary-font font-weight-bold my-4">
                  Gallery
                </h1>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-no-border bg-color-light m-0">
          <div className="container">
            <div className="row">
              <div className="col">
                <div
                  id="galleryAjaxBox"
                  className="ajax-box ajax-box-init mb-4"
                >
                  <div className="bounce-loader">
                    <div className="bounce1" />
                    <div className="bounce2" />
                    <div className="bounce3" />
                  </div>

                  <div
                    className="ajax-box-content"
                    id="galleryAjaxBoxContent"
                  />
                </div>
              </div>
            </div>
            <div
              className="row"
              data-plugin-masonry
              data-plugin-options="{'itemSelector': '.col-lg-4'}"
            >
              <div className="col-lg-4">
                <span className="thumb-info custom-thumb-info-4">
                  <a
                    data-href="ajax/demo-church-gallery-ajax-on-page-1.html"
                    className="text-decoration-none custom-secondary-font text-color-dark"
                    data-ajax-on-page
                    href="/gallery"
                  >
                    <span className="thumb-info-wrapper">
                      <img
                        src="img/demos/church/gallery/gallery-1.jpg"
                        alt="img-fluid"
                        className="img-fluid"
                      />
                    </span>
                  </a>
                  <span className="thumb-info-caption custom-box-shadow">
                    <span className="thumb-info-caption-text">
                      <h2 className="font-weight-bold text-5 text-center">
                        <a
                          data-href="ajax/demo-church-gallery-ajax-on-page-1.html"
                          className="text-decoration-none custom-secondary-font text-color-dark"
                          data-ajax-on-page
                          href="/gallery"
                        >
                          Baptism
                        </a>
                      </h2>
                    </span>
                  </span>
                </span>
              </div>
              <div className="col-lg-4">
                <span className="thumb-info custom-thumb-info-4">
                  <a
                    data-href="ajax/demo-church-gallery-ajax-on-page-2.html"
                    className="text-decoration-none custom-secondary-font text-color-dark"
                    data-ajax-on-page
                    href="/gallery"
                  >
                    <span className="thumb-info-wrapper">
                      <img
                        src="img/demos/church/gallery/gallery-2.jpg"
                        alt="img-fluid"
                        className="img-fluid"
                      />
                    </span>
                  </a>
                  <span className="thumb-info-caption custom-box-shadow">
                    <span className="thumb-info-caption-text">
                      <h2 className="font-weight-bold text-5 text-center">
                        <a
                          data-href="ajax/demo-church-gallery-ajax-on-page-2.html"
                          className="text-decoration-none custom-secondary-font text-color-dark"
                          data-ajax-on-page
                          href="/gallery"
                        >
                          Wedding
                        </a>
                      </h2>
                    </span>
                  </span>
                </span>
              </div>
              <div className="col-lg-4">
                <span className="thumb-info custom-thumb-info-4">
                  <a
                    data-href="ajax/demo-church-gallery-ajax-on-page-3.html"
                    className="text-decoration-none custom-secondary-font text-color-dark"
                    data-ajax-on-page
                    href="/gallery"
                  >
                    <span className="thumb-info-wrapper">
                      <img
                        src="img/demos/church/gallery/gallery-3.jpg"
                        alt="img-fluid"
                        className="img-fluid"
                        href="/gallery"
                      />
                    </span>
                  </a>
                  <span className="thumb-info-caption custom-box-shadow">
                    <span className="thumb-info-caption-text">
                      <h2 className="font-weight-bold text-5 text-center">
                        <a
                          data-href="ajax/demo-church-gallery-ajax-on-page-3.html"
                          className="text-decoration-none custom-secondary-font text-color-dark"
                          data-ajax-on-page
                          href="/gallery"
                        >
                          Church Community
                        </a>
                      </h2>
                    </span>
                  </span>
                </span>
              </div>
              <div className="col-lg-4">
                <span className="thumb-info custom-thumb-info-4">
                  <a
                    data-href="ajax/demo-church-gallery-ajax-on-page-2.html"
                    className="text-decoration-none custom-secondary-font text-color-dark"
                    data-ajax-on-page
                    href="/gallery"
                  >
                    <span className="thumb-info-wrapper">
                      <img
                        src="img/demos/church/gallery/gallery-4.jpg"
                        alt="img-fluid"
                        className="img-fluid"
                      />
                    </span>
                  </a>
                  <span className="thumb-info-caption custom-box-shadow">
                    <span className="thumb-info-caption-text">
                      <h2 className="font-weight-bold text-5 text-center">
                        <a
                          data-href="ajax/demo-church-gallery-ajax-on-page-2.html"
                          className="text-decoration-none custom-secondary-font text-color-dark"
                          data-ajax-on-page
                          href="/gallery"
                        >
                          Wedding
                        </a>
                      </h2>
                    </span>
                  </span>
                </span>
              </div>
              <div className="col-lg-4">
                <span className="thumb-info custom-thumb-info-4">
                  <a
                    data-href="ajax/demo-church-gallery-ajax-on-page-3.html"
                    className="text-decoration-none custom-secondary-font text-color-dark"
                    data-ajax-on-page
                    href="/gallery"
                  >
                    <span className="thumb-info-wrapper">
                      <img
                        src="img/demos/church/gallery/gallery-5.jpg"
                        alt="img-fluid"
                        className="img-fluid"
                      />
                    </span>
                  </a>
                  <span className="thumb-info-caption custom-box-shadow">
                    <span className="thumb-info-caption-text">
                      <h2 className="font-weight-bold text-5 text-center">
                        <a
                          data-href="ajax/demo-church-gallery-ajax-on-page-3.html"
                          className="text-decoration-none custom-secondary-font text-color-dark"
                          data-ajax-on-page
                          href="/gallery"
                        >
                          Church Community
                        </a>
                      </h2>
                    </span>
                  </span>
                </span>
              </div>
              <div className="col-lg-4">
                <span className="thumb-info custom-thumb-info-4">
                  <a
                    data-href="ajax/demo-church-gallery-ajax-on-page-1.html"
                    className="text-decoration-none custom-secondary-font text-color-dark"
                    data-ajax-on-page
                    href="/gallery"
                  >
                    <span className="thumb-info-wrapper">
                      <img
                        src="img/demos/church/gallery/gallery-6.jpg"
                        alt="img-fluid"
                        className="img-fluid"
                      />
                    </span>
                  </a>
                  <span className="thumb-info-caption custom-box-shadow">
                    <span className="thumb-info-caption-text">
                      <h2 className="font-weight-bold text-5 text-center">
                        <a
                          data-href="ajax/demo-church-gallery-ajax-on-page-1.html"
                          className="text-decoration-none custom-secondary-font text-color-dark"
                          data-ajax-on-page
                          href="/gallery"
                        >
                          Baptism
                        </a>
                      </h2>
                    </span>
                  </span>
                </span>
              </div>
              <div className="col-lg-4">
                <span className="thumb-info custom-thumb-info-4">
                  <a
                    data-href="ajax/demo-church-gallery-ajax-on-page-1.html"
                    className="text-decoration-none custom-secondary-font text-color-dark"
                    data-ajax-on-page
                    href="/gallery"
                  >
                    <span className="thumb-info-wrapper">
                      <img
                        src="img/demos/church/gallery/gallery-7.jpg"
                        alt="img-fluid"
                        className="img-fluid"
                      />
                    </span>
                  </a>
                  <span className="thumb-info-caption custom-box-shadow">
                    <span className="thumb-info-caption-text">
                      <h2 className="font-weight-bold text-5 text-center">
                        <a
                          data-href="ajax/demo-church-gallery-ajax-on-page-1.html"
                          className="text-decoration-none custom-secondary-font text-color-dark"
                          data-ajax-on-page
                          href="/gallery"
                        >
                          Baptism
                        </a>
                      </h2>
                    </span>
                  </span>
                </span>
              </div>
              <div className="col-lg-4">
                <span className="thumb-info custom-thumb-info-4">
                  <a
                    data-href="ajax/demo-church-gallery-ajax-on-page-2.html"
                    className="text-decoration-none custom-secondary-font text-color-dark"
                    data-ajax-on-page
                    href="/gallery"
                  >
                    <span className="thumb-info-wrapper">
                      <img
                        src="img/demos/church/gallery/gallery-8.jpg"
                        alt="img-fluid"
                        className="img-fluid"
                      />
                    </span>
                  </a>
                  <span className="thumb-info-caption custom-box-shadow">
                    <span className="thumb-info-caption-text">
                      <h2 className="font-weight-bold text-5 text-center">
                        <a
                          data-href="ajax/demo-church-gallery-ajax-on-page-2.html"
                          className="text-decoration-none custom-secondary-font text-color-dark"
                          data-ajax-on-page
                          href="/gallery"
                        >
                          Wedding
                        </a>
                      </h2>
                    </span>
                  </span>
                </span>
              </div>
              <div className="col-lg-4">
                <span className="thumb-info custom-thumb-info-4">
                  <a
                    data-href="ajax/demo-church-gallery-ajax-on-page-3.html"
                    className="text-decoration-none custom-secondary-font text-color-dark"
                    data-ajax-on-page
                    href="/gallery"
                  >
                    <span className="thumb-info-wrapper">
                      <img
                        src="img/demos/church/gallery/gallery-9.jpg"
                        alt="img-fluid"
                        className="img-fluid"
                      />
                    </span>
                  </a>
                  <span className="thumb-info-caption custom-box-shadow">
                    <span className="thumb-info-caption-text">
                      <h2 className="font-weight-bold text-5 text-center">
                        <a
                          data-href="ajax/demo-church-gallery-ajax-on-page-3.html"
                          className="text-decoration-none custom-secondary-font text-color-dark"
                          data-ajax-on-page
                          href="/gallery"
                        >
                          Church Community
                        </a>
                      </h2>
                    </span>
                  </span>
                </span>
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

Gallery.propTypes = {
  navbar: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  navbar: state.navbar
});

export default connect(
  mapStateToProps,
  {}
)(Gallery);