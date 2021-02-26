import React from "react";
import styled from "styled-components";
import { whyChoose } from "../utils/constants";
const WhyChoose = () => {
  return (
    <div className="margin-section">
      <h2
        style={{
          textAlign: "center",
          fontSize: "2rem",
          fontWeight: "200",
          marginBottom: "1rem",
        }}
      >
        Why should you choose us?
      </h2>
      <Wrapper className="container">
        {whyChoose.map((service) => {
          const { id, icon, title, text } = service;
          return (
            <article className="service" key={id}>
              <span className="icon">{icon}</span>
              <h5 className="header">{title}</h5>
              <p>{text}</p>
            </article>
          );
        })}
      </Wrapper>
    </div>
  );
};

const Wrapper = styled.section`
  max-width: 1280px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;

  .service {
    max-width: 250px;
    margin: 0 auto;
    overflow: hidden;
  }

  .header {
    margin: 2rem 0 1.3rem 0;
  }

  svg {
    height: 6rem;
    margin-left: -0.6rem;
  }

  @media (max-width: 1350px) {
    margin: 1rem auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    text-align: center;
    .service {
      margin: 0 auto;
    }
  }

  @media (max-width: 400px) {
    grid-template-columns: repeat(1, 1fr);
    .header {
      margin: 0 auto;
    }
  }
`;
export default WhyChoose;
