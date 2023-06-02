import React from "react";
import Navbar from "./Common/Navbar/Navbar";
import Footer from "./Common/Footer/Footer";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
