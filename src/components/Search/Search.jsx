import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./search.css";
import searchContext from "../../config/Search/SearchContext";
import arrow from "../../assets/arrow.png";
const Search = () => {
  const searchData = useContext(searchContext);

  const handleSearch = () => {
    console.log(document.getElementById("searchQuery").value);

    if (document.getElementById("searchQuery").value !== "") {
      searchData.setsearchQuery(document.getElementById("searchQuery").value);
      console.log("dataa");
    } else {
      <Link to="/SearchResults" />;
    }
  };
  return (
    <>
      <div className="searchSection ">
        <div
          className="container"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <div id="searchBox">
            <div id="SearchIcon"></div>
            <input
              id="searchQuery"
              type="text"
              placeholder="Search for a song "
            />{" "}
            <Link to="/SearchResults">
              <img
                onClick={handleSearch}
                className="searchIcon"
                height="30px"
                src={arrow}
                alt="search"
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
