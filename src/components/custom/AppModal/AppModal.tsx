import {
  MouseEvent, ReactNode, useEffect, useId,
} from 'react';
import cn from 'classnames';
import AppPortal from '@components/custom/AppPortal/AppPortal';
import styles from './AppModal.module.scss';

type AppModalProps = {
  className?: string
  children?: ReactNode
  title?: string
  isOpen?: boolean
  onClose?: () => void
};

function AppModal(props: AppModalProps) {
  const {
    className,
    children,
    title,
    isOpen = false,
    onClose,
  } = props;

  const titleId = useId();

  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose?.();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  const handleClose = () => {
    onClose?.();
  };

  const handleContentClick = (event: MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };

  return (
    <AppPortal>
      <div className={cn(styles.AppModal, styles.opened, className)}>
        <div
          role="presentation"
          className={styles.overlay}
          onClick={handleClose}
        >
          <div
            role="presentation"
            className={styles.contentWrapper}
            onClick={handleContentClick}
          >
            <div
              className={styles.content}
              role="dialog"
              aria-modal="true"
              aria-labelledby={title ? titleId : undefined}
            >
              {title && (
                <div id={titleId} className={styles.title}>
                  {title}
                </div>
              )}
              {children}
            </div>
          </div>
        </div>
      </div>
    </AppPortal>
  );
}

export default AppModal;
