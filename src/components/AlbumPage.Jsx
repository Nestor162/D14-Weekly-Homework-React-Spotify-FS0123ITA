import React from "react";

function AlbumPage() {
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
        <div className="col-md-3 pt-5 text-center" id="img-container" />
        <div className="col-md-8 p-5">
          <div className="row">
            <div className="col-md-10 mb-5" id="trackList" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AlbumPage;
