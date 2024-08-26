import styles from './Counter.module.scss';

export default function Counter({ words, numberOfCards }) {
  return (
    <div className={styles.counter}>
      {words.length}/{numberOfCards}
    </div>
  );
}
