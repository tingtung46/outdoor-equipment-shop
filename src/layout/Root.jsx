import Header from '../components/Header';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';

const Root = () => {
  return (
    <>
      <section>
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
