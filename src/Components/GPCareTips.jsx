import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../CSS/CareTips.module.css";

function GPCareTips(props) {
  return (
    <Container>
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
          md={8}
          lg={8}
        >
          <ul>
            <center>
              <h3 className={styles.title}>Guinea Pig Care Tips</h3>
              <p>
                For some fantastic care tips and information on guinea pigs,
                please visit the following websites:
              </p>
            </center>
            <li>
              <a href="https://www.theguineapigforum.co.uk/">
                The Guinea pig forum - for advice and info about all aspects of
                guinea pig care
              </a>
            </li>
            <li>
              <a href="https://www.guinealynx.info/healthycavy.html">
                Guinea Lynx - for advice and info about all aspects of guinea
                pig care
              </a>
            </li>
            <li>
              <a href="https://www.guineapigcagesstore.com/about-candccages">
                C&C Cages - For custom sized C&C cages
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/watch?v=DMw4CiZ2Ivo">
                Boar cleaning video - learn how to clean your boy's bits safely
                and properly
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/watch?v=fehpMZj35_M">
                Nail trimming video - learn how to trim your guinea pig's nails
                safely and properly
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/watch?v=fehpMZj35_M">
                Grooming Kits video - To buy or not to buy?
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/watch?v=R_G9kWIvQNo">
                Grooming/trimming video - for long hair guinea pigs
              </a>
            </li>
          </ul>
        </Col>
        <Col
          className="no-gutters d-flex flex-wrap justify-content-center"
          xs={12}
          md={2}
          lg={2}
        ></Col>
      </Row>
    </Container>
  );
}

export default GPCareTips;
