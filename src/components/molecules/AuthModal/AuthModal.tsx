import { useNavigate } from "react-router-dom";
import { Button } from "../../atoms/Button/Button";
import { Input } from "../../atoms/Input/Input";
import { FormEvent, useState } from "react";
import { useHttp } from "../../../hooks/useHttp";

interface AuthResponse {
  message: string;
  token: string;
  userName: string;
}
export const AuthModal = () => {
  const [isLogging, setIsLogging] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { sendRequest, error, isLoading } = useHttp<AuthResponse>();

  const toggleLogging = () => {
    setIsLogging(!isLogging);
  };

  const handleAuth = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const response = await sendRequest("/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response?.token) {
      localStorage.setItem("token", response.token);
      localStorage.setItem("userName", response.userName);
      navigate("/tindog");
    }
  };

  return (
    <div className="d-flex flex-col bg-white z-50 rounded">
      <div className="bg-primary h-20 w-80 flex flex-col items-center justify-center">
        <h3 className="text-white text-center text-4xl font-bold p-3">Login</h3>
      </div>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error.message}</p>}
      <form
        className="px-4 h-full flex flex-col gap-5 justify-center"
        onSubmit={handleAuth}
      >
        <Input
          name="email"
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          name="password"
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {!isLogging && (
          <Input
            name="confirm-password"
            label="Confirm Password"
            type="password"
          />
        )}
        <Button variant="primary" type="submit">
          {!isLogging ? "Register" : "Login"}
        </Button>
      </form>
      <p className="text-center cursor-pointer my-3" onClick={toggleLogging}>
        {isLogging ? "Don't have an account?" : "Already have an account?"}
      </p>
    </div>
  );
};
