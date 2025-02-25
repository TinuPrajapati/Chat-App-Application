import { useChatStore } from "../store/useChatStore";

import Sidebar from "../components/Sidebar";
import NoChatSelected from "../components/NoChatSelected";
import ChatContainer from "../components/ChatContainer";

const HomePage = () => {
  const { selectedUser } = useChatStore();

  return (
    <div className="h-[87.5vh] bg-base-200 flex items-center justify-center px-4 py-3">
      <div className="bg-base-100 rounded-lg shadow-cl w-full h-[calc(100vh-6rem)]">
        <div className="flex h-full overflow-hidden rounded-lg">
          <Sidebar />

          {!selectedUser ? <NoChatSelected /> : <ChatContainer />}
        </div>
      </div>
    </div>
  );
};
export default HomePage;
