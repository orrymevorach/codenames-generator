import React from 'react';
import Card from './Card/Card';
import styles from './Cards.module.scss';

const Cards = React.forwardRef(({ cards, setCards }, ref) => {
  const removeCard = currentCard => {
    const filteredCards = cards.filter(card => card !== currentCard);
    setCards(filteredCards);
  };
  return (
    <div className={styles.container} ref={ref}>
      <div className={styles.instructions}>
        <p className={styles.instructionsTitle}>Suggested Instructions:</p>
        <ol>
          <li>
            Apply glue to the entire back side of one printed page of custom
            tiles.
          </li>
          <li>
            Stick the piece of paper to a piece of bristol board (If not using
            bristol board, skip this step)
          </li>
          <li>
            Apply glue to the entire back side of a second page of custom tiles.
          </li>
          <li>
            Align the pages so that they both cover the edges of the bristol
            board, and the words are facing up on both sides. Once aligned stick
            them together so that the tiles are double sided. If not using
            bristol board, align the pages and stick them to eachother.
          </li>
          <li>Cut out the border around the entire grid of tiles.</li>
          <li>Then, cut the border between each row.</li>
          <li>Lastly, cut the border between each tile.</li>
        </ol>
      </div>
      <div className={styles.cards}>
        {cards.map(card => (
          <Card key={card} card={card} removeCard={removeCard} />
        ))}
      </div>
    </div>
  );
});

export default Cards;
