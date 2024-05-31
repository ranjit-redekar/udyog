"use client";
import { useState, useEffect } from "react";
import { getInvoice } from "./data/seed";
import { useRouter } from "next/navigation";
import Filter from "@/app/(components)/Filter";
import { DataTable } from "@/app/(components)/table/data-table";
import { columns } from "./columns";
import { format } from "date-fns";

export default function TaskPage() {
  const [data, setData] = useState<any[]>([]);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      const res = await getInvoice();
      console.log(res, "Invoice data")
      setData(res.map((ele) => ({...ele, invoiceDate: format(ele?.invoiceDate, "PPpp")})));
    };
    fetchData();
  }, []);

  const handleFilterInputChange = (value: string) => {
    // Handle filter input change
  };

  const handleResetFilter = () => {
    // Handle reset filter
  };

  return (
    <div>
      {/* <h3 className="text-xl font-bold tracking-tight" >Sales Invoice</h3> */}
      <Filter
        heading="Sales Invoice"
        onAddButtonClick={() => router.push("/sales/invoice/add")}
        onFilterInputChange={handleFilterInputChange}
        onResetFilter={handleResetFilter}
        addButtonLabel="Add Invoice"
      />
      <DataTable data={data} columns={columns} />
    </div>
  );
}
