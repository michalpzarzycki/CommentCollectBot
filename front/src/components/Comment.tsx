import styles from "./Comment.module.css";

function Comment({ comment, idx }: any) {
  return <div className={styles.container}>{`${idx + 1}. ${comment}`}</div>;
}

export default Comment;
