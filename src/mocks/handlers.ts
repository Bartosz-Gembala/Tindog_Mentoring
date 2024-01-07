import { http, HttpResponse } from "msw";
import { users } from "./users";
import { messages } from "./messages";

interface ILoginRequest {
  email: string;
  password: string;
}

export const handlers = [
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
];
