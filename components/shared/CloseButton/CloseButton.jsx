import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './CloseButton.module.scss';
import clsx from 'clsx';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

export default function CloseButton({
  handleClick,
  dark = false,
  classNames = '',
  isInverted,
  icon,
  size = '2x',
}) {
  return (
    <button
      onClick={handleClick}
      className={clsx(
        classNames,
        styles.closeButton,
        dark && styles.darkButton,
        isInverted && styles.isInverted
      )}
    >
      <FontAwesomeIcon icon={icon || faTimesCircle} size={size} />
    </button>
  );
}
