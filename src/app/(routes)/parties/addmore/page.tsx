"use client";
import { CustomBreadcrumb } from "@/app/(components)/CustomBreadcrumb";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import CustomFormField from "@/app/(components)/CustomFormField";
import { customerType } from "@/common/constants";

const breadcrumbData = [
  {
    link: "/dashboard",
    label: "Home",
  },
  {
    link: "/parties",
    label: "Parties",
  },
  {
    link: "/parties/addmore",
    label: "Add Customer",
  },
];

const FormSchema = z.object({
  id: z.string().min(2),
  name: z.string(),
  unit: z.string(),
  hsn: z.string(),
  tax_rate: z.string(),
  selling_price: z.string(),
  category: z.string(),
  description: z.string(),
});

export default function UserMoreDetails() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      unit: "",
      hsn: "",
      tax_rate: "",
      selling_price: "",
      category: "",
      description: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data, "AAAAAAAA - data");
    // Handle form submission
  }

  return (
    <div>
      <CustomBreadcrumb data={breadcrumbData} />
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="p-4">
          <div className="grid grid-cols-3 gap-4 pb-4">
            <CustomFormField
              type="input"
              form={form}
              name="full_name"
              label="Full Name"
              placeholder="Full Name"
            />
            <CustomFormField
              type="select"
              form={form}
              name="type"
              label="Customer Type"
              placeholder="Select Customer Type"
              options={customerType}
            />
            <CustomFormField
              type="number"
              form={form}
              name="mobile_number"
              label="Mobile Number"
              placeholder="Mobile Number"
            />
            <CustomFormField
              type="email"
              form={form}
              name="email"
              label="Email"
              placeholder="Email"
            />
            <CustomFormField
              type="text"
              form={form}
              name="organisation"
              label="Organisation"
              placeholder="Organisation"
            />
            <CustomFormField
              type="text"
              form={form}
              name="role"
              label="Role/Designation"
              placeholder="Role/Designation"
            />
            <CustomFormField
              type="text"
              form={form}
              name="reporting_to"
              label="Reporting To"
              placeholder="Reporting Contact"
            />
            <CustomFormField
              type="text"
              form={form}
              name="reporting_to"
              label="Reporting To"
              placeholder="Reporting Contact"
            />
          </div>
        </form>
      </Form>
    </div>
  );
}
