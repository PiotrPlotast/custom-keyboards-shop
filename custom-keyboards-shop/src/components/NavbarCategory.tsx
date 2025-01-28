import { useState } from "react";

export default function Collapsible({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-4 w-24">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-24 text-left bg-blue-500 text-white px-4 py-2 rounded-lg"
      >
        {title}
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <div className="p-4 bg-gray-100">{children}</div>
      </div>
    </div>
  );
}
