"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import CustomFormField from "@/app/(components)/CustomFormField";
import { CustomBreadcrumb } from "@/app/(components)/CustomBreadcrumb";
import { productCategories, productTax, productUnits } from "@/common/constants";

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

export default function AddProduct() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      id: "",
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
    console.log(data, 'AAAAAAAA - data')
    // Handle form submission
  }

  return (
    <>
      <CustomBreadcrumb
        data={[
          {
            link: "/dashboard",
            label: "Home",
          },
          {
            link: "/inventory",
            label: "Inventory",
          },
          {
            link: "/inventory/add",
            label: "Add Product",
          },
        ]}
      />
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="p-4">
          <div className="grid grid-cols-3 gap-4 pb-4">
            <CustomFormField
              type="input"
              form={form}
              name="id"
              label="Product ID"
              placeholder="shadcn"
            />
            <CustomFormField
              type="input"
              form={form}
              name="name"
              label="Product Name"
              placeholder="shadcn"
            />
            <CustomFormField
              type="input"
              form={form}
              name="hsn"
              label="Product HSN Code"
              placeholder="shadcn"
            />
            <CustomFormField
              type="combobox"
              form={form}
              name="unit"
              label="Unit"
              options={productUnits}
            />
            <CustomFormField
              type="select"
              form={form}
              name="tax_rate"
              label="Tax Rate"
              options={productTax}
            />
            <CustomFormField
              type="number"
              form={form}
              name="selling_price"
              label="Selling Price"
              placeholder="shadcn"
            />
            <CustomFormField
              type="select"
              form={form}
              name="category"
              label="Category"
              options={productCategories}
            />
          </div>
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </>
  );
}
