import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";

//Images
import Bootstrap_logo from "../../assets/icons/Bootstrap_logo.svg.png";
import nodejs_logo from "../../assets/icons/nodejs-logo.png";
import js_logo from "../../assets/icons/js-logo.png";
import react_logo from "../../assets/icons/react_logo.png";
import redux_logo from "../../assets/icons/redux_logo.png";

function Skills() {
  return (
    <div className="skills">
      <h1>Skills</h1>
      <Swiper
        spaceBetween={10}
        slidesPerView={3}
        onSlideChange={() => {
          console.log("slide change");
        }}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide className="slide">
          <div className="skill-card">
            <div className="skill-image">
              <img src={Bootstrap_logo} alt="bootstrap" />
            </div>
            <div className="skill-title">Bootstrap</div>
            <div className="skill-level">10/10</div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide">
          <div className="skill-card">
            <div className="skill-image">
              <img src={nodejs_logo} alt="node" />
            </div>
            <div className="skill-title">Node Js</div>
            <div className="skill-level">10/10</div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide">
          <div className="skill-card">
            <div className="skill-image">
              <img src={js_logo} alt="" />
            </div>
            <div className="skill-title">Java Script</div>
            <div className="skill-level">10/10</div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide">
          <div className="skill-card">
            <div className="skill-image">
              <img src={react_logo} alt="" />
            </div>
            <div className="skill-title">React</div>
            <div className="skill-level">10/10</div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide">
          <div className="skill-card">
            <div className="skill-image">
              <img src={redux_logo} alt="" />
            </div>
            <div className="skill-title">Redux</div>
            <div className="skill-level">10/10</div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Skills;
