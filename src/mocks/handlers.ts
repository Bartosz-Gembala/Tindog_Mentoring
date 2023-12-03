import { http, HttpResponse } from "msw";

interface ILoginRequest {
  email: string;
  password: string;
}

export const handlers = [
  http.post("/login", async ({ request }) => {
    const { email, password } = (await request.json()) as ILoginRequest;
    if (email === "test" && password === "test") {
      return HttpResponse.json({ message: "Login Ok" }, { status: 200 });
    } else {
      return HttpResponse.json({ message: "Login not ok" }, { status: 401 });
    }
  }),
];
