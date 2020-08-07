import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import product_tags from "../Okukus/files/product_tags";

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
      <div>
        <Link to="/">Home</Link>

        <Link to="/topics">Topics</Link>

        <hr />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/topics">
            <Topics />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function Topics() {
  return (
    <div>
      <h2>Topics</h2>
      <Switch>
        <Route exact path="/:id" component={Project} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

function Topic() {
  // The <Route> that rendered this component has a
  // path of `/topics/:topicId`. The `:topicId` portion
  // of the URL indicates a placeholder that we can
  // get from `useParams()`.
  let { topicId } = useParams();

  return (
    <div>
      <h3>{topicId}</h3>
    </div>
  );
}

function Project() {
  const [tags] = useState(product_tags);
  let { url } = useRouteMatch();

  let content = tags.map(({ id, title }) => (
    <div key={id}>
      <Link to={`${url}/${id}`} className=" text-center text-uppercase">
        {title}
      </Link>
    </div>
  ));
  return <div>{content}</div>;
}

function NotFound() {
  return <h3>Unavailable</h3>;
}
