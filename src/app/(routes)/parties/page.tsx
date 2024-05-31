"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { UserBasicForm } from "./adduser";

const tabData = [
  { id: 'Customer', label: 'Customers', content: 'Customer List.' },
  { id: 'Supplier', label: 'Suppliers', content: 'Supplier List.' },
  { id: 'both', label: 'Both', content: 'Both here.' },
];

export default function Parties() {
  const router = useRouter();
  const [selectedTab, setSelectedTab] = useState<string>('Customer');

  return (
    <div>
      <div className="flex justify-between">
      <Tabs defaultValue={selectedTab} className="w-[400px]">
      <TabsList>
        {tabData.map(tab => (
          <TabsTrigger
            key={tab.id}
            value={tab.id}
            onClick={() => setSelectedTab(tab.id)}
          >
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>
      {tabData.map(tab => (
        <TabsContent key={tab.id} value={tab.id}>
          {tab.content}
        </TabsContent>
      ))}
    </Tabs>
      <UserBasicForm title={selectedTab === 'both' ? 'User' : selectedTab} />
      </div>
    </div>
  );
}
