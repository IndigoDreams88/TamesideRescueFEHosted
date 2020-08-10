import React, { Component } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import styles from "../CSS/Management.module.css";
import AddAnimal from "../Components/AddAnimal.jsx";
import SeeAllAnimals from "../Components/SeeAllAnimals.jsx";

class Management extends Component {
  state = {
    path: "",
    selectedAnimal: "",
    value: "",
  };

  handleClick = (path) => {
    const { selectedAnimal } = this.state;
    if (selectedAnimal.length > 0) {
      return this.setState({ path, selectedAnimal: "" });
    } else {
      this.setState({
        path,
      });
    }
  };

  selectAnimal = (selectedAnimal) => {
    this.setState({
      selectedAnimal,
    });
  };

  getValue = (value) => {
    this.setState({ value });
  };

  componentDidUpdate(prevProps, prevState) {
    const { handleValue } = this.props;
    const { value } = this.state;
    if (value !== prevState.value) {
      handleValue(value);
    }
  }

  render() {
    console.log(this.state.value);
    const { selectedAnimal } = this.state;

    return (
      <Container>
        <Row className="nopadding">
          <Col className="no-gutters" xs={12} md={12} lg={12}>
            <center>
              <h2 className={styles.title}>Welcome Elaine!</h2>
            </center>
            <center>
              <h3 className={styles.subtitle}>What would you like to do?</h3>
            </center>
          </Col>
        </Row>
        <Row className="nopadding">
          <Col
            className="no-gutters d-flex flex-wrap justify-content-center"
            xs={12}
            md={2}
            lg={2}
          ></Col>
          <Col
            className="no-gutters d-flex flex-wrap justify-content-center"
            xs={12}
            md={4}
            lg={4}
          >
            <center>
              <Button
                className={styles.button}
                variant="secondary"
                onClick={() => {
                  this.handleClick("addAnimal");
                }}
              >
                Place an animal for adoption
              </Button>
            </center>
          </Col>
          <Col
            className="no-gutters d-flex flex-wrap justify-content-center"
            xs={12}
            md={4}
            lg={4}
          >
            <center>
              <Button
                className={styles.button}
                variant="secondary"
                onClick={() => {
                  this.handleClick("seeAllAnimals");
                }}
              >
                Manage Animals
              </Button>
            </center>
          </Col>
          <Col
            className="no-gutters d-flex flex-wrap justify-content-center"
            xs={12}
            md={2}
            lg={2}
          ></Col>
        </Row>
        <Row className="nopadding">
          <Col
            className="no-gutters d-flex flex-wrap justify-content-center"
            xs={12}
            md={12}
            lg={12}
          >
            <center>
              {this.state.path === "addAnimal" && (
                <AddAnimal getValue={this.getValue} />
              )}
              {this.state.path === "seeAllAnimals" && (
                <SeeAllAnimals
                  selectedAnimal={selectedAnimal}
                  selectAnimal={this.selectAnimal}
                />
              )}
            </center>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Management;
