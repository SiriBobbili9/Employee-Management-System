import Image from "next/image";
import Sidebar from "./components/layout/Sidebar";
import Navbar from "./components/layout/Navbar";
import MainLayout from "./components/layout/MainLayout";
import DashboardCard from "./components/dashboard/DashboardCard";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <MainLayout>
        Home
        </MainLayout>
    </div>
  );
}
