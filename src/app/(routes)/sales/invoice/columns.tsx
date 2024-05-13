"use client"

import { ColumnDef } from "@tanstack/react-table"
import { labels, priorities, statuses } from "./data/data"
import { Task } from "./data/schema"
import { DataTableColumnHeader } from "../../../(components)/table/data-table-column-header"
import { DataTableRowActions } from "../../../(components)/table/data-table-row-actions"
import ComboBox from "@/app/(components)/combobox"

export const columns: ColumnDef<Task>[] = [
  {
    accessorKey: "id",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Invoice" />
    ),
    // cell: ({ row }) => <ComboBox />,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "customer",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Customers" />
    ),
  },
  {
    accessorKey: "email",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Email" />
    ),
  },
  {
    accessorKey: "status",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Status" />
    ),
    cell: ({ row }) => {
      const status = statuses.find(
        (status) => status.value === row.getValue("status")
      )

      if (!status) {
        return null
      }

      return (
        <div className="flex w-[100px] items-center">
          {status.icon && (
            <status.icon className="mr-2 h-4 w-4 text-muted-foreground" />
          )}
          <span>{status.label}</span>
        </div>
      )
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    },
  },
  {
    accessorKey: "invoiceDate",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Invoice Date" />
    ),
  },
  {
    id: "actions",
    cell: ({ row }) => <DataTableRowActions row={row} />,
  },
]
