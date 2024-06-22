// "use client";
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
import { customerType } from "@/common/constants";
import { createUser } from "@/actions";
import { toast } from "react-toastify";

const FormSchema = z.object({
  full_name: z.string(),
  type: z.string(),
  mobile_number: z.string(),
  email: z.string()
});

export default function UserForm({ title, onSubmit }: React.ComponentProps<"form">) {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      full_name: undefined,
      type: undefined,
      mobile_number: undefined,
      email: ""
    },
  });

  const router = useRouter();

  async function handleOnSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data, "AAAAAAAA - data");
    onSubmit(data);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleOnSubmit)}>
        <div className="grid grid-cols-2 gap-4 pb-4">
          <CustomFormField
            form={form}
            name="full_name"
            label="Full Name"
            placeholder="Full Name"
          />
          <CustomFormField
            form={form}
            type="select"
            options={customerType}
            name="type"
            label={`${title || 'User'} Type`}
            placeholder="Select"
          />
          <CustomFormField
            form={form}
            type="number"
            name="mobile_number"
            label="Mobile Number"
            placeholder="Mobile Number"
          />
          <CustomFormField
            form={form}
            type="email"
            name="email"
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
