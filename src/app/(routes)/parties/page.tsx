"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { UserBasicForm } from "./adduser";
import UserList from "./UserList";

const tabData = [
  { id: "Customer", label: "Customers", content: "Customer List." },
  { id: "Supplier", label: "Suppliers", content: "Supplier List." },
  { id: "both", label: "Both", content: "Both here." },
];

export default function Parties() {
  const router = useRouter();
  const [selectedTab, setSelectedTab] = useState<string>("Customer");

  return (
    <div>
      <div className="flex relative">
        <Tabs defaultValue={selectedTab} className="w-full">
          <TabsList>
            {tabData.map((tab) => (
              <TabsTrigger
                key={tab.id}
                value={tab.id}
                onClick={() => setSelectedTab(tab.id)}
              >
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>
          {tabData.map((tab) => (
            <TabsContent key={`TabsContent-${tab.id}`} value={tab.id}>
              <UserList key={`UserList-${tab.id}`} type={tab.id} />
            </TabsContent>
          ))}
        </Tabs>
        <div className="absolute right-0">
          <UserBasicForm title={selectedTab === "both" ? "User" : selectedTab} />
        </div>
      </div>
    </div>
  );
}
