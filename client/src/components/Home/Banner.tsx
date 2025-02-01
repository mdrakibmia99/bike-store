import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import img1 from "@/assets/images/hero-image/slider1.jpg";
import img2 from "@/assets/images/hero-image/slider2.jpg";
import img3 from "@/assets/images/hero-image/slider3.jpg";

export default function HeroSlider() {
  return (
    <div className="container mx-auto">
      <div className="relative w-full">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper h-[60vh]"
        >
          {/* Slide 1 */}
          <SwiperSlide>
            <div className="relative w-full h-full">
              <img
                src={img1}
                alt="Royal Enfield"
                className="w-full h-full object-cover opacity-70"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center text-white px-4">
                <h1 className="text-4xl md:text-5xl font-bold animate-fadeIn">
                  Welcome to Royal Knight Bikes
                </h1>
                <p className="text-lg md:text-xl mt-2 animate-fadeIn delay-200">
                  Find the perfect ride for your adventure!
                </p>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 2 */}
          <SwiperSlide>
            <div className="relative w-full h-full">
              <img
                src={img2}
                alt="Powerful Performance"
                className="w-full h-full object-cover opacity-70"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center text-white px-4">
                <h1 className="text-4xl md:text-5xl font-bold animate-fadeIn">
                  Unleash the Power
                </h1>
                <p className="text-lg md:text-xl mt-2 animate-fadeIn delay-200">
                  Experience superior performance and speed.
                </p>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 3 */}
          <SwiperSlide>
            <div className="relative w-full h-full">
              <img
                src={img3}
                alt="Ultimate Comfort"
                className="w-full h-full object-cover opacity-70"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center text-white px-4">
                <h1 className="text-4xl md:text-5xl font-bold animate-fadeIn">
                  Ride with Comfort & Style
                </h1>
                <p className="text-lg md:text-xl mt-2 animate-fadeIn delay-200">
                  Designed for ultimate comfort on long journeys.
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
