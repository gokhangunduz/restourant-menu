"use client";

import useData from "@/hooks/useData";
import CategoriesLayout from "@/layouts/CategoriesLayout";
import Image from "next/image";
import { ReactElement } from "react";

export default function MenuPage(): ReactElement {
  const { categories } = useData();

  return (
    <div className="grid grid-cols-1 gap-12">
      {categories?.map((category: ICategory) => {
        return <CategoriesLayout key={category.id} category={category} />;
      })}
    </div>
  );
}
