import React, { Component } from "react";
import styles from "../CSS/IndividualAnimalPage.module.css";
import { Container, Row, Col, Image, Spinner } from "react-bootstrap";
import { getIndividualAnimal } from "../Components/DataRequests.jsx";

class IndividualSponsor extends Component {
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
                {animal.species}. {animal.History}
              </p>

              <p className={styles.animalText}>
                If you want to help support the rescue centre with {animal.name}
                's veterinary care bills and to live a happy life as permanent
                resident of the centre, then please consider setting up a
                monthly direct debit to the sanctuary and paying whatever you
                can each month to support{" "}
                {animal.gender === "Male" ? "him" : "her"}, and we'll be happy
                to keep you updated on{" "}
                {animal.gender === "Male" ? "his" : "her"} progress. If you'd
                like to do this then please contact us either via email or phone
                and we can give you further details of how to do this.
              </p>
            </center>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default IndividualSponsor;
