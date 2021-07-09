import Comment from "./Comment";
import styles from "./CommentsDisplay.module.css";

function CommentsDisplay({ comments }: any) {
  return (
    <div className={styles.slides}>
      {comments.map((comment: any) => (
        <Comment comment={comment} />
      ))}
    </div>
  );
}

export default CommentsDisplay;
