import React, { useState, useEffect } from "react";
import styles from "./Posts.module.css";
import Search from "../../Search/Search";

const mockPosts = [
  { id: 1, userId: 1, title: "Post 1", body: "Body of post 1" },
  { id: 2, userId: 2, title: "Post 2", body: "Body of post 2" },
];

const Posts = () => {
  const [searchData, setSearchData] = useState<string | null>(null);
  const [filteredPosts, setFilteredPosts] = useState(mockPosts);

  useEffect(() => {
    if (searchData) {
      const filtered = mockPosts.filter((post) =>
        post.title.toLowerCase().includes(searchData.toLowerCase())
      );
      setFilteredPosts(filtered);
    } else {
      setFilteredPosts(mockPosts);
    }
  }, [searchData]);

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
