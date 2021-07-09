import styles from "./Comment.module.css";

function Comment({ comment }: any) {
  return <div className={styles.container}>{comment}</div>;
}

export default Comment;
