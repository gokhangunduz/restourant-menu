import useData from "@/hooks/useData";
import React, { ReactElement } from "react";
import ProductsLayout from "./ProductsLayout";
import { slugify } from "@/app/functions/functions";

interface ICategoriesLayout {
  category: ICategory;
}

export default function CategoriesLayout({
  category,
}: ICategoriesLayout): ReactElement {
  const { products } = useData();

  return (
    <section
      className={`${
        category?.id > 1 && "pt-28"
      } col-span-full flex flex-col gap-4 animate__animated animate__fadeIn animate__slower`}
      id={slugify(category?.name)}
    >
      <p className="text-dark text-2xl font-bold">{category?.name}</p>
      <ProductsLayout
        products={products?.filter(
          (product: IProduct) => product?.category_id === category?.id
        )}
      />
    </section>
  );
}
