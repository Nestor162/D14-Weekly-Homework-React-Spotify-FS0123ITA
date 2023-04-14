import React from "react";
import { Col } from "react-bootstrap";

function HomeCardList({ song }) {
  return (
    <>
      {song.slice(0, 4).map((el, i) => {
        return (
          <Col className="col text-center" id={i}>
            <a href="/album_page.html?id=51350192">
              <img className="img-fluid" src={el.album.cover_medium} alt={el.title} />
            </a>
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
