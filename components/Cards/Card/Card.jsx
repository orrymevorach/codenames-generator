import CloseButton from '@/components/shared/CloseButton/CloseButton';
import styles from './Card.module.scss';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
export default function Card({ card, removeCard }) {
  return (
    <div className={styles.card}>
      <p className={styles.inverted}>{card}</p>
      <p className={styles.word}>{card}</p>
      <CloseButton
        handleClick={() => removeCard(card)}
        classNames={styles.close}
        isInverted
        icon={faTrashAlt}
        size="lg"
      />
    </div>
  );
}
