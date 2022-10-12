import React, { useState, useEffect } from "react";
import axios from "../api/axios";
import requests from "../api/request";
import "./Banner.css";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchTopRated);
      console.log(request);
      setMovie(request);
    }

    fetchData();
  }, []);

  // truncating the description length of the movie
  const truncate = (string, n) => {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  };

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url('https://marcos.kirsch.mx/wp-content/uploads/2013/01/cropped-cropped-cropped-black-banner.png')`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">Movie Name</h1>
        <div className="banner__buttons">
          <button className="banner__btn">Play</button>
          <button className="banner__btn">My List</button>
        </div>
        <h1 className="banner__description">
          {truncate(`This is a test description`, 150)}
        </h1>
      </div>

      <div className="banner--fadeBottom" />
    </header>
  );
}

export default Banner;
