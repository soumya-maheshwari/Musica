import React, { useContext, useEffect, useState } from "react";
import searchContext from "../../config/Search/SearchContext";
import ResultBar from "../ResultBar/ResultBar";
import "./searchResults.css";
import "../Search/search.css";
import "../ResultBar/resultBar.css";
import Search from "../Search/Search";
import Spinner from "../Spinner";

const SearchResults = () => {
  let results = [];

  const [data, setData] = useState({
    resultList: results,
    // loading: true,
  });

  const searchData = useContext(searchContext);

  const handleSearchedInput = () => {
    searchData.setsearchQuery(document.getElementById("searchQuery").value);
  };

  useEffect(() => {
    async function fetchData() {
      let url1 = `https://jiosaavn-api-v3.vercel.app/search?query=${searchData.searchQuery}`;
      let data1 = await fetch(url1);
      let parsedData1 = await data1.json();
      let tempDataArray = [];
      for (let i = 0; i < parsedData1.results.length; i++) {
        let url2 = parsedData1.results[i].api_url.song;
        let data2 = await fetch(url2);
        let parsedData2 = await data2.json();
        tempDataArray.push(parsedData2);
      }
      setData({
        resultList: tempDataArray,
      });
    }

    fetchData();
  }, [handleSearchedInput]);

  return (
    <div>
      {data.loading && <Spinner />}

      {!data.loading && (
        <div
          className="container fit-content"
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <div id="searchBox">
            <div id="SearchIcon"></div>
            <input
              style={{ width: "99%" }}
              id="searchQuery"
              type="text"
              placeholder="Find your song here..."
            />
            <img
              onClick={handleSearchedInput}
              style={{ cursor: "pointer" }}
              height="30px"
              className="searchIcon"
              src="https://img.icons8.com/ios-filled/90/000000/arrow.png"
              alt=""
            />
          </div>
          <div className="searchResults my-4">
            <div className="container">
              {" "}
              Results for
              <i>"{searchData.searchQuery}"</i>
            </div>

            {data.resultList.map((element) => {
              return (
                <ResultBar
                  id={element.id}
                  key={element.id}
                  songImgSrc={element.images["50x50"]}
                  songTitle={element.song}
                  singers={element.singers}
                  audio={element.media_url}
                  duration={element.duration}
                />
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchResults;
