import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Wallet } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export function UserBalance() {
  const [balance, setBalance] = useState(1000); // Starting balance
  const [amount, setAmount] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("card");
  const { toast } = useToast();

  const handleAddBalance = () => {
    const numAmount = parseFloat(amount);
    if (isNaN(numAmount) || numAmount <= 0) {
      toast({
        title: "Invalid amount",
        description: "Please enter a valid amount to add",
        variant: "destructive",
      });
      return;
    }

    setBalance(prev => prev + numAmount);
    setAmount("");
    toast({
      title: "Balance updated",
      description: `$${numAmount.toLocaleString()} has been added to your balance`,
    });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" className="gap-2">
          <Wallet className="h-5 w-5" />
          ${balance.toLocaleString()}
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Your Balance</DialogTitle>
          <DialogDescription>
            Add funds to your account
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4">
          <div className="text-center">
            <div className="text-sm text-muted-foreground">Current Balance</div>
            <div className="text-3xl font-bold">${balance.toLocaleString()}</div>
          </div>
          <div className="flex gap-2">
            <Input
              type="number"
              placeholder="Enter amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
            <Button onClick={handleAddBalance}>Add Funds</Button>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {[100, 500, 1000].map((quickAmount) => (
              <Button
                key={quickAmount}
                variant="outline"
                onClick={() => setAmount(quickAmount.toString())}
              >
                ${quickAmount}
              </Button>
            ))}
          </div>
          <div className="mt-4">
            <h4 className="font-medium">Payment Method</h4>
            <RadioGroup
              value={paymentMethod}
              onValueChange={setPaymentMethod}
              className="flex flex-col space-y-2"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="card" id="card" />
                <label htmlFor="card" className="text-sm font-medium">
                  Credit/Debit Card
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="paypal" id="paypal" />
                <label htmlFor="paypal" className="text-sm font-medium">
                  PayPal
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="bank" id="bank" />
                <label htmlFor="bank" className="text-sm font-medium">
                  Bank Transfer
                </label>
              </div>
            </RadioGroup>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}