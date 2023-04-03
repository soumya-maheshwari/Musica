import React from "react";
import Navbar from "../Navbar/Navbar";
import Search from "../Search/Search";

const Home = () => {
  return (
    <>
      <div className="home">
        <Navbar />
        <Search />
      </div>
    </>
  );
};

export default Home;
