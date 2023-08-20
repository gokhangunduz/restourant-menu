"use client";

import { useContext } from "react";
import { DataContext } from "@/contexts/DataContext";

const useData = () => {
  const useData: IuseData = useContext(DataContext);

  return useData;
};

export default useData;
