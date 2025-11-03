import { useState } from "react";
import {
  BotMessageSquare,
  Video,
  Code,
  Image,
  PanelRight,
  TextAlignStart,
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
      } bg-muted h-screen transition-all duration-300 flex flex-col border-r p-4`}
    >
      <div className="flex items-center justify-between p-4 border-b">
        <h2 className={`font-bold text-lg ${!open && "hidden"}`}>Super AI</h2>
        <button
          onClick={() => setOpen(!open)}
          className="p-2 rounded hover:bg-accent cursor-pointer"
        >
          <PanelRight size={18} />
        </button>
      </div>

      <nav className="flex-1 mt-4 space-y-2">
        {navItems.map((item) => (
          <button
            key={item.name}
            className="flex items-center gap-3 px-4 py-2 w-full text-left hover:bg-accent rounded-md"
          >
            {item.icon}
            {open && <span>{item.name}</span>}
          </button>
        ))}
      </nav>

      {open && (
        <nav className="flex-1 mt-4 space-y-2">
          {previousChats.map((item) => (
            <button
              key={item.name}
              className="flex items-center gap-3 px-4 py-2 w-full text-left hover:bg-accent rounded-md"
            >
              <TextAlignStart />

              <span>{item.title}</span>
            </button>
          ))}
        </nav>
      )}
      {open && (
        <div>
          <div>
            <div>
              <div>
                <h1>Upgrade Plan</h1>
                <p>More access to the best models</p>
              </div>
              <Button>Upgrade Plan</Button>
            </div>
          </div>
          <div>
            <div>
              <div></div>
              <h1>John doe</h1>
              <p>johndoe@gmail.com</p>
            </div>
          </div>
        </div>
      )}
    </aside>
  );
}
