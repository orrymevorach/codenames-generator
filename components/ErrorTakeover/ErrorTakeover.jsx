import Takeover from '@/components/shared/Takeover/Takeover';
import styles from './ErrorTakeover.module.scss';

export const ERRORS = {
  NOT_ENOUGH_CARDS: {
    heading: 'Not Enough Tiles!',
    message:
      'Each game of codenames requires 25 tiles. Please add more tiles before printing.',
  },
};
export default function ErrorTakeover({ setShowErrorTakeover, error }) {
  return (
    <Takeover handleClose={() => setShowErrorTakeover(false)}>
      <p className={styles.errorHeading}>{error.heading}</p>
      <p className={styles.errorMessage}>{error.message}</p>
    </Takeover>
  );
}
