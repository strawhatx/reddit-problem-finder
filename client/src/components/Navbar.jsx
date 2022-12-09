import React, { useState, useEffect } from "react";
import logo from "../../assets/images/coins-logo-black.png";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import useAuthStore from "../stores/authentication";

const Navbar = () => {
  const [color, setColor] = useState("transparent");

  const { currentUser, logout } = useAuthStore((state) => ({
    currentUser: state.currentUser,
    logout: state.logout,
  }));

  const handleSignOut = () => {
    logout().then(() => navigate("/signin"));
  };

  const handleNavColor = () => {
    console.log(window.scrollY);

    let height = window.screen.width > 600 ? 80 : 64;

    if (window.scrollY >= height) {
      setColor("primary");
    } else {
      setColor("transparent");
    }
  };

  window.addEventListener("scroll", handleNavColor);

  return (
    <div className="flex-grow-1">
      <Navbar position="fixed" bg={color}>
        <Navbar.Brand href="/">
          <img src={logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>

            {currentUser && <Nav.Link href="/search">Home</Nav.Link>}

            {currentUser && <Nav.Link href="/my-account">Home</Nav.Link>}
          </Nav>

          {!currentUser && (
            <Nav>
              <Nav.Link href="/signin">Sign In</Nav.Link>
              <Nav.Link href="/signup">Sign Up</Nav.Link>
            </Nav>
          )}

          {currentUser && (
            <Nav>
              <NavDropdown
                title={currentUser.email}
                id="navbarScrollingDropdown"
              >
                <NavDropdown.Item href="/my-account">Profile</NavDropdown.Item>
                <NavDropdown.Item href="/my-account">
                  My Account
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={handleSignOut}>
                  Sign out{" "}
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          )}
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Navbar;
