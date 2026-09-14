![Image alt](./src/images/for-readme.jpg)

# my-project — React + TypeScript

Учебный SPA-проект на React 18 с кастомной сборкой Webpack, TypeScript и модульной архитектурой.

---

## Что реализовано

### Окружение и сборка

- Webpack 5 + TypeScript (`ts-loader`)
- DevServer с HMR и `historyApiFallback`
- Production-сборка с code splitting (`React.lazy`)
- Алиасы путей (`@components`, `@pages`, `@config` и др.)
- Копирование статики и переводов из `public/` в `build/`

### UI и компоненты

- **Navbar** — переключатели темы и языка, навигация через `NavLinks`
- **Sidebar** — сворачиваемая боковая панель с иконками маршрутов (`NavLinks`)
- **NavLinks** — общий компонент навигации для Navbar и Sidebar (конфиг в `config/routes/nav.config.ts`)
- **AppButton** — универсальная кнопка / ссылка (`NavLink`), поддержка `aria-label`
- **AppModal** — модальное окно через React Portal (Escape, центрирование, `aria-*`)
- **ThemeSwitcher** — светлая / тёмная тема с сохранением в `localStorage`
- **LangSwitcher** — переключение ru / en
- **Loader** — fallback для `Suspense`
- **ErrorBoundary** + **ErrorPage** — обработка ошибок внутри layout (Navbar / Sidebar сохраняются), кнопка «Попробовать снова»
- **NotFoundPage** — страница 404 с переходом на главную

### Страницы

- `/` — MainPage (демо модального окна)
- `/about` — AboutPage
- `*` — NotFoundPage

### Стили и тема

- SCSS, CSS Modules, темы (`light` / `dark`)
- Переменные, mixins, reset
- Класс темы на `body` через `ThemeProvider` (CSS-переменные наследуются приложением)

### Интернационализация

- i18next + react-i18next
- Namespace: `common`, `main`, `about`, `translation`
- Lazy-загрузка JSON из `/locales/{lng}/{ns}.json`

### Качество кода

- ESLint (Airbnb + TypeScript)
- Stylelint (SCSS)
- Jest + React Testing Library (`AppButton`, `Sidebar`)
- Storybook (`AppButton`)
- TypeScript `strict`
- GitHub Actions CI: lint → typecheck → test → build

---

## Запуск

```bash
npm install
npm run dev
```

Приложение откроется на [http://localhost:3000](http://localhost:3000).

### Скрипты

| Команда | Описание |
|---------|----------|
| `npm run dev` | Dev-сервер |
| `npm run build:prod` | Production-сборка в `build/` |
| `npm run lint` | ESLint + Stylelint |
| `npm run typecheck` | Проверка типов TypeScript |
| `npm test` | Тесты Jest |
| `npm run storybook` | Storybook на порту 6006 |

---

## Стек

![Webpack](https://img.shields.io/badge/webpack-%238DD6F9.svg?style=for-the-badge&logo=webpack&logoColor=black)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)

React · TypeScript · Webpack · React Router · i18next · Jest · Storybook · SCSS
