import { ReactNode } from 'react';
import Header from './Header';

function Layout(props: { children: ReactNode }): JSX.Element {
  return (
    <div className="main-layout">
      <Header />
      {props.children}
    </div>
  );
}

export default Layout;
