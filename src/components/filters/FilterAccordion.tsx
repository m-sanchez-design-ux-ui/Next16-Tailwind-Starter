"use client";

import { useState } from 'react';
import SingleDatePicker from '../datepickers/SingleDatePicker';
import RangeDatePicker from '../datepickers/RangeDatePicker';

export default function FilterAccordion() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`mb-4 bg-white rounded-lg shadow-sm dark:bg-gray-800 border border-gray-200 dark:border-gray-700 ${isOpen ? 'overflow-visible' : 'overflow-hidden'}`}>
      {/* --- Filter Header --- */}
      <h2>
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className={`group flex items-center justify-between w-full p-5 font-medium text-gray-900 dark:text-gray-100 transition-colors
            ${isOpen ? 'bg-gray-50 dark:bg-gray-700/50' : 'bg-white dark:bg-gray-800'}hover:text-primary dark:hover:text-primary_dark`}
        >
          <span className="flex gap-2 items-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 24" className={`size-6 fill-none transition-colors ${isOpen ? 'text-primary dark:text-primary_dark' : 'text-gray-500'}`}>
              <path fill="currentColor" d="M14.4971 21C14.2822 21 14.0732 20.9317 13.9013 20.8054L9.90702 17.8865C9.78368 17.7959 9.68357 17.6783 9.61463 17.5432C9.54568 17.4081 9.50978 17.2592 9.50978 17.1081V13.5373L3.88984 6.10378C3.67102 5.81419 3.53856 5.47075 3.50722 5.11175C3.47589 4.75274 3.54691 4.39226 3.71237 4.07047C3.87783 3.74867 4.13123 3.47821 4.44434 3.28921C4.75745 3.1002 5.11798 3.00008 5.48575 3H19.5143C19.882 3.00008 20.2425 3.1002 20.5557 3.28921C20.8688 3.47821 21.1222 3.74867 21.2876 4.07047C21.4531 4.39226 21.5241 4.75274 21.4928 5.11175C21.4614 5.47075 21.329 5.81419 21.1102 6.10378L15.4902 13.5373V20.027C15.4902 20.2851 15.3856 20.5326 15.1993 20.715C15.0131 20.8975 14.7605 21 14.4971 21ZM11.496 16.6216L13.504 18.0879V13.2162C13.504 13.0057 13.5737 12.8008 13.7026 12.6324L19.5143 4.94595H5.48575L11.3013 12.6324C11.4303 12.8008 11.5 13.0057 11.5 13.2162L11.496 16.6216Z"/>
            </svg>
            <span className="text-sm font-semibold">Filtros</span>
          </span>
          <svg 
            className={`w-3 h-3 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
            fill="none" viewBox="0 0 10 6"
          >
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5"/>
          </svg>
        </button>
      </h2>

      {/* --- Filter Body (Accordion Content) --- */}
      <div className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-250 opacity-100 overflow-visible' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="p-5 border-t border-gray-200 dark:border-gray-700">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 mb-6 over">

            {/* DatePicker Single */}
            <SingleDatePicker 
              label="Seleccionar fecha" 
              onChange={() => {}} 
              placeholder="dd/mm/yyyy" 
            />
  

            {/* RangeDatePicker */}
            <RangeDatePicker 
              label="Rango de fechas" 
              onChange={(dates) => console.log(dates)} 
              placeholder="dd/mm/yyyy" 
            />
            
            {/* Input Text */}
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-100">Razón Social</label>
              <input 
                  type="text" 
                  placeholder="Ingresar..." 
                  className="w-full px-4 py-2.5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
              />
            </div>

            {/* Input Number */}
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-100">Monto Máximo</label>
              <input 
                type="number" 
                placeholder="0.00" 
                className="w-full px-4 py-2.5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
              />
            </div>

            {/* Select Estándar */}
            <div className="relative">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-100">
                Estado
              </label>
              <div className="relative">
                <select 
                  className="w-full appearance-none px-4 py-2.5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100 pr-10 cursor-pointer"
                >
                  <option value="">Seleccionar...</option>
                  <option value="active">Activo</option>
                  <option value="inactive">Inactivo</option>
                  <option value="pending">Pendiente</option>
                </select>
                
                {/* Icono del acordeón posicionado absolutamente */}
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-500 dark:text-gray-400">
                  <svg 
                    className="w-3 h-3" 
                    fill="none" 
                    viewBox="0 0 10 6"
                  >
                    <path 
                      stroke="currentColor" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth="2" 
                      d="m1 1 4 4 4-4" 
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Search Input */}
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-100">Búsqueda rápida</label>
              <div className="relative">
                <div className="absolute inset-y-0 inset-s-0 flex items-center ps-3 pointer-events-none">
                  <svg className="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                  </svg>
                </div>
                <input 
                  type="search" 
                  className="w-full pl-10 px-4 py-2.5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                  placeholder="Buscar..." 
                />
              </div>
            </div>

          </div>

          {/* --- Filter Footer (Buttons) --- */}
          <div className="flex flex-row gap-3">

            {/*Primary Button*/}
            <button
                type="button" 
                className='flex flex-row gap-2 items-center text-gray-100 bg-primary opacity-100 hover:opacity-80 transition-all duration-100 dark:bg-primary_dark  focus:ring-4 focus:ring-primary dark:focus:ring-primary_dark dark:focus:ring-opacity-30 focus:ring-opacity-30 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none'
            >
                <span>
                    Aplicar Filtros
                </span>
            </button>

            {/*Tertiary Button*/}
            <button
                type="button" 
                className='flex items-center flex-nowrap gap-2 py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary focus:z-10 focus:ring-4 focus:ring-gray-100 dark:bg-transparent dark:text-gray-100 dark:hover:bg-gray-800 dark:border-gray-400 dark:hover:text-primary_dark'
            >
                <span>
                    Limpiar
                </span>
            </button>

          </div>
        </div>
      </div>
    </div>
  );
}