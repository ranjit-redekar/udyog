import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  IndianRupee,
  ShoppingCart,
  Percent,
  PackageSearch,
} from "lucide-react";

const cardsData = [
  {
    title: "Total Revenue",
    icon: IndianRupee,
    value: "45,231.89",
    change: "+20.1% from last month",
  },
  {
    title: "Sales",
    icon: Percent,
    value: "+2350",
    change: "+180.1% from last month",
  },
  {
    title: "Purchases",
    icon: ShoppingCart,
    value: "+12,234",
    change: "+19% from last month",
  },
  {
    title: "Total Products",
    icon: PackageSearch,
    value: "+573",
    change: "+51 from last month",
  },
];

function Cards() {
  return (
    <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
      {cardsData.map((card, index) => (
        <Card key={index} x-chunk={`dashboard-01-chunk-${index}`}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{card.title}</CardTitle>
            {card.icon && (
              <card.icon className="h-4 w-4 text-muted-foreground" />
            )}
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {index === 0 ? <>&#8377;{card.value}</> : card.value}
            </div>
            <p className="text-xs text-muted-foreground">{card.change}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default Cards;
