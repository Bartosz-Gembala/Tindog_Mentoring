import { FC, useState, useEffect } from "react";
import { Button } from "../../atoms/Button/Button";
import { Input } from "../../atoms/Input/Input";
import { IMessage } from "../../../shared/types/message";
import { useAuthContext } from "../../../contexts/auth-context";
import { useHttp } from "../../../hooks/useHttp";
import { useMainPageContext } from "../../../contexts/main-page-context";

export const Chat: FC = () => {
  const [messages, setMessages] = useState<IMessage[]>([]);
  const { token, userName } = useAuthContext();
  const { messageTargetUser } = useMainPageContext();
  const { sendRequest: fetchMessages } = useHttp<{ message: IMessage[] }>();

  const getMessages = async () => {
    const url = `/messages/${userName}/${messageTargetUser?.name}`;

    const response = await fetchMessages(url, {
      method: "GET",
      headers: {
        token: token!,
      },
    });
    console.log(response);

    if (response?.message) {
      setMessages(response.message);
    }
  };
  useEffect(() => {
    getMessages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="flex flex-col h-[30rem] bg-gray-100">
      <div className="flex flex-row justify-between p-4 border-b border-gray-200">
        <h2 className="text-lg font-semibold">{messageTargetUser?.name}</h2>
      </div>
      <div className="flex flex-col flex-grow overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-primary scrollbar-track-white">
        {messages
          .sort((a, b) => a.timestamp - b.timestamp)
          .map((message) => {
            if (message.from === userName) {
              return (
                <div className="p-2 rounded-lg bg-primary text-white self-end">
                  {message.content}
                </div>
              );
            }
            return (
              <div className="p-2 rounded-lg bg-gray-200">
                {message.content}
              </div>
            );
          })}
      </div>
      <div className="flex flex-row items-center p-4 border-t border-gray-200">
        <Input
          type="text"
          className="flex-grow p-2 mr-4 rounded border border-gray-300 focus:outline-none focus:border-primary"
          placeholder="Type your message"
        />
        <Button variant="primary">Send</Button>
      </div>
    </div>
  );
};
