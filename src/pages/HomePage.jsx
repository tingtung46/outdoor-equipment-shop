import Category from '../components/Category';
import ReasonBuying from '../components/ReasonBuying';
import hero from '../images/heroImages/hero.png';

const HomePage = () => {
  return (
    <>
      <section className="relative mt-[-3rem] h-screen w-full">
        <div className="absolute inset-0 overflow-hidden h-auto w-full">
          <img src={hero} alt="Hero" className='w-full h-full object-cover' />
          <div className="absolute inset-0 left-0 bottom-0 bg-gradient-to-b from-white/75 from-10% to-transparent to-90%" />
        </div>

        <div className="relative z-10 flex flex-col justify-end lg:justify-center items-center lg:items-start lg:pl-8 lg:ml-20 h-full text-center text-gray-500 text-sm pb-6 lg:pb-0 sm:text-base lg:text-lg">
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
