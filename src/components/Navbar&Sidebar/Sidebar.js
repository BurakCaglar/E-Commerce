import React from "react";
import logo from "../../assets/logo-white.svg";
import { Link } from "react-router-dom";
import { useProductsContext } from "../../context/useProductsContext";
import { FaTimes } from "react-icons/fa";
import { navlinks } from "../../utils/constants";
import styled from "styled-components";
import { NavbarSidebarButtons } from "../../components";
import ChatWidget from "../../components/ChatWidget";

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useProductsContext();

  return (
    <SidebarContainer>
      <aside
        className={`${isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}`}
      >
        <div className="sidebar-header">
          <div className="sidebar-right">
            <div className="cart-buttons">
              <NavbarSidebarButtons />
            </div>
            <button
              className="close-btn"
              type="button"
              onClick={() => closeSidebar()}
            >
              <FaTimes />
            </button>
          </div>
        </div>
        <ul className="links">
          {navlinks.map(({ id, text, url }) => {
            return (
              <li key={id}>
                <Link to={url} onClick={() => closeSidebar()}>
                  <h5>{text}</h5>
                </Link>
              </li>
            );
          })}
        </ul>
      </aside>
      <ChatWidget />
    </SidebarContainer>
  );
};

const SidebarContainer = styled.div`
  text-align: center;

  .sidebar-header {
    display: flex;
    justify-content: flex-end;
    transform: translateX(-21%);
    align-items: center;
    padding: 1rem 1.5rem;

    .brand-info {
      display: flex;
      align-items: center;

      h4 {
        color: var(--white);
        margin-left: 2rem;
        font-weight: 300;
        letter-spacing: var(--spacing);
      }

      span {
        color: orange;
      }
    }
  }
  .close-btn {
    font-size: 3rem;
    background: transparent;
    border-color: transparent;
    transition: var(--transition);
    color: var(--white);
    cursor: pointer;
    margin-top: 0.7rem;
    &:hover {
      color: var(--grey);
    }
    &:focus {
      color: var(--grey);
    }
  }

  .logo {
    justify-self: center;
    height: 45px;
    @media (max-width: 500px) {
      height: 35px;
    }
  }
  .links {
    margin-bottom: 2rem;
    transform: translateX(-21%);
  }
  .links a {
    display: block;
    text-align: right;
    font-size: 1rem;
    text-transform: capitalize;
    padding: 1rem 1.5rem;
    color: var(--white);
    transition: var(--transition);
    letter-spacing: var(--spacing);

    &:active {
      display: none;
    }
  }

  .links a:hover {
    color: var(--grey);
  }

  .sidebar {
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: var(--black);
    transition: var(--transition);
    transform: translate(100%);
    z-index: -1;
  }
  .show-sidebar {
    transform: translate(20%);
    z-index: 999;
  }
  .cart-btn-wrapper {
    margin: 2rem auto;
  }
  @media screen and (min-width: 992px) {
    .sidebar {
      display: none;
    }
  }

  .cart-buttons {
    display: grid;
    float: right;
    svg {
      color: var(--white);
    }
  }
  .sidebar-right {
    display: flex;
  }

  h5 {
    font-size: 1.7rem;
  }
`;

export default Sidebar;
