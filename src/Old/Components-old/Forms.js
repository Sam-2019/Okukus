import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

class Model extends React.Component {
  constructor(props, context) {
  super(props, context);
  this.handleShow = this.handleShow.bind(this);
  this.handleClose = this.handleClose.bind(this);
  this.state = {
      show: false,
};
}
handleClose() {
this.setState({ show: false });
}
handleShow() {
this.setState({ show: true });
}

render() {
return (
<>
</>
);
}

export default Model;
