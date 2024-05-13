import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface RecentSale {
  name: string;
  email: string;
  amount: number;
  avatarSrc?: string; // Optional avatar image source
}

function RecentSaleItem({ data }: { data: RecentSale }) {
  const { name, email, amount, avatarSrc } = data;

  return (
    <div className="flex items-center">
      <Avatar className="h-9 w-9">
        {avatarSrc && <AvatarImage src={avatarSrc} alt="Avatar" />}
        <AvatarFallback>{name.slice(0, 2).toUpperCase()}</AvatarFallback>
      </Avatar>
      <div className="ml-4 space-y-1">
        <p className="text-sm font-medium leading-none">{name}</p>
        <p className="text-sm text-muted-foreground">{email}</p>
      </div>
      <div className="ml-auto font-medium">+{amount.toFixed(2)}</div>
    </div>
  );
}

export function RecentSales() {
  const salesData: RecentSale[] = [
    {
      name: "Olivia Martin",
      email: "olivia.martin@email.com",
      amount: 1999,
      avatarSrc: "/avatars/01.png",
    },
    {
      name: "Jackson Lee",
      email: "jackson.lee@email.com",
      amount: 39,
      avatarSrc: "/avatars/02.png",
    },
    {
      name: "Isabella Nguyen",
      email: "isabella.nguyen@email.com",
      amount: 299,
      avatarSrc: "/avatars/03.png",
    },
    {
      name: "William Kim",
      email: "will@email.com",
      amount: 99,
      avatarSrc: "/avatars/04.png",
    },
    {
      name: "Sofia Davis",
      email: "sofia.davis@email.com",
      amount: 39,
      avatarSrc: "/avatars/05.png",
    }
  ];

  return (
    <div className="space-y-8">
      {salesData.map((sale) => (
        <RecentSaleItem key={sale.name} data={sale} />
      ))}
    </div>
  );
}
