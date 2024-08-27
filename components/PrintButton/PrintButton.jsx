import Button from '@/components/shared/Button/Button';
import styles from './PrintButton.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPrint } from '@fortawesome/free-solid-svg-icons';
import clsx from 'clsx';
import animations from '@/styles/animations.module.scss';

export default function PrintButton({ handlePrint, cards }) {
  return (
    <Button
      classNames={clsx(
        styles.printButton,
        cards.length >= 25 && animations.pulse,
        cards.length < 25 && styles.disabled
      )}
      handleClick={handlePrint}
    >
      <FontAwesomeIcon icon={faPrint} color="black" />
    </Button>
  );
}
