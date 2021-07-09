import styles from "./UsersDisplay.module.css";
import User from "./User";

function UsersDisplay({ users }: any) {
  return (
    <div className={styles.slides}>
      {users.map((user: any, idx: any) => (
        <User user={user} idx={idx} />
      ))}
    </div>
  );
}

export default UsersDisplay;
