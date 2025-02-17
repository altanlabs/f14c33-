import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Heart, ShoppingCart } from "lucide-react";
import { useState } from "react";
import { useParams } from "react-router-dom";

// Sample product data (to be replaced with real data)
const sampleProduct = {
  id: "1",
  name: "Modern Sofa",
  price: 999,
  image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
  category: "Living Room",
  description: "A modern sofa with a sleek design, perfect for any living room.",
  dimensions: "200cm x 90cm x 100cm",
  material: "Leather",
};

export default function ProductDetail() {
  const { id } = useParams();
  const { toast } = useToast();
  const [isFavorite, setIsFavorite] = useState(false);

  const handleAddToCart = () => {
    toast({
      title: "Добавлено в корзину",
      description: `${sampleProduct.name} добавлен в вашу корзину.`,
    });
  };

  const handleBuyNow = () => {
    toast({
      title: "Покупка совершена",
      description: `Вы купили ${sampleProduct.name}.`,
    });
  };

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
    toast({
      title: isFavorite ? "Удалено из избранного" : "Добавлено в избранное",
      description: `${sampleProduct.name} ${isFavorite ? "удален из" : "добавлен в"} избранное.`,
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="overflow-hidden">
        <CardHeader className="p-0 relative">
          <div className="aspect-square overflow-hidden">
            <img
              src={sampleProduct.image}
              alt={sampleProduct.name}
              className="h-full w-full object-cover"
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
          <div className="text-sm text-muted-foreground">{sampleProduct.category}</div>
          <CardTitle className="mt-2 text-lg">{sampleProduct.name}</CardTitle>
          <div className="mt-2 font-bold">${sampleProduct.price.toLocaleString()}</div>
          <p className="mt-4 text-sm text-muted-foreground">{sampleProduct.description}</p>
          <div className="mt-4">
            <h4 className="font-medium">Характеристики</h4>
            <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
              <li>Размеры: {sampleProduct.dimensions}</li>
              <li>Материал: {sampleProduct.material}</li>
            </ul>
          </div>
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
    </div>
  );
}