"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { LayoutDashboard, Box, LifeBuoy, ChevronDown, ChartColumnIncreasing } from "lucide-react";

import { SidebarItem } from "./SidebarItem";
import { SidebarItemWithDropdown } from "./SidebarItemWithDropdown";

interface SidebarProps {
  isOpen: boolean;
}

export default function Sidebar({ isOpen }: SidebarProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedClient, setSelectedClient] = useState({
    name: "Seleccionar...",
    img: "/images/icon-btns/picture.svg"
  });

  return (
    <aside className={`fixed top-0 left-0 z-31 w-64 h-screen border-r border-gray-200 dark:border-gray-600 dark:bg-gray-800 bg-white transition-transform ${isOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}>
      <div className="h-full flex flex-col justify-between overflow-y-auto">
        
        {/* Header con Logo Optimizado */}
        <div className="p-3 h-17 sticky top-0 z-10 flex justify-center items-center bg-inherit">
          <Link href="/dashboard" className="relative w-full h-8">
            <Image 
              src="/images/logos/logo_client.svg" 
              alt="Client Logo" 
              fill
              className="object-contain"
              priority
            />
          </Link>
        </div>

        {/* Dropdown de Clientes */}
        <div className="p-3 relative">
          <button 
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="w-full group bg-gray-50 hover:bg-gray-100 border border-gray-300 rounded-lg p-2 flex justify-between items-center dark:bg-gray-700 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600 transition-colors"
          >
            <div className="flex items-center gap-2">
               <div className="relative size-8 rounded overflow-hidden">
                 <Image 
                    src={selectedClient.img} 
                    alt="Client Cover" 
                    fill 
                    className="object-cover" 
                 />
               </div>
               <span className="text-xs font-semibold text-gray-700 dark:text-gray-100">{selectedClient.name}</span>
            </div>
            <ChevronDown className={`size-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
          </button>

          {isDropdownOpen && (
            <ul className="absolute left-3 right-3 z-50 bg-white border border-gray-300 shadow-md rounded-lg mt-1 p-2 dark:bg-gray-700 animate-in fade-in zoom-in-95 duration-100 dark:border-gray-600">
              {[
                { name: 'Seleccionar...', img: '/images/icon-btns/picture.svg' },
                { name: 'Opción 01', img: '/images/cover/cover-default.svg' },
                { name: 'Opción 02', img: '/images/cover/cover-default.svg' }
              ].map((opt) => (
                <li 
                  key={opt.name}
                  onClick={() => { setSelectedClient(opt); setIsDropdownOpen(false); }}
                  className="px-2 py-2 hover:bg-gray-100 rounded-md cursor-pointer dark:hover:bg-gray-600 flex items-center gap-2"
                >
                  <div className="relative size-6 rounded overflow-hidden">
                    <Image src={opt.img} alt={opt.name} fill className="object-cover" />
                  </div>
                  <span className="text-xs font-semibold text-gray-700 dark:text-gray-100">{opt.name}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Menú de Navegación */}
        <nav className="flex-1 px-0 py-4">
          <ul className="space-y-1">
            <SidebarItem 
              href="/" 
              label="Dashboard" 
              icon={<LayoutDashboard className="size-6" />} 
            />

            <SidebarItemWithDropdown 
              label="Starter kit"
              icon={<Box className="size-6" />}
              items={[
                { label: "Components", href: "/components" }, 
                { label: "Grids", href: "/grids" },               
              ]}
            />

            <SidebarItem 
              href="#" 
              label="Disabled" 
              disabled 
              icon={<ChartColumnIncreasing className="size-6" />} 
            />
            
            <div className="my-4 border-b border-gray-200 dark:border-gray-600 mx-4" />
            
            <SidebarItem 
              href="/help" 
              label="Ayuda" 
              icon={<LifeBuoy className="size-6" />} 
            />
          </ul>
        </nav>

        {/* Footer: Powered By Origin con Image */}
        <div className="bg-white p-4 border-t border-gray-100 dark:border-gray-800 dark:bg-gray-800 sticky bottom-0 flex flex-col items-center gap-1">
          <p className="text-[10px] text-primary uppercase italic font-medium">Powered by</p>
          <div className="relative w-24 h-6">
            <Image 
              src="/images/logos/logo_origin.svg" 
              alt="Origin Logo" 
              fill 
              className="object-contain" 
            />
          </div>
        </div>
      </div>
    </aside>
  );
}