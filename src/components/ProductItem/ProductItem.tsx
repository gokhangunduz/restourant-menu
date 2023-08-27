import React, { ReactElement } from "react";
import Image from "next/image";
import ProductPrice from "../ProductPrice/ProductPrice";

interface IProductItem {
  product: IProduct;
}

export default function ProductItem({ product }: IProductItem): ReactElement {
  return (
    <div className="col-span-1 grid grid-cols-2 p-2">
      <Image
        className="col-span-1"
        src={product.image_url}
        alt={product?.name}
        height={160}
        width={160}
      />
      <div
        className="
      col-span-1
      flex flex-col gap-2"
      >
        <p className="text-dark text-lg font-semibold">{product?.name}</p>
        <p className="text-xs text-medium">{product?.description}</p>
        <ProductPrice price={product?.price} />
      </div>
    </div>
  );
}
