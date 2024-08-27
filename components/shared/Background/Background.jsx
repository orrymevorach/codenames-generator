import styles from './Background.module.scss';
import animations from '@/styles/animations.module.scss';
import clsx from 'clsx';

export default function Background() {
  return (
    <div className={clsx(styles.container, animations.backgroundPulse)}>
      <div className={styles.overlay}></div>
    </div>
  );
}
