"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

// 1. Definimos la interfaz para que TypeScript reconozca los tipos
interface SidebarItemProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  disabled?: boolean; // El '?' significa que es opcional
}

export const SidebarItem = ({ href, icon, label, disabled }: SidebarItemProps) => {
  const pathname = usePathname();
  
  // Si es el dashboard (/), debe ser exacto. Si es otro (ej. /help), debe empezar con esa ruta.
  const isActive = href === "/" 
    ? pathname === "/" 
    : pathname.startsWith(href);

  if (disabled) {
    return (
      <div className="group flex items-center gap-1.5 py-3 text-gray-400 cursor-not-allowed font-bold text-base dark:text-gray-700">
        <div className="w-1.5 h-6" />
        <span className="shrink-0">{icon}</span>
        <span>{label}</span>
      </div>
    );
  }

  return (
    <li>
      <Link
        href={href}
        className={`group flex items-center gap-1.5 py-3 transition-all duration-150 font-bold text-base
          ${isActive 
            ? "text-primary bg-gray-50 dark:bg-gray-800/50" 
            : "text-gray-700 hover:text-primary hover:bg-gray-50 dark:text-gray-500 dark:hover:bg-gray-800"}`}
      >
        <div className={`w-1.5 h-6 transition-all ${isActive ? "bg-primary" : "bg-transparent group-hover:bg-primary"}`} />
        <span className={`shrink-0 transition-colors ${isActive ? "text-primary" : "text-gray-400 group-hover:text-primary"}`}>
          {icon}
        </span>
        <span>{label}</span>
      </Link>
    </li>
  );
};