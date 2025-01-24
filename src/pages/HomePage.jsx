import Category from '../components/Category';
import ReasonBuying from '../components/ReasonBuying';
import hero from '../images/heroImages/hero.png';

const HomePage = () => {
  return (
    <>
      <section className="hero relative h-[300px] sm:h-[320px] md:h-[392px] lg:h-[512px] overflow-hidden w-full">
        <div className="absolute inset-0 h-auto w-full">
          <img src={hero} alt="Hero" />
          <div className="absolute inset-0 bg-black opacity-50" />
        </div>

        <div className="relative z-10 flex flex-col justify-end lg:justify-center items-center lg:items-start lg:pl-8 h-full text-center text-stone-300 text-sm pb-6 lg:pb-0 sm:text-base lg:text-lg">
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
