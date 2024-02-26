import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./PostDetails.module.css";
import usePostsContext from "../../../context/PostsContext";
import PrintComponentsName from "../../PrintComponentsName";
import CommentCard from "../../CommentInfo/CommentCard";

const PostDetails = () => {
  let { postId } = useParams();
  const { fetchPostById, post, fetchCommentsByPostId, comments } =
    usePostsContext();
  useEffect(() => {
    if (postId) {
      fetchPostById(postId);
      fetchCommentsByPostId(postId);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [postId]);

  return (
    <div className={styles.postDetailsWrapper}>
      <h2>Post Details</h2>
      <p>Displaying details for post with ID: {postId}</p>

      {post && (
        <div className={styles.singlePostWrapper}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      )}

      <h3>Comments</h3>
      {comments.length > 0 && (
        <>
          {comments.map((comment: any, index: any) => (
            <CommentCard data={comment} key={index} />
          ))}
        </>
      )}
    </div>
  );
};
export default PrintComponentsName(PostDetails, "PostDetails Component");
