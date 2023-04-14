import React from "react";
import { Button, Col, Container, Navbar, Row } from "react-bootstrap";
import "./Sidebar.css";
import logo from "../img/logo/Spotify_Logo.png";
import { BookFill, HouseDoorFill } from "react-bootstrap-icons";

function Sidebar() {
  return (
    <Container fluid>
      <Row>
        {/*SIDEBAR VERTICAL*/}
        <Col xs={2}>
          <Navbar className="navbar-expand-md navbar-white bg-navbar fixed-left justify-content-between" id="sidebar">
            <div className="nav-container">
              <Navbar.Brand>
                <img src={logo} alt="Spotify_Logo" width={131} height={40} />
              </Navbar.Brand>
              <Button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </Button>
              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                  <ul>
                    <li>
                      <a className="nav-item nav-link d-flex align-items-center" href="#home">
                        <HouseDoorFill size={22} />
                        &nbsp; Home
                      </a>
                    </li>
                    <li>
                      <a className="nav-item nav-link" href="#library">
                        <BookFill size={22} />
                        &nbsp; Your Library
                      </a>
                    </li>
                    <li>
                      <div className="input-group mt-3">
                        <input
                          type="text"
                          className="form-control mb-2"
                          id="searchField"
                          placeholder="Search"
                          aria-label="Search"
                          aria-describedby="basic-addon2"
                        />
                        <div className="input-group-append" style={{ marginBottom: "4%" }}>
                          <Button
                            variant="outline-secondary"
                            className="btn-sm"
                            type="button"
                            id="button-addon1"
                            onclick="search()"
                          >
                            GO
                          </Button>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="nav-btn">
              <Button className="btn signup-btn" type="button">
                Sign Up
              </Button>
              <Button className="btn login-btn" type="button">
                Login
              </Button>
              <a href="#cookie">Cookie Policy</a> |<a href="#privacy"> Privacy</a>
            </div>
          </Navbar>
        </Col>
      </Row>
    </Container>
  );
}

export default Sidebar;
