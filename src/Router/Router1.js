import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Routes() {
  return (
    <Router>
      <div>
        <Header />

        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/topics" component={Topics} />
        <Route path="/search" component={Search} />
        <Route path="/searchaa" component={Searchaa} />
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div class="container">
      <h2>Home</h2>
      <div class="row">
        <div class="col-6">
          <div class="media shadow p-3 bg-white rounded">
            <img src="pic.png" class="mr-3" alt="..." />
            <div class="media-body">
              <figcaption class="figure-caption">
                {" "}
                A caption for time
              </figcaption>
              <h5 class="mt-0">LYFT-Off?</h5>
              <figcaption class="figure-caption one">Read</figcaption>
            </div>
          </div>
        </div>
        <div class="col-6">
          <div class="media shadow p-3 bg-white rounded">
            <img src="pic.png" class="mr-3" alt="..." />
            <div class="media-body">
              <figcaption class="figure-caption">
                {" "}
                A caption for time
              </figcaption>
              <h5 class="mt-0">LYFT-Off?</h5>
              <figcaption class="figure-caption one">Read</figcaption>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function About() {
  return (
    <div class="container">
      <h2>About</h2>
      <div class="row">
        <div class="col-6">.col-6</div>
        <div class="col-6">.col-6</div>
      </div>
    </div>
  );
}

function Search() {
  return <h2>Search</h2>;
}

function Searchaa() {
  return (
    <input
      className="form-control mr-2 col-md-8 col-8"
      type="search"
      placeholder="Search"
    />
  );
}

function Topic({ match }) {
  return <h3>Requested Param: {match.params.id}</h3>;
}

function Topics({ match }) {
  return (
    <div>
      <h2>Topics</h2>

      <Route
        exact
        path={match.path}
        render={() => <h3>Please select a topic.</h3>}
      />

      <ul>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
        </li>
      </ul>

      <Route path={`${match.path}/:id`} component={Topic} />
    </div>
  );
}

function Header() {
  return (
    <nav className="navbar navbar-light bg-dark">
      <div className="nav flex-column flex-sm-row col-5">
        <Link to="/" className=" text-sm-center nav-link active">
          Home
        </Link>
        <Link to="/about" className=" text-sm-center nav-link active">
          About
        </Link>
        <Link to="/topics" className=" text-sm-center nav-link active">
          Topics
        </Link>
      </div>

      <form className="form-inline col-auto">
        <Link
          to="/search"
          className="text-sm-center nav-link active far fa-user fa-lg"
        ></Link>

        <input
          className="form-control col-md-7 col-7"
          type="search"
          placeholder="Search"
        />

        <Link
          to="/searchaa"
          className="text-sm-center nav-link active fas fa-search fa-lg"
        ></Link>
      </form>
    </nav>
  );
}

export default Routes;
