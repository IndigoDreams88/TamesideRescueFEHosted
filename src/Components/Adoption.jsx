import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import styles from "../CSS/Adoption.module.css";

function Adoption(props) {
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
            <h3 className={styles.title}>Adoption Fees & Information</h3>
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
          <ul className={styles.list1}>
            <center>
              <h3>Guinea pigs</h3>
            </center>
            <li>Guinea Pigs cost: £20 each</li>
            <li>Have their teeth checked</li>
            <li>Are groomed if needed before hand over</li>
            <li>Have their nails trimmed if needed before hand over</li>
            <li>
              <b>
                If adopting a single guinea pig please ensure that you have a
                friend waiting for it at home, as guinea pigs are social
                animals, and need to be with a friend of their own kind
              </b>
            </li>
          </ul>
        </Col>
        <Col
          className="no-gutters d-flex flex-wrap justify-content-center"
          xs={12}
          md={6}
          lg={6}
        >
          <Image
            roundedCircle
            src="/Bonny.jpg"
            alt="guinea pig"
            className={styles.GPSilhouette}
          />
        </Col>
      </Row>
      <Row className="nopadding">
        <Col
          className="no-gutters d-flex flex-wrap justify-content-center"
          xs={12}
          md={6}
          lg={6}
        >
          <ul className={styles.list2}>
            <center>
              <h3>Rabbits</h3>
            </center>
            <li>Rabbits cost: £25 each</li>
            <li>Rabbits cost £50 each if neutered</li>
            <li>Have their teeth checked</li>
            <li>Are micro chipped</li>
            <li>Are groomed if needed before hand over</li>
            <li>Have their nails trimmed if needed before hand over</li>
            <li>
              <b>
                If adopting a single rabbit please ensure that you have a friend
                waiting for it at home, as rabbits are social animals, and need
                to be with a friend of their own kind
              </b>
            </li>
          </ul>
        </Col>
        <Col
          className="no-gutters d-flex flex-wrap justify-content-center"
          xs={12}
          md={6}
          lg={6}
        >
          <Image
            roundedCircle
            src="/babyRabbits.jpg"
            alt="rabbit"
            className={styles.rabbitSilhouette}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Adoption;
