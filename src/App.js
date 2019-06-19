import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Provider } from "react-redux";
import store from "redux/store";

import "styles/theme.css";
import "styles/theme-elements.css";
import "styles/theme-blog.css";
import "styles/theme-shop.css";
import "styles/demo-church.css";
import "styles/skin-church.css";
import "styles/custom.css";

import Navbar from "components/layout/Navbar";
import Footer from "components/layout/Footer";
import Landing from "components/layout/Landing";
import About from "components/about/About";
import Staff from "components/about/Staff";
import Blogs from "components/blog/Blogs";
import Blog from "components/blog/Blog";
import Events from "components/event/Events";
import Event from "components/event/Event";
import Gallery from "components/gallery/Gallery";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Navbar />
          <div role="main" className="main">
            <Switch>
              <Route exact path="/" component={Landing} />
              <Route exact path="/about" component={About} />
              <Route exact path="/staff" component={Staff} />
              <Route exact path="/blogs" component={Blogs} />
              <Route exact path="/blog" component={Blog} />
              <Route exact path="/events" component={Events} />
              <Route exact path="/event" component={Event} />
              <Route exact path="/gallery" component={Gallery} />
            </Switch>
            <Footer />
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
