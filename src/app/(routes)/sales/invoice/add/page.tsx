"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import ComboBoxResponsive from "@/app/(components)/combobox";
// import DataTable from "./data-table";
import { DataTable } from "../../../../(components)/table/data-table";
import { columns } from "./columns";
import { makeData } from "./makeData";
import { useState } from "react";
import { PlusCircledIcon } from "@radix-ui/react-icons"
// Define the additional fields (Number Series, Customer, Account, Date)

const FormSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  numberSeries: z.string(), // Add Number Series field
  customer: z.string(), // Add Customer field
  account: z.string(), // Add Account field
  date: z.date(), // Add Date field
});

export default function InputForm() {
  const [data, setData] = useState(makeData(1));
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
      numberSeries: "", // Initialize Number Series field
      customer: "", // Initialize Customer field
      account: "", // Initialize Account field
      date: "", // Initialize Date field
      language: null,
    },
  });

  const onRowDelete = (row) => {
    setData(data.filter((ele, i) => i !== row.index));
    console.log(row, "onRowDelete");
  };

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="grid grid-cols-3 gap-4">
          <FormField
            control={form.control}
            name="numberSeries"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Number Series</FormLabel>
                <FormControl>
                  <Input placeholder="ABC-001" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="customer"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Customer</FormLabel>
                <FormControl>
                  <ComboBoxResponsive />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="date"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Date</FormLabel>
                <FormControl>
                  <Input type="date" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="border rounded-xl mt-8 mb-6">
          <DataTable
            showPagination={false}
            showToolbar={false}
            data={data}
            columns={columns}
            onRowDelete={onRowDelete}
          />
          <div className="m-2">
            <Button
              className="text-xs"
              variant="secondary"
              onClick={() => {
                setData([...data, ...makeData(1)]);
              }}
            >
              <PlusCircledIcon className="mr-2 h-4 w-4" />
              Add Row
            </Button>
          </div>
        </div>
        <Button  type="submit">Submit</Button>
      </form>
    </Form>
  );
}
