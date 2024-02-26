// src/App.js

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Posts from "./components/posts/Posts/Posts";
import PostDetails from "./components/posts/PostDetails/PostDetails";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/posts" element={<Posts />} />
        <Route path="/post/:postId" element={<PostDetails />} />
        <Route path="/" element={<Posts />} />
      </Routes>
    </Router>
  );
};

export default App;
