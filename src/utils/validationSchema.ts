import * as Yup from "yup";

export const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email address").required(),
  password: Yup.string()
    .min(8, "The password needs to be at least 8 characters")
    .required("The password needs to be at least 8 characters"),
});
