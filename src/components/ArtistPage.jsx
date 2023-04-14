import React from "react";
import { Button, Col, Row } from "react-bootstrap";

function ArtistPage() {
  return (
    <Col xs={12} md={9} className="offset-md-3 mainPage">
      <Row className="mb-3">
        <Col xs={9} lg={11} className="mainLinks d-none d-md-flex">
          <a href="#trending">TRENDING</a>
          <a href="#podcast">PODCAST</a>
          <a href="#moods">MOODS AND GENRES</a>
          <a href="#new">NEW RELEASES</a>
          <a href="#discover">DISCOVER</a>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={10} lg={10} className="mt-5">
          <h2 className="titleMain">&nbsp;</h2>
          <div id="followers"></div>
          <div className="d-flex justify-content-center" id="button-container">
            <Button className="btn-success mr-2 mainButton d-none" id="playButton">
              PLAY
            </Button>
            <Button className="btn-outline-light mainButton d-none" id="followButton">
              FOLLOW
            </Button>
          </div>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col xs={10} md={10} lg={10} className="offset-1 p-0">
          <div className="mt-4 d-flex justify-content-start">
            <h2 className="text-white font-weight-bold">Tracks</h2>
          </div>
          <div className="pt-5 mb-5">
            <Row className="row" id="apiLoaded" />
          </div>
        </Col>
      </Row>
    </Col>
  );
}

export default ArtistPage;
