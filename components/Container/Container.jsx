import { useRef, useState } from 'react';
import styles from './Container.module.scss';
import animations from '@/styles/animations.module.scss';
import Cards from '@/components/Cards/Cards';
import AddCardInput from '@/components/AddCardInput/AddCardInput';
import Background from '@/components/shared/Background/Background';
import Counter from '@/components/Counter/Counter';
import PrintButton from '@/components/PrintButton/PrintButton';
import ErrorTakeover, {
  ERRORS,
} from '@/components/ErrorTakeover/ErrorTakeover';
import clsx from 'clsx';
import { useReactToPrint } from 'react-to-print';
import useWindowSize from '@/utils/windowSize/useWindowSize';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Container() {
  const [cards, setCards] = useState(['add', 'custom', 'tiles']);
  const [showErrorTakeover, setShowErrorTakeover] = useState(false);
  const [error, setError] = useState('');
  const ref = useRef();
  const handlePrint = useReactToPrint({
    content: () => ref.current,
    onBeforePrint: () => {
      if (cards.length < 25) {
        setShowErrorTakeover(true);
        setError(ERRORS.NOT_ENOUGH_CARDS);
        throw 'error';
      }
      gtag('event', 'click', {
        event_button: 'print_button',
      });
    },
  });

  const { isDesktop } = useWindowSize();

  // Animations
  const { scrollY } = useScroll();
  const scale = useTransform(scrollY, [0, 300], [1, 0.8]);
  const titleY = useTransform(scrollY, [0, 300], [0, 150]);
  const descriptionY = useTransform(scrollY, [0, 300], [0, -100]);
  const descriptionOpacity = useTransform(scrollY, [0, 100], [1, 0]);
  const contentOpacity = useTransform(scrollY, [0, 300], [0, 1]);
  const contentY = useTransform(scrollY, [0, 300], [0, -20]);
  const buttonOpacity = useTransform(scrollY, [0, 100], [1, 0]);
  const buttonY = useTransform(scrollY, [0, 300], [0, -100]);

  const handleClickChevron = () => window.scrollTo(0, 300);
  return (
    <>
      <Background />
      <PrintButton handlePrint={handlePrint} cards={cards} />
      {showErrorTakeover && (
        <ErrorTakeover
          setShowErrorTakeover={setShowErrorTakeover}
          error={error}
        />
      )}
      <div className={styles.container}>
        <motion.div className={styles.textContainer}>
          <motion.h1 style={{ scale, y: titleY }} className={styles.title}>
            Codenames Generator
          </motion.h1>
          <motion.p
            className={styles.description}
            style={{ y: descriptionY, opacity: descriptionOpacity }}
          >
            Create custom tiles {!isDesktop && <br />}
            to use with Codenames
          </motion.p>
          <motion.button
            className={clsx(styles.chevron, animations.pulse)}
            onClick={handleClickChevron}
            style={{ opacity: buttonOpacity, y: buttonY }}
          >
            <FontAwesomeIcon icon={faChevronDown} color="white" size="5x" />
          </motion.button>
        </motion.div>
        <motion.div
          className={styles.content}
          style={{ y: contentY, opacity: contentOpacity }}
        >
          {!isDesktop && <Counter cards={cards} handlePrint={handlePrint} />}
          <AddCardInput cards={cards} setCards={setCards} />
          {isDesktop && <Counter cards={cards} handlePrint={handlePrint} />}
          <Cards cards={cards} setCards={setCards} ref={ref} />
        </motion.div>
      </div>
    </>
  );
}
