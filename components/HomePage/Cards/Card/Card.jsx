import CloseButton from '@/components/shared/CloseButton/CloseButton';
import styles from './Card.module.scss';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
export default function Card({ word, removeWord }) {
  return (
    <div className={styles.card}>
      <p className={styles.word}>{word}</p>
      <CloseButton
        handleClick={() => removeWord(word)}
        classNames={styles.close}
        isInverted
        icon={faTimes}
        size="lg"
      />
    </div>
  );
}
