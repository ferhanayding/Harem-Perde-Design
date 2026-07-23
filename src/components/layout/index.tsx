import React from "react";
import Header from "../header";
import Footer from "../footer";
import SocialMedia from "../SocialMedia";

type Props = {
  children: React.ReactNode;
};

const Layout = (props: Props) => {
  return (
    <main className="min-h-screen bg-primary text-textPrimary relative overflow-x-hidden">
      <Header />
      <SocialMedia />
      <section className="relative pt-16">{props.children}</section>
      <Footer />
    </main>
  );
};

export default Layout;
