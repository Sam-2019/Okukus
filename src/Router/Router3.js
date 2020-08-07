import React, { useState } from "react";
import {
  BrowserRouter as Switch,
  Route,
  Router,
  Link,
  BrowserRouter,
} from "react-router-dom";
import product_tags from "../Okukus/files/product_tags";

import "bootstrap/dist/css/bootstrap.css";

function Routes() {
  return (
    <BrowserRouter>
      <Header />
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/topics" component={Topics} />
      </div>
    </BrowserRouter>
  );
}

function Header() {
  return (
    <nav className="navbar navbar-light">
      <div className="nav navbar-nav">
        <Link to="/">Home</Link>
        <Link to="/topics">Topic</Link>
      </div>
    </nav>
  );
}

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

const Topics = () => (
  <div>
    <h2>Topics</h2>
    <Switch>
      <Route exact path="/:id" component={Project} />
      <Route path="/notfound" component={NotFound} />
    </Switch>
  </div>
);

const Project = () => {
  console.log(product_tags);

  let content = product_tags.map(({ id, title }) => (
    <div key={id}>
      <div
        className="selector text-center text-uppercase"
        onClick={() => this.props.history.push(`/topics/${id}`)}
      >
        {title}
      </div>
      <div className="project-name">{title}</div>

      <div className="project-info-button">Go to project</div>
    </div>
  ));

  return <div className="col-md-5 col-4">{content}</div>;
};

const NotFound = () => <h2>NoProject</h2>;

export default Routes;
