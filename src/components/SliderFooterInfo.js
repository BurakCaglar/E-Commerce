import React from "react";
import styled from "styled-components";
import { sliderFooterInfo } from "../utils/constants";

const SliderFooterInfo = () => {
  return (
    <Wrapper>
      {sliderFooterInfo.map((item) => {
        const { id, title, icon, description } = item;
        return (
          <div key={id} className="slider-footer-content">
            <div className="slider-footer-image">{icon}</div>
            <div className="slider-info">
              <div className="slider-title">{title}</div>
              <div className="slider-description">{description}</div>
            </div>
          </div>
        );
      })}
    </Wrapper>
  );
};

export default SliderFooterInfo;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 25rem);
  grid-gap: 2rem;
  margin-top: 3rem;
  margin-left: 5rem;

  @media (min-width: 1600px) {
    margin-top: 3rem;
    margin-left: 30rem;
    grid-gap: 10rem;
  }

  .slider-footer-content {
    display: flex;
    .slider-info {
      margin-left: 3rem;

      .slider-title {
        font-size: 1.4rem;
      }
      .slider-description {
        margin-top: 1rem;
        font-size: 1.2rem;
        color: var(--grey);
      }
    }
  }
`;
