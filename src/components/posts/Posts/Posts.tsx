import React, { useState, useEffect } from "react";
import styles from "./Posts.module.css";
import Search from "../../Search/Search";
import usePostsContext from "../../../context/PostsContext";

const mockPosts = [
  { id: 1, userId: 1, title: "Post 1", body: "Body of post 1" },
  { id: 2, userId: 2, title: "Post 2", body: "Body of post 2" },
];

const Posts = () => {
  const [searchData, setSearchData] = useState<any>(null);
  const [filteredPosts, setFilteredPosts] = useState(mockPosts);

  const { fetchPosts } = usePostsContext();

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  return (
    <div className={styles.postsWrapper}>
      <h2>Posts List</h2>
      <Search searchData={searchData} setSearchData={setSearchData} />

      <ul className={styles.postList}>
        {filteredPosts.map((post) => (
          <li key={post.id} className={styles.postItem}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;
