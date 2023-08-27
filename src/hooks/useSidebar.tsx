"use client";

import { useContext } from "react";
import { SidebarContext } from "@/contexts/SidebarContext";

const useSidebar = () => {
  const useSidebar: IuseSidebar = useContext(SidebarContext);

  return useSidebar;
};

export default useSidebar;
