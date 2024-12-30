import Category from '../components/Category';
import ReasonBuying from '../components/ReasonBuying';
import hero from '../images/heroImages/hero.png';

const HomePage = () => {
  return (
    <>
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img src={hero} alt="Hero" />
          <div className="absolute inset-0 bg-black opacity-50" />
        </div>

        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
          <h1>Ready for adventure?</h1>
          <p>Create lifetime memories and enjoy experience to the fullest</p>
        </div>
      </section>
      <Category />
      <ReasonBuying />
    </>
  );
};

export default HomePage;
