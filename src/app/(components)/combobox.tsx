"use client";
import React, { useState } from "react";
import { useMediaQuery } from "@/hooks/use-media-query";
import { Button } from "@/components/ui/button";
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface Option {
  label: string;
  value: number;
}

interface ComboBoxProps {
  placeholder?: string;
  options: Option[];
  btnclsss: string;
}

export default function ComboBox({
  placeholder = "Select",
  options = [],
  btnclsss = "",
}: ComboBoxProps) {
  const [open, setOpen] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const [selectedValue, setSelectedValue] = useState<Option | null>(null);

  if (isDesktop) {
    return (
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className={`w-full justify-start ${btnclsss}`}
          >
            {selectedValue ? (
              <>{selectedValue.label}</>
            ) : (
              <span className="flex items-center text-gray-500">
                <span>{placeholder}</span>
                <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
              </span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-full p-0" align="start">
          <StatusList
            setOpen={setOpen}
            listData={options}
            setSelectedValue={setSelectedValue}
          />
        </PopoverContent>
      </Popover>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button
          variant="outline"
          className={`w-[150px] justify-start ${btnclsss}`}
        >
          {selectedValue ? (
            <>{selectedValue.label}</>
          ) : (
            <div className="flex items-center text-gray-500">
              <div>{placeholder}</div>
              <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </div>
          )}
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mt-4 border-t">
          <StatusList
            setOpen={setOpen}
            listData={options}
            setSelectedValue={setSelectedValue}
          />
        </div>
      </DrawerContent>
    </Drawer>
  );
}

function StatusList({
  setOpen,
  setSelectedValue,
  listData,
}: {
  setOpen: (open: boolean) => void;
  setSelectedValue: (value: Option | null) => void;
  listData: Option[];
}) {
  return (
    <Command className="w-full">
      <CommandInput placeholder="Filter value..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup>
          {listData.map((ele) => (
            <CommandItem
              key={ele?.value}
              value={ele?.value}
              onSelect={(value) => {
                setSelectedValue(
                  listData.find((priority) => priority?.value === value) || null
                );
                setOpen(false);
              }}
            >
              {ele?.label}
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </Command>
  );
}
