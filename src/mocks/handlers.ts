import { http, HttpResponse, StrictResponse } from "msw";
import { users } from "./users";
import { messages } from "./messages";
import { IMessage } from "../shared/types/message";

interface ILoginRequest {
  email: string;
  password: string;
}

export const handlers = [
  http.get("/profiles", ({ request }) => {
    const token = request.headers.get("token");

    if (token) {
      return HttpResponse.json({ message: users }, { status: 200 });
    } else {
      return HttpResponse.json(
        { error: "No token", message: [] },
        { status: 401 }
      );
    }
  }),

  http.get("/messages/:userName/:targetName", ({ params, request }) => {
    const token = request.headers.get("token");
    const userName = params.userName.toString().toLowerCase();
    const targetName = params.targetName.toString().toLowerCase();

    if (token) {
      const filteredMessages = messages.filter((message) => {
        return (
          (message.from === userName && message.to === targetName) ||
          (message.to === userName && message.from === targetName)
        );
      });
      return HttpResponse.json({ message: filteredMessages }, { status: 200 });
    } else {
      return HttpResponse.json(
        { error: "No token", message: [] },
        { status: 401 }
      );
    }
  }),

  http.post("/login", async ({ request }) => {
    const { email, password } = (await request.json()) as ILoginRequest;

    if (email === "test" && password === "test") {
      return HttpResponse.json(
        { message: "Login Ok", token: "1", userName: email },
        { status: 200 }
      );
    } else {
      return HttpResponse.json({ message: "Login not ok" }, { status: 401 });
    }
  }),

  http.post(
    "/message",
    async ({
      request,
    }): Promise<StrictResponse<{ message: IMessage } | { error: string }>> => {
      const token = request.headers.get("token");

      if (token) {
        const newMessage = (await request.json()) as IMessage;
        messages.push(newMessage);
        return HttpResponse.json({ message: newMessage }, { status: 200 });
      } else {
        return HttpResponse.json({ error: "No token" }, { status: 401 });
      }
    }
  ),
];
