import React from "react";
import {
  Container,
  Row,
  Col,
  Navbar,
  Nav,
  NavDropdown,
  Image,
} from "react-bootstrap";
import { Link } from "@reach/router";
import styles from "../CSS/NavbarLinks.module.css";

function NavbarLinks(props) {
  return (
    <div style={{ backgroundColor: "#98c01f", padding: "10px" }}>
      <Container>
        <Row className="nopadding">
          <Col className="no-gutters" xs={12} md={4} lg={5}>
            <Navbar
              bg="light"
              variant="light"
              expand="lg"
              style={{ padding: "15px" }}
              className={styles.left}
            >
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="navbar-nav mx-auto">
                  <Nav.Link as={Link} to="/about">
                    About
                  </Nav.Link>
                  <NavDropdown title="Guinea Pigs" id="basic-nav-dropdown">
                    <NavDropdown.Item as={Link} to="/boars">
                      Boars
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/sows">
                      Sows
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/GPCareTips">
                      Care Tips
                    </NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown title="Rabbits" id="basic-nav-dropdown">
                    <NavDropdown.Item as={Link} to="/bucks">
                      Bucks
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/does">
                      Does
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/rabbitCareTips">
                      Care Tips
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </Col>
          <Col className="no-gutters" xs={12} md={4} lg={2}>
            <Link to="/">
              <center>
                <Image
                  src="/TamesideTextandLogo.png"
                  roundedCircle
                  className={styles.logo}
                />
              </center>
            </Link>
          </Col>
          <Col className="no-gutters" xs={12} md={4} lg={5}>
            <Navbar
              bg="light"
              variant="light"
              expand="lg"
              style={{ padding: "15px" }}
              className={styles.right}
            >
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="navbar-nav mx-auto">
                  <NavDropdown title="Services" id="basic-nav-dropdown">
                    <NavDropdown.Item as={Link} to="/grooming">
                      Grooming
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/boarding">
                      Boarding
                    </NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown title="Help Us" id="basic-nav-dropdown">
                    <NavDropdown.Item as={Link} to="/adoption">
                      Adoption
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/donations">
                      Donations
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/sponsor">
                      Sponsor
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link as={Link} to="/contactUs">
                    Contact
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default NavbarLinks;
