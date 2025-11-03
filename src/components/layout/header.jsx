import { Button } from "@/components/ui/button";
import { Bell, Plus } from "lucide-react";

export default function Header() {
  return (
    <header className="h-16 bg-background border-b flex items-center justify-between px-10">
      <h1 className="font-bold text-xl">Dashboard</h1>
      <div className="flex items-center gap-3">
        <Button variant="ghost" size="icon">
          <Plus size={12} />
          New Chat
        </Button>
      </div>
    </header>
  );
}
