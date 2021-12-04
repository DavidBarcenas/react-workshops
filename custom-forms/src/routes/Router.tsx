import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/Home';

function Router(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
}

export default Router;
