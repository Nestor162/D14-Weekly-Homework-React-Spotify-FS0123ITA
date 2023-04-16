import React, { useEffect, useState } from "react";
import { Button, Col, Row, Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";
import NavbarBottom from "./NavbarBottom";
import Sidebar from "./Sidebar";
import { Heart, HeartFill } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { removeLike, setLike } from "../redux/reducers/likeReducer";

function AlbumPage() {
  const params = useParams();
  const [album, setAlbum] = useState(null);
  const dispatch = useDispatch();
  const likedSongs = useSelector(state => state.likes.likedSongs);

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
            {album ? (
              <div className="col-md-3 pt-5 text-center" id="img-container">
                <img src={album.cover_big} className="card-img" alt="Album" />
                <div className="mt-4 text-center">
                  <p className="album-title">{album.title}</p>
                </div>
                <div className="text-center">
                  <p className="artist-name" style={{ minWidth: "max-content" }}>
                    {album.artist.name}
                  </p>
                </div>
                <div className="mt-4 text-center">
                  <Button id="btnPlay" className="btn-success" type="button">
                    Play
                  </Button>
                </div>
              </div>
            ) : (
              <div className="position-absolute top-50 start-50">
                <Spinner variant="light" style={{ width: "90px", height: "90px" }} />
              </div>
            )}
          </Col>
          <Col md={8} className="p-5">
            <Row>
              <div className="col-md-10 mb-5" id="trackList">
                {album &&
                  album.tracks.data.map(track => {
                    return (
                      <div key={track.id} className="display-inline-block position-relative img-container">
                        <div className="py-3 px-3 trackHover d-flex align-items-center justify-content-between">
                          <a href="#song" className="card-title trackHover px-3" style={{ color: "white" }}>
                            {track.title}
                          </a>
                          <small className="duration" style={{ color: "white" }}>
                            {track.duration}
                          </small>
                        </div>
                        {likedSongs.includes(track.id) ? (
                          <HeartFill
                            size={20}
                            className="position-absolute heartIcon d-none"
                            style={{
                              bottom: "15px",
                              right: "45px",
                              stroke: "white",
                              strokeWidth: "1.2",
                              fill: "white",
                              width: "24px"
                            }}
                            onClick={() => {
                              dispatch(removeLike(track.id));
                            }}
                          />
                        ) : (
                          <Heart
                            size={20}
                            className="position-absolute heartIcon d-none"
                            style={{
                              bottom: "15px",
                              right: "45px",
                              stroke: "white",
                              strokeWidth: "1.2",
                              width: "24px"
                            }}
                            onClick={() => {
                              dispatch(setLike(track.id));
                            }}
                          />
                        )}
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
