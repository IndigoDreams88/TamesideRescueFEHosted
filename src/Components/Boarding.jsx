import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import styles from "../CSS/Boarding.module.css";

function Boarding(props) {
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
            <h3 className={styles.title}>Boarding Services</h3>
          </center>
        </Col>
      </Row>
      <Row className="nopadding">
        <Col
          className="no-gutters d-flex flex-wrap justify-content-center"
          xs={12}
          md={6}
          lg={6}
        >
          <Image
            roundedCircle
            src="/pamperedPiggiesHome.jpg"
            alt="boarding centre"
            className={styles.boardingCentre}
          />
        </Col>
        <Col
          className="no-gutters d-flex flex-wrap justify-content-center"
          xs={12}
          md={6}
          lg={6}
        >
          <ul className={styles.list1}>
            <h3>Guinea pigs</h3>
            <p>
              Paula from Pampered Piggies offers the following boarding
              services:
            </p>
            <li>
              Duration varies £3.00 for one Guinea Pig plus additional £2 for
              each Guinea Pig living in the same cage
            </li>
            <li>
              I am a fully insured experienced guinea pig owner and Fosterer of
              many with medical needs. I have experience in pregnancy, birth,
              hand rearing, administering medications and treating skin
              conditions, as well as guinea pigs that are blind, had strokes,
              paralysed and have cysts. I started up a guinea pig grooming
              business which has now expanded into indoor boarding in a purpose
              built loft conversion. Boarding is in a purpose built loft
              converted room in large C and C covered cages.wood shavings is
              used, but if you prefer to use fleece - feel free to bring it
              along.
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Boarding;
