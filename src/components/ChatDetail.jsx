import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage, setNameChat } from "../stores/chatSlice";
import Gemini from "../Gemini";
import { UserRound } from "lucide-react";

const ChatDetail = () => {
  const [dataDetail, setDataDetail] = useState([]);
  const [messageDetail, setMessageDetail] = useState([]);
  const [inputChat, setInputChat] = useState("");
  const { id } = { id: "abc" };
  const { data } = useSelector((state) => state.chat);
  const dispatch = useDispatch();
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    if (data.length > 0) {
      const chat = data.find((chat) => chat.id === id);
      console.log(chat);

      if (chat) {
        setDataDetail(chat);
        setMessageDetail(chat.messages);
      }
    }
  }, [data, id]);

  const handleChatDetail = async () => {
    setIsShow(true);
    const chatText = await Gemini(inputChat, messageDetail);

    if (dataDetail.title === "Chat") {
      const promptName = `This is a new chat, and user ask about ${inputChat}. No rely and comment just give me a name for this chat, Max length is 10 characters`;
      const newTitle = await Gemini(promptName);
      dispatch(setNameChat({ newTitle, chatId: id }));
    }
    if (chatText) {
      const dataMessage = {
        idChat: id,
        userMess: inputChat,
        botMess: chatText,
      };

      dispatch(addMessage(dataMessage));
      setInputChat("");
    }
  };

  return (
    <div className="text-white w-full relative p-10">
      <div className="w-full mx-auto space-y-10">
        {isShow ? (
          <div className="flex flex-col space-y-4 p-4 h-[400px] overflow-x-hidden overflow-y-auto">
            {Array.isArray(messageDetail) &&
              messageDetail.map((item) => (
                <div className="flex space-y-6 flex-col" key={item.id}>
                  <div className="flex space-x-6 items-baseline text-gray-300">
                    {item.isBot ? (
                      <>
                        <img src={"/star.png"} alt="star" className="w-8 h-8" />
                        <p dangerouslySetInnerHTML={{ __html: item.text }} />
                      </>
                    ) : (
                      <div className="flex items-center space-x-6 bg-gray-700 p-4 rounded-lg">
                        <p>
                          <UserRound size={32} />
                        </p>
                        <p>{item.text}</p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
          </div>
        ) : (
          <div className="flex flex-col space-y-5">
            <div className="space-y-1">
              <h2 className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 text-[30px] inline-block text-transparent bg-clip-text font-bold ">
                Xin Chào
              </h2>
              <p className="text-3xl">
                Hôm nay chúng tôi có thể giúp gì cho bạn?
              </p>
            </div>
          </div>
        )}
        <div className="flex items-center w-full justify-between gap-4">
          <input
            type="text"
            value={inputChat}
            placeholder="Nhập câu lệnh tại đây"
            className="p-4 rounded-lg bg-gray-700 w-4/5 border"
            onChange={(e) => setInputChat(e.target.value)}
          />
          <button
            className="p-4 rounded-lg bg-green-600 hover:bg-green-700 transition-colors ease-linear text-white font-bold w-1/5"
            onClick={handleChatDetail}
          >
            Gửi
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatDetail;
