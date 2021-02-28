import { React, useState } from "react";
import styled from "styled-components";
import { useFilteredContext } from "../../context/useFilteredContext";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
import FiltersContainer from "./FiltersContainer";
import { filtertitles } from "../../utils/constants";
import tick from "../../assets/tick.svg";

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

  const [state, setOpen] = useState({ productType: true, price: true });

  const toggleHandler = (e) => {
    const id = e.currentTarget.id;

    if (id === "product-type-icon") {
      setOpen({ ...state, productType: !state.productType });
    }
    if (id === "price-icon") {
      setOpen({ ...state, price: !state.price });
    }
  };

  return (
    <Wrapper>
      <div className="content">
        <form onSubmit={(event) => event.preventDefault()}>
          {/* categories */}
          <div className="form-control">
            <div className="header">
              <h5>PRODUCT TYPE</h5>{" "}
              <div className="icon-box">
                {state.productType ? (
                  <MdKeyboardArrowUp
                    id="product-type-icon"
                    onClick={toggleHandler}
                    style={{ cursor: "pointer" }}
                  />
                ) : (
                  <MdKeyboardArrowDown
                    id="product-type-icon"
                    onClick={toggleHandler}
                    style={{ cursor: "pointer" }}
                  />
                )}
              </div>
            </div>
            <div
              className={`${
                state.productType ? "category-list" : "category-list none"
              }`}
            >
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
          <form onSubmit={(event) => event.preventDefault()}>
            <div className="form-control">
              <div className="header">
                <h5>PRICE</h5>
                <div className="icon-box">
                  {state.price ? (
                    <MdKeyboardArrowUp
                      id="price-icon"
                      onClick={toggleHandler}
                      style={{ cursor: "pointer" }}
                    />
                  ) : (
                    <MdKeyboardArrowDown
                      id="price-icon"
                      onClick={toggleHandler}
                      style={{ cursor: "pointer" }}
                    />
                  )}
                </div>
              </div>
              <div
                className={`${
                  state.price ? "price-content" : "price-content none"
                }`}
              >
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
            </div>
            {/* price filter end */}
            <div>
              {filtertitles.map((item) => {
                const { id, title } = item;
                return <FiltersContainer key={id} title={title} />;
              })}
            </div>
          </form>
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

  .none {
    display: none;
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
    background: url(${tick});
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
