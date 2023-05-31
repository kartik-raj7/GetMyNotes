import React from "react";
import Layout  from "../Layout";
import { Helmet } from "react-helmet";
import Banner  from "../Component/Homepage/Banner";
import Ourgoal  from "../Component/Homepage/Ourgoal";
import University from "../Component/Homepage/University";
import Courses from "../Component/Homepage/Courses";
import Navbar from "../Common/Navbar/Navbar";
const TITLE = "GetMyNotes";
const Homepage = () => {
  return (
    <div className="home">
      <Helmet>
        <title>{TITLE}</title>
      </Helmet>
      <Layout>
          <Banner />
        <Ourgoal />
        <University />
        <Courses />
      </Layout>
    </div>
  );
};

export default Homepage;
