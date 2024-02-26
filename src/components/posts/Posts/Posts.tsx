import React, { useState, useEffect } from "react";
import styles from "./Posts.module.css";
import Search from "../../Search/Search";
import usePostsContext from "../../../context/PostsContext";

const Posts = () => {
  const [searchData, setSearchData] = useState<any>(null);

  const { fetchPosts, posts } = usePostsContext();

  useEffect(() => {
    fetchPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.postsWrapper}>
      <h2>Posts List</h2>
      <Search searchData={searchData} setSearchData={setSearchData} />

      <ul className={styles.postList}>
        {posts?.map((post: any) => (
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
