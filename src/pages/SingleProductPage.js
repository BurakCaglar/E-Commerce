import React, { useEffect } from "react";
import { useParams, useHistory, Link } from "react-router-dom";
import { useProductsContext } from "../context/useProductsContext";

import { Loading, Error, AddToCart, Breadcrumb } from "../components";
import styled from "styled-components";
import { ButtonV2 } from "../components/Buttons/Button";

const SingleProductPage = () => {
  const { id } = useParams();
  const history = useHistory();

  const {
    singleProductLoading,
    singleProductError,
    singleProduct,
    fetchStoreSingleProduct,
  } = useProductsContext();

  useEffect(() => {
    fetchStoreSingleProduct(id);
  }, [id]);

  useEffect(() => {
    if (singleProductError) {
      setTimeout(() => {
        history.push("/");
      }, 2500);
    }
  }, [singleProductError]);

  if (singleProductLoading) {
    return <Loading />;
  }

  if (singleProductError) {
    return <Error />;
  }

  const { title, description, price, image } = singleProduct;

  return (
    <Wrapper>
      <Breadcrumb title={title} singleProduct={singleProduct} />
      <div className="container container-center page">
        <div className="product-center">
          <ImageWrapper>
            <div className="mini-img">
              <img src={image} alt="image" />
            </div>
            <div className="image-wrapper">
              <img src={image} alt="image" />
            </div>
          </ImageWrapper>
          <section className="content">
            <h3>{title}</h3>

            <h5 className="price">${price}</h5>
            <p className="description">{description}</p>

            <AddToCart singleProduct={singleProduct} />
          </section>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  .product-center {
    display: grid;
    gap: 4rem;
    margin-top: 2rem;
    justify-content: center;
    text-align: center;
  }
  .price {
  }
  .description {
    line-height: 2;
    max-width: 45em;
  }
  @media (min-width: 992px) {
    .product-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
      text-align: left;
    }
    .price {
      font-size: 1.7rem;
      margin: 2rem 0;
    }
  }
`;

const ImageWrapper = styled.section`
  display: flex;
  .main {
    height: 600px;
  }
  .mini-img {
    height: 9rem;
    width: 9rem;
    margin-right: 2.5rem;
    img {
      height: 100%;
    }
    @media (max-width: 620px) {
      display: none;
    }
  }
  .image-wrapper {
    display: flex;
    justify-content: center;
    width: 35rem;
    height: 35rem;
    @media (max-width: 620px) {
      width: 30rem;
      height: 30rem;
      margin: auto;
    }
    img {
      height: 100%;
      display: block;
      object-fit: cover;
      @media (max-width: 620px) {
        margin: auto;
      }
    }
  }
  .gallery {
    margin-top: 1rem;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    column-gap: 1rem;
    img {
      height: 100px;
      cursor: pointer;
    }
  }
  .active {
    border: 2px solid red;
  }
  @media (max-width: 576px) {
    .main {
      height: 300px;
    }
    .gallery {
      img {
        height: 50px;
      }
    }
  }
  @media (min-width: 992px) {
    .main {
      height: 500px;
    }
    .gallery {
      img {
        height: 75px;
      }
    }
  }
`;

export default SingleProductPage;
