import React, { Component } from "react";
import styles from "../CSS/UpdateAnimal.module.css";
import { putAnimal, getIndividualAnimal } from "../Components/DataRequests.jsx";
import { Button } from "react-bootstrap";
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
    displayMessage: "",
    err: null,
  };

  handlePutRequest = (animal) => {
    const { id } = this.props;
    return putAnimal(id, animal)
      .then((animal) => {
        this.setState({
          displayMessage: `You've successfully updated ${this.state.name}'s details`,
        });
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
    this.setState({ [event.target.id]: event.target.value });
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

    this.handlePutRequest({
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
  };

  handleGetRequest = (id) => {
    return getIndividualAnimal(id)
      .then((animal) => {
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
        } = animal;
        this.setState({
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
      })
      .catch(({ response }) => {
        this.setState({
          err: {
            response,
          },
        });
      });
  };

  componentDidMount() {
    const { id } = this.props;
    this.handleGetRequest(id);
  }

  render() {
    const { name } = this.state;
    return (
      <div className={styles.formContainer}>
        <center>
          {this.state.err !== null && <ErrorDisplay err={this.state.err} />}
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="name" className={styles.name}>
              Name:
              <input
                required
                value={this.state.name}
                id="name"
                type="text"
                onChange={this.handleChange}
                className={styles.inputBox1}
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
              <label htmlFor="pendingPayment" className={styles.pendingPayment}>
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
            <br></br>
            <label htmlFor="imgUrl" className={styles.imgUrl}>
              Photo/Image URL:
              <input
                required
                value={this.state.imgUrl}
                id="imgUrl"
                type="text"
                onChange={this.handleChange}
                className={styles.inputBox}
              ></input>
            </label>
            <br></br>
            <br></br>
            <Button
              variant="secondary"
              type="submit"
              className={styles.updateDetailsButton}
              style={{ marginBottom: "60px" }}
            >
              Update {name}'s details
            </Button>
            {this.state.displayMessage.length > 0 ? (
              <div className={styles.displayMessage}>
                <p>{this.state.displayMessage}</p>
              </div>
            ) : null}
          </form>
        </center>
      </div>
    );
  }
}

export default AddAnimal;
