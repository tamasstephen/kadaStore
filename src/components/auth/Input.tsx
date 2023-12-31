import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const Input = ({ name, label, type, required }: InputProps) => {
  return (
    <fieldset className="flex flex-col mb-4">
      <label htmlFor={name} className="font-general pb-1 text-sm">
        {label}
      </label>
      <input
        className="font-general border border-gray-400 p-1 rounded-md"
        type={type}
        name={name}
        required={required}
      />
    </fieldset>
  );
};
