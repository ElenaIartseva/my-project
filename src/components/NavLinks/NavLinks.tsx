import AppButton, { AppButtonVariant, ComponentType } from '@components/custom/AppButton/AppButton';
import { navItems } from '@config/routes/nav.config';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';

export enum NavLinksVariant {
  NAVBAR = 'navbar',
  SIDEBAR = 'sidebar',
}

type NavLinksProps = {
  variant: NavLinksVariant
  className?: string
  linkClassName?: string
  isExpanded?: boolean
};

function NavLinks(props: NavLinksProps) {
  const {
    variant,
    className,
    linkClassName,
    isExpanded = false,
  } = props;

  const { t } = useTranslation('common');
  const isSidebar = variant === NavLinksVariant.SIDEBAR;

  return (
    <div className={cn(className)}>
      {navItems.map((item) => (
        <AppButton
          key={item.route}
          className={linkClassName}
          componentType={ComponentType.link}
          to={item.path}
          variant={AppButtonVariant.TEXT_CONTRAST}
          text={t(item.labelKey)}
          isTextVisible={isSidebar ? isExpanded : true}
          isIconOnly={isSidebar}
          hasPathIcon={isSidebar}
          aria-label={t(item.labelKey)}
        />
      ))}
    </div>
  );
}

export default NavLinks;
