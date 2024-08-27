import { useRef, useState } from 'react';
import styles from './Container.module.scss';
import Cards from '@/components/Cards/Cards';
import AddCardInput from '@/components/AddCardInput/AddCardInput';
import Background from '@/components/shared/Background/Background';
import Counter from '@/components/Counter/Counter';
import PrintButton from '@/components/PrintButton/PrintButton';
import ErrorTakeover, {
  ERRORS,
} from '@/components/ErrorTakeover/ErrorTakeover';
import { useReactToPrint } from 'react-to-print';
import useWindowSize from '@/utils/windowSize/useWindowSize';

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
      gtag('event', 'click', {
        event_button: 'print_button',
      });
    },
  });

  const { isDesktop } = useWindowSize();
  return (
    <>
      <Background />
      <PrintButton handlePrint={handlePrint} cards={cards} />
      {showErrorTakeover && (
        <ErrorTakeover
          setShowErrorTakeover={setShowErrorTakeover}
          error={error}
        />
      )}
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>Codenames Generator</h1>
          <p className={styles.description}>
            Create custom cards to use with Codenames
          </p>
        </div>
        {!isDesktop && <Counter cards={cards} handlePrint={handlePrint} />}
        <AddCardInput cards={cards} setCards={setCards} />
        {isDesktop && <Counter cards={cards} handlePrint={handlePrint} />}
        <Cards cards={cards} setCards={setCards} ref={ref} />
      </div>
    </>
  );
}
