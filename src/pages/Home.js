import React from "react";
import Slider from "../components/Home/Slider";
import Slider2 from "../components/Home/Slider2";
import Programs from "./Programs";
import Main from "../components/Home/Main"
import WhyGeniegradz from "../components/Home/WhyGeniegradz"
import Community from "../components/Home/Community"
import Achievements from "../components/Home/Achievements"
import Reviews from "../components/Home/Reviews"
import Friends from "../components/Home/Friends"


const Home = () => {

  return (
    <div>
      <div className="hero-top ">
        <div className="hero body-graphics is-small">
          <Main/>
        </div>
      <WhyGeniegradz/>
        <Programs />
        <Community/>
        <Friends/>
        <Achievements/>
        <Reviews/>
      </div>
    </div>
  );
};

export default Home;
