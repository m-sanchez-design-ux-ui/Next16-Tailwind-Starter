"use client";

import { useState } from 'react';
import Flatpickr from 'react-flatpickr';
import { Spanish } from 'flatpickr/dist/l10n/es.js';
import { Calendar } from 'lucide-react';

interface SingleDatePickerProps {
  label?: string;
  onChange: (date: Date) => void;
  placeholder?: string;
}

export default function SingleDatePicker({ 
  label = "Seleccionar fecha", 
  onChange, 
  placeholder = "d/m/Y" 
}: SingleDatePickerProps) {
  
  const [date, setDate] = useState<Date | null>(null);

  return (
    <div className="w-full">
      {label && (
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          {label}
        </label>
      )}
      
      <div className="relative">
        <div className="absolute inset-y-0 inset-s-0 flex items-center ps-3 pointer-events-none z-10">
          <Calendar size={16} className="text-gray-500 dark:text-gray-400" />
        </div>

        <Flatpickr
          value={date || ""}
          onChange={([selectedDate]) => {
            setDate(selectedDate);
            onChange(selectedDate);
          }}
          options={{
            mode: 'single', // Cambiamos de 'range' a 'single'
            locale: Spanish,
            dateFormat: 'd/m/Y',
            static: true,
          }}
          placeholder={placeholder}
          // Usamos las mismas clases de Flowbite para consistencia
          className="[input]:w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white outline-none transition-all"
        />
      </div>
    </div>
  );
}