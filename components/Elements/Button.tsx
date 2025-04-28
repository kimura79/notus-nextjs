// components/Elements/Button.tsx
import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  color?: "blue" | "lightBlue" | "red" | "green" | "gray";
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  disabled?: boolean;
};

const colorClasses = {
  blue: "bg-blue-600 hover:bg-blue-700 text-white",
  lightBlue: "bg-blue-100 hover:bg-blue-200 text-blue-700",
  red: "bg-red-600 hover:bg-red-700 text-white",
  green: "bg-green-600 hover:bg-green-700 text-white",
  gray: "bg-gray-600 hover:bg-gray-700 text-white",
};

export default function Button({
  children,
  color = "blue",
  type = "button",
  onClick,
  disabled = false,
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`w-full font-bold py-2 px-6 rounded-full transition duration-300 ${
        colorClasses[color]
      } ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
    >
      {children}
    </button>
  );
}
