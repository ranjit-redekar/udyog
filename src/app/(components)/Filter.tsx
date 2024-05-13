"use client";
import React, { useState, ChangeEvent } from "react";
import { Cross2Icon, PlusCircledIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface FilterProps {
  onAddButtonClick: () => void;
  onFilterInputChange: (value: string) => void;
  onResetFilter: () => void;
  addButtonLabel: String;
  heading: String;
}

export default function Filter({
  onAddButtonClick,
  onFilterInputChange,
  onResetFilter,
  addButtonLabel = "Add",
  heading = "",
}: FilterProps) {
  const [inputValue, setInputValue] = useState<string>("");
  const [isFiltered, setIsFiltered] = useState<boolean>(false);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const val = event.target.value;
    setInputValue(val);
    setIsFiltered(val === "" ? false : true);
    onFilterInputChange(val);
  };

  return (
    <div className="flex items-center justify-between mb-3">
      {/* {heading ? <h3 className="text-xl font-bold tracking-tight" >{heading}</h3> : null} */}
      <div className="flex flex-1 items-center space-x-2">
        <Input
          placeholder="Search"
          value={inputValue}
          onChange={handleInputChange}
          className="h-8 w-[150px] lg:w-[250px]"
        />
        {isFiltered && (
          <Button
            variant="ghost"
            onClick={() => {
              setIsFiltered(false);
              onResetFilter();
            }}
            className="h-8 px-2 lg:px-3"
          >
            Reset
            <Cross2Icon className="ml-2 h-4 w-4" />
          </Button>
        )}
      </div>
      <Button className="ml-auto hidden h-8 lg:flex" onClick={onAddButtonClick}>
        <PlusCircledIcon className="mr-2 h-4 w-4" />
        {addButtonLabel}
      </Button>
    </div>
  );
}
