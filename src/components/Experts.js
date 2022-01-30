import React from "react";
import { Swiper, SwiperSlide } from "swipe";
import Slider from "./Course/Slider";

const Experts = () => {
  return (
    <div>
      <div className="section">
        <div
          className="columns is-centered is-vcentered pb-5 pl-2 has-text-centered pl-5"
          style={{ marginTop: "-50px" }}
        >
          <div className="column is-6">
            <div className="title has-text-black is-size-3-mobile">
              Meet the Industry Experts
            </div>
            <div className="subtitle is-size-5 has-text-black has-text-weight-medium is-size-6-mobile">
              Get mentored by the Growth Hackers and Build success
            </div>
          </div>
        </div>
        <section>
          <div style={{ padding: "0rem" }}>
            <Slider />
          </div>
        </section>

      </div>
    </div>
  );
};

export default Experts;
