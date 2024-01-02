import { closeModal, useAppDispatch } from "../../store";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useState } from "react";
import { Heading } from "..";
import { Input } from "./Input";
import { Formik, Form } from "formik";
import { FormValues } from "../../types";
import { validationSchema } from "../../utils/validationSchema";

export const SignIn = () => {
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>();

  const onSubmit = ({ email, password }: FormValues) => {
    setError(null);
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        dispatch(closeModal());
        setIsLoading(false);
      })
      .catch(() => {
        setError("Invalid email or password");
        setIsLoading(false);
      });
  };

  return (
    <div className="px-8 py-4 bg-white lg:px-20 lg:py-10 relative border border-gray-300 rounded-md">
      <button
        className="absolute top-10 right-10 text-primaryPurple font-semibold"
        onClick={() => dispatch(closeModal())}
      >
        Close
      </button>
      <div className="w-56">
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          <Form>
            <Heading>Sign In</Heading>
            <div>
              {error && (
                <p className="font-general p-2 flex justify-center items-center bg-red-100 text-red-900 rounded-md mb-4">
                  {error}
                </p>
              )}
            </div>

            <Input type="email" name="email" label="Email" />
            <Input type="password" name="password" label="Password" />
            <input
              className="bg-black text-white w-full font-general font-semibold p-2 rounded-full cursor-pointer"
              type="submit"
              disabled={isLoading}
              value="Sign in"
            />
          </Form>
        </Formik>
      </div>
    </div>
  );
};
