import React from "react";
import styled from "styled-components";
import Brand from "./Helpers/Brand";
import { ImFacebook, ImYoutube } from "react-icons/im";
import { SiTwitter } from "react-icons/si";
import { GrLinkedinOption } from "react-icons/gr";
import { FaInstagram } from "react-icons/fa";
import { contributors } from "../utils/constants";

const Footer = () => {
  return (
    <>
      <Wrapper className="container-center">
        <div className="brand">
          <div className="brand-logo">
            <Brand />
          </div>
          <p>
            House My Brand designs clothing for the young, the old & <br />
            everyone in between – but most importantly, for the fashionable
          </p>
          <div className="social-medias">
            <ImFacebook />
            <SiTwitter />
            <GrLinkedinOption />
            <FaInstagram />
            <ImYoutube />
          </div>
        </div>
        <div className="shopping">
          <h5>Shopping online</h5>
          <h6>Order Status</h6>
          <h6>Shipping and Delivery</h6>
          <h6>Returns</h6>
          <h6>Payment Options</h6>
          <h6>Contact Us</h6>
        </div>
        <div className="information">
          <h5>Information</h5>
          <h6>Gift Cards</h6>
          <h6>Find a store</h6>
          <h6>Newsletter</h6>
          <h6>Bacome a member</h6>
          <h6>Site feedback</h6>
        </div>
        <div className="contact">
          <h5>Contact</h5>
          <h6>store@uikit.com</h6>
          <h6>Hotline: +1 131 138 138</h6>
        </div>
      </Wrapper>
      <hr />
      <FooterWrapper>
        <div className="contributor-footer container-center">
          <p>DESIGN BY ICEO.CO - © 2020. ALL RIGHTS RESERVED.</p>
          <a href="https://github.com/BurakCaglar/E-Commerce" target="_blank">
            <p>GITHUB REPO</p>
          </a>
          <div className="contributor-content">
            <p>Coded in 2021 by:</p>
            <div className="contributors">
              {contributors.map((contributor) => {
                const { id, name, url } = contributor;
                return (
                  <a key={id} href={url} target="_blank">
                    <p>{name}</p>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </FooterWrapper>
    </>
  );
};
const FooterWrapper = styled.footer`
  margin: 1rem auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  .contributor-footer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    p {
      margin: 0.2rem 0;
    }

    .contributor-content {
      display: grid;
      justify-items: center;
    }
    .contributors {
      display: grid;
      justify-items: center;
      text-align: center;
      grid-template-columns: minmax(20px, 240px) minmax(20px, 240px) minmax(
          20px,
          240px
        );
    }

    a {
      p {
        &:hover {
          color: orange;
        }
      }
    }
  }
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;

  @media only screen and (max-width: 600px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    justify-items: center;
    .information,
    .shopping {
      display: none;
    }
  }

  @media only screen and (max-width: 400px) {
    grid-template-columns: auto;
    justify-items: center;
    .contact {
      display: none;
    }
  }

  h5 {
    font-size: 1.2rem;
    margin-bottom: 2.5rem;
  }

  h6 {
    font-size: 1.2rem;
    font-weight: 200;
    line-height: 2.5rem;
  }

  .brand {
    display: grid;

    @media only screen and (max-width: 400px) {
      text-align: center;
      .brand-logo {
        margin: 0 auto 2rem auto;
      }
    }

    .social-medias {
      display: grid;
      grid-template-columns: repeat(5, 4rem);

      svg {
        margin-top: 1rem;
        font-size: 2rem;
        color: var(--grey);
        transition: var(--transition);
        cursor: pointer;
        &:hover {
          color: var(--black);
        }
      }
      @media only screen and (max-width: 400px) {
        grid-template-columns: repeat(5, 1fr);
        justify-items: center;
        margin-top: 2rem;
        margin-bottom: 2rem;
      }
    }
  }
`;

export default Footer;
