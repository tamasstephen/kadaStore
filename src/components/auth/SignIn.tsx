import { closeModal, useAppDispatch } from "../../store";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { FormEvent, useState } from "react";

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
    <div className="bg-white p-20 relative">
      <button
        className="absolute top-10 right-10"
        onClick={() => dispatch(closeModal())}
      >
        Close
      </button>
      <form onSubmit={signIn}>
        <div>{error && <p>{error}</p>}</div>
        <fieldset>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" />
        </fieldset>
        <fieldset>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" />
        </fieldset>
        <input type="submit" disabled={isLoading} />
      </form>
    </div>
  );
};
