import { useState } from 'react';
import styles from './AddWordInput.module.scss';
import Input from '@/components/shared/Input/Input';
import Button from '@/components/shared/Button/Button';

export default function AddWordInput({ words, setWords }) {
  const [word, setWord] = useState('');

  const addWord = e => {
    e.preventDefault();
    const wordsCopy = Array.from(words);
    wordsCopy.push(word);
    setWords(wordsCopy);
    setWord('');
  };

  return (
    <form action="#" onSubmit={addWord} className={styles.container}>
      <Input
        type="text"
        handleChange={e => setWord(e.target.value)}
        value={word}
        className={styles.input}
      />
      <Button classNames={styles.button}>Add Word</Button>
    </form>
  );
}
