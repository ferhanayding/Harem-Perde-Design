import About from "@/components/About";
import Refarance from "@/components/Referance";
import Services from "@/components/Services";
// import Categories from "@/components/categories";
import Featured from "@/components/featured";
import MyWorks from "@/components/myWorks";
import ReferencesList from "@/components/referencesList";
import Info from "@/components/workscompanies";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex overflow-hidden  min-h-screen  flex-col items-center justify-between  ${inter.className}`}
    >
      <Featured />
      <Refarance />

      <About />
      {/* <Categories /> */}
      <MyWorks />
      {/* <Info /> */}

      <ReferencesList />
      <Services />
    </main>
  );
}
