import React from 'react';
import Card from './Card/Card';
import styles from './Cards.module.scss';

const Cards = React.forwardRef(({ cards, setCards }, ref) => {
  const removeCard = currentCard => {
    const filteredCards = cards.filter(card => card !== currentCard);
    setCards(filteredCards);
  };
  return (
    <div className={styles.cards} ref={ref}>
      {cards.map(card => (
        <Card key={card} card={card} removeCard={removeCard} />
      ))}
    </div>
  );
});

export default Cards;
