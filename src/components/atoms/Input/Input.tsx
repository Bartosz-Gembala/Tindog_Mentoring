import { FC } from "react";

interface IInputPros extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const Input: FC<IInputPros> = ({
  label,
  name,
  placeholder,
  type = "text",
  onChange,
}) => {
  return (
    <div>
      {label && (
        <label
          className="block mb-2 text-lg font-lg text-gray-900 text-center"
          htmlFor={name}
        >
          {label}
        </label>
      )}
      <input
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-primary focus:border-primary block w-full p-2.5"
        type={type}
        id={name}
        name={name}
        placeholder={placeholder && placeholder}
        onChange={onChange && onChange}
      />
    </div>
  );
};
