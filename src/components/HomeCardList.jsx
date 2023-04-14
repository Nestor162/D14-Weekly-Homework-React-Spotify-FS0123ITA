import React from "react";
import { Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { setPlay } from "../redux/reducers/playReducer";
import { Link } from "react-router-dom";

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
              <Link to={`album/${el.album.id}`}>{el.album.title}</Link>
              <br />
              <Link to={`artist/${el.artist.id}`}>Artist: {el.artist.name}</Link>
            </p>
          </Col>
        );
      })}
    </>
  );
}

export default HomeCardList;
