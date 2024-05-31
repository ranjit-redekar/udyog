"use client";
import {
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  FormField,
} from "@/components/ui/form";
import { cn } from "@/lib/utils"
import { Input } from "@/components/ui/input";
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";

export default function CustomFormField({
  type = "input",
  form,
  name,
  label,
  placeholder,
  options = [],
}) {
  const renderInput = (field) => {
    switch (type) {
      case "input":
        return (
          <FormControl>
            <Input placeholder={placeholder} name={name} {...field} />
          </FormControl>
        );
      case "email":
        return (
          <FormControl>
            <Input
              type="email"
              placeholder={placeholder}
              name={name}
              {...field}
            />
          </FormControl>
        );
      case "number":
        return (
          <FormControl>
            <Input
              type="number"
              placeholder={placeholder}
              name={name}
              {...field}
            />
          </FormControl>
        );
      case "select":
        return (
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
              <SelectTrigger>
                <SelectValue placeholder={placeholder || "Select"} />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {options.map((option, index) => (
                <SelectItem key={index} value={option?.value}>
                  {option?.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        );
      case "combobox":
        return (
          <Popover>
            <PopoverTrigger asChild>
              <FormControl>
                <Button
                  variant="outline"
                  role="combobox"
                  className={cn(
                    "w-full justify-between",
                    !field.value && "text-muted-foreground"
                  )}
                >
                  {field.value
                    ? options.find(
                        (option) => option.value === field.value
                      )?.label
                    : "Select"}
                  <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
              </FormControl>
            </PopoverTrigger>
            <PopoverContent className="min-w-full p-0">
              <Command>
                <CommandInput
                  placeholder="Search framework..."
                  className="h-9"
                />
                <CommandList>
                <CommandEmpty>No framework found.</CommandEmpty>
                <CommandGroup>
                  {options.map((option) => (
                    <CommandItem
                      value={option?.label}
                      key={option?.value}
                      onSelect={() => {
                        form.setValue("option?", option?.value);
                      }}
                    >
                      {option?.label}
                      <CheckIcon
                        className={cn(
                          "ml-auto h-4 w-4",
                          option?.value === field.value
                            ? "opacity-100"
                            : "opacity-0"
                        )}
                      />
                    </CommandItem>
                  ))}
                </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>
        );
      // Add cases for other types like checkbox, radio button, etc. as needed
      default:
        return (
          <FormControl>
            <Input placeholder={placeholder} name={name} {...field} />
          </FormControl>
        );
    }
  };

  return (
    <FormField
      control={form?.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          {renderInput(field)}
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
