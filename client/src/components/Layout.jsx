import React from "react";
import Navbar from "./Navbar";
import PropTypes from "prop-types";

const Layout = ({ children, hasNav }) => {
  return (
    <>
      {hasNav && <Navbar />}

      <main>{children}</main>

      <footer className="text-center">problem finder Created by ME!</footer>
    </>
  );
};

Layout.propTypes = {
  hasNav: PropTypes.bool.isRequired,
  children: PropTypes.element.isRequired,
};

export default Layout;
