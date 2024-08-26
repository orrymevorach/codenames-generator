import Button from '@/components/shared/Button/Button';
import styles from './ConfigButton.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export default function ConfigButton({ setShowTakeover }) {
  return (
    <Button
      classNames={styles.button}
      handleClick={() => setShowTakeover(true)}
    >
      <FontAwesomeIcon icon={faBars} />
    </Button>
  );
}
