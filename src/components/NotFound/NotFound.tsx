import React from "react";
import styles from "./NotFound.module.css";
const NotFound = () => {
  return (
    <div className={styles.notFoundWrapper}>
      <h2>Not Found</h2>
      <p>The requested page does not exist.</p>
    </div>
  );
};

export default NotFound;
