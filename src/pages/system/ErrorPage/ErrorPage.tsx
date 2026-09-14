import { useTranslation } from 'react-i18next';
import AppButton, { AppButtonVariant } from '@components/custom/AppButton/AppButton';
import styles from './ErrorPage.module.scss';

type ErrorPageProps = {
  onRetry?: () => void
};

function ErrorPage(props: ErrorPageProps) {
  const { onRetry } = props;
  const { t } = useTranslation();

  return (
    <div className={styles.ErrorPage}>
      <h2>{t('errorPageTitle')}</h2>
      {onRetry && (
        <AppButton
          text={t('errorPageRetry')}
          variant={AppButtonVariant.CONTAINED}
          onClick={onRetry}
        />
      )}
    </div>
  );
}

export default ErrorPage;
