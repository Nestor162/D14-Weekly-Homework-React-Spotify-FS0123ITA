import React, { useEffect, useState } from "react";
import HomeCardList from "./HomeCardList";
import { Spinner } from "react-bootstrap";

function HomeContent({ query }) {
  const [song, setSong] = useState(null);

  const fetchHomeContent = async query => {
    try {
      let response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${query}`);

      if (response.ok) {
        let data = await response.json();
        setSong(data.data);
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchHomeContent(query);
  }, [query]);

  return (
    <>
      {song ? (
        <HomeCardList song={song} />
      ) : (
        <div className="mx-auto">
          <Spinner />
        </div>
      )}
    </>
  );
}

export default HomeContent;
