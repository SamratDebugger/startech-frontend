// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";

export default function HeroSlider() {
  return (
    <>
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          {" "}
          <img
            className="rounded-xl h-full "
            src="/assets/images/carousel-1.webp"
            alt="Carousel 1"
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img
            className="rounded-xl h-full "
            src="/assets/images/carousel-2.webp"
            alt="Carousel 2"
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img
            className="rounded-xl h-full "
            src="/assets/images/carousel-3.webp"
            alt="Carousel 3"
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img
            className="rounded-xl h-full "
            src="/assets/images/carousel-4.webp"
            alt="Carousel 4"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
