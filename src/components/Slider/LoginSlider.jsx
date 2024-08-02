// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./Style.css";

// import required modules
import { Pagination } from "swiper/modules";

export default function LoginSlider() {
  return (
    <>
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide>
          <div
            className="hero h-[700px] rounded-2xl"
            style={{
              backgroundImage: "url(https://i.ibb.co/hVhsnsz/signup-Img.png)",
            }}
          >
            <div className="hero-content text-neutral-content text-center font-poppins">
              <div className="max-w-md p-12 bg-[#152A16] bg-opacity-70 backdrop-blur-md rounded-lg">
                <h1 className=" text-xl font-bold text-white">
                  <span className="text-[#156BCA]">Sign In</span> to view all
                  the
                </h1>
                <h1 className=" text-xl font-bold text-white">
                  massage therapists
                </h1>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="hero h-[700px] rounded-2xl"
            style={{
              backgroundImage: "url(https://i.ibb.co/hVhsnsz/signup-Img.png)",
            }}
          >
            <div className="hero-content text-neutral-content text-center font-poppins">
              <div className="max-w-md p-12 bg-[#152A16] bg-opacity-70 backdrop-blur-md rounded-lg">
                <h1 className=" text-xl font-bold text-white">
                  <span className="text-[#156BCA]">Sign In</span> to view all
                  the
                </h1>
                <h1 className=" text-xl font-bold text-white">
                  massage therapists
                </h1>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="hero h-[700px] rounded-2xl"
            style={{
              backgroundImage: "url(https://i.ibb.co/hVhsnsz/signup-Img.png)",
            }}
          >
            <div className="hero-content text-neutral-content text-center font-poppins">
              <div className="max-w-md p-12 bg-[#152A16] bg-opacity-70 backdrop-blur-md rounded-lg">
                <h1 className=" text-xl font-bold text-white">
                  <span className="text-[#156BCA]">Sign In</span> to view all
                  the
                </h1>
                <h1 className=" text-xl font-bold text-white">
                  massage therapists
                </h1>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
