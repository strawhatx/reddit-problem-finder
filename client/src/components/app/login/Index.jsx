import React, { useState } from "react";
import logo from "../../assets/images/logo.svg";
import LoginForm from "./components/Form";
import { Notification } from "../../Notification";
import { Card } from "react-bootstrap";

const LoginView = () => {
  const [message, setMessage] = useState(null);

  return (
    <>
      <Card>
        <Card.Header />
        <Card.Body>
          <div className="d-flex flex-column align-items-center">
            <span
              style={{
                width: 10,
                height: 10,
                backgroundImage: `url(${logo})`,
                backgroundSize: "100%",
                backgroundPosition: "center",
                boxShadow: "0px 3px 6px rgb(0 0 0 / 7%)",
                backgroundRepeat: "no-repeat",
                borderRadius: theme.spacing(12.4),
              }}
            ></span>
            <h6 className="mt-2 mb-1">Sign In</h6>
            <p className="pb-2 fw-semibold text-muted">
              To start using CryptoWatch
            </p>

            {message && (
              <Notification
                title={message.title}
                severity={message.severity}
                message={message.text}
              />
            )}

            <div className="w-100 pt-1">
              <LoginForm setMessage={setMessage} />
            </div>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default LoginView;
