import { Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';
import PageWrapper from '@utils/helpers/PageWrapper';
import Loader from '@components/Loader/Loader';
import { routeConfig } from '@config/routes/routes.config';

function AppRouter() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        {Object.values(routeConfig).map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={<PageWrapper>{route.element}</PageWrapper>}
          />
        ))}
      </Routes>
    </Suspense>
  );
}

export default AppRouter;
