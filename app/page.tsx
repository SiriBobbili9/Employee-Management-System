import Image from "next/image";
import Sidebar from "./components/layout/Sidebar";
import Navbar from "./components/layout/Navbar";
import MainLayout from "./components/layout/MainLayout";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      {/* <Navbar />
      <Sidebar /> */}
      <MainLayout> Siri </MainLayout>
    </div>
  );
}
