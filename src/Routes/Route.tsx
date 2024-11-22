import { Route,Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "../Ui/Home";
import Login from "../Ui/Login";
import SignUp from "../Ui/SignUp";
import SubscriptionVideo from "../Ui/SubscriptionVideo";
import PlayList from "../Ui/PlayList";
import History from "../Ui/History";
import Liked from "../Ui/Liked";

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
        path="/subscription/videos"
        element={
          <Layout>
            <SubscriptionVideo/>
          </Layout>
        }
      />
      <Route
        path="/playlist"
        element={
          <Layout>
            <PlayList/>
          </Layout>
        }
      />
      <Route
        path="/history"
        element={
          <Layout>
            <History/>
          </Layout>
        }
      />
      <Route
        path="liked-videos"
        element={
          <Layout>
            <Liked/>
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
