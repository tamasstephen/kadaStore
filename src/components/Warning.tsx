import { PropsWithChildren } from "react";

interface WarningProps extends PropsWithChildren {}

export const Warning = ({ children }: WarningProps) => {
  return (
    <p className="font-general p-2 flex justify-center items-center bg-red-100 text-red-900 rounded-md mb-4">
      {children}
    </p>
  );
};
