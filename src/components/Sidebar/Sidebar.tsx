import React, { ReactElement } from "react";
import packageJSON from "../../../package.json";
import useSidebar from "@/hooks/useSidebar";
import Image from "next/image";
import useData from "@/hooks/useData";
import { slugify } from "@/app/functions/functions";

export default function Sidebar(): ReactElement {
  const { setIsOpen } = useSidebar();

  const { categories } = useData();

  return (
    <div className="fixed inset-0 w-screen h-screen flex z-10">
      <div
        className="w-full h-full z-10"
        onClick={() => setIsOpen(false)}
      ></div>
      <div className="flex flex-col items-center justify-between fixed h-screen w-2/3 md:w-1/2 lg:w-1/3 2xl:w-1/4 top-0 right-0 p-10 bg-slate-50 z-10 border-l border-slate-300 shadow-lg animate__animated animate__fadeInRight animate__faster">
        <Image
          height={64}
          width={160}
          src="https://via.placeholder.com/160x64?text=Logo"
          alt="logo"
        />
        <ul className="flex flex-col gap-4">
          {categories.map((url) => (
            <li key={url.name}>
              <a
                className="text-xl font-semibold text-layer-dark-900 dark:text-layer-light-50 hover:underline hover:underline-offset-4 transition-all duration-500"
                href={`#${slugify(url.name)}`}
                onClick={() => setIsOpen(false)}
              >
                {url.name}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex flex-col items-center gap-4">
          <div
            className="
    flex items-center justify-center p-2"
          >
            <span className="text-xs text-light">
              Copyright © 2023 | All Rights Reserved
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
