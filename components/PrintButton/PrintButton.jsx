import Button from '@/components/shared/Button/Button';
import styles from './PrintButton.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPrint } from '@fortawesome/free-solid-svg-icons';
import clsx from 'clsx';
import animations from '@/styles/animations.module.scss';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function PrintButton({ handlePrint, cards }) {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [0, 1]);
  return (
    <motion.div style={{ opacity }} className={styles.container}>
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
    </motion.div>
  );
}
