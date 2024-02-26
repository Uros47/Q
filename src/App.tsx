// src/App.js

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Posts from "./posts/Posts/Posts";
import PostDetails from "./posts/PostDetails/PostDetails";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Route for the Posts list */}
        <Route path="/posts" element={<Posts />} />

        {/* Route for individual Post details */}
        <Route path="/post/:id" element={<PostDetails />} />

        {/* Redirect to the Posts list if no route matches */}
        <Route path="/" element={<Posts />} />
      </Routes>
    </Router>
  );
};

export default App;
