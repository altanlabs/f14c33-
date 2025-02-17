import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Heart, ShoppingCart } from "lucide-react";
import { useState } from "react";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
}

export function ProductCard({ id, name, price, image, category }: ProductCardProps) {
  const { toast } = useToast();
  const [isFavorite, setIsFavorite] = useState(false);

  const handleAddToCart = () => {
    toast({
      title: "Добавлено в корзину",
      description: `${name} добавлен в вашу корзину.`,
    });
  };

  const handleBuyNow = () => {
    toast({
      title: "Покупка совершена",
      description: `Вы купили ${name}.`,
    });
  };

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
    toast({
      title: isFavorite ? "Удалено из избранного" : "Добавлено в избранное",
      description: `${name} ${isFavorite ? "удален из" : "добавлен в"} избранное.`,
    });
  };

  return (
    <Card className="overflow-hidden">
      <CardHeader className="p-0 relative">
        <div className="aspect-square overflow-hidden">
          <img
            src={image}
            alt={name}
            className="h-full w-full object-cover transition-transform hover:scale-105"
          />
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-2 right-2"
          onClick={toggleFavorite}
        >
          <Heart className={`h-5 w-5 ${isFavorite ? "text-red-500" : "text-muted-foreground"}`} />
        </Button>
      </CardHeader>
      <CardContent className="p-4">
        <div className="text-sm text-muted-foreground">{category}</div>
        <CardTitle className="mt-2 text-lg">{name}</CardTitle>
        <div className="mt-2 font-bold">${price.toLocaleString()}</div>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex gap-2">
        <Button onClick={handleAddToCart} className="flex-1">
          <ShoppingCart className="mr-2 h-4 w-4" /> В корзину
        </Button>
        <Button onClick={handleBuyNow} variant="outline" className="flex-1">
          Купить
        </Button>
      </CardFooter>
    </Card>
  );
}