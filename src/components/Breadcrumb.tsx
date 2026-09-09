"use client"; // No olvides el "use client" arriba para usar usePathname

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronRight } from 'lucide-react';

//TS Interfaces for Breadcrumb Items y Props
export interface BreadcrumbItem {
  text: string;
  href: string;
  icon?: React.ReactNode;
  isLast?: boolean;
}

interface BreadcrumbProps {
  items?: BreadcrumbItem[];
}

const Breadcrumb = ({ items }: BreadcrumbProps) => {
  const pathname = usePathname();
  
  const pathElements = pathname.split('/').filter(Boolean);
  
  // Forzamos el tipo BreadcrumbItem[] aquí
  const breadcrumbItems: BreadcrumbItem[] = items || pathElements.map((path, index) => {
    const href = `/${pathElements.slice(0, index + 1).join('/')}`;
    return {
      text: path.charAt(0).toUpperCase() + path.slice(1).replace(/-/g, ' '),
      href,
      isLast: index === pathElements.length - 1
    };
  });

  return (
    <nav className="w-fit flex min-h-6" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-2">
        {breadcrumbItems.map((item, index) => (
          <li key={index} className="flex items-center text-sm font-medium text-gray-700 dark:text-gray-200">
            
            {/* Ahora TS sabe que 'item.icon' puede existir */}
            {item.icon && (
              <span className="flex justify-center items-center size-5 mr-1">
                {item.icon}
              </span>
            )}

            {index > 0 && (
              <ChevronRight className="size-4 text-gray-400 mx-1" />
            )}

            {index === breadcrumbItems.length - 1 ? (
              <span className="text-gray-500 dark:text-gray-400 font-semibold">
                {item.text}
              </span>
            ) : (
              <Link 
                href={item.href} 
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                {item.text}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;