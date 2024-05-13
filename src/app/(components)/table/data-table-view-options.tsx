"use client";

import { PlusCircledIcon } from "@radix-ui/react-icons";
import { Table } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";

interface DataTableViewOptionsProps<TData> {
  table: Table<TData>;
}

export function DataTableViewOptions<TData>({
  table,
}: DataTableViewOptionsProps<TData>) {
  return (
    <Button size="sm" className="ml-auto hidden h-8 lg:flex">
      <PlusCircledIcon className="mr-2 h-4 w-4" />
      Add Invoice
    </Button>
  );
}
