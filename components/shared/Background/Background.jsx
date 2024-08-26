import styles from './Background.module.scss';

export default function Background({ children }) {
  return (
    <div className={styles.container}>
      <div className={styles.overlay}></div>
      {/* <div className={styles.innerCircle}></div> */}
      {/* <div className={styles.smallCircle}></div> */}
      <div className={styles.children}>{children}</div>
    </div>
  );
}
