import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={50}
      slidesPerView={6}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      <SwiperSlide>
        <div
          className="card is-clipped is-shadowless has-background-white-ter has-text-black has-radius-full center"
          style={{ minHeight: "170px" }}
        >
          <div className="card-content center">
            <img
              src="https://lucdn.letsupgrade.net/53_2c0a827e78.webp"
              width="150"
              alt=""
            />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          className="card is-clipped is-shadowless has-background-white-ter has-text-black has-radius-full center"
          style={{ minHeight: "170px" }}
        >
          <div className="card-content center">
            <img
              src="https://lucdn.letsupgrade.net/49_9f47ccb72b.webp"
              width="150"
              alt=""
            />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          className="card is-clipped is-shadowless has-background-white-ter has-text-black has-radius-full center"
          style={{ minHeight: "170px" }}
        >
          <div className="card-content center">
            <img
              src="https://lucdn.letsupgrade.net/49_9f47ccb72b.webp"
              width="150"
              alt=""
            />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          className="card is-clipped is-shadowless has-background-white-ter has-text-black has-radius-full center"
          style={{ minHeight: "170px" }}
        >
          <div className="card-content center">
            <img
              src="https://lucdn.letsupgrade.net/49_9f47ccb72b.webp"
              width="150"
              alt=""
            />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          className="card is-clipped is-shadowless has-background-white-ter has-text-black has-radius-full center"
          style={{ minHeight: "170px" }}
        >
          <div className="card-content center">
            <img
              src="https://lucdn.letsupgrade.net/49_9f47ccb72b.webp"
              width="150"
              alt=""
            />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          className="card is-clipped is-shadowless has-background-white-ter has-text-black has-radius-full center"
          style={{ minHeight: "170px" }}
        >
          <div className="card-content center">
            <img
              src="https://lucdn.letsupgrade.net/49_9f47ccb72b.webp"
              width="150"
              alt=""
            />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          className="card is-clipped is-shadowless has-background-white-ter has-text-black has-radius-full center"
          style={{ minHeight: "170px" }}
        >
          <div className="card-content center">
            <img
              src="https://lucdn.letsupgrade.net/49_9f47ccb72b.webp"
              width="150"
              alt=""
            />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          className="card is-clipped is-shadowless has-background-white-ter has-text-black has-radius-full center"
          style={{ minHeight: "170px" }}
        >
          <div className="card-content center">
            <img
              src="https://lucdn.letsupgrade.net/49_9f47ccb72b.webp"
              width="150"
              alt=""
            />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          className="card is-clipped is-shadowless has-background-white-ter has-text-black has-radius-full center"
          style={{ minHeight: "170px" }}
        >
          <div className="card-content center">
            <img
              src="https://lucdn.letsupgrade.net/49_9f47ccb72b.webp"
              width="150"
              alt=""
            />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          className="card is-clipped is-shadowless has-background-white-ter has-text-black has-radius-full center"
          style={{ minHeight: "170px" }}
        >
          <div className="card-content center">
            <img
              src="https://lucdn.letsupgrade.net/49_9f47ccb72b.webp"
              width="150"
              alt=""
            />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          className="card is-clipped is-shadowless has-background-white-ter has-text-black has-radius-full center"
          style={{ minHeight: "170px" }}
        >
          <div className="card-content center">
            <img
              src="https://lucdn.letsupgrade.net/49_9f47ccb72b.webp"
              width="150"
              alt=""
            />
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};
