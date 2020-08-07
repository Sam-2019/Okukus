import React from 'react';
import Header from './Components-old/Header';
import Snafu from './Components-old/Snafu';
import NewForm from './Components-old/NewForm';
import FormattedDate from './Components-old/FormattedDate';
import FlavorForm from './Components-old/FlavorForm';
import Content from './Components-old/Content';

import "bootstrap/dist/css/bootstrap.min.css";
import Example from './Components-old/Example';


class App extends React.Component {
  render() {
  return (
  <div className="App">
  <Header />
  <NewForm />
  <Example />
  
  </div>
)
}
}

export default App
