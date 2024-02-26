import React from "react";
import { useParams } from "react-router-dom";
import styles from "./PostDetails.module.css";

const PostDetails = () => {
  let { postId } = useParams();

  return (
    <div className={styles.postDetailsWrapper}>
      <h2>Post Details</h2>
      <p>Displaying details for post with ID: {postId}</p>
    </div>
  );
};
export default PostDetails;
