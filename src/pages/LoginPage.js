import React from "react";
import styled from "styled-components";
import { Breadcrumb } from "../components";
import { Button, ButtonV2 } from "../components/Buttons/Button";

const LoginPage = () => {
  return (
    <>
      <Breadcrumb title="Login" />
      <Wrapper className="container container-center page-70">
        <div className="wrapper">
          <h4>Log in</h4>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>
          <div className="login-form">
            <input
              type="email"
              name="email"
              className="form-input"
              placeholder="Email"
            />
            <input
              type="password"
              name="password"
              className="form-input"
              placeholder="Password"
            />
            <ButtonV2 buttonName="Sign in" />
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default LoginPage;

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  transform: translateY(10%);
  .wrapper {
    display: flex;
    flex-direction: column;
    max-width: 45rem;
  }

  h4 {
    font-weight: 300;
    text-align: center;
  }
  p {
    text-align: center;
    margin: 2rem auto;
  }
  .login-form {
    display: flex;
    flex-direction: column;
    @media only screen and (max-width: 1000px) {
      text-align: center;
    }
    input {
      width: 100%;
      height: 4.3rem;
      border-radius: 5rem;
      border: none;
      margin: 0 0 2rem 0;
      padding-left: 3.5rem;
      border: 1px solid var(--light-grey);
      @media only screen and (max-width: 1000px) {
        height: 3.3rem;
        margin: 1rem 0 0 0;
        padding-left: 1rem;
      }
      ::placeholder {
      }
    }
  }
`;
