import useData from "@/hooks/useData";
import React, { ReactElement } from "react";
import ProductsLayout from "./ProductsLayout";

interface ICategoriesLayout {
  category: ICategory;
}

export default function CategoriesLayout({
  category,
}: ICategoriesLayout): ReactElement {
  const { products } = useData();

  return (
    <section className="col-span-full">
      <div>{category?.name}</div>
      <ProductsLayout
        products={products?.filter(
          (product: IProduct) => product?.category_id === category?.id
        )}
      />
    </section>
  );
}
