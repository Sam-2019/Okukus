import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";

var timer = setTimeout(() => {
    alert('This will run after 1 second!')
    }, 5000);

class Example extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.state = { show: false };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {setTimeout(() => {
    this.setState({ show: true }),2000;})
}
  
  render() {

   
    return (
      <ButtonToolbar>
        <Button onClick={this.handleShow}>Large modal</Button>
        <div>
        Hello, World
        </div>
        <Modal
          size="lg"
          show={this.state.show}

          onHide={this.handleClose}
          aria-labelledby="example-modal-sizes-title-lg"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">
              Large Modal
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        </Modal>
      </ButtonToolbar>
    );
  }
}

export default Example;
