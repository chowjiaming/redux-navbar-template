import React, { Component, Fragment } from "react";
import { switchPages } from "redux/navbar/actions";
import store from "redux/store";
import { connect } from "react-redux";
import PropTypes from "prop-types";

export class Blog extends Component {
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
            <div className="row">
              <div className="col">
                <article className="custom-post-event bg-color-light">
                  <span className="custom-thumb-info-post-infos custom-blog-info">
                    <ul>
                      <li className="text-uppercase text-1">
                        <i className="icon-calendar icons" />
                        Oct 18
                      </li>
                    </ul>
                  </span>
                  <div className="post-event-content">
                    <h2 className="font-weight-bold text-color-dark">
                      Mauris ornare semeu lorem
                    </h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Quisque tempor dolor ac purus varius placerat. Quisque
                      tortor purus, imperdiet eget feugiat vitae, sodales nec
                      arcu. In porta nunc eget tellus congue consectetur. Donec
                      fringilla, ligula et facilisis elementum, mi eros
                      imperdiet arcu, et faucibus mauris eros ac nisl. Morbi
                      libero nunc, mollis nec suscipit vel, laoreet posuere
                      tortor. Ut egestas.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed feugiat, est a finibus lobortis, eros justo rutrum
                      est, in fringilla arcu ligula ornare mauris. Donec
                      efficitur mi eget eros suscipit rhoncus. Nulla aliquet
                      faucibus est, a ornare neque pellentesque quis. Nunc id
                      volutpat magna. Sed tincidunt convallis cursus. Quisque
                      maximus nulla eget turpis condimentum congue. Lorem ipsum.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed feugiat, est a finibus lobortis, eros justo rutrum
                      est, in fringilla arcu ligula ornare mauris. Donec
                      efficitur mi eget eros suscipit rhoncus. Nulla aliquet
                      faucibus est, a ornare neque pellentesque quis. Nunc id
                      volutpat magna. Sed tincidunt convallis cursus. Quisque
                      maximus nulla eget turpis condimentum congue. Lorem ipsum.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed feugiat, est a finibus lobortis, eros justo rutrum
                      est, in fringilla arcu ligula ornare mauris. Donec
                      efficitur mi eget eros suscipit rhoncus. Nulla aliquet
                      faucibus est, a ornare neque pellentesque quis. Nunc id
                      volutpat magna. Sed tincidunt convallis cursus. Quisque
                      maximus nulla eget turpis condimentum congue. Lorem ipsum.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed feugiat, est a finibus lobortis, eros justo rutrum
                      est, in fringilla arcu ligula ornare mauris. Donec
                      efficitur mi eget eros suscipit rhoncus. Nulla aliquet
                      faucibus est, a ornare neque pellentesque quis. Nunc id
                      volutpat magna. Sed tincidunt convallis cursus. Quisque
                      maximus nulla eget turpis condimentum congue. Lorem ipsum.
                    </p>
                  </div>

                  <div className="post-block post-author custom-xs-ml-0 mt-4 clearfix">
                    <div className="img-thumbnail d-none d-sm-block custom-thumb-style-1 p-0">
                      <a href="blog-post.html">
                        <img
                          src="img/demos/church/about-us/about-us-expect-1.jpg"
                          alt="img-fluid"
                          className="img-fluid"
                        />
                      </a>
                    </div>
                    <h4 className="text-color-dark text-uppercase custom-primary-font custom-line-height-1 text-1 mt-4 mb-0">
                      <i className="icon-user icons font-weight-bold text-4 mr-1" />
                      Author
                    </h4>
                    <p>
                      <strong className="name mb-3 text-color-dark">
                        Joe Albert Doe
                      </strong>
                    </p>
                  </div>

                  <div className="post-block post-comments custom-xs-ml-0 mt-1 clearfix">
                    <h4 className="font-weight-bold text-color-dark custom-primary-font text-3 pt-2 mb-1">
                      Comments <span className="comments-count">(3)</span>:
                    </h4>

                    <ul className="comments custom-comments-style">
                      <li>
                        <div className="comment">
                          <div className="img-thumbnail d-none d-sm-block custom-thumb-style-1 p-0">
                            <img
                              className="avatar"
                              alt=""
                              src="img/demos/church/about-us/about-us-staff-2.jpg"
                            />
                          </div>
                          <div className="comment-block">
                            <span className="comment-by">
                              <strong className="text-uppercase text-color-dark">
                                Henry Doe
                              </strong>
                              <span className="float-right">
                                <span>
                                  {" "}
                                  <a className="text-1" href="/blog">
                                    <i className="fas fa-reply" /> Reply
                                  </a>
                                </span>
                              </span>
                            </span>
                            <p className="text-1">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Nam viverra euismod odio, gravida
                              pellentesque urna varius vitae, gravida
                              pellentesque urna varius vitae. Lorem ipsum dolor
                              sit amet, consectetur adipiscing elit. Nam viverra
                              euismod odio, gravida pellentesque urna varius
                              vitae. Sed dui lorem, adipiscing in adipiscing et,
                              interdum nec metus. Mauris ultricies, justo eu
                              convallis placerat, felis enim ornare nisi, vitae
                              mattis nulla ante id dui.
                            </p>
                            <span className="date float-right text-1 mb-4">
                              October 12, 2018 at 1:38 pm
                            </span>
                          </div>
                        </div>

