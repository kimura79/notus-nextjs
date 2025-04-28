export default function Card({ children }) {
  return (
    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-2xl p-6 transition-all duration-300 hover:shadow-2xl">
      {children}
    </div>
  );
}
