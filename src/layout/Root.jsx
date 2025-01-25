import Header from '../components/Header';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';

const Root = () => {
  return (
    <>
      <section className="mx-auto my-0 max-w-7xl">
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </section>
    </>
  );
};

export default Root;
