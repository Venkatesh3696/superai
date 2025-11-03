import Hero from "./components/Hero";
import ChatBox from "./components/layout/chatbox";
import Layout from "./components/layout/layout";

function App() {
  return (
    <Layout className="flex flex-col ">
      <Hero />
      <div>
        <ChatBox />
      </div>
    </Layout>
  );
}

export default App;
