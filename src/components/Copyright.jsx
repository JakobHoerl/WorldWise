import styles from "./Copyright.module.css";

export const Copyright = () => {
  return (
    <>
      <p className={styles.copyright}>
        &copy; Copyright {new Date().getFullYear()} by WorldWise Inc.
      </p>
    </>
  );
};
