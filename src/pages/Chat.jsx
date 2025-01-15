import { useDispatch } from "react-redux";
import ChatDetail from "../components/ChatDetail";
import { useEffect } from "react";
import { addChat } from "../stores/chatSlice";

function Chat() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addChat());
  }, [dispatch]);

  return (
    <div className="mt-28 bg-gray-800">
      <ChatDetail />
    </div>
  );
}

export default Chat;
