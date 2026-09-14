import { AppRoutes, RoutePaths } from './routes.config';

export type NavItem = {
  route: AppRoutes
  path: string
  labelKey: 'navMain' | 'navAbout'
};

export const navItems: NavItem[] = [
  {
    route: AppRoutes.MAIN,
    path: RoutePaths[AppRoutes.MAIN],
    labelKey: 'navMain',
  },
  {
    route: AppRoutes.ABOUT,
    path: RoutePaths[AppRoutes.ABOUT],
    labelKey: 'navAbout',
  },
];
