import { useTranslation } from 'react-i18next';
import AppButton, { AppButtonVariant, ComponentType } from '@components/custom/AppButton/AppButton';
import { AppRoutes, RoutePaths } from '@config/routes/routes.config';
import styles from './NotFoundPage.module.scss';

function NotFoundPage() {
  const { t } = useTranslation();

  return (
    <div className={styles.NotFoundPage}>
      <h1 className={styles.title}>{t('notFoundTitle')}</h1>
      <p className={styles.message}>{t('notFoundMessage')}</p>
      <AppButton
        componentType={ComponentType.link}
        to={RoutePaths[AppRoutes.MAIN]}
        variant={AppButtonVariant.CONTAINED}
        text={t('notFoundBack')}
      />
    </div>
  );
}

export default NotFoundPage;
