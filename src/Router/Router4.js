import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import Topics from "./Topics";

// Since routes are regular React components, they
// may be rendered anywhere in the app, including in
// child elements.
//
// This helps when it's time to code-split your app
// into multiple bundles because code-splitting a
// React Router app is the same as code-splitting
// any other React app.

export default function NestingExample() {
  return (
    <Router>
      <Heaader />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/topics" component={Topics} />
      </Switch>
    </Router>
  );
}

function Heaader() {
  return (
    <>
      <Link to="/">Home</Link>
      <br />
      <Link to="/topics">Topics</Link>
    </>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}
