import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ShoppingCart } from "lucide-react";
import { useState } from "react";
import { Badge } from "../ui/badge";
import { Separator } from "../ui/separator";
import { Checkbox } from "../ui/checkbox";

interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

interface DeliveryOption {
  id: string;
  name: string;
  price: number;
}

interface AssemblyOption {
  id: string;
  name: string;
  price: number;
}

export function CartSheet() {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: "1",
      name: "Modern Sofa",
      price: 999,
      image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      quantity: 1,
    },
  ]);

  const [selectedDelivery, setSelectedDelivery] = useState<string>("");
  const [selectedAssembly, setSelectedAssembly] = useState<string>("");

  const deliveryOptions: DeliveryOption[] = [
    { id: "standard", name: "Стандартная доставка", price: 20 },
    { id: "express", name: "Экспресс доставка", price: 40 },
    { id: "pickup", name: "Самовывоз", price: 0 },
  ];

  const assemblyOptions: AssemblyOption[] = [
    { id: "self", name: "Самостоятельная сборка", price: 0 },
    { id: "basic", name: "Базовая сборка", price: 50 },
    { id: "premium", name: "Премиум сборка с установкой", price: 100 },
  ];

  const removeFromCart = (id: string) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const deliveryPrice = deliveryOptions.find(opt => opt.id === selectedDelivery)?.price || 0;
  const assemblyPrice = assemblyOptions.find(opt => opt.id === selectedAssembly)?.price || 0;
  const total = subtotal + deliveryPrice + assemblyPrice;

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <ShoppingCart className="h-5 w-5" />
          {cartItems.length > 0 && (
            <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center">
              {cartItems.length}
            </Badge>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-lg">
        <SheetHeader>
          <SheetTitle>Корзина</SheetTitle>
        </SheetHeader>
        <div className="mt-8 space-y-4 flex-1 overflow-y-auto">
          {cartItems.length === 0 ? (
            <p className="text-center text-muted-foreground">Корзина пуста</p>
          ) : (
            <>
              {/* Cart Items */}
              {cartItems.map((item) => (
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
                    <div className="mt-2 flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      >
                        -
                      </Button>
                      <span className="w-8 text-center">{item.quantity}</span>
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        +
                      </Button>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8"
                    onClick={() => removeFromCart(item.id)}
                  >
                    ×
                  </Button>
                </div>
              ))}

              <Separator className="my-4" />

              {/* Delivery Options */}
              <div className="space-y-4">
                <h4 className="font-medium">Способ доставки</h4>
                {deliveryOptions.map((option) => (
                  <div key={option.id} className="flex items-center space-x-2">
                    <Checkbox
                      id={`delivery-${option.id}`}
                      checked={selectedDelivery === option.id}
                      onCheckedChange={() => setSelectedDelivery(option.id)}
                    />
                    <label
                      htmlFor={`delivery-${option.id}`}
                      className="flex-1 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {option.name}
                    </label>
                    <span className="text-sm text-muted-foreground">
                      ${option.price}
                    </span>
                  </div>
                ))}
              </div>

              <Separator className="my-4" />

              {/* Assembly Options */}
              <div className="space-y-4">
                <h4 className="font-medium">Сборка</h4>
                {assemblyOptions.map((option) => (
                  <div key={option.id} className="flex items-center space-x-2">
                    <Checkbox
                      id={`assembly-${option.id}`}
                      checked={selectedAssembly === option.id}
                      onCheckedChange={() => setSelectedAssembly(option.id)}
                    />
                    <label
                      htmlFor={`assembly-${option.id}`}
                      className="flex-1 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {option.name}
                    </label>
                    <span className="text-sm text-muted-foreground">
                      ${option.price}
                    </span>
                  </div>
                ))}
              </div>

              <Separator className="my-4" />

              {/* Total */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Подытог</span>
                  <span>${subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Доставка</span>
                  <span>${deliveryPrice.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Сборка</span>
                  <span>${assemblyPrice.toLocaleString()}</span>
                </div>
                <Separator className="my-2" />
                <div className="flex justify-between font-medium">
                  <span>Итого</span>
                  <span>${total.toLocaleString()}</span>
                </div>
              </div>

              <Button className="w-full mt-4">
                Оформить заказ
              </Button>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}