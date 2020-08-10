import React from "react";
import { Link } from "@reach/router";
import { Container, Row, Col, Image, Spinner } from "react-bootstrap";
import styles from "../CSS/AnimalsPageStyling.module.css";

function Bucks(props) {
  const { animals, isLoading } = props;
  return (
    <Container>
      <Row className="nopadding">
        <Col className="no-gutters" xs={12} md={12} lg={12}>
          <center>
            <h3 className={styles.title}>
              Bucks / Male Rabbits ready for adoption!
            </h3>
            <p className={styles.infoText}>
              Click on the Rabbit's page to view further details.
              <br></br>
              <br></br>
            </p>
          </center>
        </Col>
      </Row>
      <Row className="nopadding">
        <Col
          className="no-gutters d-flex flex-wrap justify-content-center"
          xs={12}
          md={12}
          lg={12}
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
          {animals.map((animal) => {
            return animal.species === "Rabbit" &&
              animal.gender === "Male" &&
              animal.status !== "Permanent resident" ? (
              <Link to={animal.id} key={animal.id}>
                <div className={styles.individualAnimal}>
                  <center>
                    <h4 className={styles.animalName}>{animal.name}</h4>
                    <Image
                      rounded
                      src={animal.imgUrl}
                      alt="guinea pig"
                      className={styles.animalImage}
                    />
                  </center>
                </div>
              </Link>
            ) : null;
          })}
        </Col>
      </Row>
    </Container>
  );
}

export default Bucks;
