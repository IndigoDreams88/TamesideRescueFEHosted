import React, { Component } from "react";
import styles from "../CSS/AddAnimal.module.css";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { postAnimal } from "../Components/DataRequests.jsx";
import ErrorDisplay from "./ErrorDisplay";

class AddAnimal extends Component {
  state = {
    name: "",
    age: "",
    gender: "",
    species: "",
    colour: "",
    breed: "",
    neutered: "",
    microChipped: "",
    healthConditions: "",
    paired: "",
    status: "",
    imgUrl: "",
    err: null,
    animal: {},
  };

  handleDataRequest = (animal) => {
    const { getValue } = this.props;
    return postAnimal(animal)
      .then((animal) => {
        getValue("true");
        this.setState({ animal: animal });
      })
      .catch(({ response }) => {
        this.setState({
          err: {
            response,
          },
        });
      });
  };

  handleChange = (event) => {
    if (event.target.id === "imgUrl") {
      this.handleImage(event);
    }
    this.setState({ [event.target.id]: event.target.value });
  };

  handleImage = (event) => {
    console.log(event.target.files[0]);
    this.setState({ imgUrl: event.target.files[0].name });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const {
      name,
      age,
      gender,
      species,
      colour,
      breed,
      neutered,
      microChipped,
      healthConditions,
      paired,
      status,
      imgUrl,
    } = this.state;

    this.handleDataRequest({
      name,
      age,
      gender,
      species,
      colour,
      breed,
      neutered,
      microChipped,
      healthConditions,
      paired,
      status,
      imgUrl,
    });

    this.setState({
      name: "",
      age: "",
      gender: "",
      species: "",
      colour: "",
      breed: "",
      neutered: "",
      microChipped: "",
      healthConditions: "",
      paired: "",
      status: "",
      imgUrl: "",
    });
  };

