import { useState } from "react";
import { Menu, X, Home, Settings, Info } from "lucide-react";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      {/* Botão para abrir o menu */}
      <button
        onClick={() => setIsOpen(true)}
        className="p-2 m-2 text-white bg-blue-600 rounded-md"
      >
        <Menu />
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Menu lateral */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-bold">Menu</h2>
          <button onClick={() => setIsOpen(false)}>
            <X />
          </button>
        </div>
        <nav className="flex flex-col p-4 gap-4">
          <a href="#" className="flex items-center gap-2 text-gray-700 hover:text-blue-600">
            <Home size={20} /> Início
          </a>
          <a href="#" className="flex items-center gap-2 text-gray-700 hover:text-blue-600">
            <Settings size={20} /> Configurações
          </a>
          <a href="#" className="flex items-center gap-2 text-gray-700 hover:text-blue-600">
            <Info size={20} /> Sobre
          </a>
        </nav>
      </div>
    </div>
  );
}
