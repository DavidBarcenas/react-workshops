import { BrowserRouter } from 'react-router-dom';
import ErrorBoundary from './components/error-boundary';
import AppRouter from './routes/router';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <AppRouter />
      </ErrorBoundary>
    </BrowserRouter>
  );
}

export default App;
