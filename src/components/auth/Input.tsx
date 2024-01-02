import { InputHTMLAttributes } from "react";
import { useField } from "formik";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const Input = (props: InputProps) => {
  const { name, label } = props;
  const [field, meta] = useField(name as string);
  return (
    <fieldset className="flex flex-col mb-4">
      <label htmlFor={name} className="font-general pb-1 text-sm">
        {label}
      </label>
      <input
        {...field}
        className="font-general border border-gray-400 p-1 rounded-md"
        {...props}
      />
      {meta.touched && meta.error ? (
        <div className="pt-2 text-red-600 text-sm">{meta.error}</div>
      ) : null}
    </fieldset>
  );
};
