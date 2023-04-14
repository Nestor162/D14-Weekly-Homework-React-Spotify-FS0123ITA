import React, { useEffect, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";

function ArtistPage() {
  const params = useParams();
  const [artist, setArtist] = useState(null);

  const fetchArtistContent = async () => {
    try {
      let response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/artist/${params.artistId}`);

      if (response.ok) {
        let data = await response.json();
        console.log(data);
        setArtist(data);
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchArtistContent();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
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
          <div className="d-flex flex-column justify-content-center" id="button-container">
            {artist && (
              <>
                <img className="mx-auto mb-3" src={artist.picture_big} alt={artist.name}></img>
                <h2 class="titleMain">{artist.name}</h2>
                <div id="followers">{artist.nb_fan} followers</div>
              </>
            )}

            <div className="buttonsWrappers d-flex justify-content-center">
              <Button className="btn-success me-2 mainButton" id="playButton">
                PLAY
              </Button>
              <Button variant="outline-light" className="mainButton" id="followButton">
                FOLLOW
              </Button>
            </div>
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
