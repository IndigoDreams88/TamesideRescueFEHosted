import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import styles from "../CSS/Homepage.module.css";

function Homepage(props) {
  return (
    <Container>
      <Row>
        <Col xs={12} md={6} lg={6}>
          <center>
            <Image
              src="/piggies1.jpg"
              thumbnail
              alt="guinea pigs"
              className={styles.guineaPigs}
            />
            <Image
              src="/rabbitsHutch.jpg"
              thumbnail
              alt="rabbit"
              className={styles.rabbits}
            />
            <Image
              src="/GP1.jpg"
              thumbnail
              alt="guinea pig"
              className={styles.guineaPig}
            />
          </center>
        </Col>
        <Col xs={12} md={6} lg={6}>
          <center>
            <p className={styles.welcomeText}>
              We are a independent rescue not linked to any other rescue center.
              We neuter all rabbits and have them micro-chipped. We check all
              our guinea pigs and rabbits teeth before adoption. There is an
              adoption fee payable before you can take your new friend/s home,
              and this money is put back into the rescue center to pay for
              food/bedding and vet bills for the animals that we care for. If
              you don't already own a rabbit or a guinea pig, then we strongly
              recommend adopting a pair of the same species and gender, as both
              rabbits and guinea pigs are social animals and need to spend time
              with their own kind. We do not recommend housing rabbits and
              guinea pigs together, for many reasons, not least of which is
              safety, as rabbits are much larger animals than guinea pigs and
              can easily injury them. For more information check out:{" "}
              <a href="https://squeaksandnibbles.com/can-rabbits-and-guinea-pigs-live-together/">
                Squeaks and Nibbles
              </a>
            </p>
          </center>
        </Col>
      </Row>
      <Row className="nopadding">
        <Col xs={12} md={12} lg={12}>
          <center>
            <h3 className={styles.adoptTxt}>Adopt don't shop!</h3>
          </center>
        </Col>
      </Row>
    </Container>
  );
}

export default Homepage;
