import Button from '@/components/shared/Button/Button';
import Card from './Card/Card';
import styles from './Cards.module.scss';

export default function Cards({ words, setWords }) {
  const removeWord = currentWord => {
    const filteredWords = words.filter(word => word !== currentWord);
    setWords(filteredWords);
  };

  return (
    <div className={styles.cards} id="printable">
      {words.map(word => (
        <Card key={word} word={word} removeWord={removeWord} />
      ))}
    </div>
  );
}
