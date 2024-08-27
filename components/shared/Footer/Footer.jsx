import styles from './Footer.module.scss';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        Website Development by{' '}
        <Link href="https://orrymevorach.com/" target="_blank">
          Orry Mevorach
        </Link>
      </p>
    </footer>
  );
}
