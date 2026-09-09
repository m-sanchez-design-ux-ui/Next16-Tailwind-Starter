"use client";

import { 
  CheckCircle2, 
  XCircle, 
  AlertTriangle, 
  Info, 
  X 
} from "lucide-react";

// 1. Configuración de estilos y assets (Lucide)
const TOAST_CONFIG = {
  toastSuccess: {
    icon: CheckCircle2,
    containerClass: "dark:bg-green-300 dark:border-green-500",
    iconContainerClass: "text-green-500 bg-green-100 dark:bg-green-200",
    label: "Success"
  },
  toastDanger: {
    icon: XCircle,
    containerClass: "dark:bg-red-300 dark:border-red-500",
    iconContainerClass: "text-red-500 bg-red-100 dark:bg-red-200",
    label: "Error"
  },
  toastWarning: {
    icon: AlertTriangle,
    containerClass: "dark:bg-orange-300 dark:border-orange-500",
    iconContainerClass: "text-orange-500 bg-orange-100 dark:bg-orange-200",
    label: "Warning"
  },
  toastInfo: {
    icon: Info,
    containerClass: "dark:bg-blue-300 dark:border-blue-500",
    iconContainerClass: "text-blue-500 bg-blue-100 dark:bg-blue-200",
    label: "Info"
  }
};

export type ToastType = keyof typeof TOAST_CONFIG;

// 2. Interfaces para TypeScript
export interface Notification {
  id: string;
  type: ToastType;
  text: string;
}

interface ToastContainerProps {
  notifications: Notification[];
  onHide: (id: string) => void;
}

export const ToastContainer = ({ notifications, onHide }: ToastContainerProps) => {
  if (notifications.length === 0) return null;

  return (
    <div className="fixed top-18.5 right-7 z-100 flex flex-col gap-3 w-full max-w-xs pointer-events-none">
      {notifications.map((notif) => {
        const config = TOAST_CONFIG[notif.type];
        const Icon = config.icon;

        return (
          <div
            key={notif.id}
            className={`flex items-center p-4 text-gray-500 bg-white rounded-lg shadow-lg border border-solid border-gray-200 animate-slide-in-right-fade pointer-events-auto ${config.containerClass}`}
            role="alert"
          >
            {/* Icono de Lucide dinámico */}
            <div className={`inline-flex items-center justify-center shrink-0 w-8 h-8 rounded-lg ${config.iconContainerClass}`}>
              <Icon size={20} strokeWidth={2.5} />
            </div>
            
            {/* Texto de la notificación */}
            <div className="ms-3 text-sm font-medium dark:text-gray-700">
              {notif.text}
            </div>

            {/* Botón de cierre */}
            <button
              onClick={() => onHide(notif.id)}
              className="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-primary rounded-lg p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:bg-transparent dark:text-gray-600 dark:hover:bg-gray-400 dark:hover:text-gray-200 transition-colors"
              aria-label="Close"
            >
              <X size={16} strokeWidth={2.5} />
            </button>
          </div>
        );
      })}
    </div>
  );
};