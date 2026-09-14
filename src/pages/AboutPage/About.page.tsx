import { useTranslation } from 'react-i18next';

function AboutPage() {
  const { t } = useTranslation('about');
  return (
    <div>
      <h2>{t('title')}</h2>
    </div>
  );
}

export default AboutPage;
