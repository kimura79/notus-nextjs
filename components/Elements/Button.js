export default function Button({
  children,
  color = "blue",
  type = "button",
  onClick,
  disabled = false,
}) {
  const colorClasses = {
    blue: "bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white",
    lightBlue: "bg-blue-100 hover:bg-blue-200 text-blue-700",
    red: "bg-gradient-to-r from-red-500 to-red-700 hover:from-red-600 hover:to-red-800 text-white",
    green: "bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 text-white",
    gray: "bg-gradient-to-r from-gray-500 to-gray-700 hover:from-gray-600 hover:to-gray-800 text-white",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`w-full font-bold py-3 px-6 rounded-full shadow-md hover:shadow-lg transition-all duration-300 ${
        colorClasses[color]
      } ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
    >
      {children}
    </button>
  );
}
