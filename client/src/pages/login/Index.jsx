import React from "react";
import { Container } from "react-bootstrap";
import LoginView from "../../components/app/login/Index";

const Login = () => {
  return (
    <>
      <div className="py-10">
        <Container fluid="xs">
          <LoginView />
        </Container>
      </div>
    </>
  );
};

export default Login;
