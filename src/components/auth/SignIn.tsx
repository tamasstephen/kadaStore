import { closeModal, useAppDispatch } from "../../store";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { FormEvent, useState } from "react";
import { Heading } from "..";
import { Input } from "./Input";

export const SignIn = () => {
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>();

  const signIn = (e: FormEvent) => {
    e.preventDefault();
    const form = new FormData(e.target as HTMLFormElement);
    const email = form.get("email") as string;
    const password = form.get("password") as string;
    if (email && password) {
      setError(null);
      setIsLoading(true);
      signInWithEmailAndPassword(auth, email, password)
        .then(() => {
          dispatch(closeModal());
          setIsLoading(false);
        })
        .catch(() => {
          setError("An error has occured");
          setIsLoading(false);
        });
    }
  };

  return (
    <div className="bg-white px-20 py-10 relative border border-gray-300 rounded-md">
      <button
        className="absolute top-10 right-10 text-primaryPurple font-semibold"
        onClick={() => dispatch(closeModal())}
      >
        Close
      </button>
      <form onSubmit={signIn}>
        <Heading>Sign In</Heading>
        <div>
          {error && (
            <p className="font-general p-2 flex justify-center items-center bg-red-100 text-red-900 rounded-md mb-4">
              {error}
            </p>
          )}
        </div>

        <Input type="email" name="email" label="Email" required />
        <Input type="password" name="password" label="Password" required />
        <input
          className="bg-black text-white w-full font-general font-semibold p-2 rounded-full cursor-pointer"
          type="submit"
          disabled={isLoading}
          value="Sign in"
        />
      </form>
    </div>
  );
};
