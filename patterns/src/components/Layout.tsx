import { ReactNode } from 'react';
import Header from './Header';

function Layout(props: { children: ReactNode }) {
  return (
    <div className="main-layout">
      <Header />
      {props.children}
    </div>
  );
}

export default Layout;
