import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, HashNavigation } from "swiper";
import Player from "../../../shared/Player";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const showFile = (obj) => {
  return obj && obj.type === "mp4" ? (
    <Player file={obj.src} />
  ) : (
    <img className=" px-14 pt-6 pb-12  max-h-[630px] " src={obj.src} alt="" />
  );
};
const SwiperComponent = ({ elements, element0 }) => {
  return (
    <Swiper
      spaceBetween={30}
      hashNavigation={{
        watchState: true,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Pagination, Navigation, HashNavigation]}
      className="mySwiper"
    >
      {!elements[0].src ? (
        <div>
          {element0.files.map((file, index) => (
            <SwiperSlide data-hash={`slide${index}`}>
              {() => showFile(file)}
            </SwiperSlide>
          ))}
        </div>
      ) : (
        <div>
          {elements.map((file, index) => (
            <div>
              <SwiperSlide data-hash={`slide${index}`}>
                {() => showFile(file)}
              </SwiperSlide>
            </div>
          ))}
        </div>
      )}
    </Swiper>
  );
};

export default SwiperComponent;
