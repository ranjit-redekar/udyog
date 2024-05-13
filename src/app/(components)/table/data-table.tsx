"use client"

import * as React from "react"
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import { DataTablePagination } from "./data-table-pagination"
import { DataTableToolbar } from "./data-table-toolbar"

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
  showPagination: Boolean
  showToolbar: Boolean,
  onRowDelete: (row : object) => void
  onAddButtonClick: () => void
}

export function DataTable<TData, TValue>({
  columns,
  data,
  showPagination = true,
  // showToolbar = true,
  onRowDelete,
  // onAddButtonClick
}: DataTableProps<TData, TValue>) {
  const [rowSelection, setRowSelection] = React.useState({})
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({})
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  )
  const [sorting, setSorting] = React.useState<SortingState>([])

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
      columnVisibility,
      rowSelection,
      columnFilters,
    },
    enableRowSelection: true,
    onRowSelectionChange: setRowSelection,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
  })

  return (
    <div className="space-y-4">
      {/* { showToolbar ? <DataTableToolbar table={table} onAddButtonClick={onAddButtonClick} /> : null } */}
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead className="h-10" key={header.id} colSpan={header.colSpan}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => <TableBodyRow key={row.id} onRowDelete={onRowDelete} row={row} />)
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-16 text-center"
                >
                  No record.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      { showPagination ? <DataTablePagination table={table} /> : null }
    </div>
  )
}

interface TableRow {
  id: string;
  getIsSelected: () => boolean;
  getVisibleCells: () => TableCell[];
}

interface TableCell {
  id: string;
  column: {
    columnDef: {
      cell: any; // Adjust this to match the actual type of cell data
    };
  };
  getContext: () => any; // Adjust this to match the actual type of cell context
}

interface TableBodyRowProps<TData> {
  row: TableRow;
  onRowDelete: (row: object) => void;
}

function TableBodyRow<TData>({ row, onRowDelete }: TableBodyRowProps<TData>): JSX.Element {
  const [isHovered, setIsHovered] = React.useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  console.log(row.getVisibleCells(), "AAAAAAAA--- row")
  return (
    <TableRow
      key={row.id}
      data-state={row.getIsSelected() ? "selected" : undefined}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {row.getVisibleCells().map((cell) => {
        if (cell?.column?.id === "index" && isHovered) {
          return (
            <td className="align-middle" key={cell.id}>
              <button className="ml-4" onClick={() => onRowDelete(row)}>X</button>
            </td>
          );
        } else {
          return (
            <TableCell key={cell.id} className="p-1">
              {flexRender(cell.column.columnDef.cell, cell.getContext())}
            </TableCell>
          );
        }
      })}
    </TableRow>
  );
}
