import React, { Component } from "react";
import styles from "../CSS/SeeAllAnimals.module.css";
import { getAnimals, deleteAnimal } from "../Components/DataRequests.jsx";
import UpdateAnimal from "../Components/UpdateAnimal.jsx";
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  FormControl,
  Card,
  Spinner,
} from "react-bootstrap";
import ErrorDisplay from "./ErrorDisplay";

class SeeAllAnimals extends Component {
  state = {
    animals: [],
    deleteMessage: "",
    deletedAnimal: "",
    animalId: "",
    err: null,
    isLoading: true,
  };

  handleDataRequest = () => {
    return getAnimals()
      .then((animals) => {
        this.setState({ animals, isLoading: false });
      })
      .catch(({ response }) => {
        this.setState({
          err: {
            response,
          },
        });
      });
  };

  handleDeleteRequest = (id) => {
    return deleteAnimal(id)
      .then((response) => {
        this.setState({
          deleteMessage:
            "Animal has been successfully removed from the website",
          deletedAnimal: id,
        });
      })
      .catch((err) => {
        alert(err);
      });
  };

  handleDeleteMessage = () => {
    this.setState({
      deleteMessage: "",
    });
  };

  componentDidMount() {
    this.handleDataRequest();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.deletedAnimal !== prevState.deletedAnimal) {
      const { animals, deletedAnimal } = this.state;
      const filteredAnimals = animals.filter((animal) => {
        return animal.id !== deletedAnimal;
      });
      this.setState({
        animals: filteredAnimals,
      });
    }
  }

  handleInputChange(event) {
    event.preventDefault();
    const target = event.target;
    const name = target.name;
    const value = target.value;
    this.setState({ [name]: value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.filterAnimals(this.state.animalId);
  };

  filterAnimals = (animalId) => {
    const { animals } = this.state;
    const filteredAnimal = animals.filter((animal) => {
      return animal.id === animalId;
    });
    this.setState({ animals: filteredAnimal });
  };

  render() {
    const { animals, deleteMessage, isLoading } = this.state;
    const { selectedAnimal } = this.props;

    if (selectedAnimal) {
      return <UpdateAnimal id={selectedAnimal} />;
    } else {
      return (
        <Container>
          <Row className="nopadding">
            <Col
              className="no-gutters d-flex flex-wrap justify-content-center"
              xs={12}
              md={12}
              lg={12}
            >
              <h3>Search for an animal: </h3>
              <Form inline>
                <FormControl
                  type="text"
                  placeholder="Enter animal's id"
                  className={styles.inputBox}
                  name="animalId"
                  value={this.state.animalId}
                  onChange={(event) => {
                    this.handleInputChange(event);
                  }}
                />

                <Button
                  className={styles.searchButton}
                  variant="secondary"
                  type="submit"
                  onClick={(event) => {
                    this.handleSubmit(event);
                  }}
                >
                  Search
                </Button>
              </Form>
            </Col>
          </Row>

          <Row className="nopadding">
            <Col
              className="no-gutters d-flex flex-wrap justify-content-center"
              xs={12}
              md={12}
              lg={12}
            >
              <Form>
                {this.state.animals.length <= 1 && isLoading === false ? (
                  <Button
                    variant="secondary"
                    className={styles.button}
                    onClick={this.handleDataRequest}
                  >
                    Back to all animals
                  </Button>
                ) : null}
              </Form>

              {this.state.err !== null && <ErrorDisplay err={this.state.err} />}

              <Col
                className="no-gutters d-flex flex-wrap justify-content-center"
                xs={12}
                md={12}
                lg={12}
              >
                {deleteMessage ? (
                  <div className={styles.displayMessage}>
                    {deleteMessage}
                    <center>
                      <Button
                        variant="secondary"
                        className={styles.button}
                        onClick={() => {
                          this.handleDeleteMessage();
                        }}
                      >
                        Ok
                      </Button>
                    </center>
                  </div>
                ) : null}

                {isLoading && (
                  <div style={{ marginTop: "40px" }}>
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

                {animals.map((animal) => {
                  return (
                    <Card
                      style={{ width: "16rem", margin: "10px" }}
                      key={animal.id}
                      border="secondary"
                    >
                      <center>
                        <Card.Img
                          variant="top"
                          src={animal.imgUrl}
                          className={styles.animalImage}
                        />
                      </center>
                      <Card.Body>
                        <Card.Title>{animal.name}</Card.Title>
                        <center>
                          <Button
                            variant="secondary"
                            className={styles.editButton}
                            onClick={() => {
                              this.props.selectAnimal(animal.id);
                            }}
                          >
                            Edit details
                          </Button>
                          <Button
                            variant="secondary"
                            className={styles.deleteButton}
                            onClick={() => {
                              this.handleDeleteRequest(animal.id);
                            }}
                          >
                            Delete {animal.name}
                          </Button>
                        </center>
                      </Card.Body>
                    </Card>
                  );
                })}
              </Col>
            </Col>
          </Row>
        </Container>
      );
    }
  }
}

export default SeeAllAnimals;
