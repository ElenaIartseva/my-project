import { ReactElement } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18n from './setupTests';

function ComponentRender(component: ReactElement) {
  return (
    <I18nextProvider i18n={i18n}>
      <BrowserRouter>
        {component}
      </BrowserRouter>
    </I18nextProvider>
  );
}

export default ComponentRender;
