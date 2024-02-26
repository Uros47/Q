// src/App.js

import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Posts from "./components/posts/Posts/Posts";
import PostDetails from "./components/posts/PostDetails/PostDetails";
import NotFound from "./components/NotFound/NotFound";

const App = () => {
  const printCompName = (compName: string) => {
    console.log(`Hello from ${compName}`);
  };
  return (
    <Router>
      <Routes>
        <Route
          path="/posts"
          element={<Posts printCompName={printCompName} />}
        />
        <Route path="/post/:postId" element={<PostDetails />} />
        <Route path="/" element={<Posts />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
