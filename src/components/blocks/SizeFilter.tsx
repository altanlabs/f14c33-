import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

interface Size {
  width: string;
  height: string;
  depth: string;
}

interface SizeFilterProps {
  onApply: (size: Size) => void;
}

export function SizeFilter({ onApply }: SizeFilterProps) {
  const [size, setSize] = useState<Size>({
    width: "",
    height: "",
    depth: "",
  });

  const handleChange = (dimension: keyof Size, value: string) => {
    setSize(prev => ({
      ...prev,
      [dimension]: value,
    }));
  };

  const handleApply = () => {
    onApply(size);
  };

  const handleClear = () => {
    setSize({ width: "", height: "", depth: "" });
    onApply({ width: "", height: "", depth: "" });
  };

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label>Ширина (см)</Label>
        <div className="flex gap-2">
          <Input
            type="number"
            placeholder="от"
            value={size.width}
            onChange={(e) => handleChange("width", e.target.value)}
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label>Высота (см)</Label>
        <div className="flex gap-2">
          <Input
            type="number"
            placeholder="от"
            value={size.height}
            onChange={(e) => handleChange("height", e.target.value)}
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label>Глубина (см)</Label>
        <div className="flex gap-2">
          <Input
            type="number"
            placeholder="от"
            value={size.depth}
            onChange={(e) => handleChange("depth", e.target.value)}
          />
        </div>
      </div>

      <div className="flex gap-2">
        <Button onClick={handleApply} className="flex-1">
          Применить
        </Button>
        <Button onClick={handleClear} variant="outline">
          Сбросить
        </Button>
      </div>
    </div>
  );
}