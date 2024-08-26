import Cards from '@/components/HomePage/Cards/Cards';
import AddWordInput from '@/components/HomePage/AddWordInput/AddWordInput';
import { useRef, useState } from 'react';
import styles from './Container.module.scss';
import Background from '@/components/shared/Background/Background';
import PrintButton from '../PrintButton/PrintButton';
import { useReactToPrint } from 'react-to-print';

export default function HomePageContainer() {
  const [words, setWords] = useState(['bachelor', 'bachelorette', 'party']);
  const ref = useRef();
  const handlePrint = useReactToPrint({
    content: () => ref.current,
  });
  return (
    <>
      <Background />
      <PrintButton handlePrint={handlePrint} />
      <div className={styles.container}>
        <h1 className={styles.title}>Codenames Generator</h1>
        <AddWordInput words={words} setWords={setWords} />
        <Cards words={words} setWords={setWords} ref={ref} />
      </div>
    </>
  );
}
