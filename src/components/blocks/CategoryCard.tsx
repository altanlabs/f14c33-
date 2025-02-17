import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface CategoryCardProps {
  name: string;
  image: string;
  count: number;
  className?: string;
}

export function CategoryCard({ name, image, count, className }: CategoryCardProps) {
  return (
    <Card className={cn("group cursor-pointer overflow-hidden", className)}>
      <CardContent className="p-0">
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={image}
            alt={name}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
            <h3 className="text-xl font-bold">{name}</h3>
            <p className="text-sm opacity-90">{count} items</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}