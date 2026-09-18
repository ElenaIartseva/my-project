import {
  MouseEvent, ReactNode, useEffect, useId, useRef,
} from 'react';
import cn from 'classnames';
import AppPortal from '@components/custom/AppPortal/AppPortal';
import styles from './AppModal.module.scss';

const FOCUSABLE_SELECTOR = [
  'a[href]',
  'button:not([disabled])',
  'textarea:not([disabled])',
  'input:not([disabled])',
  'select:not([disabled])',
  '[tabindex]:not([tabindex="-1"])',
].join(',');

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
  const dialogRef = useRef<HTMLDivElement>(null);
  const previouslyFocusedElementRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    previouslyFocusedElementRef.current = document.activeElement instanceof HTMLElement
      ? document.activeElement
      : null;

    const previousBodyOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const getFocusableElements = () => {
      if (!dialogRef.current) {
        return [];
      }

      return Array.from(dialogRef.current.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR));
    };

    const focusDialogContent = () => {
      const [firstFocusableElement] = getFocusableElements();
      (firstFocusableElement ?? dialogRef.current)?.focus();
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose?.();
        return;
      }

      if (event.key !== 'Tab') {
        return;
      }

      const focusableElements = getFocusableElements();

      if (focusableElements.length === 0) {
        event.preventDefault();
        dialogRef.current?.focus();
        return;
      }

      const firstFocusableElement = focusableElements[0];
      const lastFocusableElement = focusableElements[focusableElements.length - 1];

      if (event.shiftKey && document.activeElement === firstFocusableElement) {
        event.preventDefault();
        lastFocusableElement.focus();
      }

      if (!event.shiftKey && document.activeElement === lastFocusableElement) {
        event.preventDefault();
        firstFocusableElement.focus();
      }
    };

    focusDialogContent();
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousBodyOverflow;
      document.removeEventListener('keydown', handleKeyDown);
      previouslyFocusedElementRef.current?.focus();
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
              tabIndex={-1}
              ref={dialogRef}
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
