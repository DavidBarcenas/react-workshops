import { BrowserRouter } from 'react-router-dom';
import ErrorBoundary from './components/error-boundary';
import AppRouter from './routes/router';
import AuthProvider from './state/auth-context';

function App(): JSX.Element {
  return (
    <AuthProvider>
      <BrowserRouter>
        <ErrorBoundary>
          <AppRouter />
        </ErrorBoundary>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
