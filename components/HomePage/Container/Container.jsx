import Cards from '@/components/HomePage/Cards/Cards';
import AddCardInput from '@/components/HomePage/AddCardInput/AddCardInput';
import { useRef, useState } from 'react';
import styles from './Container.module.scss';
import Background from '@/components/shared/Background/Background';
import { useReactToPrint } from 'react-to-print';
import Counter from '../Counter/Counter';
import Takeover from '@/components/shared/Takeover/Takeover';
import PrintButton from '@/components/HomePage/PrintButton/PrintButton';

const ERRORS = {
  NOT_ENOUGH_CARDS: {
    heading: 'Not Enough Cards',
    message:
      'Each game of codenames requires 25 cards. Please add more cards before printing.',
  },
};

export default function Container() {
  const [cards, setCards] = useState(['bachelor', 'bachelorette', 'birthday']);
  const [showErrorTakeover, setShowErrorTakeover] = useState(false);
  const [error, setError] = useState('');
  const ref = useRef();
  const handlePrint = useReactToPrint({
    content: () => ref.current,
    onBeforePrint: () => {
      if (cards.length < 25) {
        setShowErrorTakeover(true);
        setError(ERRORS.NOT_ENOUGH_CARDS);
        throw 'error';
      }
    },
  });
  return (
    <>
      <Background />
      <PrintButton handlePrint={handlePrint} cards={cards} />
      {showErrorTakeover && (
        <Takeover handleClose={() => setShowErrorTakeover(false)}>
          <p className={styles.errorHeading}>Error: {error.heading}</p>
          <p className={styles.errorMessage}>{error.message}</p>
        </Takeover>
      )}
      <div className={styles.container}>
        <h1 className={styles.title}>Codenames Generator</h1>
        <AddCardInput cards={cards} setCards={setCards} />
        <Counter cards={cards} handlePrint={handlePrint} />
        <Cards cards={cards} setCards={setCards} ref={ref} />
      </div>
    </>
  );
}
