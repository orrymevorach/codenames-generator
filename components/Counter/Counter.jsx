import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Counter.module.scss';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import Takeover from '@/components/shared/Takeover/Takeover';
import Button from '@/components/shared/Button/Button';
import animations from '@/styles/animations.module.scss';

export default function Counter({ cards, handlePrint }) {
  const [showTakeover, setShowTakeover] = useState(false);
  const numberOfCards = cards.length;
  const text =
    numberOfCards >= 25 ? (
      <p className={styles.text}>
        You have {numberOfCards} cards. <br />
        Click{' '}
        <Button handleClick={handlePrint} classNames={animations.pulse}>
          Print
        </Button>{' '}
        when you are ready!
      </p>
    ) : (
      <p className={styles.text}>
        Number of Cards: {cards.length}/25
        <button
          className={styles.infoIconButton}
          onClick={() => setShowTakeover(true)}
        >
          <FontAwesomeIcon icon={faInfoCircle} size="lg" color="#fff" />
        </button>
      </p>
    );
  return (
    <>
      {showTakeover && (
        <Takeover handleClose={() => setShowTakeover(false)}>
          <p className={styles.infoMessage}>
            Each game of codenames requires 25 cards. Please add at least{' '}
            {25 - numberOfCards} more cards before printing.
          </p>
        </Takeover>
      )}
      <div className={styles.counter}>{text}</div>
    </>
  );
}
