import React from "react";
import { Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { setPlay } from "../redux/reducers/playReducer";

function HomeCardList({ song }) {
  const dispatch = useDispatch();

  const handleClick = el => {
    dispatch(setPlay(el));
  };
  return (
    <>
      {song.slice(0, 4).map((el, i) => {
        return (
          <Col className="col text-center" key={el.id}>
            <img
              className="img-fluid"
              src={el.album.cover_medium}
              alt={el.title}
              onClick={() => {
                handleClick(el);
              }}
            />
            <p>
              <a href="/album_page.html?id=51350192">
                {el.album.title}
                <br />
              </a>
              <a href="/artist_page.html?id=210">Artist: {el.artist.name}</a>
            </p>
          </Col>
        );
      })}
    </>
  );
}

export default HomeCardList;
