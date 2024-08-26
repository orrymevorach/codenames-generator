import React from 'react';
import Card from './Card/Card';
import styles from './Cards.module.scss';

const Cards = React.forwardRef(({ words, setWords }, ref) => {
  const removeWord = currentWord => {
    const filteredWords = words.filter(word => word !== currentWord);
    setWords(filteredWords);
  };
  return (
    <div className={styles.cards} ref={ref}>
      {words.map(word => (
        <Card key={word} word={word} removeWord={removeWord} />
      ))}
    </div>
  );
});

export default Cards;
