import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default () => {
  const data = [
    {
      url: "https://firebasestorage.googleapis.com/v0/b/geniegradz-b7d61.appspot.com/o/testimonial%2Ftestimonials%20(5).png?alt=media&token=c0a0d39b-f022-43bc-902f-2983737f2859",
      title: "Tanishq Saha",
      desc: "Learning a new coding language can be a hitch sometimes. Learning with GenieGradz was a experience on its own! Young and dynamic trainers,super friendly and professional staff leave no stone unturned to help you in the learning experience! I was able to code , run them smoothly and create project , a complete new language through the program. Hands down to the best coding school.",
    },
    {
      url: "https://firebasestorage.googleapis.com/v0/b/geniegradz-b7d61.appspot.com/o/testimonial%2Ftestimonials%20(6).png?alt=media&token=7d3978b5-8fea-4cf8-940e-47cc383e85a4",
      title: "Sakshi T.",
      desc: "I had enrolled for Java beginners course in beta testing. It wasn't my first attempt to learn java programming. I had tried learning it before through various sources but couldn't really get a hang of it because of the way it's taught. But the experience of learning Java with Mainak sir was honestly far beyond my expectations.he ensured that we really understand each and every small syntax,loops and he didn't mind repeating it n number of times.Looking forward to countinue with GenieGradz for futher deep understanding.",
    },
    {
      url: "https://firebasestorage.googleapis.com/v0/b/geniegradz-b7d61.appspot.com/o/testimonial%2Ftestimonials%20(7).png?alt=media&token=ecaec585-5580-48c7-9b2e-9cb5533814b7",
      title: "Shailey M. ",
      desc: "Hello i am a Shailey and i have completed with the basic of python programming. Learning of python programming from Anwesh sir was a delight for me . I am really happy to complete the course and perform those live project with GenieGradz. It was a amazing experience throughout Thank's to Anwesh sir for making it easy and simple. Thank you soo much.",
    },
    {
      url: "https://firebasestorage.googleapis.com/v0/b/geniegradz-b7d61.appspot.com/o/testimonial%2Ftestimonials%20(8).png?alt=media&token=36aaf57d-7de8-428e-bac2-8351b0138ebd",
      title: "Atharva B.",
      desc: "I am glad to start my journey of learning Python with GenieGradz. My experience has been extremely amazing. The team at GenieGradz is very prompt and swift and is doing great job while keeping up with the quality of education they provide through their highly qualified tutors. Special shoutout and credits to someone for being a fantastic tutor. Looking forward to learning more with tln Kudos to the team!",
    },
  ];

  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={20}
      slidesPerView={3.5}
      centeredSlides={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 50,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3.5,
          spaceBetween: 20,
        },
      }}
      className="p-5 pb-6"
    >
      {data.map((rtn) => {
        return(
          <SwiperSlide>
          <div
            className="card is-shadowless trainer-card has-background-primary-light has-radius-full"
            style={{ height: "100% !important" }}
          >
            <div className="card-content has-text-centered ">
              <div className="center">
                <figure className="image is-96x96">
                  <img src={rtn.url} alt="profile" className="is-rounded" />
                  {/* <div>
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
                  </div> */}
                </figure>
              </div>
              <div className="title is-5 mt-5 is-size-5-mobile">
                {rtn.title}
              </div>
              <div className="subtitle is-size-6 is-size-6-mobile has-text-grey-dark">
                {rtn.desc}
              </div>
            </div>
          </div>
        </SwiperSlide>
        )
      })}
      {/* <SwiperSlide>
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
      </SwiperSlide> */}
    </Swiper>
  );
};
