"use client"

import { ColumnDef } from "@tanstack/react-table"
import { labels, priorities, statuses } from "./data/data"
// import { Task } from "./data/schema"
import { DataTableColumnHeader } from "../../(components)/table/data-table-column-header"
import { DataTableRowActions } from "../../(components)/table/data-table-row-actions"
import ComboBox from "@/app/(components)/combobox"

export const columns: ColumnDef= [
  {
    accessorKey: "full_name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Full Name" />
    ),
  },
  {
    accessorKey: "mobile_number",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Mobile Number" />
    ),
  },
  {
    accessorKey: "email",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Email" />
    ),
  },
  {
    accessorKey: "type",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Type" />
    ),
  },
  {
    accessorKey: "organisation",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Organisation" />
    ),
  },
//   {
//     accessorKey: "selling_price",
//     header: ({ column }) => (
//       <DataTableColumnHeader column={column} title="Selling Price" />
//     ),
//   },
//   {
//     accessorKey: "group",
//     header: ({ column }) => (
//       <DataTableColumnHeader column={column} title="Group" />
//     ),
//   },
//   {
//     id: "actions",
//     cell: ({ row }) => <DataTableRowActions row={row} />,
//   },
]
