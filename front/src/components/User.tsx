import styles from "./User.module.css";

function User({ user, idx }: any) {
  return <div className={styles.container}>{`${idx + 1}. ${user}`}</div>;
}

export default User;
