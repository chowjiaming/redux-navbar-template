import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";

class Navbar extends Component {
  render() {
    const { pageRoute } = this.props.navbar;
    return (
      <header
        id="header"
        data-plugin-options="{'stickyEnabled': true, 'stickyEnableOnBoxed': true, 'stickyEnableOnMobile': true, 'stickyChangeLogo': false, 'stickyStartAt': 0}"
      >
        <div className="header-body border-top-0">
          <div className="header-container container">
            <div className="header-row">
              <div className="header-column">
                <div className="header-row">
                  <div className="header-logo">
                    <a href="/">
                      <img
                        alt="EvenMatchup"
                        width="90"
                        height="41"
                        src="banner.png"
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className="header-column justify-content-end">
                <div className="header-row">
                  <div className="header-nav order-2 order-lg-1">
                    <div className="header-nav-main header-nav-main-square header-nav-main-effect-1 header-nav-main-sub-effect-1">
                      <nav className="collapse">
                        <ul className="nav nav-pills" id="mainNav">
                          <li>
                            <a
                              className={classnames("nav-link", {
                                active: pageRoute.landing
                              })}
                              href="/"
                            >
                              Home
                            </a>
                          </li>
                          <li>
                            <a
                              className={classnames("nav-link", {
                                active: pageRoute.about
                              })}
                              href="/about"
                            >
                              About Us
                            </a>
                          </li>
                          <li>
                            <a
                              className={classnames("nav-link", {
                                active: pageRoute.staff
                              })}
                              href="/staff"
                            >
                              Staff
                            </a>
                          </li>
                          <li>
                            <a
                              className={classnames("nav-link", {
                                active: pageRoute.events
                              })}
                              href="/events"
                            >
                              Events
                            </a>
                          </li>
                          <li>
                            <a
                              className={classnames("nav-link", {
                                active: pageRoute.gallery
                              })}
                              href="/gallery"
                            >
                              Gallery
                            </a>
                          </li>
                          <li>
                            <a
                              className={classnames("nav-link", {
                                active: pageRoute.blog
                              })}
                              href="/blogs"
                            >
                              Blog
                            </a>
                          </li>
                        </ul>
                      </nav>
                    </div>
                    <button
                      className="btn header-btn-collapse-nav"
                      data-toggle="collapse"
                      data-target=".header-nav-main nav"
                    >
                      <i className="fas fa-bars" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

Navbar.propTypes = {
  navbar: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  navbar: state.navbar
});

export default connect(
  mapStateToProps,
  {}
)(Navbar);
