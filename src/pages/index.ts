import { lazy } from 'react';

const MainPage = lazy(() => import(/* webpackChunkName: "page_Main" */ './MainPage/Main.page'));
const AboutPage = lazy(() => import(/* webpackChunkName: "page_About" */ './AboutPage/About.page'));
const NotFoundPage = lazy(() => import(/* webpackChunkName: "page_NotFound" */ './system/NotFoundPage/NotFoundPage'));

export {
  MainPage,
  AboutPage,
  NotFoundPage,
};
