// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { heroSLider } from "@/data/imageLink";

export default function App() {
  return (<div className="container mx-auto"> 
    <div className="relative w-full ">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper h-[60vh]"
      >
        <SwiperSlide>
          <img
            src={heroSLider.Image1}
            alt="Royal Enfield"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={heroSLider.Image2}
            alt="Royal Enfield"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
      </Swiper>
    </div>
    </div>
  );
}
