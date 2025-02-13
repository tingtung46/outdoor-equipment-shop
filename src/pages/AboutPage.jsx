import img1 from '../images/aboutImages/about1.png';
import img2 from '../images/aboutImages/about2.png';
import { motion } from 'motion/react';

const AboutPage = () => {
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: '100%' }}
      transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 0.1 }}
      exit={{ x: window.innerWidth, transition: { duration: 0.5 } }}
      className="h-min-screen"
    >
      <div className="flex flex-col items-center">
        <h1 className="my-10">Who we are</h1>

        <div className="block w-[90%] mb-12">
          <img
            src={img1}
            alt="Trekking"
            className="w-[213.3px] h-[142.3px] sm:w-[426.6px] sm:h-[284.6px] md:w-[640px] md:h-[427px] rounded-md mb-5 mx-auto"
          />

          <p className="mb-5">
            Welcome to Alpinus, your trusted destination for all things outdoors! Born out of a
            passion for adventure and a love for nature, we strive to equip adventurers, explorers
            and nature enthusiasts with the best gear and resources for their journeys.
          </p>

          <p>
            At Alpinus, we believe that the great outdoors is for everyone. Whether you are scaling
            mountain peaks, camping, under starry skies or simply enjoying a weekend hike, we are
            here to support you with high-quality equipment, expert advice and commitment to
            sustainability.
          </p>
        </div>

        <div className="w-[90%] mb-12">
          <img
            src={img2}
            alt="Climbing"
            className="w-[213.3px] h-[142.3px] sm:w-[426.6px] sm:h-[284.6px] md:w-[640px] md:h-[427px] rounded-md mb-5 mx-auto"
          />
          <p className="text-center italic">
            <span className="font-bold text-lg">Gear up and get out there</span> – adventure awaits.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
