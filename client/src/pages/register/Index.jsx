import React from "react";
import { Container } from "react-bootstrap";
import RegisterView from "../../components/register/Index";

const Register = () => {
  return (
    <>
      <div sx={{ py: 10 }}>
        <Container fluid="xs">
          <RegisterView />
        </Container>
      </div>
    </>
  );
};

export default Register;
