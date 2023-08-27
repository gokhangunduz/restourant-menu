"use client";

import React, { createContext } from "react";
import categories from "@/mocks/categories.json";
import products from "@/mocks/products.json";
import restourant from "@/mocks/restourant.json";

export const DataContext: any = createContext<any>(null);

// eslint-disable-next-line
export default ({ children }: any) => {
  return (
    <DataContext.Provider value={{ restourant, categories, products }}>
      {children}
    </DataContext.Provider>
  );
};
