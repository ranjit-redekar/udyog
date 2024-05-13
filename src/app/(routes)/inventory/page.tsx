"use client";

import { DataTable } from "@/app/(components)/table/data-table";
import React from "react";
import { columns } from "./columns";
import Filter from "@/app/(components)/Filter";
import { useRouter } from "next/navigation";

export default function Inventory() {
  const router = useRouter();
  const onFilterInputChange = () => {};
  const onResetFilter = () => {};

  return (
    <div>
      <Filter
        onAddButtonClick={() => router.push("/inventory/add")}
        onFilterInputChange={onFilterInputChange}
        onResetFilter={onResetFilter}
        addButtonLabel="Add Product"
      />
      <DataTable data={[]} columns={columns} />
    </div>
  );
}
