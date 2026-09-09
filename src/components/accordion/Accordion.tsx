'use client';

import React, { useState } from 'react';
import { 
  ChevronDown, 
  PlusCircle, 
  Pencil, 
  LifeBuoy,  
} from 'lucide-react';

// 1. Mapeo manual de iconos (Esto elimina cualquier error de 'dynamic' o renderizado)
const IconMap = {
  'plus-circle': PlusCircle,
  'pencil': Pencil,
  'life-buoy': LifeBuoy,
};

type IconName = keyof typeof IconMap;

interface AccordionItemData {
  id: string;
  title: string;
  iconName: IconName;
  content: string;
}

const helpData: AccordionItemData[] = [
  {
    id: '1',
    title: '¿Cómo creo un nuevo registro?',
    iconName: 'plus-circle',
    content: 'Hacé clic en el botón <span class="font-bold text-gray-900 dark:text-white">"Nuevo"</span>, completá los campos y presioná <span class="font-bold text-gray-900 dark:text-white">"Guardar"</span>.'
  },
  {
    id: '2',
    title: '¿Cómo edito un registro existente?',
    iconName: 'pencil',
    content: 'Usá el ícono de <span class="font-bold text-gray-900 dark:text-white">lápiz</span> o la opción <span class="font-bold text-gray-900 dark:text-white">"Editar"</span>.'
  },
  {
    id: '3',
    title: '¿Cómo contacto al soporte?',
    iconName: 'life-buoy',
    content: 'Podés escribirnos a <span class="font-bold text-gray-900 dark:text-primary_dark">soporte@example.com</span>'
  }
];

const AccordionItem = ({ item }: { item: AccordionItemData }) => {
  const [isOpen, setIsOpen] = useState(false);
  const IconComponent = IconMap[item.iconName];

  return (
    <div className="mb-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden transition-all duration-300">
      <h2>
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          // Eliminamos el outline por defecto y aseguramos que el hover sea sutil
          className={`group flex items-center justify-between w-full p-5 text-left transition-colors outline-none hover:bg-gray-50 dark:hover:bg-gray-700 ${
            isOpen ? 'bg-gray-50/50 dark:bg-gray-700/30' : ''
          }`}
        >
          <div className="flex gap-3 items-center">
            {IconComponent && (
              <IconComponent 
                size={20} 
                strokeWidth={2}
                className={`transition-colors duration-300 ${isOpen ? 'text-primary' : 'text-gray-400 group-hover:text-primary'}`} 
              />
            )}
            <span className={`text-sm font-semibold transition-colors duration-300 ${isOpen ? 'text-primary' : 'text-gray-900 dark:text-gray-100'}`}>
              {item.title}
            </span>
          </div>
          <ChevronDown
            size={16}
            className={`shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-primary' : 'text-gray-400'}`}
          />
        </button>
      </h2>
      
      {/* Ajuste del Borde Superior: Usamos opacity y duration para evitar el flash negro 
      */}
      <div className={`transition-all duration-300 ease-in-out overflow-hidden ${
        isOpen ? 'max-h-96 opacity-100 border-t border-gray-200 dark:border-gray-700' : 'max-h-0 opacity-0 border-t-0 border-transparent'
      }`}>
        <div className="p-5 bg-gray-50/30 dark:bg-gray-800/50">
          <p 
            className="text-gray-700 dark:text-gray-400 text-sm leading-relaxed"
            dangerouslySetInnerHTML={{ __html: item.content }}
          />
        </div>
      </div>
    </div>
  );
};

export default function Accordion() {
  return (
    <div className="w-full">
      {helpData.map((item) => (
        <AccordionItem key={item.id} item={item} />
      ))}
    </div>
  );
}