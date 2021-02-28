import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { navlinks } from "../../utils/constants";
import { NavbarSidebarButtons } from "../../components";
import { useProductsContext } from "../../context/useProductsContext";
import Brand from "../Helpers/Brand";
import logo from "../../assets/logo.svg";
import logo2 from "../../assets/logo-white.svg";

const Navbar = () => {
  const { openSidebar } = useProductsContext();

  const [state, setState] = useState({
    nav: false,
  });

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const handleScroll = () => {
    if (window.pageYOffset > 50) {
      if (!state.nav) {
        setState({ nav: true });
      }
    } else {
      if (state.nav) {
        setState({ nav: false });
      }
    }
  };

  return (
    <NavBarSticky>
      <div className={`nav ${state.nav && "nav-black"}`}>
        <NavContainer>
          <div className={`nav-center ${state.nav && "nav-maximum"}`}>
            <div className="nav-header">
              <Link to="/" className="brand">
                <img src={`${state.nav ? logo2 : logo}`} alt="logo" />
                <p>
                  <span style={{ color: "orange" }}>E</span>-Shop
                </p>
              </Link>
              <button
                type="button"
                className="nav-toggle"
                onClick={() => openSidebar()}
              >
                <FaBars />
              </button>
            </div>
            <ul className="nav-links">
              {navlinks.map((link) => {
                const { id, text, url } = link;
                return (
                  <li key={id}>
                    <Link to={url}>
                      <h5>{text}</h5>
                    </Link>
                  </li>
                );
              })}
            </ul>
            <span className="cart-buttons">
              <NavbarSidebarButtons hover="orange" />
            </span>
          </div>
        </NavContainer>
      </div>
    </NavBarSticky>
  );
};
const NavBarSticky = styled.nav`
  height: 7rem;
  display: flex;
  align-items: center;
  justify-content: center;

  /* Sticky Navbar */
  .nav {
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 2;
    transition: var(--transition);
  }
  .nav-black {
    z-index: 2;
    background: rgba(0, 0, 0, 0.9);
    padding: 0.5rem 0;
    width: 100%;
    a,
    p {
      color: var(--white) !important;
    }
    svg {
      color: var(--white);
    }
  }
`;

const NavContainer = styled.div`
  .nav-center {
    width: 90vw;
    margin: 0 auto;
    max-width: var(--max-width);
    transition: all 0.5s linear;
  }
  .nav-maximum {
    max-width: 95%;
  }
  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .brand {
      display: flex;
      align-items: center;

      p {
        font-size: 2rem;
        font-weight: 300;
      }

      img {
        width: 5.5rem;
        height: 4.5rem;
        margin-right: 2rem;
      }
    }
  }
  .nav-toggle {
    background: transparent;
    border: none;
    color: var(--black);
    cursor: pointer;
    svg {
      margin-top: 1rem;
      font-size: 3.5rem;
    }
  }
  .nav-links {
    display: none;
  }

  @media (min-width: 992px) {
    .nav-toggle {
      display: none;
    }
    .nav-center {
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;
    }
    .nav-links {
      display: flex;
      justify-content: center;
      li {
        margin: 0 5rem;
      }
      a {
        font-size: 1.3rem;
        font-weight: 300;
        text-transform: capitalize;
        letter-spacing: var(--spacing);
        padding: 0.5rem;
        color: var(--black);
        &:hover {
          color: orange !important;
        }
      }
    }
  }

  .cart-buttons {
    @media (max-width: 992px) {
      display: none;
    }
  }
`;

export default Navbar;