                        <ul className="comments reply">
                          <li>
                            <div className="comment">
                              <div className="img-thumbnail d-none d-sm-block custom-thumb-style-1 p-0">
                                <img
                                  className="avatar"
                                  alt=""
                                  src="img/demos/church/about-us/about-us-staff-3.jpg"
                                />
                              </div>
                              <div className="comment-block">
                                <span className="comment-by">
                                  <strong className="text-uppercase text-color-dark">
                                    Monica Doe
                                  </strong>
                                  <span className="float-right">
                                    <span>
                                      {" "}
                                      <a className="text-1" href="/blog">
                                        <i className="fas fa-reply" /> Reply
                                      </a>
                                    </span>
                                  </span>
                                </span>
                                <p className="text-1">
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit. Nam viverra euismod odio,
                                  gravida pellentesque urna varius vitae,
                                  gravida pellentesque urna varius vitae.
                                </p>
                                <span className="date float-right text-1 mb-4">
                                  October 12, 2018 at 1:38 pm
                                </span>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="comment">
                              <div className="img-thumbnail d-none d-sm-block custom-thumb-style-1 p-0">
                                <img
                                  className="avatar"
                                  alt=""
                                  src="img/demos/church/about-us/about-us-staff-4.jpg"
                                />
                              </div>
                              <div className="comment-block">
                                <span className="comment-by">
                                  <strong className="text-uppercase text-color-dark">
                                    Josie Doe
                                  </strong>
                                  <span className="float-right">
                                    <span>
                                      {" "}
                                      <a className="text-1" href="/blog">
                                        <i className="fas fa-reply" /> Reply
                                      </a>
                                    </span>
                                  </span>
                                </span>
                                <p className="text-1">
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit. Nam viverra euismod odio,
                                  gravida pellentesque urna varius vitae,
                                  gravida pellentesque urna varius vitae.
                                </p>
                                <span className="date float-right text-1 mb-4">
                                  October 12, 2018 at 1:38 pm
                                </span>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <div className="comment">
                          <div className="img-thumbnail d-none d-sm-block custom-thumb-style-1 p-0">
                            <img
                              className="avatar"
                              alt=""
                              src="img/demos/church/about-us/about-us-staff-5.jpg"
                            />
                          </div>
                          <div className="comment-block">
                            <span className="comment-by">
                              <strong className="text-uppercase text-color-dark">
                                Robert Doe
                              </strong>
                              <span className="float-right">
                                <span>
                                  {" "}
                                  <a className="text-1" href="/blog">
                                    <i className="fas fa-reply" /> Reply
                                  </a>
                                </span>
                              </span>
                            </span>
                            <p className="text-1">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit.
                            </p>
                            <span className="date float-right text-1 mb-4">
                              October 12, 2018 at 1:38 pm
                            </span>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div className="post-block post-leave-comment custom-xs-ml-0 pt-2">
                    <h4 className="font-weight-bold text-color-dark custom-primary-font text-3 mt-3 pt-2 mb-2">
                      Leave a comment:
                    </h4>

                    <form
                      id=""
                      action=""
                      method="POST"
                      className="custom-form-style-1"
                    >
                      <div className="form-row">
                        <div className="form-group col-lg-6">
                          <input
                            type="text"
                            value=""
                            data-msg-required="Please enter your name."
                            maxlength="100"
                            className="form-control"
                            name="name"
                            id="name"
                            placeholder="Your Name"
                            required
                          />
                        </div>
                        <div className="form-group col-lg-6">
                          <input
                            type="email"
                            value=""
                            data-msg-required="Please enter your email address."
                            data-msg-email="Please enter a valid email address."
                            maxlength="100"
                            className="form-control"
                            name="email"
                            id="email"
                            placeholder="Your E-mail"
                            required
                          />
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="form-group col">
                          <textarea
                            maxlength="5000"
                            data-msg-required="Please enter your comment."
                            rows="10"
                            className="form-control"
                            name="comment"
                            id="message"
                            placeholder="Your message"
                            required
                          />
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="form-group col">
                          <input
                            type="submit"
                            value="Post Comment"
                            className="btn btn-primary custom-btn-style-1 text-uppercase float-right"
                            data-loading-text="Loading..."
                          />
                        </div>
                      </div>
                    </form>
                  </div>
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

Blog.propTypes = {
  navbar: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  navbar: state.navbar
});

export default connect(
  mapStateToProps,
  {}
)(Blog);
