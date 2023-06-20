import Categories from "@/components/categories";
import Featured from "@/components/featured";
import MyWorks from "@/components/myWorks";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex overflow-hidden  min-h-screen bg-textPrimary flex-col items-center justify-between  ${inter.className}`}
    >
      <Featured />
      <Categories />
      <MyWorks />
    </main>
  );
}
