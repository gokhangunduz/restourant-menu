import ProductItem from "@/components/ProductItem/ProductItem";
import React, { ReactElement } from "react";

interface IProductsLayout {
  products: any[] | undefined;
}

export default function ProductsLayout({
  products,
}: IProductsLayout): ReactElement {
  return (
    <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
      {products?.map((product) => {
        return <ProductItem key={product.id} product={product} />;
      })}
    </div>
  );
}
