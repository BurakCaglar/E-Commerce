import React from "react";
import { useProductsContext } from "../../context/useProductsContext";
import styled from "styled-components";
import Error from "../Helpers/Error";
import Loading from "../Helpers/Loading";
import Product from "./Product";
import Button from "../Buttons/Button";

const SampleProducts = () => {
  const {
    productsLoading,
    productsError,
    sampleProducts,
  } = useProductsContext();
  if (productsLoading) {
    return <Loading />;
  }
  if (productsError) {
    return <Error />;
  }
  return (
    <Wrapper className="container container-center">
      <div className="header">
        <h3>Selected just for you</h3>
        <Button buttonName={"SHOW MORE"} />
      </div>
      <div className="container-center gallery">
        {sampleProducts.map((product) => {
          return <Product key={product.id} {...product} />;
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .gallery {
    margin: 4rem auto;
    display: grid;
    gap: 6.5rem;
    img {
      height: 225px;
      margin: auto;
    }
  }

  h3 {
    font-weight: 100;
    font-size: 1.8rem;
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .btn {
    display: block;
    width: 148px;
    margin: 0 auto;
    text-align: center;
  }
  @media (min-width: 576px) {
    .gallery {
      grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    }
  }
`;

export default SampleProducts;
