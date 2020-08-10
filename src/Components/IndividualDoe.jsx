import React, { Component } from "react";
import styles from "../CSS/IndividualAnimalPage.module.css";
import { Container, Row, Col, Image, Button, Spinner } from "react-bootstrap";
import { getIndividualAnimal } from "../Components/DataRequests.jsx";
import ContactForm from "../Components/ContactForm";

class IndividualDoe extends Component {
  state = {
    animal: {},
    clicked: false,
  };

  componentDidMount() {
    this.handleDataRequest(this.props.id);
  }

  handleDataRequest = (id) => {
    getIndividualAnimal(id)
      .then((animal) => {
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

  handleClick = () => {
    const { clicked } = this.state;
    this.setState({
      clicked: !clicked,
    });
  };

  render() {
    const { animal } = this.state;
    const { isLoading } = this.props;

    return (
      <Container>
        <Row className="nopadding">
          <Col
            className="no-gutters d-flex flex-wrap justify-content-center"
            xs={12}
            md={6}
            lg={6}
          >
            <Image
              rounded
              src={animal.imgUrl}
              alt="animal"
              className={styles.animalPhoto}
            />
          </Col>
          <Col
            className="no-gutters d-flex flex-wrap justify-content-center"
            xs={12}
            md={6}
            lg={6}
          >
            {isLoading && (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  marginTop: "40px",
                }}
              >
                <Spinner
                  animation="border"
                  variant="secondary"
                  role="status"
                  size="ld"
                >
                  <span className="sr-only">Loading...</span>
                </Spinner>
              </div>
            )}
            <center>
              <h3 className={styles.title}>{animal.name}</h3>
              <p className={styles.animalText}>
                {animal.name} is a {animal.gender} {animal.breed}{" "}
                {animal.species} and is {animal.age} old.{" "}
                {animal.gender === "Male" ? "He" : "She"} is {animal.colour} in
                colour. {animal.gender === "Male" ? "He" : "She"}{" "}
                {animal.microChipped === "Yes"
                  ? "is microchipped"
                  : "is not microchipped"}
                . {animal.gender === "Male" ? "He" : "She"} is{" "}
                {animal.neutered === "Yes" ? "neutered" : "not neutered"}.{" "}
                {animal.gender === "Male" ? "He" : "She"} has/is{" "}
                {animal.healthConditions === "None"
                  ? "no health conditions"
                  : animal.healthConditions}
                . {animal.gender === "Male" ? "He" : "She"}{" "}
                {animal.paired === true
                  ? "is currently paired with another rabbit at the rescue"
                  : "comes alone, but will need a friend"}
                .
              </p>
              <p className={styles.animalText}>
                {animal.name} is {animal.status}.
              </p>
              <Button variant="secondary" onClick={() => this.handleClick()}>
                Register my interest in adopting {animal.name}
              </Button>
              {this.state.clicked ? (
                <ContactForm
                  handleClick={this.handleClick}
                  animalName={animal.name}
                  animalId={animal.id}
                  animalSpecies={animal.species}
                />
              ) : null}
            </center>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default IndividualDoe;
