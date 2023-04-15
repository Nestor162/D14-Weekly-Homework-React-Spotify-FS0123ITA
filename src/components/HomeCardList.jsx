import React from "react";
import { Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setPlay } from "../redux/reducers/playReducer";
import { Link } from "react-router-dom";
import { Heart, HeartFill } from "react-bootstrap-icons";
import { removeLike, setLike } from "../redux/reducers/likeReducer";

function HomeCardList({ song }) {
  const dispatch = useDispatch();

  const likedSongs = useSelector(state => state.likes.likedSongs);

  const handleClick = el => {
    dispatch(setPlay(el));
  };
  return (
    <>
      {song.slice(0, 4).map((el, i) => {
        return (
          <Col className="col text-center" key={el.id}>
            <div className="display-inline-block position-relative img-container">
              <img
                className="img-fluid w-100 h-auto"
                src={el.album.cover_medium}
                alt={el.title}
                onClick={() => {
                  handleClick(el);
                }}
              />
              {likedSongs.includes(el.id) ? (
                <HeartFill
                  size={20}
                  className="position-absolute heartIcon d-none"
                  style={{ bottom: "15px", right: "20px", stroke: "white", strokeWidth: "1.2", width: "24px" }}
                  onClick={() => {
                    dispatch(removeLike(el.id));
                  }}
                />
              ) : (
                <Heart
                  size={20}
                  className="position-absolute heartIcon d-none"
                  style={{ bottom: "15px", right: "20px", stroke: "white", strokeWidth: "1.2", width: "24px" }}
                  onClick={() => {
                    dispatch(setLike(el.id));
                  }}
                />
              )}
            </div>
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
