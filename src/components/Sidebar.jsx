import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Col, Container, Navbar, Row } from "react-bootstrap";
import "./Sidebar.css";
import logo from "../img/logo/Spotify_Logo.png";
import { BookFill, HouseDoorFill } from "react-bootstrap-icons";
import { setSearch, setQuery } from "../redux/reducers/searchReducer";
import { Link } from "react-router-dom";

function Sidebar() {
  const [searchQuery, setSearchQuery] = useState("");
  const dispatch = useDispatch();

  const clickHandler = () => {
    dispatch(setSearch(true));
    dispatch(setQuery(searchQuery));
  };

  return (
    <Container fluid>
      <Row>
        {/*SIDEBAR VERTICAL*/}
        <Col xs={2}>
          <Navbar className="navbar-expand-md navbar-white bg-navbar fixed-left justify-content-between" id="sidebar">
            <div className="nav-container">
              <Link to={"/"}>
                <Navbar.Brand>
                  <img src={logo} alt="Spotify_Logo" width={131} height={40} />
                </Navbar.Brand>
              </Link>
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
                      <Link to={"/"} className="nav-item nav-link d-flex align-items-center">
                        <HouseDoorFill size={22} />
                        &nbsp; Home
                      </Link>
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
                          onChange={e => {
                            setSearchQuery(e.target.value);
                          }}
                        />
                        <div className="input-group-append" style={{ marginBottom: "4%" }}>
                          <Button
                            variant="outline-secondary"
                            className="btn-sm"
                            type="button"
                            id="button-addon1"
                            onClick={() => {
                              clickHandler();
                            }}
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
