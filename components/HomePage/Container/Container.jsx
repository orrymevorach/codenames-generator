import Cards from '@/components/HomePage/Cards/Cards';
import AddWordInput from '@/components/HomePage/AddWordInput/AddWordInput';
import { useRef, useState } from 'react';
import styles from './Container.module.scss';
import Background from '@/components/shared/Background/Background';
import { useReactToPrint } from 'react-to-print';
import Menu from '@/components/HomePage/Menu/Menu';
import Counter from '../Counter/Counter';
import ConfigTakeover from '../ConfigTakeover/ConfigTakeover';

export default function Container() {
  const [words, setWords] = useState(['bachelor', 'bachelorette', 'party']);
  const [numberOfCards, setNumberOfCards] = useState(25);
  const [showTakeover, setShowTakeover] = useState(false);
  const ref = useRef();
  const handlePrint = useReactToPrint({
    content: () => ref.current,
  });
  return (
    <>
      <Background />
      <Menu handlePrint={handlePrint} setShowTakeover={setShowTakeover} />
      {showTakeover && (
        <ConfigTakeover
          handleClose={() => setShowTakeover(false)}
          numberOfCards={numberOfCards}
          setNumberOfCards={setNumberOfCards}
        />
      )}
      <div className={styles.container}>
        <h1 className={styles.title}>Codenames Generator</h1>
        <AddWordInput words={words} setWords={setWords} />
        <Counter words={words} numberOfCards={numberOfCards} />
        <Cards words={words} setWords={setWords} ref={ref} />
      </div>
    </>
  );
}
