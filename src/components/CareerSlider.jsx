import React from "react";
import "../css/careerslider.css";
import Hr from "./Hr";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { CAREERTEST } from "../assets/Testimonial";
function CareerSlider() {
  return (
    <>
      <div className="banner3 h-112  text-white">
        <div className="container mx-auto px-32">
          <div className="pt-2">
            <Hr text="WHAT OUR CLIENT SAY ABOUT US" />
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
            {CAREERTEST.map((test, index) => (
              <SwiperSlide className="p-20" key={index}>
                <div className="testimonial-slide">
                  <img
                    className="inline-block h-16 w-16 mb-2 rounded-full ring-2 ring-white"
                    src={test.image}
                    alt={test.name}
                  />
                  <div className="text-xl font-semibold">{test.name}</div>
                  <div className="text-xl mt-4">{test.comment}</div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
   <div className="bg-gray-100">
   <div className="container mx-auto py-5 px-32">
        <div className="text-black ">
          <Hr text="CAREER OPPORTUNITIES AT BIT CANNY TECHNOLOGIES" />
          <p className="my-5">
            At bitcanny, we are always looking for passionate people to join our
            team. We believe that self improvement is the key to individual and
            organizational growth. Learning is something that should not stop.
            The more you learn the more you grow. <br />
            <br />
            Bitcanny is a fusion of technology and creativity. We have a number
            of open positions. If you think you are up for the challenge and
            excitement of working with us, then please get in touch using the
            form below or drop us a mail at hire@bitcanny.com.
          </p>
        </div>
      </div>
   </div>
    </>
  );
}

export default CareerSlider;
