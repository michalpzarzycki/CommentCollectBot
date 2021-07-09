import styles from "./UsersDisplay.module.css";
import User from "./User";

function UsersDisplay({ users }: any) {
  return (
    <div className={styles.slides}>
      {users.map((user: any) => (
        <User user={user} />
      ))}
    </div>
  );
}

export default UsersDisplay;
