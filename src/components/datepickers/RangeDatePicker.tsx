"use client"

import { useState, useEffect } from "react"
import Flatpickr from "react-flatpickr"
import { Spanish } from "flatpickr/dist/l10n/es.js"
import { Calendar } from "lucide-react"
import "flatpickr/dist/flatpickr.min.css"

export interface RangeDatePickerProps {
  label?: string
  onChange?: (dates: Date[] | null) => void
  value?: Date[] | null
  className?: string
  placeholder?: string
}

export default function RangeDatePicker({ label, onChange, value = null, className = "", placeholder = "dd/mm/yyyy" }: RangeDatePickerProps) {
  const [mounted, setMounted] = useState(false);
  const [dates, setDates] = useState<Date[] | null>(value);

  // Soluciona errores de hidratación asegurando que solo se renderice en el cliente
  useEffect(() => { setMounted(true) }, []);
  
  useEffect(() => { setDates(value) }, [value]);

  if (!mounted) return <div className="h-20 w-full animate-pulse bg-gray-100 rounded-lg dark:bg-gray-800" />;

  return (
    <div className={`w-full ${className}`}>
      {label && <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-100">{label}</label>}
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none z-10"><Calendar className="w-4 h-4 text-gray-500" /></div>
        <Flatpickr
          value={dates ?? []}
          options={{ mode: "range", locale: Spanish, dateFormat: "d/m/Y", allowInput: false, static: true }}
          onChange={(selectedDates: Date[]) => { const newDates = selectedDates.length ? selectedDates : null; setDates(newDates); if (onChange) onChange(newDates); }}
          className="[input]:w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400 outline-none transition-all"
          placeholder={placeholder}
        />
      </div>
    </div>
  )
}