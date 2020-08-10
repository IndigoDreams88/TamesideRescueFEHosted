import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import styles from "../CSS/Grooming.module.css";

function Grooming(props) {
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
            <h3 className={styles.title}>Grooming Services</h3>
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
            <h3>Guinea pigs</h3>
            <p>
              Paula from Pampered Piggies offers the following grooming
              services:
            </p>
            <li>Nail trim</li>
            <li>Grooming / hair trimming</li>
            <li>Ear cleaning</li>
            <li>Foot & ear care</li>
            <li>
              <b>Price £10.00</b>
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
            src="/piggyGrooming.jpg"
            alt="guinea pig grooming"
            className={styles.GPGroomingImg}
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
            <h3>Rabbits</h3>
            <p>
              Elaine from Tameside Guinea Pig and Rabbit Rescue, offers the
              following services for rabbits:
            </p>

            <li>
              <b>Nail trim £5.00</b>
            </li>
            <li>
              <b>Grooming £10.00</b>
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
            src="/InternetImageRabbitGrooming.jpg"
            alt="rabbit grooming"
            className={styles.rabbitGroomingImg}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Grooming;
