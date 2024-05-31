"use client";
import * as React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import CustomFormField from "@/app/(components)/CustomFormField";
import { Pencil2Icon } from "@radix-ui/react-icons";
import { useRouter } from "next/navigation";

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

export default function UserForm({ title }: React.ComponentProps<"form">) {
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

  const router = useRouter();

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data, "AAAAAAAA - data");
    // Handle form submission
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="grid grid-cols-2 gap-4 pb-4">
          <CustomFormField
            form={form}
            name="fullname"
            label="Full Name"
            placeholder="Full Name"
          />
          <CustomFormField
            form={form}
            type="select"
            options={[]}
            name="usertype"
            label={`${title || 'User'} Type`}
            placeholder="Select"
          />
          <CustomFormField
            form={form}
            type="number"
            options={[]}
            name="mobilenumber"
            label="Mobile Number"
            placeholder="Mobile Number"
          />
          <CustomFormField
            form={form}
            type="email"
            options={[]}
            name="emailid"
            label="Email Id"
            placeholder="Email Id"
          />
        </div>
        <div className="flex justify-between">
          <Button variant="secondary" onClick={() => router.push('/parties/addmore')} >
                <Pencil2Icon className="h-4 w-4 mr-1" />
                Add More Details
            </Button>
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </Form>
  );
}
