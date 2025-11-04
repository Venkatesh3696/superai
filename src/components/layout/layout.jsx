import Sidebar from "./sidebar";
import Header from "./header";

export default function Layout({ children }) {
  return (
    <div className="flex h-screen w-screen  mx-auto  bg-[#111111]">
      <Sidebar />
      <div className="flex flex-col flex-1 h-screen overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto bg-background">{children}</main>
      </div>
    </div>
  );
}
