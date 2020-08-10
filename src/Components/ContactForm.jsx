import React, { Component } from "react";
import { Button, Form } from "react-bootstrap";
import emailjs from "emailjs-com";
import styles from "../CSS/ContactForm.module.css";

class ContactForm extends Component {
  state = {
    name: "",
    email: "",
    message: "",
    nameError: "",
    emailError: "",
    messageError: "",
    phoneNumber: "",
  };

  handleInputChange(event) {
    event.preventDefault();
    const target = event.target;
    const name = target.name;
    const value = target.value;
    this.setState({ [name]: value });
  }

  sendMessage(event) {
    event.preventDefault();
    const { name, email } = this.state;

    const templateParams = {
      from_name: name + " (" + email + ")",
      to_name: "svidler2011@gmail.com",
      feedback: this.state.message,
      phoneNumber: this.state.phoneNumber,
      animalName: this.props.animalName,
      animalId: this.props.animalId,
      animalSpecies: this.props.animalSpecies,
    };
    emailjs
      .send(
        "default_service",
        "template_S7xeXOoZ",
        templateParams,
        "user_Ug6nxqDwpiEiNS1HE4VbW"
      )
      .then(
        function (response) {
          alert("Your message has successfully sent!");
        },
        function (err) {
          alert("Your message was not able to be sent");
        }
      );
    this.setState({
      name: "",
      email: "",
      message: "",
      nameError: "",
      emailError: "",
      phoneNumber: "",
    });
  }

  render() {
    return (
      <div className={styles.ContactForm}>
        <Button
          variant="success-outline"
          className={styles.button}
          onClick={this.props.handleClick}
        >
          X
        </Button>
        <h3 className="my-3 text-center py-2">Contact me</h3>
        <Form
          className="d-flex flex-column align-items-center"
          id="contact-form"
          required
          method="POST"
        >
          <Form.Group className="mt-2 w-75">
            <Form.Label htmlFor="name">Name</Form.Label>
            <Form.Control
              type="text"
              className="form-control"
              name="name"
              placeholder="Your name.."
              value={this.state.name}
              onChange={this.handleInputChange.bind(this)}
              required
            />{" "}
            {this.state.nameError.length ? (
              <div className="name-validation">{this.state.nameError}</div>
            ) : null}
          </Form.Group>

          <Form.Group controlId="phoneNumber" className="w-75">
            <Form.Label>Phone number</Form.Label>
            <Form.Control
              rows="5"
              name="phoneNumber"
              placeholder="Your phone number.."
              required
              value={this.state.phoneNumber}
              onChange={this.handleInputChange.bind(this)}
            />
          </Form.Group>
          <Form.Group controlId="email" className="w-75">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Your email.."
              value={this.state.email}
              onChange={this.handleInputChange.bind(this)}
              required
            />
            {this.state.emailError.length ? (
              <div className="email-validation">{this.state.emailError}</div>
            ) : null}
          </Form.Group>
          <Form.Group className="w-75">
            <Form.Label>Message</Form.Label>
            <Form.Control
              rows="5"
              id="message"
              name="message"
              placeholder="Type your message.."
              required
              value={this.state.message}
              onChange={this.handleInputChange.bind(this)}
            />
          </Form.Group>

          <Button
            type="Submit"
            className="btm btn-primary my-4"
            variant="secondary"
            onClick={this.sendMessage.bind(this)}
          >
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

export default ContactForm;
