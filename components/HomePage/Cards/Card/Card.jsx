import styles from './Card.module.scss';
export default function Card({ word, removeWord }) {
  return (
    <div className={styles.card}>
      <p className={styles.word}>{word}</p>
    </div>
  );
}
