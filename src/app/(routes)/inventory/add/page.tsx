"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import CustomFormField from "@/app/(components)/CustomFormField";
import { CustomBreadcrumb } from "@/app/(components)/CustomBreadcrumb";
import { productCategories, productTax, productUnits } from "@/common/constants";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import { createProduct } from "@/actions";

const FormSchema = z.object({
  name: z.string(),
  price: z.string(),
  unit: z.string(),
  tax_rate: z.string(),
  category: z.string(),
  hsn: z.string(),
  description: z.string(),
});

export default function AddProduct() {
  const [selectedTab, setSelectedTab] = useState('basic');
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      price: "",
      unit: "",
      tax_rate: "",
      category: "",
      hsn: "",
      description: "",
    },
  });

  const onSubmit = async(data: z.infer<typeof FormSchema>) => {
    console.log(data, 'AAAAAAAA - data')
    try {
      const res = await createProduct(data);
      console.log(res, "Product created successfully!")
    } catch (err) {
      console.log(err, "Error while creating product")
    }
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
          {/* <Tabs defaultValue={selectedTab} > */}
            {/* <TabsList>
              <TabsTrigger
                defaultValue={selectedTab} value="basic"
                onClick={() => setSelectedTab("basic")} >
                Basic Details
              </TabsTrigger>
              <TabsTrigger
                value="more"
                onClick={() => setSelectedTab("more")} >
                More Details
              </TabsTrigger>
            </TabsList> */}
            {/* <TabsContent value="basic"> */}
              <div className="grid grid-cols-3 gap-4 pb-4">
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
                  name="price"
                  label="Price"
                  placeholder="Price"
                />
                <CustomFormField
                  type="select"
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
                  type="select"
                  form={form}
                  name="category"
                  label="Category"
                  options={productCategories}
                />
                <CustomFormField
                  type="input"
                  form={form}
                  name="hsn"
                  label="HSN Code"
                  placeholder="shadcn"
                />
                <CustomFormField
                  type="input"
                  form={form}
                  name="description"
                  label="Description"
                  placeholder="Product details"
                />
              </div>
            {/* </TabsContent>
            <TabsContent value="more" > */}
              {/* <div className="grid grid-cols-3 gap-4 pb-4">
                <CustomFormField
                  type="input"
                  form={form}
                  name="id_qbcd"
                  label="Product ID"
                  placeholder="shadcn"
                />
              </div> */}
            {/* </TabsContent>
          </Tabs> */}
          <Button type="submit">Submit</Button>
        </form>
    </Form >
    </>
  );
}
