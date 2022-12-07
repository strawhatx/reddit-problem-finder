import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Index";
import Layout from "./components/Layout";
import Login from "./pages/login/Index";
import Register from "./pages/register/Index";
import ForgotPassword from "./pages/forgot-password/Index";
import UserProfile from "./pages/profile/Index";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          exact
          path="/"
          element={<Layout children={<Home />} hasNav={true} />}
        />
        <Route
          exact
          path="/signup"
          element={<Layout children={<Register />} hasNav={false} />}
        />
        <Route
          exact
          path="/signin"
          element={<Layout children={<Login />} hasNav={false} />}
        />
        <Route
          exact
          path="/my-account"
          element={<Layout children={<UserProfile />} hasNav={true} />}
        />
        <Route
          exact
          path="/forgot-password"
          element={<Layout children={<ForgotPassword />} hasNav={false} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
