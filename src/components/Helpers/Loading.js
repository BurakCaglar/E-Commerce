import React from "react";
import styled from "styled-components";

const Loading = () => {
  return (
    <Wrapper>
      <div className="dots">
        <div className="dot1"></div>
        <div className="dot2"></div>
      </div>
    </Wrapper>
  );
};

export default Loading;

const Wrapper = styled.span`
  .dots {
    margin: 100px auto;
    width: 40px;
    height: 40px;
    position: relative;
    text-align: center;
    animation: sk-rotate 2s infinite linear;
  }

  .dot1,
  .dot2 {
    width: 60%;
    height: 60%;
    display: inline-block;
    position: absolute;
    top: 0;
    background-color: #333;
    border-radius: 100%;
    animation: sk-bounce 2s infinite ease-in-out;
  }

  .dot2 {
    top: auto;
    bottom: 0;
    animation-delay: -1s;
  }

  @keyframes sk-rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes sk-bounce {
    0%,
    100% {
      transform: scale(0);
    }
    50% {
      transform: scale(1);
    }
  }
`;
