// src/components/ui/button.tsx
import React, { ReactNode } from "react";

interface ButtonProps {
  onClick: () => void;
  children: ReactNode; // Lägger till stöd för children
}

const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      {children}
    </button>
  );
};

export default Button;
