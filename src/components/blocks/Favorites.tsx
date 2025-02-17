import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import { Badge } from "../ui/badge";
import { useState } from "react";

interface FavoriteItem {
  id: string;
  name: string;
  price: number;
  image: string;
}

export function Favorites() {
  const [favorites, setFavorites] = useState<FavoriteItem[]>([
    {
      id: "1",
      name: "Современный диван",
      price: 999,
      image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    },
  ]);

  const removeFromFavorites = (id: string) => {
    setFavorites(favorites.filter(item => item.id !== id));
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <Heart className="h-5 w-5" />
          {favorites.length > 0 && (
            <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center">
              {favorites.length}
            </Badge>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Избранное</SheetTitle>
        </SheetHeader>
        <div className="mt-8 space-y-4">
          {favorites.length === 0 ? (
            <p className="text-center text-muted-foreground">
              В избранном пока ничего нет
            </p>
          ) : (
            favorites.map((item) => (
              <div key={item.id} className="flex gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-24 w-24 rounded-lg object-cover"
                />
                <div className="flex-1">
                  <h3 className="font-medium">{item.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    ${item.price.toLocaleString()}
                  </p>
                  <div className="mt-2 flex gap-2">
                    <Button size="sm">В корзину</Button>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => removeFromFavorites(item.id)}
                    >
                      Удалить
                    </Button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}