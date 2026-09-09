"use client"; 
import { useState } from "react";
import Header from '@/components/Header';
import Sidebar from "@/components/sidebar/Sidebar";
import NotificationDrawer from '@/components/drawers/NotificationDrawer'; 

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [notifications, setNotifications] = useState([
    { mensaje: "Nueva actualización del Design System disponible." },
    { mensaje: "El cliente Opción 01 ha actualizado sus archivos." }
  ]);

  const deleteNotification = (index: number) => {
    setNotifications(notifications.filter((_, i) => i !== index));
  };
  

  return (
    <div className="flex h-screen w-full bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100">
      <Sidebar isOpen={isSidebarOpen} />

      <div className="flex flex-col flex-1 min-w-0 overflow-hidden">
        {/* PASAMOS isDrawerOpen y la función para abrirlo al Header */}
        <Header 
          onOpenSidebar={() => setIsSidebarOpen(true)} 
          onOpenDrawer={() => setIsDrawerOpen(true)}
          notificationCount={notifications.length}
        />

        <main className="flex-1 overflow-y-auto px-7 py-4 lg:pl-71 bg-white dark:bg-gray-800">
          <div className="max-w-full mx-auto">
            {children}
          </div>
        </main>
      </div>

      {/* El Drawer */}
      <NotificationDrawer 
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        notifications={notifications}
        onDelete={deleteNotification}
      />

      {/* Backdrop Sidebar Mobile */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-gray-900/50 z-30 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </div>
  );
}