import { useState } from "react";
import {
  BotMessageSquare,
  Video,
  Code,
  Image,
  PanelRight,
  TextAlignStart,
  Brain,
} from "lucide-react";
import { Button } from "../ui/button";

const navItems = [
  { name: "AI Chat", icon: <BotMessageSquare size={18} /> },
  { name: "AI Video", icon: <Video size={18} /> },
  { name: "AI Image", icon: <Image size={18} /> },
  { name: "AI development", icon: <Code size={18} /> },
];

const previousChats = [
  { id: 1, title: "Describe the benifits of reactjs" },
  { id: 2, title: "Describe the benifits of reactjs" },
  { id: 3, title: "Describe the benifits of reactjs" },
  { id: 4, title: "Describe the benifits of reactjs" },
];

export default function Sidebar() {
  const [open, setOpen] = useState(true);

  return (
    <aside
      className={`${
        open ? "w-64" : "w-20"
      } bg-[#111111] text-[#D9DADB] h-screen transition-all duration-300 flex flex-col justify-between border-r p-4 `}
    >
      <div className="flex items-center justify-between p-4 border-b h-full">
        <h2 className={`font-bold text-lg flex  ${!open && "hidden"} `}>
          <div className="bg-blue-500 text-white aspect-square p-2 h-full  justify-center pb-4 mr-3">
            <h1>C</h1>
          </div>
          Super AI
        </h2>
        <button
          onClick={() => setOpen(!open)}
          className="p-2 rounded hover:bg-accent cursor-pointer"
        >
          <PanelRight size={18} />
        </button>
      </div>
      <div className="justify-self-start h-2/3">
        <nav className="flex-1 mt-4 space-y-2">
          {navItems.map((item) => (
            <button
              key={item.name}
              className="flex items-center gap-3 px-4 py-2 w-full text-left hover:bg-accent hover:text-black rounded-md"
            >
              {item.icon}
              {open && <span>{item.name}</span>}
            </button>
          ))}
        </nav>

        {open && (
          <nav className="flex-1 mt-4 space-y-2">
            {previousChats.map((item, ind) => (
              <button
                key={`chat-${ind}`}
                className="flex items-center gap-3 px-4 py-2 w-full text-left hover:bg-accent rounded-md"
              >
                <TextAlignStart />
                <span>{item.title}</span>
              </button>
            ))}
          </nav>
        )}
      </div>
      {open && (
        <div>
          <div className="bg-linear-to-r/srgb from-indigo-500 to-teal-400 p-2 rounded">
            <div className="flex  p-2">
              <Brain size={32} />
              <div className="">
                <h1>Upgrade Plan</h1>
                <p>More access to the best models</p>
              </div>
            </div>
            <Button className="w-full">Upgrade Plan</Button>
          </div>
        </div>
      )}
    </aside>
  );
}
