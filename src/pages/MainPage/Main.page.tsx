import { useTranslation } from 'react-i18next';
import { useCallback, useState } from 'react';
import AppModal from '@components/custom/AppModal/AppModal';
import AppButton, { AppButtonVariant, ComponentType } from '@components/custom/AppButton/AppButton';
import cn from 'classnames';
import styles from './MainPage.module.scss';

function MainPage() {
  const { t } = useTranslation('main');
  const [isOpened, setIsOpened] = useState(false);

  const onClose = useCallback(() => setIsOpened(false), []);
  const onOpen = useCallback(() => setIsOpened(true), []);

  return (
    <>
      <h2>{t('title')}</h2>
      <AppButton
        onClick={onOpen}
        text={t('textBtn5')}
        className={cn(styles.btnModal)}
        componentType={ComponentType.button}
        variant={AppButtonVariant.TEXT}
      />
      <AppModal
        isOpen={isOpened}
        onClose={onClose}
        title={t('modalTitle')}
      >
        <AppButton
          className={cn(styles.btnClose)}
          componentType={ComponentType.button}
          variant={AppButtonVariant.TEXT_CONTRAST}
          onClick={onClose}
          text={t('modalClose')}
          aria-label={t('modalClose')}
        />
        <p className={styles.modalText}>{t('modalContent')}</p>
      </AppModal>
    </>
  );
}

export default MainPage;
