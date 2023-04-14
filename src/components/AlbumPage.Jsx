import React from "react";
import { Col, Row } from "react-bootstrap";

function AlbumPage() {
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
        <Col md={3} className="pt-5 text-center" id="img-container" />
        <Col md={8} className="p-5">
          <Row>
            <div className="col-md-10 mb-5" id="trackList" />
          </Row>
        </Col>
      </Row>
    </Col>
  );
}

export default AlbumPage;
