import React from "react";
import { Router } from "@reach/router";
import Profile from "./profile"
import Layout from "../components/layout";

const User = () => {
  return (
    <Layout>
      <Router>
      <Profile path="/user/:uid" />
      </Router>
    </Layout>
  );
};

export default User;