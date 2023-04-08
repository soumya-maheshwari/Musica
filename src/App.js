import React from "react";
import SearchResults from "./components/SearchResults/SeachResults";
import Home from "./components/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact element={<Home />} path="/" />
          <Route element={<SearchResults />} path="/SearchResults" />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
