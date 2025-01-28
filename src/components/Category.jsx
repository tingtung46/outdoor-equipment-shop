import { v4 as uuidv4 } from 'uuid';
import { type } from '../data/filterItem';
import { getCategoryImage } from '../utils/getImage';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules';
import '../styles/category.css';

const Category = () => {
  return (
    <>
      <section className="w-full flex flex-col items-center">
        <h2 className="font-semibold text-2xl/8 my-5">Category</h2>

        <Swiper
          modules={[Pagination, Navigation, EffectCoverflow]}
          centeredSlides={true}
          initialSlide={2}
          speed={600}
          navigation={true}
          effect="coverflow"
          spaceBetween={30}
          slidesPerView={'auto'}
          coverflowEffect={{ rotate: 0, stretch: 80, depth: 350, modifier: 1, slideShadows: true }}
          pagination={{ clickable: true }}
          className="px-8 w-full h-auto"
        >
          {type.map((category) => {
            return (
              <SwiperSlide
                key={uuidv4()}
                className="relative border-2 border-neutral-300 rounded-xl"
              >
                <Link to={`/shop-page/${category.param}`}>
                  <img
                    src={getCategoryImage(category.id)}
                    alt="Category"
                    className="block w-full h-full object-cover"
                  />
                  <p className="absolute text-gray-800 bottom-[5px] left-[50%] translate-x-[-50%] translate-y-[-20%] w-max text-center px-[18px] py-[10px] bg-white/40 rounded-lg border-2 border-[rgba(177, 177, 177, 0.4)] shadow-xl backdrop-filter-[blur(10px)] transition-all duration-500 ease-linear">
                    {category.type}
                  </p>
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>
    </>
  );
};

export default Category;
