import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useState } from "react";
import { Heading } from "../components";
import { Input } from "../components/auth/Input";
import { useNavigate } from "react-router-dom";
import { Formik, Form } from "formik";
import { FormValues } from "../types";
import { validationSchema } from "../utils/validationSchema";

export const Register = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>();

  const onSubmit = ({ email, password }: FormValues) => {
    setIsLoading(true);
    setError(null);
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigate("/");
      })
      .catch(() => {
        setIsLoading(false);
        setError("The provided email address already exists");
      });
  };

  return (
    <div className="p-20 min-h-screen flex flex-col items-center">
      <div className="max-w-lg w-60 xl:w-96">
        <Heading centered>Create Account</Heading>
        <div>
          {error && (
            <p className="font-general p-2 flex justify-center items-center bg-red-100 text-red-900 rounded-md mb-4">
              {error}
            </p>
          )}
        </div>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          <Form>
            <Input type="email" name="email" label="Email" />
            <Input type="password" name="password" label="Password" />
            <input
              className="bg-black text-white w-full font-general font-semibold p-2 rounded-full cursor-pointer"
              type="submit"
              disabled={isLoading}
            />
          </Form>
        </Formik>
      </div>
    </div>
  );
};
