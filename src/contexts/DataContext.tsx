"use client";

import React, { createContext } from "react";
import categories from "@/mocks/categories.json";
import products from "@/mocks/products.json";

export const DataContext: any = createContext<any>(null);

// eslint-disable-next-line
export default ({ children }: any) => {
  return (
    <DataContext.Provider value={{ categories, products }}>
      {children}
    </DataContext.Provider>
  );
};
