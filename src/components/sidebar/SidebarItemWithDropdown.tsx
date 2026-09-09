"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";

// 1. Definimos interfaces para eliminar los errores de "any"
interface SubItem {
  label: string;
  href: string;
}

interface SidebarItemProps {
  label: string;
  icon: React.ReactNode;
  items: SubItem[];
}

export const SidebarItemWithDropdown = ({ label, icon, items }: SidebarItemProps) => {
  const pathname = usePathname();
  
  // 2. Calculamos si hay un hijo activo
  const isAnyChildActive = items.some((item) => pathname === item.href);
  
  // 3. ESTADO CONTROLADO: 
  // Usamos una técnica de sincronización de estado durante el render.
  // Guardamos la ruta anterior para saber si cambió y debemos abrir el menú.
  const [prevPathname, setPrevPathname] = useState(pathname);
  const [isOpen, setIsOpen] = useState(isAnyChildActive);

  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    if (isAnyChildActive) {
      setIsOpen(true);
    }
  }

  return (
    <li>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`group flex items-center justify-between w-full py-3 transition-all font-bold text-base outline-none
          ${isAnyChildActive 
            ? "text-primary bg-gray-50 dark:bg-gray-800/50" 
            : "text-gray-700 hover:text-primary hover:bg-gray-50 dark:text-gray-500 dark:hover:bg-gray-800"}`}
      >
        <div className="flex items-center gap-1.5 flex-1">
          <div className={`w-1.5 h-6 transition-all ${isAnyChildActive ? "bg-primary" : "bg-transparent group-hover:bg-primary"}`} />
          <span className={`shrink-0 ${isAnyChildActive ? "text-primary" : "text-gray-400 group-hover:text-primary"}`}>
            {icon}
          </span>
          <span>{label}</span>
        </div>
        <ChevronDown className={`size-4 mr-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <ul className="mt-3 ml-6 mr-3 space-y-1">
          {items.map((item) => {
            const isChildActive = pathname === item.href;
            return (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className={`block py-2 px-4 text-sm font-semibold transition-colors rounded-md
                    ${isChildActive 
                      ? "text-primary bg-primary/5" 
                      : "text-gray-500 hover:text-primary hover:bg-gray-50 dark:hover:bg-gray-800"}`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </li>
  );
};