  render() {
    return (
      <Container>
        <Row className="nopadding">
          <Col
            className="no-gutters d-flex flex-wrap justify-content-center"
            xs={12}
            md={12}
            lg={12}
            style={{ marginTop: "60px" }}
          >
            {this.state.err !== null && <ErrorDisplay err={this.state.err} />}
            <center>
              <Form onSubmit={this.handleSubmit}>
                <label htmlFor="name" className={styles.name}>
                  Name:
                  <input
                    required
                    value={this.state.name}
                    id="name"
                    type="text"
                    onChange={this.handleChange}
                    className={styles.inputBox}
                  ></input>
                </label>
                <br></br>
                <label htmlFor="age" className={styles.age}>
                  Age:
                  <input
                    required
                    value={this.state.age}
                    id="age"
                    type="text"
                    onChange={this.handleChange}
                    className={styles.inputBox}
                  ></input>
                </label>
                <br></br>
                <label htmlFor="gender" className={styles.gender}>
                  Gender
                  <input
                    className={styles.inputBox}
                    type="radio"
                    id="gender"
                    value="Male"
                    checked={this.state.gender === "Male"}
                    onChange={this.handleChange}
                  />
                  <label htmlFor="male" className={styles.male}>
                    Male
                  </label>
                  <input
                    className={styles.inputBox}
                    type="radio"
                    id="gender"
                    value="Female"
                    checked={this.state.gender === "Female"}
                    onChange={this.handleChange}
                  />
                  <label htmlFor="female" className={styles.gender}>
                    Female
                  </label>
                </label>
                <br></br>
                <label htmlFor="species" className={styles.species}>
                  Species
                  <input
                    className={styles.inputBox}
                    type="radio"
                    id="species"
                    name="species"
                    value="Guinea pig"
                    checked={this.state.species === "Guinea pig"}
                    onChange={this.handleChange}
                  />
                  <label htmlFor="guineaPig" className={styles.guineaPig}>
                    Guinea Pig
                  </label>
                  <input
                    className={styles.inputBox}
                    type="radio"
                    id="species"
                    name="species"
                    value="Rabbit"
                    checked={this.state.species === "Rabbit"}
                    onChange={this.handleChange}
                  />
                  <label htmlFor="rabbit" className={styles.rabbit}>
                    Rabbit
                  </label>
                </label>
                <br></br>
                <label htmlFor="colour" className={styles.colour}>
                  Colour:
                  <input
                    required
                    value={this.state.colour}
                    id="colour"
                    type="text"
                    onChange={this.handleChange}
                    className={styles.inputBox}
                  ></input>
                </label>
                <br></br>
                <label htmlFor="breed" className={styles.breed}>
                  Breed:
                  <input
                    required
                    value={this.state.breed}
                    id="breed"
                    type="text"
                    onChange={this.handleChange}
                    className={styles.inputBox}
                  ></input>
                </label>
                <br></br>
                <label htmlFor="neutered" className={styles.neutered}>
                  Neutered
                  <input
                    className={styles.inputBox}
                    type="radio"
                    id="neutered"
                    name="neutered"
                    value="Yes"
                    checked={this.state.neutered === "Yes"}
                    onChange={this.handleChange}
                  />
                  <label htmlFor="yes" className={styles.yes}>
                    Yes
                  </label>
                  <input
                    className={styles.inputBox}
                    type="radio"
                    id="neutered"
                    name="neutered"
                    value="No"
                    checked={this.state.neutered === "No"}
                    onChange={this.handleChange}
                  />
                  <label htmlFor="no" className={styles.no}>
                    No
                  </label>
                </label>
                <br></br>
                <label htmlFor="microChipped" className={styles.microChipped}>
                  Microchipped
                  <input
                    className={styles.inputBox}
                    type="radio"
                    id="microChipped"
                    name="microChipped"
                    value="Yes"
                    checked={this.state.microChipped === "Yes"}
                    onChange={this.handleChange}
                  />
                  <label htmlFor="yes2" className={styles.yes2}>
                    Yes
                  </label>
                  <input
                    className={styles.inputBox}
                    type="radio"
                    id="microChipped"
                    name="microChipped"
                    value="No"
                    checked={this.state.microChipped === "No"}
                    onChange={this.handleChange}
                  />
                  <label htmlFor="no2" className={styles.no2}>
                    No
                  </label>
                </label>
                <br></br>
                <label
                  htmlFor="healthConditions"
                  className={styles.healthConditions}
                >
                  Health conditions:
                  <input
                    value={this.state.healthConditions}
                    id="healthConditions"
                    type="text"
                    onChange={this.handleChange}
                    className={styles.inputBox}
                  ></input>
                </label>
                <br></br>
                <label htmlFor="paired" className={styles.paired}>
                  Paired with another animal:
                  <input
                    className={styles.inputBox}
                    type="radio"
                    id="paired"
                    name="neutered"
                    value="Yes"
                    checked={this.state.paired === "Yes"}
                    onChange={this.handleChange}
                  />
                  <label htmlFor="Yes" className={styles.true2}>
                    Yes
                  </label>
                  <input
                    className={styles.inputBox}
                    type="radio"
                    id="paired"
                    name="paired"
                    value="No"
                    checked={this.state.paired === "No"}
                    onChange={this.handleChange}
                  />
                  <label htmlFor="No" className={styles.false2}>
                    No
                  </label>
                </label>
                <br></br>
                <label htmlFor="status" className={styles.status}>
                  Status
                  <br></br>
                  <input
                    className={styles.inputBox}
                    type="radio"
                    id="status"
                    name="adoptable"
                    value="Available to adopt"
                    checked={this.state.status === "Available to adopt"}
                    onChange={this.handleChange}
                  />
                  <label htmlFor="adoptable" className={styles.adoptable}>
                    Available for adoption
                  </label>
                  <br></br>
                  <input
                    className={styles.inputBox}
                    type="radio"
                    id="status"
                    name="pendingPayment"
                    value="Pending payment"
                    checked={this.state.status === "Pending payment"}
                    onChange={this.handleChange}
                  />
                  <label
                    htmlFor="pendingPayment"
                    className={styles.pendingPayment}
                  >
                    Pending payment
                  </label>
                  <br></br>
                  <input
                    className={styles.inputBox}
                    type="radio"
                    id="status"
                    name="pendingCollection"
                    value="Pending collection"
                    checked={this.state.status === "Pending collection"}
                    onChange={this.handleChange}
                  />
                  <label
                    htmlFor="pendingCollection"
                    className={styles.pendingCollection}
                  >
                    Pending collection
                  </label>
                  <br></br>
                  <input
                    className={styles.inputBox}
                    type="radio"
                    id="status"
                    name="permanentResident"
                    value="Permanent resident"
                    checked={this.state.status === "Permanent resident"}
                    onChange={this.handleChange}
                  />
                  <label htmlFor="permanentResident">Permanent resident</label>
                </label>
                {/* <br></br>
                <br></br>
                <p>
                  Finally please upload an image of the animal using one of the
                  following methods:
                </p>
                <label htmlFor="imgUrl" className={styles.imgUrl}>
                  Copy/paste image URL:
                  <input
                    value={this.state.imgUrl}
                    id="imgUrl"
                    type="text"
                    onChange={this.handleChange}
                    className={styles.inputBox}
                  ></input>
                </label> */}
                <br></br>
                <br></br>

                <label htmlFor="imgUrl" className={styles.imgUrl}>
                  Upload image from file:
                  <input
                    value={this.state.imgUrl}
                    id="imgUrl"
                    type="file"
                    accept="image/*"
                    capture
                    onChange={this.handleChange}
                    className={styles.inputBox}
                  ></input>
                </label>
                <br></br>
                <br></br>
                <Button
                  variant="secondary"
                  type="submit"
                  className={styles.adoptionButton}
                >
                  Place animal for adoption
                </Button>
              </Form>
            </center>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default AddAnimal;
