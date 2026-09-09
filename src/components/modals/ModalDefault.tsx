"use client";

import { useEffect } from 'react';

interface ModalDefaultProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title?: string;
  subtitle?: string;
  description?: string;
  confirmText?: string;
  cancelText?: string;
}

export default function ModalDefault({
  isOpen,
  onClose,
  onConfirm,
  title = "¡Atención!",
  subtitle = "¿Deseas confirmar la acción?",
  description = "Detalle de la acción a confirmar y/o realizar...",
  confirmText = "Sí, confirmar",
  cancelText = "No, cancelar"
}: ModalDefaultProps) {
  
  // Cerrar con la tecla Esc
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
              className="absolute top-5 right-5 text-gray-400 bg-transparent hover:bg-gray-100 hover:text-primary rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-700 dark:hover:text-primary_dark transition-colors"
            >
              <svg className="w-3 h-3" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>

          {/* Modal body */}
          <div className="p-4 md:p-5 space-y-4">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42 42" className="fill-none size-12 mx-auto">
              <path className="fill-gray-400 dark:fill-gray-500" d="M15.7504 12.25V3.7275C14.8965 3.96371 14.1174 4.41501 13.4877 5.03825L8.53866 9.98725C7.91666 10.6179 7.46556 11.3967 7.22791 12.25H15.7504Z"/>
              <path className="fill-gray-400 dark:fill-gray-500" d="M31.6159 3.5H19.2504V12.25C19.2504 13.1783 18.8817 14.0685 18.2253 14.7249C17.5689 15.3813 16.6787 15.75 15.7504 15.75H7.00041V35C6.98636 35.9126 7.33475 36.7935 7.9692 37.4496C8.60365 38.1057 9.47238 38.4834 10.3849 38.5H31.6159C32.5284 38.4834 33.3972 38.1057 34.0316 37.4496C34.6661 36.7935 35.0145 35.9126 35.0004 35V7C35.0145 6.08742 34.6661 5.20652 34.0316 4.55042C33.3972 3.89432 32.5284 3.51657 31.6159 3.5ZM26.3659 29.75H15.4494C14.9853 29.75 14.5402 29.5656 14.212 29.2374C13.8838 28.9092 13.6994 28.4641 13.6994 28C13.6994 27.5359 13.8838 27.0908 14.212 26.7626C14.5402 26.4344 14.9853 26.25 15.4494 26.25H26.3659C26.83 26.25 27.2752 26.4344 27.6033 26.7626C27.9315 27.0908 28.1159 27.5359 28.1159 28C28.1159 28.4641 27.9315 28.9092 27.6033 29.2374C27.2752 29.5656 26.83 29.75 26.3659 29.75ZM26.3659 22.75H15.4494C14.9853 22.75 14.5402 22.5656 14.212 22.2374C13.8838 21.9092 13.6994 21.4641 13.6994 21C13.6994 20.5359 13.8838 20.0908 14.212 19.7626C14.5402 19.4344 14.9853 19.25 15.4494 19.25H26.3659C26.83 19.25 27.2752 19.4344 27.6033 19.7626C27.9315 20.0908 28.1159 20.5359 28.1159 21C28.1159 21.4641 27.9315 21.9092 27.6033 22.2374C27.2752 22.5656 26.83 22.75 26.3659 22.75Z"/>
            </svg>
            <h4 className="text-center w-full text-sm lg:text-base font-semibold text-gray-700 dark:text-gray-200">
              {subtitle}
            </h4>
            <p className="text-center w-full text-sm lg:text-base font-medium leading-relaxed text-gray-500 dark:text-gray-400">
              {description}
            </p>
          </div>

          {/* Modal footer */}
          <div className="justify-center flex items-center gap-4 p-4 md:p-5 border-t border-gray-200 dark:border-gray-700 rounded-b">
            <button 
              onClick={() => { onConfirm(); onClose(); }}
              type="button" 
              className="text-white bg-primary dark:bg-primary_dark hover:bg-opacity-90 focus:ring-4 focus:ring-primary/30 font-medium rounded-lg text-sm px-5 py-2.5 transition-all"
            >
              {confirmText}
            </button>
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