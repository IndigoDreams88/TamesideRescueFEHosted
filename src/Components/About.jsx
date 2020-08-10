import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import styles from "../CSS/About.module.css";

function About(props) {
  return (
    <Container>
      <Row className="nopadding">
        <Col className="no-gutters" xs={12} md={4} lg={4}>
          <center>
            <Image
              src="/Norman.jpg"
              alt="guineaPig"
              className={styles.GPImage}
            />
          </center>
        </Col>
        <Col className="no-gutters" xs={12} md={4} lg={4}>
          <center>
            <h3 className={styles.aboutHeader}>About Us</h3>
            <p className={styles.welcomeText}>
              Tameside Guinea pig and Rabbit rescue was formed in 2002 by Elaine
              Padley, to help unwanted guinea pigs and rabbits find homes.
              Elaine has cared for countless rabbits and guinea pigs over the
              years and strives to find them loving homes. She checks the teeth
              of every animal that comes into her care, bathes and grooms them,
              trims their nails, and for rabbits she's neuters and microchips
              them.
            </p>
          </center>
        </Col>
        <Col className="no-gutters" xs={12} md={4} lg={4}>
          <center>
            <Image
              src="/hutches.jpg"
              alt="hutches"
              className={styles.hutchesImage}
            />
          </center>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
