import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import product_tags from "../Okukus/files/product_tags";

function Routes() {
  return (
    <Router>
      <div>
        <Header />

        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={Topics} />
      </div>
    </Router>
  );
}

function Header() {
  return (
    <nav className="navbar navbar-light">
      <ul className="nav navbar-nav">
        <li>
          <Link to="/">Homes</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>

      </ul>
    </nav>
  );
}

const Home = (props) => (
  <div>
    <h2>Home {console.log(props)}</h2>
  </div>
);

function Topics({ match }) {
  const [tags] = useState(product_tags);

  let content = tags.map(({ id, title }) => (
    <div key={id}>
      <div
        className="selector text-center text-uppercase"
        onClick={() => this.props.history.push(`/topics/${title}`)}
      >
        {title}
      </div>
    </div>
  ));

  return (
    <div>
      <h2>Topics</h2>

      <Route
        exact
        path={match.path}
        render={() => <h3>Please select a topic.</h3>}
      />
      <div className="col-md-3">{content}</div>
      <Route path={`${match.path}/:id`} component={Topic} />
    </div>
  );
}

function Topic({ match }) {
  return <h3>Requested Param: {match.params.id}</h3>;
}

export default Routes;
