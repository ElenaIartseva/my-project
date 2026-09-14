import cn from 'classnames';
import AppButton, { AppButtonVariant } from '@components/custom/AppButton/AppButton';
import NavLinks, { NavLinksVariant } from '@components/NavLinks/NavLinks';
import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Sidebar.module.scss';

type SidebarProps = {
  className?: string
};

function Sidebar(props: SidebarProps) {
  const { t } = useTranslation('common');

  const [isExpanded, setIsExpanded] = useState(false);

  const onToggle = useCallback(() => {
    setIsExpanded((expanded) => !expanded);
  }, []);

  return (
    <div
      className={cn(styles.Sidebar, { [styles.expanded]: isExpanded }, [props.className])}
      data-testid="Sidebar"
      data-expanded={isExpanded}
    >
      <NavLinks
        variant={NavLinksVariant.SIDEBAR}
        linkClassName={styles.link}
        isExpanded={isExpanded}
      />
      <AppButton
        className={styles.toggleBtn}
        text={isExpanded ? '<' : '>'}
        variant={AppButtonVariant.CONTAINED}
        onClick={onToggle}
        aria-label={isExpanded ? t('sidebarCollapse') : t('sidebarExpand')}
      />
    </div>
  );
}

export default Sidebar;
