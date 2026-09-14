import AppButton, { AppButtonVariant } from '@components/custom/AppButton/AppButton';
import useLang, { Language } from '@hooks/useLang';
import RusFlag from '@assets/icons/lang/flag-ru.svg';
import EngFlag from '@assets/icons/lang/flag-en.svg';
import cn from 'classnames';
import { useTranslation } from 'react-i18next';
import styles from './LangSwitcher.module.scss';

type LangSwitcherProps = {
  className?: string
};

function LangSwitcher(props: LangSwitcherProps) {
  const { t } = useTranslation('common');
  const { currentLanguage, toggleLanguage } = useLang();

  const langIcon = currentLanguage === Language.RU
    ? <RusFlag />
    : <EngFlag />;

  const ariaLabel = currentLanguage === Language.RU
    ? t('langSwitchToEn')
    : t('langSwitchToRu');

  return (
    <AppButton
      className={cn(styles.LangSwitcher, {}, [props.className])}
      variant={AppButtonVariant.TEXT_CONTRAST}
      onClick={toggleLanguage}
      text={langIcon}
      aria-label={ariaLabel}
    />
  );
}

export default LangSwitcher;
