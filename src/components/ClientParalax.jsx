import React, { useEffect } from 'react';
import "../css/herobanner.css";
import Hr from './Hr';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { TESTIMONIALS } from '../assets/Testimonial';
import { Autoplay, Navigation } from 'swiper/modules';
import AOS from 'aos';
import 'aos/dist/aos.css';

function ClientParalax() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <>
      <div className="banner2 my-20 text-black">
        <div className="container mx-auto px-4 sm:px-8 md:px-16 lg:px-32">
          <div className='pt-2'>
            <div data-aos="fade-zoom-in">
              <Hr text="WHAT OUR CLIENT SAY ABOUT US" />
            </div>
          </div>
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            navigation={true}
            loop={true}
            modules={[Autoplay, Navigation]}
            className="mySwiper"
          >
            {TESTIMONIALS.map((test, index) => (
              <SwiperSlide className='p-8 sm:p-10 md:p-20' key={index}>
                <div data-aos="fade-up" className="testimonial-slide text-center">
                  <img
                    className='inline-block h-12 w-12 sm:h-16 sm:w-16 mb-2 rounded-full ring-2 ring-white'
                    src={test.image}
                    alt={test.name}
                  />
                  <div className='text-lg sm:text-xl font-semibold'>{test.name}</div>
                  <div className='font-medium text-sm'>{test.website}</div>
                  <div className='font-semibold'>{test.role}</div>
                  <div className='text-base sm:text-xl mt-4'>{test.comment}</div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default ClientParalax;
