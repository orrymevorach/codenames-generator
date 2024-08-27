import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Footer.module.scss';
import Link from 'next/link';
import {
  faEnvelope,
  faMailBulk,
  faVoicemail,
} from '@fortawesome/free-solid-svg-icons';
import { faLetterboxd } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        Website Development by{' '}
        <Link href="https://orrymevorach.com/" target="_blank">
          Orry Mevorach
        </Link>
        <FontAwesomeIcon icon={faEnvelope} color="white" size="xl" />
      </p>
    </footer>
  );
}
