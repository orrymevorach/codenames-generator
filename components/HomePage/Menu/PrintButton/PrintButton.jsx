import Button from '@/components/shared/Button/Button';
import styles from './PrintButton.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPrint } from '@fortawesome/free-solid-svg-icons';

export default function PrintButton({ handlePrint }) {
  return (
    <Button classNames={styles.printButton} handleClick={handlePrint}>
      <FontAwesomeIcon icon={faPrint} />
    </Button>
  );
}
