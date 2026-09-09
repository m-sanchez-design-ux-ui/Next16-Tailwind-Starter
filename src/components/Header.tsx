'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

interface HeaderProps {
  onOpenSidebar: () => void;
  onOpenDrawer: () => void;
  notificationCount: number;
}


export default function Header({ onOpenSidebar, onOpenDrawer, notificationCount }: HeaderProps) {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="min-h-13 w-full sticky top-0 z-19">
      <div className="w-full lg:ml-auto lg:max-w-[calc(100%-255px)] px-7 py-3 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 flex justify-between lg:justify-end items-center">
        
        {/* Burger Menu (Solo Mobile) */}
        <button 
          type="button"
          onClick={onOpenSidebar} 
          className="group inline-flex justify-center items-center size-8 bg-gray-100 hover:bg-gray-200 rounded-lg lg:hidden dark:bg-gray-700 dark:hover:bg-gray-600"
        >
          <span className="sr-only">Open sidebar</span>
          <svg className="size-6 fill-none stroke-gray-700 dark:stroke-gray-100" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        <div className="flex items-center gap-4">
         {/* Botón de Notificaciones: Ahora llama a onOpenDrawer */}
          <button 
            onClick={onOpenDrawer} 
            className="group relative flex justify-center items-center size-8 bg-gray-100 hover:bg-gray-200 rounded-lg dark:bg-gray-700 transition-all"
          >
            {notificationCount > 0 && (
              <div className="absolute top-1 right-1.5 size-2 bg-red-600 rounded-full border border-white dark:border-gray-900 animate-pulse"></div>
            )}
            <svg viewBox="0 0 24 24" className="size-5 fill-gray-700 dark:fill-gray-100 group-hover:fill-primary">
              <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6z" />
            </svg>
          </button>

          {/* Botón de modo claro/oscuro */}
          <button
            onClick={toggleTheme}
            className="group relative flex justify-center items-center size-8 bg-gray-100 hover:bg-gray-200 rounded-lg dark:bg-gray-700 transition-all"
          >
            <span className="sr-only">Cambiar tema</span>
            {theme === 'dark' ? (
              <Moon className="size-5 stroke-gray-100 group-hover:stroke-primary" />
            ) : (
              <Sun className="size-5 stroke-gray-700 group-hover:stroke-primary" />
            )}
          </button>

          <span className="hidden sm:block text-sm font-medium text-gray-700 dark:text-gray-200 uppercase">
            Admin Main
          </span>

          {/* Contenedor del Avatar y Dropdown */}
          <div className="relative flex items-center gap-2 border-l border-gray-200 dark:border-gray-700 pl-4">
            <button 
              onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
              className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600 transition-transform active:scale-95"
            >
              <Image
                className="size-8 rounded-full object-cover"
                src="/images/avatars/avatarNeilSims.png"
                alt="User profile"
                width={32}
                height={32}
              />
            </button>

            {/* Dropdown Menu */}
            {isUserMenuOpen && (
              <>
                {/* Overlay invisible para cerrar el menú al hacer clic fuera */}
                <div 
                  className="fixed inset-0 z-40" 
                  onClick={() => setIsUserMenuOpen(false)} 
                />
                
                <div className="absolute right-0 top-full mt-2 z-50 w-56 bg-white divide-y divide-gray-100 rounded-lg shadow-xl border border-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:divide-gray-600 animate-in fade-in zoom-in-95 duration-100">
                  {/* Datos del Usuario */}
                  <div className="px-4 py-3">
                    <span className="block text-sm font-semibold text-gray-900 dark:text-gray-100">Neil Sims</span>
                    <span className="block text-sm text-gray-500 truncate dark:text-gray-400">user@example.com</span>
                  </div>
                  
                  {/* Links de navegación */}
                  <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                    <li>
                      <Link 
                        href="/profile" 
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white transition-colors"
                        onClick={() => setIsUserMenuOpen(false)}
                      >
                        Mi perfil
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/logout" 
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white transition-colors"
                        onClick={() => setIsUserMenuOpen(false)}
                      >
                        Cerrar sesión
                      </Link>
                    </li>
                  </ul>

                  {/* Footer del Dropdown: Powered By Origin */}
                  <div className="flex justify-center items-center gap-2 px-4 py-4 border-t border-gray-100 dark:border-gray-600">
                    <span className="text-[10px] uppercase italic font-bold text-primary">
                      Powered by
                    </span>
                    <div className="relative w-16 h-4">
                      <Image 
                        src="/images/logos/logo_origin.svg" 
                        alt="Logo Origin" 
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}