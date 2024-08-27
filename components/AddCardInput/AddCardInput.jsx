import { useState } from 'react';
import styles from './AddCardInput.module.scss';
import Input from '@/components/shared/Input/Input';
import Button from '@/components/shared/Button/Button';

export default function AddCardInput({ cards, setCards }) {
  const [card, setCard] = useState('');

  const addCard = e => {
    e.preventDefault();
    const cardsCopy = Array.from(cards);
    cardsCopy.unshift(card);
    setCards(cardsCopy);
    setCard('');
  };

  return (
    <form action="#" onSubmit={addCard} className={styles.container}>
      <Input
        type="text"
        handleChange={e => setCard(e.target.value)}
        value={card}
        placeholder="Start typing and press enter to add a tile"
      />
      <Button classNames={styles.button}>Add Tile</Button>
    </form>
  );
}
