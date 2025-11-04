import ChatBox from "./components/layout/chatbox";
import Layout from "./components/layout/layout";

function App() {
  return (
    <Layout className="flex flex-col h-full">
      <div className="h-full bg-[#292929]">
        <ChatBox />
      </div>
    </Layout>
  );
}

export default App;
