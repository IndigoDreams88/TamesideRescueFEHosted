import React from "react";
import { Container, Row, Col, Badge } from "react-bootstrap";
import styles from "../CSS/Contact.module.css";

function Contact(props) {
  return (
    <Container>
      <Row className="nopadding">
        <Col
          className="no-gutters d-flex flex-wrap justify-content-center"
          xs={12}
          md={6}
          lg={6}
        >
          <center>
            <div className={styles.mapouter}>
              <div className={styles.gmap_canvas}>
                <iframe
                  id="gmap_canvas"
                  title="googleMap"
                  src="https://maps.google.com/maps?q=Lindon%20Avenue%2C%20Audenshaw%2C%20Manchester&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  className={styles.roadMap}
                  frameBorder="0"
                  scrolling="no"
                  marginHeight="0"
                  marginWidth="0"
                  alt="google map"
                >
                  <a href="https://www.embedgooglemap.net/en/">Google Map</a>
                </iframe>
              </div>
            </div>
          </center>
        </Col>

        <Col
          className="no-gutters d-flex flex-wrap justify-content-center"
          xs={12}
          md={6}
          lg={6}
        >
          <h3 className={styles.directionsHeader}>Directions:</h3>
          <div>
            <center>
              <Badge variant="secondary">By car:</Badge>
            </center>
            <p className={styles.directions}>
              We're a short distance away from the M60 outer ring road. You can
              leave the M60 at either J23 or J24.
            </p>
          </div>
          <center>
            <Badge variant="secondary">By train:</Badge>
          </center>
          <div>
            <p className={styles.directions}>
              We're a 15 minute walk from Guide Bridge Train Station, a 20
              minute walk from Fairfield Train Station and a 30 minute walk from
              Denton Train Station.
            </p>
          </div>
          <div>
            <center>
              <h3 className={styles.contactsHeader}>Contact Us:</h3>

              <p className={styles.details}>Email: tamesiderescue@gmail.com</p>
              <p className={styles.details}>Mobile: 07738 831872</p>
            </center>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
