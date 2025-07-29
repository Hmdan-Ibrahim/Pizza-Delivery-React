import styles from "./Loader.module.css";

function Loader() {
  return (
      <div className={styles.overlay} role="status" aria-live="polite">
        <div className={styles.spinner}></div>
        <p className={styles.message}>Loading...</p>
      </div>
    )
};

export default Loader;
