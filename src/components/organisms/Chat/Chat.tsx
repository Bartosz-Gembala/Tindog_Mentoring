import { FC, useState, useEffect, ChangeEvent, FormEvent, useRef } from "react";
import { Button } from "../../atoms/Button/Button";
import { Input } from "../../atoms/Input/Input";
import { IMessage } from "../../../shared/types/message";
import { useAuthContext } from "../../../contexts/auth-context";
import { useHttp } from "../../../hooks/useHttp";
import { useMainPageContext } from "../../../contexts/main-page-context";

export const Chat: FC = () => {
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [newMessageContent, setNewMessageContent] = useState<string>("");
  const { userName } = useAuthContext();
  const { messageTargetUser } = useMainPageContext();
  const chatEndRef = useRef<null | HTMLDivElement>(null);

  const { sendRequest: fetchMessages } = useHttp<{ message: IMessage[] }>();
  const { sendRequest: sendMessage } = useHttp<{
    message: { newMessage: IMessage };
  }>();

  const getMessages = async () => {
    const url = `/messages/${userName}/${messageTargetUser?.name}`;
    const response = await fetchMessages(url, {
      method: "GET",
    });

    if (response?.message) {
      setMessages(response.message);
    }
  };

  useEffect(() => {
    getMessages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleNewMessage = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setNewMessageContent(value);
  };

  const handleSendMessage = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newMessage = {
      from: userName as string,
      to: messageTargetUser!.name,
      content: newMessageContent,
      timestamp: Date.now(),
    };

    const response = await sendMessage("/message", {
      method: "POST",
      body: JSON.stringify({ newMessage }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response && response.message) {
      setMessages([...messages, response.message.newMessage]);
    } else {
      return; //Error here
    }
  };

  return (
    <div className="flex flex-col h-[30rem] bg-gray-100">
      <div className="flex flex-row justify-between p-4 border-b border-gray-200">
        <h2 className="text-lg font-semibold">{messageTargetUser?.name}</h2>
      </div>
      <div className=" mx-1 flex flex-col flex-grow overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-primary scrollbar-track-white">
        {messages
          .sort((a, b) => a.timestamp - b.timestamp)
          .map((message, index) => {
            if (message.from === userName) {
              return (
                <div
                  ref={index === messages.length - 1 ? chatEndRef : null}
                  className="p-2 rounded-lg bg-primary text-white self-end"
                >
                  <div>{message.content}</div>
                </div>
              );
            }
            return (
              <div
                ref={index === messages.length - 1 ? chatEndRef : null}
                className="p-2 rounded-lg bg-gray-200"
              >
                <div>{message.content}</div>
              </div>
            );
          })}
      </div>
      <form
        onSubmit={handleSendMessage}
        className="flex flex-row items-center p-4 border-t border-gray-200"
      >
        <Input
          onChange={handleNewMessage}
          value={newMessageContent}
          type="text"
          className="flex-grow p-2 mr-4 rounded border border-gray-300 focus:outline-none focus:border-primary"
          placeholder="Type your message"
        />
        <Button disabled={!newMessageContent} variant="primary">
          Send
        </Button>
      </form>
    </div>
  );
};
