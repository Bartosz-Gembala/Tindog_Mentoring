import { useNavigate } from "react-router-dom";
import { Button } from "../../atoms/Button/Button";
import { Input } from "../../atoms/Input/Input";
import { FormEvent, useState } from "react";

export const AuthModal = () => {
  const [isLogging, setIsLogging] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const toggleLogging = () => {
    setIsLogging(!isLogging);
  };

  const handleAuth = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const response = await fetch("/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      navigate("/tindog");
    }
  };

  return (
    <div className="d-flex flex-col bg-white z-50 rounded">
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
        <Button type="submit">{!isLogging ? "Register" : "Login"}</Button>
      </form>
      <p className="text-center cursor-pointer my-3" onClick={toggleLogging}>
        {isLogging ? "Don't have an account?" : "Already have an account?"}
      </p>
    </div>
  );
};
