import React, { useState } from "react";

import ForgotPasswordForm from "./components/Form";
import { Notification } from "../../Notification";
import { Card } from "react-bootstrap";

const ForgotPasswordView = () => {
  const [message, setMessage] = useState(null);

  return (
    <>
      <Card>
        <Card.Header />
        <Card.Body>
          <div className="d-flex flex-column align-items-center">
            <span
              sx={{
                width: 10,
                height: 10,
                backgroundColor: `black`,
                backgroundSize: "100%",
                backgroundPosition: "center",
                boxShadow: "0px 3px 6px rgb(0 0 0 / 7%)",
                backgroundRepeat: "no-repeat",
                borderRadius: 12.4,
              }}
            ></span>
            <h6 className="mt-2 mb-1">Enter Email</h6>
            <p className="pb-2 fw-semibold text-dark">To retrieve password</p>

            {message && (
              <Notification
                title={message.title}
                severity={message.severity}
                message={message.text}
              />
            )}

            <div className="w100 pt-1">
              <ForgotPasswordForm setMessage={setMessage} />
            </div>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default ForgotPasswordView;
