import { ButtonHTMLAttributes, FC } from "react";

const buttonClasses = {
  primary:
    "bg-primary py-2 px-2 rounded text-center text-xl text-white hover:contrast-150",
  secondary: "", //TO figure out how that button will look like later
  nav: "bg-primary transition duration-300 hover:scale-110 text-2xl text-white font-bold py-2 px-6 rounded",
  round:
    "bg-icon text-primary rounded-full py-2 px-2 w-12 h-12 flex items-center justify-center transform transition duration-300 hover:scale-110",
  link: "text-xl hover:scale-110",
  image: "bg-white  h-2 text-center w-20 hover:scale-110",
};

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: keyof typeof buttonClasses;
}

export const Button: FC<IButtonProps> = ({
  variant = "primary",
  children,
  ...props
}) => (
  <button className={buttonClasses[variant]} {...props}>
    {children}
  </button>
);
