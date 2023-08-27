import useSidebar from "@/hooks/useSidebar";
import Image from "next/image";
import React, { ReactElement } from "react";
import { BiMenuAltRight } from "react-icons/bi";

export default function Header(): ReactElement {
  const { setIsOpen } = useSidebar();

  return (
    <header className="fixed top-0 w-full z-10 flex items-center justify-between p-2.5 bg-slate-50 shadow-md animate__animated animate__fadeInDownBig">
      <Image
        height={64}
        width={160}
        src="https://via.placeholder.com/160x64?text=Logo"
        alt="logo"
      />
      <BiMenuAltRight
        onClick={() => setIsOpen(true)}
        className="text-4xl text-slate-600 cursor-pointer"
      />
    </header>
  );
}
