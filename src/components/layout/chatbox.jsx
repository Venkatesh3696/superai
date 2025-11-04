import { Button } from "@/components/ui/button";
import { Select, SelectTrigger, SelectValue } from "../ui/select";
import { ArrowRight, Image, Plus } from "lucide-react";
import { Textarea } from "../ui/textarea";
import { useState } from "react";

export default function ChatBox() {
  const [query, setQuery] = useState("");

  console.log({ query });

  const onSubmitMessage = (e) => {
    e.preventDefault();

    // api Calls

    setQuery("");
  };
  return (
    <div className=" rounded-2xl h-full flex flex-col justify-end items-center mx-auto p-4 text-white">
      <div className="text-white flex flex-col items-center mb-6">
        <img src="/AiAvatar.png" className="w-32 aspect-auto" />
        <p>Good morning, John</p>
        <h1>How can i assist you today?</h1>
      </div>

      <div className="flex flex-col w-full">
        <form
          className="bg-[#212121] p-6 rounded-2xl"
          onSubmit={onSubmitMessage}
        >
          <div className="flex justify-between w-full ">
            <Textarea
              placeholder="Ask me anything..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="flex-1 max-h-[50px] outline-none border-none focus:outline-none focus:border-none focus-visible:ring-0 resize-none overflow-hidden scrollbar-hide bg-transparent text-white"
            />
            <Select>
              <SelectTrigger className="relative w-[180px] bg-[#1c1c1c] text-white pr-8 cursor-pointer">
                <SelectValue placeholder="All Web">All Web</SelectValue>
              </SelectTrigger>
            </Select>
          </div>
          <div className="flex justify-between items-end w-full">
            <div>
              <Button>
                <Plus size={24} />
                Add Attachment
              </Button>

              <Button>
                <Image size={24} />
                Use Image
              </Button>
            </div>
            <div className="flex items-end">
              <p>10/1500</p>
              <Button type="submit" className="ml-2">
                <ArrowRight />
              </Button>
            </div>
          </div>
        </form>
      </div>

      <p className="text-gray-400">
        Centra may display inacurrate info, so please double check the response.
        <a href="/">Your Privacy & Centra AI</a>
      </p>
    </div>
  );
}
