import React, { useEffect } from "react";
import styles from "./Posts.module.css";
import Search from "../../Search/Search";
import usePostsContext from "../../../context/PostsContext";
import { useNavigate } from "react-router-dom";
import PrintComponentsName from "../../PrintComponentsName";

const Posts = () => {
  const navigate = useNavigate();

  const { fetchPosts, posts, searchData, setSearchData } = usePostsContext();

  useEffect(() => {
    fetchPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchData]);

  const goToSelectedPost = (id: string) => {
    navigate(`/post/${id}`);
  };

  return (
    <div className={styles.postsWrapper}>
      <h2>Posts List</h2>
      <Search searchData={searchData} setSearchData={setSearchData} />

      <ul className={styles.postList}>
        {posts.length > 0 ? (
          posts.map((post: any) => (
            <li
              key={post.id}
              className={styles.postItem}
              onClick={() => goToSelectedPost(post.id)}
            >
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </li>
          ))
        ) : (
          <span>No data to display</span>
        )}
      </ul>
    </div>
  );
};

export default PrintComponentsName(Posts, "Posts Component");
