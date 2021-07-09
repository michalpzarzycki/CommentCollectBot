import styles from "./User.module.css";

function User({ user }: any) {
  return <div className={styles.container}>{user}</div>;
}

export default User;
