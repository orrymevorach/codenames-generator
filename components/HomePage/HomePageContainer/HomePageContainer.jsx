import Cards from '@/components/HomePage/Cards/Cards';
import AddWordInput from '@/components/HomePage/AddWordInput/AddWordInput';
import { useState } from 'react';
import styles from './HomePageContainer.module.scss';
import Background from '@/components/shared/Background/Background';
import Button from '@/components/shared/Button/Button';

export default function HomePageContainer() {
  const [words, setWords] = useState(['bachelor', 'bachelorette', 'party']);
  const print = () => {
    console.log('print');
  };
  return (
    <div>
      <Background>
        <h1 className={styles.title}>Codenames Generator</h1>
        <AddWordInput words={words} setWords={setWords} />
        <Button handleClick={print}>Print</Button>
        <Cards words={words} setWords={setWords} />
      </Background>
    </div>
  );
}
