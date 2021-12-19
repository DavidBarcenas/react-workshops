import GithubSearchPage from './pages/github-search';
import ErrorBoundary from './components/error-boundary';

function App(): JSX.Element {
  return (
    <div className="container">
      <ErrorBoundary>
        <GithubSearchPage />
      </ErrorBoundary>
    </div>
  );
}

export default App;
