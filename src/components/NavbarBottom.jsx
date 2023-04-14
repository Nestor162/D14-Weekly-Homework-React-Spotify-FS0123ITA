import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./NavbarBottom.css";
import Play from "../img/playerbuttons/Play.png";
import Next from "../img/playerbuttons/Next.png";
import Previous from "../img/playerbuttons/Previous.png";
import Repeat from "../img/playerbuttons/Repeat.png";
import Shuffle from "../img/playerbuttons/Shuffle.png";
import { useSelector } from "react-redux";

function NavbarBottom() {
  const currentSong = useSelector(state => state.player.currentSong);

  return (
    <Container fluid className="fixed-bottom bg-container pt-1">
      <Row>
        <Col lg={10} className="offset-lg-2">
          <Row>
            <Col xs={6} md={4} lg={2} className="offset-3 offset-md-4 offset-lg-5 playerControls mt-1">
              <Row>
                <a href="#button">
                  <img src={Shuffle} alt="shuffle" />
                </a>
                <a href="#button">
                  <img src={Previous} alt="shuffle" />
                </a>
                <a href="#button">
                  <img src={Play} alt="shuffle" />
                </a>
                <a href="#button">
                  <img src={Next} alt="shuffle" />
                </a>
                <a href="#button">
                  <img src={Repeat} alt="shuffle" />
                </a>
              </Row>
              {currentSong.title && (
                <div className="position-absolute" style={{ left: "245px", top: "0" }}>
                  <div id="cardPlaying" className="card mb-3 text-light" style={{ maxWidth: "540px" }}>
                    <div className="row g-0">
                      <div className="col-md-4">
                        <img
                          src={currentSong.album.cover_small}
                          className="img-fluid rounded-start img-fluid"
                          alt={currentSong.title}
                        />
                      </div>
                      <div className="col-md-8">
                        <div className="card-body pt-0 px-1">
                          <strong className="card-title">{currentSong.title}</strong>
                          <p className="card-text">{currentSong.artist.name}</p>
                          <p className="card-text">
                            <small className="text-muted">{currentSong.album.title}</small>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </Col>
          </Row>
          <Row className="justify-content-center playBar py-3">
            <Col xs={8} md={6}>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow={0}
                  aria-valuemin={0}
                  aria-valuemax={100}
                />
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default NavbarBottom;
