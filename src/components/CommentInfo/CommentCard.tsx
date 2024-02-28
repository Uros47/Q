import React from "react";
import styles from "./CommentInfo.module.css";
import PrintComponentsName from "../PrintComponentsName";
import { CommentInterface } from "../../Interfaces/Interfaces";

interface CommentCardProps {
  data: CommentInterface;
}

const CommentCard = ({ data }: CommentCardProps) => {
  return (
    <div className={styles.commentsWrapper}>
      <div key={data.id} className={styles.commentWrapper}>
        <h4>{data.name}</h4>
        <p>{data.body}</p>
        <p>{data.email}</p>
      </div>
    </div>
  );
};

export default PrintComponentsName(CommentCard, "CommentInfo Component");
