"use client"

import { ColumnDef } from "@tanstack/react-table"
import { labels, priorities, statuses } from "./data/data"
// import { Task } from "./data/schema"
import { DataTableColumnHeader } from "../../(components)/table/data-table-column-header"
import { DataTableRowActions } from "../../(components)/table/data-table-row-actions"
import ComboBox from "@/app/(components)/combobox"

export const columns: ColumnDef= [
  {
    accessorKey: "id",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="ID" />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "product_name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Product Name" />
    ),
  },
  {
    accessorKey: "unit",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Unit" />
    ),
  },
  {
    accessorKey: "hsn",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="HSN Code" />
    ),
    // cell: ({ row }) => {
    //   const status = statuses.find(
    //     (status) => status.value === row.getValue("status")
    //   )

    //   if (!status) {
    //     return null
    //   }

    //   return (
    //     <div className="flex w-[100px] items-center">
    //       {status.icon && (
    //         <status.icon className="mr-2 h-4 w-4 text-muted-foreground" />
    //       )}
    //       <span>{status.label}</span>
    //     </div>
    //   )
    // },
    // filterFn: (row, id, value) => {
    //   return value.includes(row.getValue(id))
    // },
  },
  {
    accessorKey: "tax_rate",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Tax Rate" />
    ),
  },
  {
    accessorKey: "selling_price",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Selling Price" />
    ),
  },
  {
    accessorKey: "group",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Group" />
    ),
  },
  {
    id: "actions",
    cell: ({ row }) => <DataTableRowActions row={row} />,
  },
]
