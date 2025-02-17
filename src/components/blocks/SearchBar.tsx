import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { useState } from "react";

const sampleProducts = [
  {
    id: "1",
    name: "Современный диван",
    category: "Гостиная",
    price: 999,
  },
  {
    id: "2",
    name: "Обеденный стол",
    category: "Кухня",
    price: 599,
  },
  {
    id: "3",
    name: "Кровать Queen Size",
    category: "Спальня",
    price: 899,
  },
];

export function SearchBar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        variant="outline"
        className="w-full justify-start text-muted-foreground"
        onClick={() => setOpen(true)}
      >
        <Search className="mr-2 h-4 w-4" />
        Поиск товаров...
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Введите название товара..." />
        <CommandList>
          <CommandEmpty>Ничего не найдено.</CommandEmpty>
          <CommandGroup heading="Товары">
            {sampleProducts.map((product) => (
              <CommandItem
                key={product.id}
                onSelect={() => {
                  setOpen(false);
                  // Handle product selection
                }}
              >
                <div className="flex justify-between w-full">
                  <span>{product.name}</span>
                  <span className="text-muted-foreground">
                    ${product.price}
                  </span>
                </div>
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}