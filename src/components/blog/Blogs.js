import React, { Component, Fragment } from "react";
import { switchPages } from "redux/navbar/actions";
import store from "redux/store";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class Blogs extends Component {
  componentDidMount() {
    const { pageRoute } = this.props.navbar;
    // set all route key values to false, then flip gallery value
    if (pageRoute) {
      Object.keys(pageRoute).forEach(route => (pageRoute[route] = false));
      pageRoute.blog = !pageRoute.blog;
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
                  Blog
                </h1>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-no-border bg-color-light m-0">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-4 mb-4">
                <article className="custom-post-blog">
                  <span className="thumb-info custom-thumb-info-2">
                    <span className="thumb-info-wrapper">
                      <a href="/blog">
                        <img
                          src="img/demos/church/blog/blog-1.jpg"
                          alt="img-fluid"
                          className="img-fluid"
                        />
                      </a>
                    </span>
                    <span className="thumb-info-caption custom-box-shadow">
                      <span className="thumb-info-caption-text">
                        <h4 className="font-weight-bold mb-4">
                          <a
                            href="/blog"
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
                            Oct 18
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
              <div className="col-lg-4 mb-4">
                <article className="custom-post-blog">
                  <span className="thumb-info custom-thumb-info-2">
                    <span className="thumb-info-wrapper">
                      <a href="/blog">
                        <img
                          src="img/demos/church/blog/blog-2.jpg"
                          alt="img-fluid"
                          className="img-fluid"
                        />
                      </a>
                    </span>
                    <span className="thumb-info-caption custom-box-shadow">
                      <span className="thumb-info-caption-text">
                        <h4 className="font-weight-bold mb-4">
                          <a
                            href="/blog"
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
                            Oct 20
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
              <div className="col-lg-4 mb-4">
                <article className="custom-post-blog">
                  <span className="thumb-info custom-thumb-info-2">
                    <span className="thumb-info-wrapper">
                      <a href="/blog">
                        <img
                          src="img/demos/church/blog/blog-3.jpg"
                          alt="img-fluid"
                          className="img-fluid"
                        />
                      </a>
                    </span>
                    <span className="thumb-info-caption custom-box-shadow">
                      <span className="thumb-info-caption-text">
                        <h4 className="font-weight-bold mb-4">
                          <a
                            href="/blog"
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
                            Oct 25
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
              <div className="col-lg-4 mb-4 mb-lg-0">
                <article className="custom-post-blog">
                  <span className="thumb-info custom-thumb-info-2">
                    <span className="thumb-info-wrapper">
                      <a href="/blog">
                        <img
                          src="img/demos/church/blog/blog-4.jpg"
                          alt="img-fluid"
                          className="img-fluid"
                        />
                      </a>
                    </span>
                    <span className="thumb-info-caption custom-box-shadow">
                      <span className="thumb-info-caption-text">
                        <h4 className="font-weight-bold mb-4">
                          <a
                            href="/blog"
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
                            Oct 18
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
              <div className="col-lg-4 mb-4 mb-lg-0">
                <article className="custom-post-blog">
                  <span className="thumb-info custom-thumb-info-2">
                    <span className="thumb-info-wrapper">
                      <a href="/blog">
                        <img
                          src="img/demos/church/blog/blog-5.jpg"
                          alt="img-fluid"
                          className="img-fluid"
                        />
                      </a>
                    </span>
                    <span className="thumb-info-caption custom-box-shadow">
                      <span className="thumb-info-caption-text">
                        <h4 className="font-weight-bold mb-4">
                          <a
                            href="/blog"
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
                            Oct 20
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
              <div className="col-lg-4">
                <article className="custom-post-blog">
                  <span className="thumb-info custom-thumb-info-2">
                    <span className="thumb-info-wrapper">
                      <a href="/blog">
                        <img
                          src="img/demos/church/blog/blog-6.jpg"
                          alt="img-fluid"
                          className="img-fluid"
                        />
                      </a>
                    </span>
                    <span className="thumb-info-caption custom-box-shadow">
                      <span className="thumb-info-caption-text">
                        <h4 className="font-weight-bold mb-4">
                          <a
                            href="/blog"
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
                            Oct 25
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

Blogs.propTypes = {
  navbar: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  navbar: state.navbar
});

export default connect(
  mapStateToProps,
  {}
)(Blogs);