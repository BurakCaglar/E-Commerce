import React from "react";
import { useProductsContext } from "../../context/useProductsContext";
import styled from "styled-components";
import Error from "../Helpers/Error";
import Loading from "../Helpers/Loading";
import Product from "./Product";
import { Button } from "../Buttons/Button";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import nextArrow from "../../assets/slider/next-arrow.svg";
import prevArrow from "../../assets/slider/prev-arrow.svg";

const SampleProducts = () => {
  var settings = {
    infinite: true,
    speed: 750,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
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
        <Link to="/products">
          <Button buttonName={"SHOW MORE"} />
        </Link>
      </div>
      <Slider className="container-center gallery" {...settings}>
        {sampleProducts.map((product) => {
          return (
            <div key={product.id}>
              <Product {...product} />
            </div>
          );
        })}
      </Slider>
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

    @media (min-width: 576px) {
      grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    }
  }

  h3 {
    font-weight: 300;
    font-size: 1.8rem;
    @media only screen and (max-width: 340px) {
      font-size: 1.5rem;
    }
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  @media only screen and (max-width: 500px) {
    .slick-arrow {
      display: none;
      width: 0px;
      height: 0px;
    }
    .slick-prev:before {
      display: none;
    }
    .slick-next:before {
      display: none;
    }
  }

  .slick-prev:before {
    content: url(${prevArrow});
    transform: rotate(180deg);
    color: red;
    font-size: 30px;
  }

  .slick-next:before {
    content: url(${nextArrow});
    color: red;
    font-size: 30px;
  }
`;

export default SampleProducts;
