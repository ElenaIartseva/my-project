import Navbar from '@components/Navbar/Navbar';
import AppRouter from '@utils/helpers/AppRouter';
import Sidebar from '@components/Sidebar/Sidebar';
import ErrorBoundary from '@config/boundary/ErrorBoundary';
import '@styles/index.scss';

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="page-content">
        <Sidebar />
        <ErrorBoundary>
          <AppRouter />
        </ErrorBoundary>
      </div>
    </div>
  );
}

export default App;
