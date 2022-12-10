import React from "react";
import { Container } from "react-bootstrap";
import ForgotPasswordView from "../../components/app/forgot-password/Index";

const ForgotPassword = () => {
  return (
    <>
      <div className="py-10">
        <Container maxWidth="xs">
          <ForgotPasswordView />
        </Container>
      </div>
    </>
  );
};

export default ForgotPassword;
