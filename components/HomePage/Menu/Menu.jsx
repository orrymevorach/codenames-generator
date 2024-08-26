import ConfigButton from './ConfigButton/ConfigButton';
import PrintButton from './PrintButton/PrintButton';
import styles from './Menu.module.scss';

export default function Menu({ handlePrint, setShowTakeover }) {
  return (
    <div className={styles.menu}>
      <ConfigButton setShowTakeover={setShowTakeover} />
      <PrintButton handlePrint={handlePrint} />
    </div>
  );
}
