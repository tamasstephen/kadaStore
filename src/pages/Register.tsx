import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { FormEvent, useState } from "react";
import { Heading } from "../components";
import { Input } from "../components/auth/Input";
import { useNavigate } from "react-router-dom";

export const Register = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>();

  const register = (e: FormEvent) => {
    e.preventDefault();
    const form = new FormData(e.target as HTMLFormElement);
    const email = form.get("email") as string;
    const password = form.get("password") as string;
    if (email && password) {
      setIsLoading(true);
      setError(null);
      createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
          navigate("/");
        })
        .catch(() => {
          setIsLoading(false);
          setError("An error has occured");
        });
    }
  };

  return (
    <div className="p-20 min-h-screen flex flex-col items-center">
      <Heading>Create Account</Heading>
      <div className="max-w-lg">
        <div>
          {error && (
            <p className="font-general p-2 flex justify-center items-center bg-red-100 text-red-900 rounded-md mb-4">
              {error}
            </p>
          )}
        </div>
        <form onSubmit={register}>
          <Input type="email" name="email" label="Email" required />
          <Input type="password" name="password" label="Password" required />
          <input
            className="bg-black text-white w-full font-general font-semibold p-2 rounded-full cursor-pointer"
            type="submit"
            disabled={isLoading}
          />
        </form>
      </div>
    </div>
  );
};
