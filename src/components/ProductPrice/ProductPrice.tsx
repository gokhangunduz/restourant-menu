import useData from "@/hooks/useData";
import React from "react";

interface IProductPrice {
  price: number;
}

export default function ProductPrice({ price }: IProductPrice) {
  const { restourant } = useData();

  return (
    <div className="flex gap-1">
      <span className="text-sm font-light line-through">
        {price * 1.05} {restourant.currency}
      </span>
      <span className="text-sm font-light">
        {price} {restourant.currency}
      </span>
    </div>
  );
}
