import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { FormEvent } from "react";
import { Heading } from "..";

export const Register = () => {
  const register = (e: FormEvent) => {
    e.preventDefault();
    const form = new FormData(e.target as HTMLFormElement);
    const email = form.get("email") as string;
    const password = form.get("password") as string;
    if (email && password) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((credential) => console.log(credential))
        .catch((err) => console.log(err));
    }
  };
  return (
    <div className=" p-20 relative min-h-screen">
      <Heading>Create Account</Heading>
      <form onSubmit={register}>
        <fieldset>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" />
        </fieldset>
        <fieldset>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" />
        </fieldset>
        <input type="submit" />
      </form>
    </div>
  );
};
