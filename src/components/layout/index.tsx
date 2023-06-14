import React from "react";
import Header from "../header";
import Footer from "../footer";

type Props = {
  children: React.ReactNode;
};

const Layout = (props: Props) => {
  return (
    <main className="bg-primary">
      <Header />
      <main>{props.children}</main>
      <Footer />
    </main>
  );
};

export default Layout;
