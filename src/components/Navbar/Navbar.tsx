import ThemeSwitcher from '@components/ThemeSwitcher/ThemeSwitcher';
import LangSwitcher from '@components/LangSwitcher/LangSwitcher';
import NavLinks, { NavLinksVariant } from '@components/NavLinks/NavLinks';
import cn from 'classnames';
import styles from './Navbar.module.scss';

type NavbarProps = {
  className?: string
};

function Navbar(props: NavbarProps) {
  const { className } = props;

  return (
    <div className={cn(styles.Navbar, {}, [className])}>
      <div className={styles.switchers}>
        <LangSwitcher />
        <ThemeSwitcher />
      </div>
      <NavLinks
        variant={NavLinksVariant.NAVBAR}
        className={styles.links}
        linkClassName={styles.btnNavbar}
      />
    </div>
  );
}

export default Navbar;
