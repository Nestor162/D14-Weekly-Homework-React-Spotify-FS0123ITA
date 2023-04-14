import React from "react";
import { Button } from "react-bootstrap";

function ArtistPage() {
  return (
    <div className="col-12 col-md-9 offset-md-3 mainPage">
      <div className="row mb-3">
        <div className="col-9 col-lg-11 mainLinks d-none d-md-flex">
          <a href="#trending">TRENDING</a>
          <a href="#podcast">PODCAST</a>
          <a href="#moods">MOODS AND GENRES</a>
          <a href="#new">NEW RELEASES</a>
          <a href="#discover">DISCOVER</a>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-10 col-lg-10 mt-5">
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
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-10 offset-1 col-md-10 col-lg-10 p-0">
          <div className="mt-4 d-flex justify-content-start">
            <h2 className="text-white font-weight-bold">Tracks</h2>
          </div>
          <div className="pt-5 mb-5">
            <div className="row" id="apiLoaded" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArtistPage;
