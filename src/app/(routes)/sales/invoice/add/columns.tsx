"use client";

import { ColumnDef } from "@tanstack/react-table";
import ComboBox from "@/app/(components)/combobox";
import { makeData } from "./makeData";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { productTax } from "@/common/constants";

const optionsData = makeData(5).map((ele) => ({
  label: ele.product,
  value: ele.product,
}));

export type Invoice = {
  product: string;
  quantity: number;
  rate: number;
  tax: string;
  amount: number;
};

export const columns: ColumnDef<Invoice>[] = [
  {
    header: "#",
    accessorKey: "index",
    cell: ({ row }) => (<div className="ml-4 text-gray-500" >{row?.index + 1}</div>),
  },
  {
    header: "Product",
    accessorKey: "product",
    cell: ({ row }) => (
      <div>
        <ComboBox options={optionsData} btnclsss="border border-transparent" />
      </div>
    ),
  },
  {
    header: "Quantity",
    accessorKey: "quantity",
    cell: ({ row }) => (
      <div className="max-w-24">
        <Input type="number" className="focus-visible:border-none focus-visible:ring-0 border-none rounded-none"/>
      </div>
    ),
  },
  {
    accessorKey: "rate",
    header: () => "Rate",
    cell: ({ row }) => (
      <div className="max-w-40">
        <Input type="number" className="focus-visible:border-none focus-visible:ring-0 border-none rounded-none"/>
      </div>
    ),
  },
  {
    accessorKey: "tax",
    header: () => "Tax",
    cell: ({ row }) => (
      <div className="max-w-60">
        <Select>
          <SelectTrigger className="w-[180px] focus:ring-0 border-none rounded-none">
            <SelectValue className="placeholder:text-gray-500" placeholder="Tax(%)" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup className="max-h-52">
              {productTax.map((ele) => <SelectItem key={ele.value} value={ele.value}>{ele.label}</SelectItem>)}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    ),
  },
  {
    accessorKey: "amount",
    header: "Amount",
    // footer: (props) => props.column.id,
  },
];
