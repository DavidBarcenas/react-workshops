import ErrorBoundary from './components/error-boundary';
import LoginPage from "./pages/auth/login";

function App(): JSX.Element {
  return (
    <div className="container">
      <ErrorBoundary>
        <LoginPage />
      </ErrorBoundary>
    </div>
  );
}

export default App;
