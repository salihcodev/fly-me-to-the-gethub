import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";
import loginImg from "../../images/login-img.svg";

const Login = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <h2>
      <button onClick={loginWithRedirect}>login / sign up</button>
    </h2>
  );
};
const PageWrapper = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;
  .container {
    width: 90vw;
    max-width: 600px;
    text-align: center;
  }
  img {
    margin-bottom: 2rem;
  }
  h1 {
    margin-bottom: 1.5rem;
  }
`;
export default Login;
