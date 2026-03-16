import slide1 from "../assets/images/daleman-pc.webp";
import slide2 from "../assets/images/heatsink.webp";
import slide3 from "../assets/images/orang-rakit.webp";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export default function Carousel() {
  return (
    <Swiper
      modules={[Autoplay]}
      slidesPerView={1}
      loop={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      speed={600}
      className="h-dvh"
    >
      {[slide1, slide2, slide3].map((img, index) => (
        <SwiperSlide key={index}>
          <div className="relative w-full h-full">
            <img
              src={img}
              alt={`Slide ${index}`}
              loading="lazy"
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-black/50"></div>

            <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
              <h2 className="text-lg sm:text-2xl md:text-4xl font-bold">
                Build Your Dream PC
              </h2>
              <p className="mt-1 text-xs sm:text-sm md:text-lg">
                High Performance Components
              </p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}