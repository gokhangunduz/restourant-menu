import Image from "next/image";
import React, { ReactElement } from "react";

interface IProductItem {
  product: IProduct;
}

export default function ProductItem({ product }: IProductItem): ReactElement {
  return (
    <div className="col-span-1 flex items-center gap-4 border border-slate-200 rounded p-3">
      <Image
        src={product.image_url}
        alt={product?.name}
        height={144}
        width={144}
      />
      <div className="flex flex-col gap-2">
        <span>{product?.category_id}</span>
        <span>{product?.name}</span>
        <span>{product?.description}</span>
        <span>{product?.price}</span>
      </div>
    </div>
  );
}
