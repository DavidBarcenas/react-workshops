import { Routes, Route } from 'react-router-dom';
import ErrorBoundary from './components/error-boundary';
import LoginPage from './pages/auth/login';

function App(): JSX.Element {
  return (
    <ErrorBoundary>
      <Routes>
        <Route path="/" element={<LoginPage />} />
      </Routes>
    </ErrorBoundary>
  );
}

export default App;
