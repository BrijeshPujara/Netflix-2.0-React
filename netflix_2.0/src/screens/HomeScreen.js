import React from "react";
import "./HomeScreen.css";
import Nav from "../components/Nav";
import Banner from "../components/Banner";
import requests from "../api/request";
import Row from "../components/Row";

function HomeScreen() {
  return (
    <div className="homeScreen">
      <Nav />

      <Banner />

      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      {/* {/* <Row title="Movies" fetchUrl={requests.fetchLatestMovies} /> */}
      <Row title="Latest TV Shows" fetchUrl={requests.fecthTvShows} /> 
    </div>
  );
}

export default HomeScreen;
