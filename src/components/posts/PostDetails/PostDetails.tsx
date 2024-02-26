import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./PostDetails.module.css";
import usePostsContext from "../../../context/PostsContext";
import PrintComponentsName from "../../PrintComponentsName";

const PostDetails = () => {
  let { postId } = useParams();
  const { fetchPostById, post } = usePostsContext();
  useEffect(() => {
    if (postId) {
      fetchPostById(postId);
    }
  }, [fetchPostById, postId]);

  return (
    <div className={styles.postDetailsWrapper}>
      <h2>Post Details</h2>
      <p>Displaying details for post with ID: {postId}</p>
      {post ? (
        <div className={styles.singlePostWrapper}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ) : null}
    </div>
  );
};
export default PrintComponentsName(PostDetails, "PostDetails Component");
