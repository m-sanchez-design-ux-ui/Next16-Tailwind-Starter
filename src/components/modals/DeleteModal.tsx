"use client";

import { useEffect } from 'react';

interface DeleteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title?: string;
  subtitle?: string;
  description?: string;
  confirmText?: string;
  cancelText?: string;
}

export default function DeleteModal({
  isOpen,
  onClose,
  onConfirm,
  title = "¡Atención!",
  subtitle = "¿Estás seguro que deseas eliminar este ítem?",
  description = "Una vez realizada la acción deberás agregarlo nuevamente.",
  confirmText = "Sí, eliminar",
  cancelText = "No, cancelar"
}: DeleteModalProps) {

  // Accesibilidad: Cerrar con Esc
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-300 flex items-center justify-center w-full h-full p-4 overflow-x-hidden overflow-y-auto bg-black/40 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-100 lg:max-w-md max-h-full animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal content */}
        <div className="relative bg-white rounded-lg shadow-xl dark:bg-gray-800 border border-gray-100 dark:border-gray-700">
          
          {/* Modal header */}
          <div className="relative flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-700 border-gray-200">
            <h3 className="w-full text-center text-lg lg:text-xl font-semibold text-gray-900 dark:text-gray-100">
              {title}
            </h3>
            <button 
              onClick={onClose}
              type="button" 
              className="absolute top-5 right-5 text-gray-400 bg-transparent hover:bg-gray-100 hover:text-red-500 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-700 transition-colors"
            >
              <svg className="w-3 h-3" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
              </svg>
              <span className="sr-only">Cerrar modal</span>
            </button>
          </div>

          {/* Modal body */}
          <div className="p-4 md:p-5 space-y-4 text-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42 42" fill="none" className="size-12 mx-auto">
              <path className="fill-gray-400 dark:fill-gray-500" d="M21 3.5C17.5388 3.5 14.1554 4.52636 11.2775 6.44928C8.39967 8.37221 6.15665 11.1053 4.83212 14.303C3.50758 17.5007 3.16102 21.0194 3.83627 24.4141C4.51151 27.8087 6.17822 30.9269 8.62564 33.3744C11.0731 35.8218 14.1913 37.4885 17.5859 38.1637C20.9806 38.839 24.4993 38.4924 27.697 37.1679C30.8947 35.8433 33.6278 33.6003 35.5507 30.7225C37.4736 27.8446 38.5 24.4612 38.5 21C38.4949 16.3603 36.6495 11.912 33.3687 8.63126C30.088 5.35048 25.6397 3.5051 21 3.5ZM21 29.75C20.6539 29.75 20.3155 29.6474 20.0278 29.4551C19.74 29.2628 19.5157 28.9895 19.3832 28.6697C19.2508 28.3499 19.2161 27.9981 19.2836 27.6586C19.3512 27.3191 19.5178 27.0073 19.7626 26.7626C20.0073 26.5178 20.3191 26.3511 20.6586 26.2836C20.9981 26.2161 21.3499 26.2508 21.6697 26.3832C21.9895 26.5157 22.2628 26.74 22.4551 27.0277C22.6474 27.3155 22.75 27.6539 22.75 28C22.75 28.4641 22.5656 28.9092 22.2374 29.2374C21.9093 29.5656 21.4641 29.75 21 29.75ZM22.75 22.75C22.75 23.2141 22.5656 23.6592 22.2374 23.9874C21.9093 24.3156 21.4641 24.5 21 24.5C20.5359 24.5 20.0908 24.3156 19.7626 23.9874C19.4344 23.6592 19.25 23.2141 19.25 22.75V14C19.25 13.5359 19.4344 13.0907 19.7626 12.7626C20.0908 12.4344 20.5359 12.25 21 12.25C21.4641 12.25 21.9093 12.4344 22.2374 12.7626C22.5656 13.0907 22.75 13.5359 22.75 14V22.75Z"/>
            </svg>
            <h4 className="w-full text-sm lg:text-base font-semibold text-gray-700 dark:text-gray-200">
              {subtitle}
            </h4>
            <p className="w-full text-sm lg:text-base font-medium leading-relaxed text-gray-500 dark:text-gray-400">
              {description}
            </p>
          </div>

          {/* Modal footer */}
          <div className="justify-center flex items-center gap-4 p-4 md:p-5 border-t border-gray-200 dark:border-gray-700 rounded-b">
            {/* Botón Peligro */}
            <button 
              onClick={() => { onConfirm(); onClose(); }}
              type="button" 
              className="text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:ring-red-300/30 font-medium rounded-lg text-sm px-5 py-2.5 transition-all active:scale-95"
            >
              {confirmText}
            </button>
            {/* Botón Terciario / Cancelar */}
            <button 
              onClick={onClose}
              type="button" 
              className="py-2.5 px-5 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary focus:ring-4 focus:ring-gray-100 dark:bg-transparent dark:text-gray-100 dark:hover:bg-gray-700 dark:border-gray-600 dark:hover:text-primary_dark transition-all"
            >
              {cancelText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}