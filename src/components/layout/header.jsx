import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const chatModels = [
  {
    id: 1,
    model: "SuperAi 1.0",
  },
  {
    id: 2,
    model: "SuperAi 2.0",
  },
  {
    id: 3,
    model: "SuperAi 3.0",
  },
  {
    id: 4,
    model: "SuperAi 4.0",
  },
];

export default function Header() {
  const [selectedModel, setSelectedModel] = useState(2);

  const currentModelName =
    chatModels.find((m) => m.id.toString() === selectedModel.toString())
      ?.model || "";

  console.log(selectedModel);

  return (
    <header className="bg-[#111111] h-16 w-full  border-b flex items-center justify-end px-10">
      <div className="flex items-center gap-3">
        <Select
          value={selectedModel.toString()}
          onValueChange={(val) => setSelectedModel(Number(val))}
          className="cursor-pointer bg-[#A1A1A1] text-white"
        >
          <SelectTrigger className="relative w-[180px] bg-[#1c1c1c] text-white pr-8 cursor-pointer">
            <SelectValue placeholder="Select Model">
              {currentModelName}
            </SelectValue>
          </SelectTrigger>
          <SelectContent className="text-black">
            {chatModels.map((each) => (
              <SelectItem value={each.id}>{each.model}</SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Button
          variant="ghost"
          size="icon"
          className="ml-4 p-2 w-fit cursor-pointer bg-white text-black"
        >
          <Plus size={12} />
          New Chat
        </Button>
      </div>
    </header>
  );
}
