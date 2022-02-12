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
      slidesPerView={3.5}
      centeredSlides={true}
      autoplay={{
        "delay": 3000,
        "disableOnInteraction": false
      }}
      breakpoints={{
        320:{
          slidesPerView: 1,
          spaceBetween: 50,
        }, 
        768: {
          slidesPerView: 2,
          spaceBetween: 20,  
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 20
        }
      }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
      className="p-5 pb-6"
    >
      <SwiperSlide>
        <div
          className="card is-shadowless trainer-card  has-background-primary-light has-radius-full"
          style={{ height: "100% !important" }}
        >
          <div className="card-content has-text-centered ">
            <div className="center">
              <figure className="image is-96x96">
                <img
                  src="https://lucdn.letsupgrade.net/Shubham_Raj_11d11a80fa.webp"
                  alt="profile"
                  className="is-rounded"
                />
                <div>
                  <a href="https://www.linkedin.com/posts/shubham-raj-a81719185_web-development-activity-6800480841236652033-Bhc1">
                    <div className="right is-clickable is-absolute edit-profile-icon is-fullwidth has-background-white p-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="19"
                        height="19"
                        viewBox="0 0 24 24"
                      >
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                      </svg>
                    </div>
                  </a>
                </div>
              </figure>
            </div>
            <div className="title is-5 mt-5 is-size-5-mobile">Shubham Raj</div>
            <div className="subtitle is-size-6 is-size-6-mobile has-text-grey-dark">
              This course helped me to learn more about HTML5, CSS3 and
              Javascript. Thanks LetsUpgrade for this amazing course.
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          className="card is-shadowless trainer-card  has-background-primary-light has-radius-full"
          style={{ height: "100% !important" }}
        >
          <div className="card-content has-text-centered ">
            <div className="center">
              <figure className="image is-96x96">
                <img
                  src="https://lucdn.letsupgrade.net/Shubham_Raj_11d11a80fa.webp"
                  alt="profile"
                  className="is-rounded"
                />
                <div>
                  <a href="https://www.linkedin.com/posts/shubham-raj-a81719185_web-development-activity-6800480841236652033-Bhc1">
                    <div className="right is-clickable is-absolute edit-profile-icon is-fullwidth has-background-white p-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="19"
                        height="19"
                        viewBox="0 0 24 24"
                      >
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                      </svg>
                    </div>
                  </a>
                </div>
              </figure>
            </div>
            <div className="title is-5 mt-5 is-size-5-mobile">Shubham Raj</div>
            <div className="subtitle is-size-6 is-size-6-mobile has-text-grey-dark">
              This course helped me to learn more about HTML5, CSS3 and
              Javascript. Thanks LetsUpgrade for this amazing course.
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          className="card is-shadowless trainer-card  has-background-primary-light has-radius-full"
          style={{ height: "100% !important" }}
        >
          <div className="card-content has-text-centered ">
            <div className="center">
              <figure className="image is-96x96">
                <img
                  src="https://lucdn.letsupgrade.net/Shubham_Raj_11d11a80fa.webp"
                  alt="profile"
                  className="is-rounded"
                />
                <div>
                  <a href="https://www.linkedin.com/posts/shubham-raj-a81719185_web-development-activity-6800480841236652033-Bhc1">
                    <div className="right is-clickable is-absolute edit-profile-icon is-fullwidth has-background-white p-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="19"
                        height="19"
                        viewBox="0 0 24 24"
                      >
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                      </svg>
                    </div>
                  </a>
                </div>
              </figure>
            </div>
            <div className="title is-5 mt-5 is-size-5-mobile">Shubham Raj</div>
            <div className="subtitle is-size-6 is-size-6-mobile has-text-grey-dark">
              This course helped me to learn more about HTML5, CSS3 and
              Javascript. Thanks LetsUpgrade for this amazing course.
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          className="card is-shadowless trainer-card  has-background-primary-light has-radius-full"
          style={{ height: "100% !important" }}
        >
          <div className="card-content has-text-centered ">
            <div className="center">
              <figure className="image is-96x96">
                <img
                  src="https://lucdn.letsupgrade.net/Shubham_Raj_11d11a80fa.webp"
                  alt="profile"
                  className="is-rounded"
                />
                <div>
                  <a href="https://www.linkedin.com/posts/shubham-raj-a81719185_web-development-activity-6800480841236652033-Bhc1">
                    <div className="right is-clickable is-absolute edit-profile-icon is-fullwidth has-background-white p-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="19"
                        height="19"
                        viewBox="0 0 24 24"
                      >
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                      </svg>
                    </div>
                  </a>
                </div>
              </figure>
            </div>
            <div className="title is-5 mt-5 is-size-5-mobile">Shubham Raj</div>
            <div className="subtitle is-size-6 is-size-6-mobile has-text-grey-dark">
              This course helped me to learn more about HTML5, CSS3 and
              Javascript. Thanks LetsUpgrade for this amazing course.
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          className="card is-shadowless trainer-card  has-background-primary-light has-radius-full"
          style={{ height: "100% !important" }}
        >
          <div className="card-content has-text-centered ">
            <div className="center">
              <figure className="image is-96x96">
                <img
                  src="https://lucdn.letsupgrade.net/Shubham_Raj_11d11a80fa.webp"
                  alt="profile"
                  className="is-rounded"
                />
                <div>
                  <a href="https://www.linkedin.com/posts/shubham-raj-a81719185_web-development-activity-6800480841236652033-Bhc1">
                    <div className="right is-clickable is-absolute edit-profile-icon is-fullwidth has-background-white p-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="19"
                        height="19"
                        viewBox="0 0 24 24"
                      >
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                      </svg>
                    </div>
                  </a>
                </div>
              </figure>
            </div>
            <div className="title is-5 mt-5 is-size-5-mobile">Shubham Raj</div>
            <div className="subtitle is-size-6 is-size-6-mobile has-text-grey-dark">
              This course helped me to learn more about HTML5, CSS3 and
              Javascript. Thanks LetsUpgrade for this amazing course.
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          className="card is-shadowless trainer-card  has-background-primary-light has-radius-full"
          style={{ height: "100% !important" }}
        >
          <div className="card-content has-text-centered ">
            <div className="center">
              <figure className="image is-96x96">
                <img
                  src="https://lucdn.letsupgrade.net/Shubham_Raj_11d11a80fa.webp"
                  alt="profile"
                  className="is-rounded"
                />
                <div>
                  <a href="https://www.linkedin.com/posts/shubham-raj-a81719185_web-development-activity-6800480841236652033-Bhc1">
                    <div className="right is-clickable is-absolute edit-profile-icon is-fullwidth has-background-white p-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="19"
                        height="19"
                        viewBox="0 0 24 24"
                      >
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                      </svg>
                    </div>
                  </a>
                </div>
              </figure>
            </div>
            <div className="title is-5 mt-5 is-size-5-mobile">Shubham Raj</div>
            <div className="subtitle is-size-6 is-size-6-mobile has-text-grey-dark">
              This course helped me to learn more about HTML5, CSS3 and
              Javascript. Thanks LetsUpgrade for this amazing course.
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          className="card is-shadowless trainer-card  has-background-primary-light has-radius-full"
          style={{ height: "100% !important" }}
        >
          <div className="card-content has-text-centered ">
            <div className="center">
              <figure className="image is-96x96">
                <img
                  src="https://lucdn.letsupgrade.net/Shubham_Raj_11d11a80fa.webp"
                  alt="profile"
                  className="is-rounded"
                />
                <div>
                  <a href="https://www.linkedin.com/posts/shubham-raj-a81719185_web-development-activity-6800480841236652033-Bhc1">
                    <div className="right is-clickable is-absolute edit-profile-icon is-fullwidth has-background-white p-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="19"
                        height="19"
                        viewBox="0 0 24 24"
                      >
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                      </svg>
                    </div>
                  </a>
                </div>
              </figure>
            </div>
            <div className="title is-5 mt-5 is-size-5-mobile">Shubham Raj</div>
            <div className="subtitle is-size-6 is-size-6-mobile has-text-grey-dark">
              This course helped me to learn more about HTML5, CSS3 and
              Javascript. Thanks LetsUpgrade for this amazing course.
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          className="card is-shadowless trainer-card  has-background-primary-light has-radius-full"
          style={{ height: "100% !important" }}
        >
          <div className="card-content has-text-centered ">
            <div className="center">
              <figure className="image is-96x96">
                <img
                  src="https://lucdn.letsupgrade.net/Shubham_Raj_11d11a80fa.webp"
                  alt="profile"
                  className="is-rounded"
                />
                <div>
                  <a href="https://www.linkedin.com/posts/shubham-raj-a81719185_web-development-activity-6800480841236652033-Bhc1">
                    <div className="right is-clickable is-absolute edit-profile-icon is-fullwidth has-background-white p-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="19"
                        height="19"
                        viewBox="0 0 24 24"
                      >
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                      </svg>
                    </div>
                  </a>
                </div>
              </figure>
            </div>
            <div className="title is-5 mt-5 is-size-5-mobile">Shubham Raj</div>
            <div className="subtitle is-size-6 is-size-6-mobile has-text-grey-dark">
              This course helped me to learn more about HTML5, CSS3 and
              Javascript. Thanks LetsUpgrade for this amazing course.
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          className="card is-shadowless trainer-card  has-background-primary-light has-radius-full"
          style={{ height: "100% !important" }}
        >
          <div className="card-content has-text-centered ">
            <div className="center">
              <figure className="image is-96x96">
                <img
                  src="https://lucdn.letsupgrade.net/Shubham_Raj_11d11a80fa.webp"
                  alt="profile"
                  className="is-rounded"
                />
                <div>
                  <a href="https://www.linkedin.com/posts/shubham-raj-a81719185_web-development-activity-6800480841236652033-Bhc1">
                    <div className="right is-clickable is-absolute edit-profile-icon is-fullwidth has-background-white p-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="19"
                        height="19"
                        viewBox="0 0 24 24"
                      >
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                      </svg>
                    </div>
                  </a>
                </div>
              </figure>
            </div>
            <div className="title is-5 mt-5 is-size-5-mobile">Shubham Raj</div>
            <div className="subtitle is-size-6 is-size-6-mobile has-text-grey-dark">
              This course helped me to learn more about HTML5, CSS3 and
              Javascript. Thanks LetsUpgrade for this amazing course.
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          className="card is-shadowless trainer-card  has-background-primary-light has-radius-full"
          style={{ height: "100% !important" }}
        >
          <div className="card-content has-text-centered ">
            <div className="center">
              <figure className="image is-96x96">
                <img
                  src="https://lucdn.letsupgrade.net/Shubham_Raj_11d11a80fa.webp"
                  alt="profile"
                  className="is-rounded"
                />
                <div>
                  <a href="https://www.linkedin.com/posts/shubham-raj-a81719185_web-development-activity-6800480841236652033-Bhc1">
                    <div className="right is-clickable is-absolute edit-profile-icon is-fullwidth has-background-white p-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="19"
                        height="19"
                        viewBox="0 0 24 24"
                      >
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                      </svg>
                    </div>
                  </a>
                </div>
              </figure>
            </div>
            <div className="title is-5 mt-5 is-size-5-mobile">Shubham Raj</div>
            <div className="subtitle is-size-6 is-size-6-mobile has-text-grey-dark">
              This course helped me to learn more about HTML5, CSS3 and
              Javascript. Thanks LetsUpgrade for this amazing course.
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          className="card is-shadowless trainer-card  has-background-primary-light has-radius-full"
          style={{ height: "100% !important" }}
        >
          <div className="card-content has-text-centered ">
            <div className="center">
              <figure className="image is-96x96">
                <img
                  src="https://lucdn.letsupgrade.net/Shubham_Raj_11d11a80fa.webp"
                  alt="profile"
                  className="is-rounded"
                />
                <div>
                  <a href="https://www.linkedin.com/posts/shubham-raj-a81719185_web-development-activity-6800480841236652033-Bhc1">
                    <div className="right is-clickable is-absolute edit-profile-icon is-fullwidth has-background-white p-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="19"
                        height="19"
                        viewBox="0 0 24 24"
                      >
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                      </svg>
                    </div>
                  </a>
                </div>
              </figure>
            </div>
            <div className="title is-5 mt-5 is-size-5-mobile">Shubham Raj</div>
            <div className="subtitle is-size-6 is-size-6-mobile has-text-grey-dark">
              This course helped me to learn more about HTML5, CSS3 and
              Javascript. Thanks LetsUpgrade for this amazing course.
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};
