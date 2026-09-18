import Navbar from '@components/Navbar/Navbar';
import AppRouter from '@utils/helpers/AppRouter';
import Sidebar from '@components/Sidebar/Sidebar';
import ErrorBoundary from '@config/boundary/ErrorBoundary';
import { useLocation } from 'react-router-dom';
import '@styles/index.scss';

function App() {
  const location = useLocation();

  return (
    <div className="app">
      <Navbar />
      <div className="page-content">
        <Sidebar />
        <ErrorBoundary key={location.key}>
          <AppRouter />
        </ErrorBoundary>
      </div>
    </div>
  );
}

export default App;
