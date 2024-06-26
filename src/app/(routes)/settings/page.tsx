"use client";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Settings() {
  return (
    <div>
      <Tabs defaultValue="customers" className="w-[400px]">
        <TabsList>
          <TabsTrigger value="customers">Customers</TabsTrigger>
          <TabsTrigger value="suppliers">Suppliers</TabsTrigger>
          <TabsTrigger value="both">Both</TabsTrigger>
        </TabsList>
        <TabsContent value="customers">
          Make changes to your customer here.
        </TabsContent>
        <TabsContent value="suppliers">Change your supplier here.</TabsContent>
        <TabsContent value="both">Change your Both here.</TabsContent>
      </Tabs>
    </div>
  );
}
