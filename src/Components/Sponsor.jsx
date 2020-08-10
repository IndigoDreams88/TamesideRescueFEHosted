import React from "react";
import { Link } from "@reach/router";
import { Container, Row, Col, Image, Spinner } from "react-bootstrap";
import styles from "../CSS/Sponsor.module.css";

function Sponsor(props) {
  const { animals, isLoading } = props;
  return (
    <Container>
      <Row className="nopadding">
        <Col
          className="no-gutters d-flex flex-wrap justify-content-center"
          xs={12}
          md={12}
          lg={12}
        >
          <center>
            <h3 className={styles.title}>Permanent Residents</h3>
            <p className={styles.infoText}>
              Not all the rabbits and Guinea pigs are able to be re-homed as
              they have additional needs, so they remain at the rescue centre,
              or with Paula our guinea pig foster carer.
              <br></br>
              <br></br>
              Click on a resident to learn more about them.
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
            return animal.status === "Permanent resident" ? (
              <Link to={animal.id} key={animal.id}>
                <div className={styles.individualAnimal}>
                  <center>
                    <h4 className={styles.residentName}>{animal.name}</h4>
                    <Image
                      rounded
                      src={animal.imgUrl}
                      alt="resident animal"
                      className={styles.residentImage}
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

export default Sponsor;
