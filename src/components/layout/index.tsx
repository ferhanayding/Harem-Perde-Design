import React from "react";
import Header from "../header";
import Footer from "../footer";
import SocialMedia from "../SocialMedia";

type Props = {
  children: React.ReactNode;
};

const Layout = (props: Props) => {
  return (
    <main className="bg-primary relative overflow-x-hidden ">
      <Header />
      <SocialMedia />
      <section>{props.children}</section>
      <Footer />
    </main>
  );
};

export default Layout;
