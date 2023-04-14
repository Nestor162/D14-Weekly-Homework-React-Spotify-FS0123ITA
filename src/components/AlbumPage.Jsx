import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import NavbarBottom from "./NavbarBottom";
import Sidebar from "./Sidebar";

function AlbumPage() {
  const params = useParams();
  const [album, setAlbum] = useState(null);

  const fetchAlbumContent = async albumId => {
    try {
      let response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/album/${params.albumId}`);

      if (response.ok) {
        let data = await response.json();
        console.log(data);
        setAlbum(data);
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchAlbumContent();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <Sidebar />
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
          <Col md={3} className="pt-5 text-center" id="img-container">
            {album && (
              <div className="col-md-3 pt-5 text-center" id="img-container">
                <img src={album.cover_big} class="card-img" alt="Album" />
                <div className="mt-4 text-center">
                  <p className="album-title">{album.title}</p>
                </div>
                <div className="text-center">
                  <p className="artist-name">{album.artist.name}</p>
                </div>
                <div class="mt-4 text-center">
                  <button id="btnPlay" className="btn btn-success" type="button">
                    Play
                  </button>
                </div>
              </div>
            )}
          </Col>
          <Col md={8} className="p-5">
            <Row>
              <div className="col-md-10 mb-5" id="trackList">
                {album &&
                  album.tracks.data.map(track => {
                    return (
                      <div class="py-3 trackHover">
                        <a href="#song" className="card-title trackHover px-3" style={{ color: "white" }}>
                          {track.title}
                        </a>
                        <small class="duration" style={{ color: "white" }}>
                          {track.duration}
                        </small>
                      </div>
                    );
                  })}
              </div>
            </Row>
          </Col>
        </Row>
      </Col>
      <NavbarBottom />
    </>
  );
}

export default AlbumPage;
