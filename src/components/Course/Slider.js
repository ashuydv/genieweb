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
      spaceBetween={20}
      slidesPerView={4}
      centeredSlides={true}
      pagination={true}

      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
      className="p-5 pb-6"
    >
      <SwiperSlide>
        <div className="card is-shadowless trainer-card has-background-primary-light has-radius-full">
          <div className="card-content has-text-centered">
            <div className="center">
              <figure className="image is-96x96">
                <img
                  src="https://lucdn.letsupgrade.net/Tuhin_Karmakar_7244ac96fe.webp"
                  loading="lazy"
                  className="is-rounded"
                  style={{ height: "100% !important" }}
                />
              </figure>
            </div>
            <div className="title is-4 mt-5 is-size-5-mobile">
              Tuhin Karmakar
            </div>
            <div className="subtitle is-size-6 is-size-6-mobile has-text-grey-dark">
              Full Stack Software Developer
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="card is-shadowless trainer-card has-background-primary-light has-radius-full">
          <div className="card-content has-text-centered">
            <div className="center">
              <figure className="image is-96x96">
                <img
                  src="https://lucdn.letsupgrade.net/Tuhin_Karmakar_7244ac96fe.webp"
                  loading="lazy"
                  className="is-rounded"
                  style={{ height: "100% !important" }}
                />
              </figure>
            </div>
            <div className="title is-4 mt-5 is-size-5-mobile">
              Tuhin Karmakar
            </div>
            <div className="subtitle is-size-6 is-size-6-mobile has-text-grey-dark">
              Full Stack Software Developer
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="card is-shadowless trainer-card has-background-primary-light has-radius-full">
          <div className="card-content has-text-centered">
            <div className="center">
              <figure className="image is-96x96">
                <img
                  src="https://lucdn.letsupgrade.net/Tuhin_Karmakar_7244ac96fe.webp"
                  loading="lazy"
                  className="is-rounded"
                  style={{ height: "100% !important" }}
                />
              </figure>
            </div>
            <div className="title is-4 mt-5 is-size-5-mobile">
              Tuhin Karmakar
            </div>
            <div className="subtitle is-size-6 is-size-6-mobile has-text-grey-dark">
              Full Stack Software Developer
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="card is-shadowless trainer-card has-background-primary-light has-radius-full">
          <div className="card-content has-text-centered">
            <div className="center">
              <figure className="image is-96x96">
                <img
                  src="https://lucdn.letsupgrade.net/Tuhin_Karmakar_7244ac96fe.webp"
                  loading="lazy"
                  className="is-rounded"
                  style={{ height: "100% !important" }}
                />
              </figure>
            </div>
            <div className="title is-4 mt-5 is-size-5-mobile">
              Tuhin Karmakar
            </div>
            <div className="subtitle is-size-6 is-size-6-mobile has-text-grey-dark">
              Full Stack Software Developer
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="card is-shadowless trainer-card has-background-primary-light has-radius-full">
          <div className="card-content has-text-centered">
            <div className="center">
              <figure className="image is-96x96">
                <img
                  src="https://lucdn.letsupgrade.net/Tuhin_Karmakar_7244ac96fe.webp"
                  loading="lazy"
                  className="is-rounded"
                  style={{ height: "100% !important" }}
                />
              </figure>
            </div>
            <div className="title is-4 mt-5 is-size-5-mobile">
              Tuhin Karmakar
            </div>
            <div className="subtitle is-size-6 is-size-6-mobile has-text-grey-dark">
              Full Stack Software Developer
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="card is-shadowless trainer-card has-background-primary-light has-radius-full">
          <div className="card-content has-text-centered">
            <div className="center">
              <figure className="image is-96x96">
                <img
                  src="https://lucdn.letsupgrade.net/Tuhin_Karmakar_7244ac96fe.webp"
                  loading="lazy"
                  className="is-rounded"
                  style={{ height: "100% !important" }}
                />
              </figure>
            </div>
            <div className="title is-4 mt-5 is-size-5-mobile">
              Tuhin Karmakar
            </div>
            <div className="subtitle is-size-6 is-size-6-mobile has-text-grey-dark">
              Full Stack Software Developer
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="card is-shadowless trainer-card has-background-primary-light has-radius-full">
          <div className="card-content has-text-centered">
            <div className="center">
              <figure className="image is-96x96">
                <img
                  src="https://lucdn.letsupgrade.net/Tuhin_Karmakar_7244ac96fe.webp"
                  loading="lazy"
                  className="is-rounded"
                  style={{ height: "100% !important" }}
                />
              </figure>
            </div>
            <div className="title is-4 mt-5 is-size-5-mobile">
              Tuhin Karmakar
            </div>
            <div className="subtitle is-size-6 is-size-6-mobile has-text-grey-dark">
              Full Stack Software Developer
            </div>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="card is-shadowless trainer-card has-background-primary-light has-radius-full">
          <div className="card-content has-text-centered">
            <div className="center">
              <figure className="image is-96x96">
                <img
                  src="https://lucdn.letsupgrade.net/Tuhin_Karmakar_7244ac96fe.webp"
                  loading="lazy"
                  className="is-rounded"
                  style={{ height: "100% !important" }}
                />
              </figure>
            </div>
            <div className="title is-4 mt-5 is-size-5-mobile">
              Tuhin Karmakar
            </div>
            <div className="subtitle is-size-6 is-size-6-mobile has-text-grey-dark">
              Full Stack Software Developer
            </div>
          </div>
        </div>
      </SwiperSlide>      <SwiperSlide>
        <div className="card is-shadowless trainer-card has-background-primary-light has-radius-full">
          <div className="card-content has-text-centered">
            <div className="center">
              <figure className="image is-96x96">
                <img
                  src="https://lucdn.letsupgrade.net/Tuhin_Karmakar_7244ac96fe.webp"
                  loading="lazy"
                  className="is-rounded"
                  style={{ height: "100% !important" }}
                />
              </figure>
            </div>
            <div className="title is-4 mt-5 is-size-5-mobile">
              Tuhin Karmakar
            </div>
            <div className="subtitle is-size-6 is-size-6-mobile has-text-grey-dark">
              Full Stack Software Developer
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="card is-shadowless trainer-card has-background-primary-light has-radius-full">
          <div className="card-content has-text-centered">
            <div className="center">
              <figure className="image is-96x96">
                <img
                  src="https://lucdn.letsupgrade.net/Tuhin_Karmakar_7244ac96fe.webp"
                  loading="lazy"
                  className="is-rounded"
                  style={{ height: "100% !important" }}
                />
              </figure>
            </div>
            <div className="title is-4 mt-5 is-size-5-mobile">
              Tuhin Karmakar
            </div>
            <div className="subtitle is-size-6 is-size-6-mobile has-text-grey-dark">
              Full Stack Software Developer
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="card is-shadowless trainer-card has-background-primary-light has-radius-full">
          <div className="card-content has-text-centered">
            <div className="center">
              <figure className="image is-96x96">
                <img
                  src="https://lucdn.letsupgrade.net/Tuhin_Karmakar_7244ac96fe.webp"
                  loading="lazy"
                  className="is-rounded"
                  style={{ height: "100% !important" }}
                />
              </figure>
            </div>
            <div className="title is-4 mt-5 is-size-5-mobile">
              Tuhin Karmakar
            </div>
            <div className="subtitle is-size-6 is-size-6-mobile has-text-grey-dark">
              Full Stack Software Developer
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="card is-shadowless trainer-card has-background-primary-light has-radius-full">
          <div className="card-content has-text-centered">
            <div className="center">
              <figure className="image is-96x96">
                <img
                  src="https://lucdn.letsupgrade.net/Tuhin_Karmakar_7244ac96fe.webp"
                  loading="lazy"
                  className="is-rounded"
                  style={{ height: "100% !important" }}
                />
              </figure>
            </div>
            <div className="title is-4 mt-5 is-size-5-mobile">
              Tuhin Karmakar
            </div>
            <div className="subtitle is-size-6 is-size-6-mobile has-text-grey-dark">
              Full Stack Software Developer
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="card is-shadowless trainer-card has-background-primary-light has-radius-full">
          <div className="card-content has-text-centered">
            <div className="center">
              <figure className="image is-96x96">
                <img
                  src="https://lucdn.letsupgrade.net/Tuhin_Karmakar_7244ac96fe.webp"
                  loading="lazy"
                  className="is-rounded"
                  style={{ height: "100% !important" }}
                />
              </figure>
            </div>
            <div className="title is-4 mt-5 is-size-5-mobile">
              Tuhin Karmakar
            </div>
            <div className="subtitle is-size-6 is-size-6-mobile has-text-grey-dark">
              Full Stack Software Developer
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};
