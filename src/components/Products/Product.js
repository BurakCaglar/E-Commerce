import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Product = ({ id, title, image, price }) => {
  return (
    <Wrapper>
      <div className="container">
        <Link to={`/products/${id}`} className="link">
          <img src={image} alt={title} />
        </Link>
      </div>
      <footer>
        <h5>{title}</h5>
        <p>${price}</p>
      </footer>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  .container {
    position: relative;
  }
  img {
    width: 100%;
    display: block;
    object-fit: contain;
    transition: var(--transition);
  }

  .container:hover img {
    opacity: 0.6;
  }

  p {
    color: var(--black);
    font-size: 1.5rem;
  }

  @media (max-width: 1000px) {
    footer {
      text-align: center;
    }
  }
`;
export default Product;
