"use client";

import React, { createContext, useContext, useState, useCallback } from 'react';
import { ToastContainer, Notification, ToastType } from '@/components/toast/ToastContainer';

interface ToastContextType {
  notify: (text: string, type: ToastType) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const ToastProvider = ({ children }: { children: React.ReactNode }) => {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  // 1. Definimos hideToast primero
  const hideToast = useCallback((id: string) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  }, []);

  // 2. Ahora notify puede usar hideToast sin problemas
  const notify = useCallback((text: string, type: ToastType) => {
    const id = Math.random().toString(36).substr(2, 9);
    setNotifications((prev) => [...prev, { id, text, type }]);

    // Auto-cerrar después de 5 segundos
    setTimeout(() => {
      hideToast(id);
    }, 5000);
  }, [hideToast]); // Agregamos hideToast como dependencia para limpiar el warning de ESLint

  return (
    <ToastContext.Provider value={{ notify }}>
      {children}
      <ToastContainer notifications={notifications} onHide={hideToast} />
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) throw new Error("useToast debe usarse dentro de ToastProvider");
  return context;
};