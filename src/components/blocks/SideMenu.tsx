import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const categories = [
  {
    name: "Гостиная",
    subcategories: [
      "Диваны",
      "Кресла",
      "Журнальные столики",
      "ТВ-тумбы",
      "Шкафы",
      "Полки",
    ],
  },
  {
    name: "Спальня",
    subcategories: [
      "Кровати",
      "Матрасы",
      "Прикроватные тумбы",
      "Комоды",
      "Шкафы",
      "Туалетные столики",
    ],
  },
  {
    name: "Кухня",
    subcategories: [
      "Кухонные гарнитуры",
      "Столы",
      "Стулья",
      "Барные стойки",
      "Шкафы",
      "Системы хранения",
    ],
  },
  {
    name: "Офис",
    subcategories: [
      "Письменные столы",
      "Офисные кресла",
      "Шкафы",
      "Полки",
      "Тумбы",
    ],
  },
  {
    name: "Детская",
    subcategories: [
      "Кровати",
      "Столы",
      "Шкафы",
      "Комоды",
      "Стулья",
      "Системы хранения",
    ],
  },
  {
    name: "Прихожая",
    subcategories: [
      "Шкафы",
      "Обувницы",
      "Вешалки",
      "Тумбы",
      "Зеркала",
    ],
  },
  {
    name: "Ванная",
    subcategories: [
      "Тумбы с раковиной",
      "Зеркала",
      "Шкафы",
      "Полки",
      "Корзины для белья",
    ],
  },
  {
    name: "Аксессуары",
    subcategories: [
      "Светильники",
      "Ковры",
      "Декор",
      "Текстиль",
      "Зеркала",
    ],
  },
];

export function SideMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon">
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-80">
        <SheetHeader>
          <SheetTitle>Категории</SheetTitle>
        </SheetHeader>
        <div className="mt-4">
          <Accordion type="single" collapsible className="w-full">
            {categories.map((category, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {category.name}
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-2">
                    {category.subcategories.map((sub, subIndex) => (
                      <li key={subIndex}>
                        <Button
                          variant="ghost"
                          className="w-full justify-start text-sm"
                        >
                          {sub}
                        </Button>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </SheetContent>
    </Sheet>
  );
}