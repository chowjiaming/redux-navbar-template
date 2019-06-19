import React, { Component, Fragment } from "react";
import { switchPages } from "redux/navbar/actions";
import store from "redux/store";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class Events extends Component {
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
        <section className="page-header page-header-modern bg-color-secondary page-header-lg mb-0">
          <div className="container">
            <div className="row my-4">
              <div className="col-md-12 align-self-center text-center">
                <h1 className="text-9 text-color-light custom-secondary-font font-weight-bold my-4">
                  Events
                </h1>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-tertiary section-no-border m-0">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 mb-4 mb-lg-0">
                <h2 className="text-color-dark font-weight-bold">Next Event</h2>
                <article className="thumb-info custom-thumb-info custom-box-shadow">
                  <span className="thumb-info-wrapper">
                    <a href="/event">
                      <img
                        src="img/demos/church/event/event-1.jpg"
                        alt="img-fluid"
                        className="img-fluid"
                      />
                    </a>
                  </span>
                  <span className="thumb-info-caption">
                    <span className="custom-thumb-info-wrapper-box text-center justify-content-center d-flex mb-4">
                      <div
                        className="countdown custom-newcomers-class custom-secondary-font custom-box-shadow font-weight-bold text-color-dark clock-one-events"
                        data-plugin-countdown
                        data-plugin-options="{'date': '2019/06/10 12:00:00', 'numberClass': 'font-weight-bold text-color-primary', 'wrapperClass': 'text-color-dark', 'textDay': 'Day', 'textHour': 'Hrs', 'textMin': 'Min', 'textSec': 'Sec', 'uppercase': false}"
                      />
                    </span>
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
                <h2 className="text-color-dark font-weight-bold">
                  Upcoming Event
                </h2>
                <article className="custom-post-event">
                  <div className="post-event-date bg-color-primary text-center">
                    <span className="month text-uppercase custom-secondary-font text-color-light">
                      Oct
                    </span>
                    <span className="day font-weight-bold text-color-light">
                      10
                    </span>
                    <span className="year text-color-light">2018</span>
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
                      Oct
                    </span>
                    <span className="day font-weight-bold text-color-light">
                      11
                    </span>
                    <span className="year text-color-light">2018</span>
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
              </div>
            </div>
          </div>
        </section>

        <section className="section section-no-border bg-color-light m-0">
          <div className="container">
            <div className="row">
              <div className="col">
                <h2 className="font-weight-bold text-color-dark mb-3">
                  Past Events
                </h2>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <article className="custom-post-event bg-color-light mb-4 mb-lg-0">
                  <div className="post-event-date bg-color-primary text-center">
                    <span className="month text-uppercase custom-secondary-font text-color-light">
                      Oct
                    </span>
                    <span className="day font-weight-bold text-color-light">
                      05
                    </span>
                    <span className="year text-color-light">2018</span>
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
                    <h4 className="font-weight-bold text-color-dark">
                      <a
                        href="/event"
                        className="text-decoration-none custom-secondary-font text-color-dark"
                      >
                        Mauris ornare semeu lorem
                      </a>
                    </h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Duis ex odio, venenatis at tempor ut, egestas...
                    </p>
                  </div>
                  <hr className="solid" />
                </article>
              </div>
              <div className="col-lg-6">
                <article className="custom-post-event bg-color-light mb-4 mb-lg-0">
                  <div className="post-event-date bg-color-primary text-center">
                    <span className="month text-uppercase custom-secondary-font text-color-light">
                      Set
                    </span>
                    <span className="day font-weight-bold text-color-light">
                      30
                    </span>
                    <span className="year text-color-light">2018</span>
                  </div>
                  <div className="post-event-content custom-margin-1">
                    <span className="custom-event-infos">
                      <ul>
                        <li>
                          <i className="far fa-clock" />
                          2:00 PM
                        </li>
                        <li className="text-uppercase">
                          <i className="fas fa-map-marker-alt" />
                          New York
                        </li>
                      </ul>
                    </span>
                    <h4 className="font-weight-bold text-color-dark">
                      <a
                        href="/event"
                        className="text-decoration-none custom-secondary-font text-color-dark"
                      >
                        Mauris ornare semeu lorem
                      </a>
                    </h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Duis ex odio, venenatis at tempor ut, egestas...
                    </p>
                  </div>
                  <hr className="solid" />
                </article>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <article className="custom-post-event bg-color-light custom-sm-margin-bottom-2">
                  <div className="post-event-date bg-color-primary text-center">
                    <span className="month text-uppercase custom-secondary-font text-color-light">
                      Set
                    </span>
                    <span className="day font-weight-bold text-color-light">
                      25
                    </span>
                    <span className="year text-color-light">2018</span>
                  </div>
                  <div className="post-event-content custom-margin-1">
                    <span className="custom-event-infos">
                      <ul>
                        <li>
                          <i className="far fa-clock" />
                          8:00 AM
                        </li>
                        <li className="text-uppercase">
                          <i className="fas fa-map-marker-alt" />
                          New York
                        </li>
                      </ul>
                    </span>
                    <h4 className="font-weight-bold text-color-dark">
                      <a
                        href="/event"
                        className="text-decoration-none custom-secondary-font text-color-dark"
                      >
                        Mauris ornare semeu lorem
                      </a>
                    </h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Duis ex odio, venenatis at tempor ut, egestas...
                    </p>
                  </div>
                  <hr className="solid d-lg-none" />
                </article>
              </div>
              <div className="col-lg-6">
                <article className="custom-post-event bg-color-light">
                  <div className="post-event-date bg-color-primary text-center">
                    <span className="month text-uppercase custom-secondary-font text-color-light">
                      Set
                    </span>
                    <span className="day font-weight-bold text-color-light">
                      17
                    </span>
                    <span className="year text-color-light">2018</span>
                  </div>
                  <div className="post-event-content custom-margin-1">
                    <span className="custom-event-infos">
                      <ul>
                        <li>
                          <i className="far fa-clock" />
                          11:00 AM
                        </li>
                        <li className="text-uppercase">
                          <i className="fas fa-map-marker-alt" />
                          New York
                        </li>
                      </ul>
                    </span>
                    <h4 className="font-weight-bold text-color-dark">
                      <a
                        href="/event"
                        className="text-decoration-none custom-secondary-font text-color-dark"
                      >
                        Mauris ornare semeu lorem
                      </a>
                    </h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Duis ex odio, venenatis at tempor ut, egestas...
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

Events.propTypes = {
  navbar: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  navbar: state.navbar
});

export default connect(
  mapStateToProps,
  {}
)(Events);
