import React, { useState } from "react";
import { Card } from "react-bootstrap";
import { Notification } from "../Notification";
import logo from "../../assets/images/logo.svg";
import RegisterForm from "./components/Form";

const RegisterView = () => {
  const [message, setMessage] = useState(null);

  return (
    <>
      <Card>
        <Card.Header />
        <Card.Body>
          <div className="d-flex flex-column align-items-center">
            <span
              sx={{
                width: 80,
                height: 80,
                backgroundImage: `url(${logo})`,
                backgroundSize: "100%",
                backgroundPosition: "center",
                boxShadow: "0px 3px 6px rgb(0 0 0 / 7%)",
                backgroundRepeat: "no-repeat",
                borderRadius: theme.spacing(12.4),
              }}
            ></span>
            <h6 className="mt-2 mb-1"> Sign Up</h6>
            <p className="pb-2 fw-semibold grey[500]">
              To start using Reddit Proble finder
            </p>

            {message && (
              <Notification
                title={message.title}
                severity={message.severity}
                message={message.text}
              />
            )}

            <div className="w-100 pt-1">
              <RegisterForm setMessage={setMessage} />
            </div>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default RegisterView;
