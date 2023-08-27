"use client";

import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Sidebar from "@/components/Sidebar/Sidebar";
import DataContext from "@/contexts/DataContext";
import React from "react";
import "animate.css";
import useSidebar from "@/hooks/useSidebar";

export default function MainLayout({ children }: any) {
  const { isOpen } = useSidebar();
  return (
    <DataContext>
      <Header />
      <main className="pt-28 p-2 animate__animated animate__fadeInUpBig">
        {children}
      </main>
      {isOpen && <Sidebar />}
      <Footer />
    </DataContext>
  );
}
