import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./search.css";
import searchContext from "../../config/Search/SearchContext";
import img from "../../assets/img.png";
const Search = () => {
  const searchData = useContext(searchContext);

  const handleSearch = () => {
    console.log(document.getElementById("searchQuery").value);

    if (document.getElementById("searchQuery").value !== "") {
      searchData.setsearchQuery(document.getElementById("searchQuery").value);
      console.log("dataa");
    } else {
      alert("jssi");
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
            <div id="SearchIcon">
              {/* <img src={img} alt="find" height="30px" /> */}
            </div>
            <input
              id="searchQuery"
              type="text"
              placeholder="Search for a song"
            />
            <span onClick={handleSearch}>
              {" "}
              <Link to="/SearchResults">
                <img
                  className="searchIcon"
                  height="30px"
                  src="https://img.icons8.com/ios-filled/90/000000/arrow.png"
                  alt=""
                />
              </Link>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
