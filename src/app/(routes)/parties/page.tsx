"use client";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function page() {
  return (
    <div>
      <Tabs defaultValue="customers" className="w-[400px]">
        <TabsList>
          <TabsTrigger value="customers">Customers</TabsTrigger>
          <TabsTrigger value="suppliers">Suppliers</TabsTrigger>
          <TabsTrigger value="both">Both</TabsTrigger>
        </TabsList>
        <TabsContent value="customers">
          Customer List.
        </TabsContent>
        <TabsContent value="suppliers">Supplier List.</TabsContent>
        <TabsContent value="both">Both here.</TabsContent>
      </Tabs>
    </div>
  );
}
