import { Footer } from "./Footer";
import { Header } from "./Header";

type Props = {
  children: React.ReactNode
}

export const Layout = ({ children }: Props) => {
  return (
    <main className="Main">
      <Header />
      {children}
      <Footer />
    </main>
  );
};
