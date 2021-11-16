import { Routes, Route } from 'react-router-dom';
import Layout from '../components/Layout';

function Navigation(): JSX.Element {
  return (
    <Layout>
      <Routes>
        <Route path="/about" element={<h1>About</h1>} />
        <Route path="/users" element={<h1>Users</h1>} />
        <Route path="/" element={<h1>Home</h1>} />
      </Routes>
    </Layout>
  );
}

export default Navigation;
