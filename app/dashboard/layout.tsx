import SideBar from "@/components/dashboard/SideBar";
import React from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <SideBar />
      <main className="flex-1 h-screen overflow-auto p-4">{children}</main>
    </div>
  );
};

export default DashboardLayout;
