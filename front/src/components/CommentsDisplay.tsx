import Comment from "./Comment";
import styles from "./CommentsDisplay.module.css";

function CommentsDisplay({ comments }: any) {
  return (
    <div className={styles.slides}>
      {comments.map((comment: any, idx: any) => (
        <Comment comment={comment} idx={idx} />
      ))}
    </div>
  );
}

export default CommentsDisplay;
