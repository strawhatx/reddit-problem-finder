import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const HomeView = () => {
  return (
    <>
      {/** Hero */}
      <div className="bg-light text-dark" style={{ height: "100vh" }}>
        <Container fluid="lg" className="pt-22 pb-15">
          <Row>
            <Col xs={12} sm={6} style={{ zIndex: 1 }}>
              <div>
                <h2 className="text-start justify-content-center mb-4">
                  Manage Assets Smarter & Faster
                </h2>
              </div>
              <div>
                <p className="text-start justify-content-center fs-3 mb-4">
                  Simply and securely buy, sell, and manage hundreds of
                  cryptocurrencies.
                </p>
              </div>
              <div className="d-flex">
                <Button
                  variant="primary"
                  className="w-full px-4 py-2 tracking-wide text-white rounded"
                >
                  Download the app
                </Button>
              </div>
            </Col>
            <Col item xs={0} sm={6} style={{ zIndex: 1 }}>
              <div>
                <img
                  width={250}
                  height={350}
                  src=""
                  className="w-100"
                  alt="header-logo"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default HomeView;
