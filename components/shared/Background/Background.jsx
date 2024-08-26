import styles from './Background.module.scss';

export default function Background() {
  return (
    <div className={styles.container}>
      <div className={styles.overlay}></div>
    </div>
  );
}
