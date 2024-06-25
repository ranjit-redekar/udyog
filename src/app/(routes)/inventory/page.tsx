"use client";

import { DataTable } from "@/app/(components)/table/data-table";
import React, { useEffect, useState } from "react";
import { columns } from "./columns";
import Filter from "@/app/(components)/Filter";
import { useRouter } from "next/navigation";
import { getProducts } from "@/actions";

export default function Inventory() {
  const router = useRouter();
  const onFilterInputChange = () => {};
  const onResetFilter = () => {};

  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((res) => {
      setProducts(res);
    }).catch((err) => {
      console.log("Error: while fetching the products")
      setProducts([]);
    })
  },[]);

  return (
    <div>
      <Filter
        onAddButtonClick={() => router.push("/inventory/add")}
        onFilterInputChange={onFilterInputChange}
        onResetFilter={onResetFilter}
        addButtonLabel="Add Product"
      />
      <DataTable data={products} columns={columns} />
    </div>
  );
}
