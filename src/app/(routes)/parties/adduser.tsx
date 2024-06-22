"use client"
import * as React from "react";
import { useMediaQuery } from "@/hooks/use-media-query";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { PlusCircledIcon } from "@radix-ui/react-icons";
import UserForm from "./UserForm";
import { toast } from "react-toastify";
import { createUser } from "@/actions";

export function UserBasicForm({ title }) {
  const [open, setOpen] = React.useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const onSubmit = async (data) => {
    // Store user data to Database
    try {
      const user = await createUser(data) 
      console.log(user, "User")
      toast.success("User created successfully!")
      setOpen(false)
    } catch (err) {
      console.dir(err , 'AAAAAA -Error ')
      const msg = err?.message ? err?.message : "Something went wrong."
      toast.error(`Error: ${msg}`)
    }
  }

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button className="ml-auto hidden h-8 lg:flex">
            <PlusCircledIcon className="mr-2 h-4 w-4" />
            {`Add ${title}`}
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[700px]">
          <DialogHeader>
            <DialogTitle>{`Add ${title || 'User'}`}</DialogTitle>
          </DialogHeader>
          <UserForm title={title} onSubmit={onSubmit} />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button className="ml-auto hidden h-8 lg:flex">
          <PlusCircledIcon className="mr-2 h-4 w-4" />
          {`Add ${title}`}
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>{`Add ${title || 'User'}`}</DrawerTitle>
        </DrawerHeader>
        <UserForm title={title} onSubmit={onSubmit} />
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
