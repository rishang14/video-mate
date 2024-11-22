import { Route,Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "../Ui/Home";
import Login from "../Ui/Login";
import SignUp from "../Ui/SignUp";

const Router = () => {
  return (
    <>
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <Home />
          </Layout>
        }
      />
      <Route
        path="/login"
        element={
          <Layout>
            <Login/>
          </Layout>
        }
      />
      <Route
        path="/signup"
        element={
          <Layout>
            <SignUp />
          </Layout>
        }
      />
      </Routes>
    </>
  );
};

export default Router;
