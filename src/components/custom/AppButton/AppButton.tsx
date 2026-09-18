import { NavLink, NavLinkProps } from 'react-router-dom';
import { ButtonHTMLAttributes, useMemo } from 'react';
import cn from 'classnames';
import MainIcon from '@assets/icons/nav/home.svg';
import AboutIcon from '@assets/icons/nav/about.svg';
import { AppRoutes, RoutePaths } from '@config/routes/routes.config';
import styles from './AppButton.module.scss';

export enum AppButtonVariant {
  TEXT = 'text',
  CONTAINED = 'contained',
  OUTLINED = 'outlined',
  TEXT_CONTRAST = 'text-contrast',
  CONTAINED_CONTRAST = 'contained-contrast',
  OUTLINED_CONTRAST = 'outlined-contrast',
}

export enum AppButtonSize {
  S = 's',
  M = 'm',
  L = 'l',
}

export enum ComponentType {
  button = 'button',
  link = 'link',
}

export function getPathIcon(path?: string): JSX.Element | null {
  if (path === RoutePaths[AppRoutes.MAIN]) return <MainIcon />;
  if (path === RoutePaths[AppRoutes.ABOUT]) return <AboutIcon />;
  return null;
}

type AppButtonBaseProps = {
  className?: string
  text?: string | JSX.Element
  variant?: AppButtonVariant
  size?: AppButtonSize
  isDisabled?: boolean
  isTextVisible?: boolean
  isIconOnly?: boolean
  'aria-label'?: string
};

type AppButtonAsButtonProps = AppButtonBaseProps
& Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className' | 'children' | 'disabled' | 'type'>
& {
  componentType?: ComponentType.button
  to?: never
  hasPathIcon?: never
};

type AppButtonAsLinkProps = AppButtonBaseProps
& Omit<NavLinkProps, 'className' | 'children' | 'to'>
& {
  componentType: ComponentType.link
  to: NavLinkProps['to']
  hasPathIcon?: boolean
};

type AppButtonProps = AppButtonAsButtonProps | AppButtonAsLinkProps;

/**
 * Компонент для кнопки или ссылки
 * @param [className] - Внешние стили
 * @param [text] - Текст
 * @param [variant] - Вариант кнопки
 * @param [size] - Размер
 * @param [isDisabled] - Заблокирована или нет
 * @param [isTextVisible] - Показывать текст (для ссылок)
 * @param [onClick] - Действие при клике
 * @param [to] - Навигация
 * @param [hasPathIcon] - Если есть иконка для путей
 * @param [componentType] - Тип компонента: кнопка или ссылка
 * @returns {JSX.Element} - Компонент кнопки или ссылки
 */
function AppButton(props: AppButtonProps) {
  const {
    className,
    text = '',
    variant = AppButtonVariant.TEXT,
    size = AppButtonSize.M,
    isDisabled = false,
    isTextVisible = false,
    isIconOnly = false,
    'aria-label': ariaLabel,
  } = props;

  const containerMods = useMemo(() => ({
    [styles.disabled]: isDisabled,
    [styles.hovered]: !isDisabled,
    [styles.iconOnly]: isIconOnly,
  }), [isDisabled, isIconOnly]);

  const linkMods = useMemo(() => ({
    ...containerMods,
    [styles.linkStyles]: props.componentType === ComponentType.link,
  }), [containerMods, props.componentType]);

  if (props.componentType !== ComponentType.link) {
    const { onClick } = props;

    return (
      <button
        type="button"
        className={cn(styles.AppButton, containerMods, [styles[variant], className])}
        onClick={onClick}
        disabled={isDisabled}
        data-testid="button"
        aria-label={ariaLabel}
      >
        <div
          role="presentation"
          className={cn(styles.AppButtonContainer)}
        >
          <div className={cn(styles.AppButtonStateLayer, [])} />
          <span className={cn(styles.Text, [styles[size]])} data-testid="Text">
            {text}
          </span>
        </div>
      </button>
    );
  }

  const {
    to,
    hasPathIcon,
  } = props;
  const pathIcon = getPathIcon(typeof to === 'string' ? to : undefined);

  return (
    <NavLink
      to={to}
      className={({ isActive }) => cn(
        styles.AppButton,
        { ...linkMods, [styles.isActive]: isActive },
        [styles[variant], className],
      )}
      data-testid="link"
      aria-label={ariaLabel ?? (typeof text === 'string' ? text : undefined)}
    >
      <div
        role="presentation"
        className={cn(styles.AppButtonContainer, containerMods)}
      >
        <div className={cn(styles.AppButtonStateLayer, [])} />
        {
          hasPathIcon && pathIcon !== null && (
            <div className={styles.icon}>
              {pathIcon}
            </div>
          )
        }
        {
          isTextVisible && (
            <span className={cn(styles.label, styles.Text, styles[size])}>
              {text}
            </span>
          )
        }
      </div>
    </NavLink>
  );
}

export default AppButton;
