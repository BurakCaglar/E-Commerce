import React from "react";
import styled from "styled-components";
import { useFilteredContext } from "../../context/useFilteredContext";
import { MdKeyboardArrowUp } from "react-icons/md";
import FiltersContainer from "./FiltersContainer";
import { filtertitles, navlinks } from "../../utils/constants";

const Filters = () => {
  const {
    filters: { title, price, maxPrice, minPrice },
    changeFilters,
    all,
  } = useFilteredContext();

  const nonRepeatingValues = (values, type) => {
    let nonRepeatingValues = values.map((item) => item[type]);
    return ["all", ...new Set(nonRepeatingValues)];
  };

  const categories = nonRepeatingValues(all, "category");

  return (
    <Wrapper>
      <div className="content">
        <form onSubmit={(event) => event.preventDefault()}>
          {/* categories */}
          <div className="form-control">
            <div className="header">
              <h5>PRODUCT TYPE</h5> <MdKeyboardArrowUp />
            </div>
            <div className="category-list">
              <span className="input-wrapper">
                <input
                  key={0}
                  onChange={changeFilters}
                  name="category"
                  id={categories[0]}
                  type="radio"
                  value={categories[0]}
                />
                <label htmlFor={categories[0]}>Products</label>
              </span>

              {categories.slice(1, categories.length).map((item, index) => {
                return (
                  <div className="input-wrapper" key={index}>
                    <input
                      key={index}
                      onChange={changeFilters}
                      name="category"
                      id={item}
                      type="radio"
                      value={item}
                    />
                    <label htmlFor={item}>{item}</label>
                  </div>
                );
              })}
            </div>
          </div>
          {/* categories filter end */}
          {/* price filter start */}
          <div className="form-control">
            <div className="header">
              <h5>PRICE</h5> <MdKeyboardArrowUp />
            </div>
            <p className="price">${Math.ceil(price)}</p>
            <input
              type="range"
              name="price"
              min={minPrice}
              max={Math.ceil(maxPrice)}
              value={price}
              onChange={changeFilters}
            />
          </div>
          {/* price filter end */}
          <div>
            {filtertitles.map((item) => {
              const { id, title } = item;
              return <FiltersContainer title={title} />;
            })}
          </div>
        </form>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .form-control {
    border: 1px solid #e6e6e6;
    padding: 2rem 1.3rem;
    margin-bottom: 1.25rem;
    h5 {
      margin-bottom: 0.5rem;
      letter-spacing: var(--spacing);
      font-size: 1.2rem;
      color: var(--black);
    }

    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1rem;
      svg {
        font-size: 2rem;
        margin-bottom: 0.7rem;
      }
    }
  }

  .price {
    text-align: right;
  }

  .category-list {
    display: flex;
    flex-direction: column;
  }
  .search-input {
    padding: 0.5rem;
    border-radius: var(--radius);
    border-color: transparent;
    letter-spacing: var(--spacing);
  }
  .search-input::placeholder {
    text-transform: capitalize;
  }

  .input-wrapper {
    display: flex;
  }
  input[type="radio"] {
    padding: 0.5rem;
    -webkit-appearance: none;
    border: 1px solid black;
  }

  input[type="radio"]:checked {
    background: url("https://www.flaticon.com/svg/vstatic/svg/63/63659.svg?token=exp=1614187634~hmac=2b4fcc6700c8a5f4aecca4bc9fe220e0");
    background-repeat: no-repeat;
    background-position: center;
    background-size: 9px 9px;
  }

  input[type="radio"]:focus {
    outline-color: transparent;
  }
  input {
    margin-bottom: 1rem;
  }
  input[type="range"] {
    -webkit-appearance: none;
    background: black;
    height: 0.2rem;
    width: 90%;
    margin: 2rem 0 0 0.5rem;
  }
  input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 16px;
    width: 16px;
    border: 2px solid black;
    border-radius: 50%;
    background: white;
    margin-top: -2px;
    cursor: pointer;
    margin-left: 0.5px;
  }

  label {
    margin-left: 1rem;
    font-size: 1.2rem;
    font-weight: 300;
    text-transform: capitalize;
  }
`;

export default Filters;
