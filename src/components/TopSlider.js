import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import image1 from "../assets/slider/slider-image-1.jpg";
import image2 from "../assets/slider/slider-image-2.jpg";
import image3 from "../assets/slider/slider-image-3.jpg";
import { HiOutlineArrowRight } from "react-icons/hi";
import nextArrow from "../assets/slider/next-arrow.svg";

export default class TopSlider extends Component {
  constructor(props) {
    super(props);
    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
  }
  play() {
    this.slider.slickPlay();
  }
  pause() {
    this.slider.slickPause();
  }
  render() {
    const settings = {
      dots: true,
      fade: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
    };
    return (
      <Wrapper>
        <Slider {...settings}>
          <div className="image">
            <img src={image1} alt="" />
          </div>
          <div>
            <img src={image2} alt="" />
          </div>
          <div>
            <img src={image3} alt="" />
          </div>
        </Slider>
        <div className="slider-footer">aa</div>
      </Wrapper>
    );
  }
}

const Wrapper = styled.section`
  .slick-next {
    right: 0;
  }
  .slick-prev {
    left: 0;
    z-index: 500;
  }
  /* .slick-next:before {
    content: url(${nextArrow});
    font-size: 30px;
  } */

  img {
    width: 100vw;
    height: 100vh;
  }
  .image::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 5%);
  }

  .slider-footer {
    position: absolute;
  }
`;
