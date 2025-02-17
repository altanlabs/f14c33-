import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { User } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";

export function UserProfile() {
  return (
    <Dialog>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon">
            <User className="h-5 w-5" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Мой аккаунт</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DialogTrigger asChild>
            <DropdownMenuItem>Профиль</DropdownMenuItem>
          </DialogTrigger>
          <DropdownMenuItem>История заказов</DropdownMenuItem>
          <DropdownMenuItem>Избранное</DropdownMenuItem>
          <DropdownMenuItem>Адреса доставки</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Выйти</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Личный кабинет</DialogTitle>
          <DialogDescription>
            Управляйте своим профилем и заказами
          </DialogDescription>
        </DialogHeader>
        <Tabs defaultValue="profile" className="mt-4">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="profile">Профиль</TabsTrigger>
            <TabsTrigger value="orders">Заказы</TabsTrigger>
            <TabsTrigger value="addresses">Адреса</TabsTrigger>
          </TabsList>
          <TabsContent value="profile">
            <Card>
              <CardContent className="space-y-4 pt-4">
                <div className="space-y-2">
                  <h4 className="font-medium">Личные данные</h4>
                  <div className="text-sm text-muted-foreground">
                    <p>Имя: Иван Иванов</p>
                    <p>Email: example@mail.com</p>
                    <p>Телефон: +7 (999) 999-99-99</p>
                  </div>
                </div>
                <Button>Редактировать</Button>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="orders">
            <Card>
              <CardContent className="pt-4">
                <div className="text-center text-sm text-muted-foreground">
                  У вас пока нет заказов
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="addresses">
            <Card>
              <CardContent className="pt-4">
                <div className="space-y-4">
                  <div className="text-sm text-muted-foreground">
                    <p>Адрес 1:</p>
                    <p>ул. Примерная, д. 1, кв. 1</p>
                    <p>Москва, 123456</p>
                  </div>
                  <Button variant="outline">Добавить адрес</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}