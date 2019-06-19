import React, { Component, Fragment } from "react";
import { switchPages } from "redux/navbar/actions";
import store from "redux/store";
import { connect } from "react-redux";
import PropTypes from "prop-types";

export class Event extends Component {
  componentDidMount() {
    const { pageRoute } = this.props.navbar;
    // set all route key values to false, then flip gallery value
    if (pageRoute) {
      Object.keys(pageRoute).forEach(route => (pageRoute[route] = false));
      pageRoute.events = !pageRoute.events;
    }
    store.dispatch(switchPages(pageRoute));
  }

  render() {
    return (
      <Fragment>
        <section className="page-header page-header-modern bg-color-secondary custom-section-padding-3 page-header-lg mb-0">
          <div className="container">
            <div className="row">
              <div className="col-md-12 align-self-center text-center">
                <h1 className="text-9 text-color-light custom-secondary-font font-weight-bold mb-1">
                  Events
                </h1>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-no-border bg-color-light m-0">
          <div className="container">
            <div className="row custom-negative-margin-2 mb-4">
              <div className="col">
                <div className="custom-event-top-image">
                  <div
                    className="countdown custom-newcomers-class custom-newcomers-pos-2 custom-secondary-font custom-box-shadow font-weight-bold text-color-dark clock-one-events text-center"
                    data-plugin-countdown
                    data-plugin-options="{'date': '2019/06/10 12:00:00', 'numberClass': 'font-weight-bold text-color-primary', 'wrapperClass': 'text-color-dark', 'textDay': 'Day', 'textHour': 'Hrs', 'textMin': 'Min', 'textSec': 'Sec', 'uppercase': false}"
                  />
                  <img
                    src="img/demos/church/event/event-detail-image-1.jpg"
                    alt="img-fluid"
                    className="img-fluid custom-border-1 custom-box-shadow"
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <article className="custom-post-event bg-color-light">
                  <div className="post-event-date bg-color-primary text-center">
                    <span className="month text-uppercase custom-secondary-font text-color-light">
                      Oct
                    </span>
                    <span className="day font-weight-bold text-color-light">
                      10
                    </span>
                    <span className="year text-color-light">2018</span>
                  </div>
                  <div className="post-event-content custom-margin-1 mb-4">
                    <h2 className="font-weight-bold text-color-dark mb-0">
                      Mauris ornare semeu lorem
                    </h2>
                    <span className="custom-event-infos">
                      <ul className="mb-3">
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

Event.propTypes = {
  navbar: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  navbar: state.navbar
});

export default connect(
  mapStateToProps,
  {}
)(Event);
