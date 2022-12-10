import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

const HomeView = () => {
  return (
    <>
      <div
        className="d-flex justify-content-center align-items-center flex-column bg-light text-dark"
        style={{ height: "100vh" }}
      >
        <Container fluid="xs">
          <Row className="justify-content-md-center">
            <Col>
              <h2 className="display-4 text-center">
                Find user issues on Reddit
              </h2>

              <p className="lead mb-4 text-center">
                Search the Reddit database for user issues with
                <br />
                user defined queries.
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>
                Flash sales and promotions are the top reasons people opt in to
                text messages from businesses. If you’re running a promotion and
                want your customers to take action immediately, there’s hardly a
                more proven method of getting the word out than text. You’re
                almost guaranteed a sharp boost in revenue and quick returns on
                your investment.
                <br />
                <br />
                Start by offering your customers a reward when they text in a
                keyword. This message can appear as a pop-up on your website
                with a widget that directly inputs the keyword on their text
                messaging app.
              </p>

              <div className="mt-8">
                <Button
                  variant="primary"
                  className="w-full px-4 py-2 tracking-wide text-white"
                  href="/signup"
                >
                  Get Started
                </Button>
              </div>
            </Col>
            <Col>
              <img
                src=""
                class="img-thumbnail me-2"
                width="100"
                height="400"
                alt="app-previews"
              ></img>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default HomeView;
