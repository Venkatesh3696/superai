import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function ChatBox() {
  return (
    <div className="border rounded-2xl  max-w-2xl mx-auto shadow-sm">
      <div className="h-64 overflow-y-auto mb-4 p-4 bg-muted/40 rounded-md">
        <p className="text-sm text-muted-foreground">
          👋 Hi, how can I assist you today?
        </p>
      </div>
      <div className="flex gap-2">
        <Input placeholder="Type your message..." className="flex-1" />
        <Button>Send</Button>
      </div>
    </div>
  );
}
