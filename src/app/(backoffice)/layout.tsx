"use client"; 
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Header from '@/components/Header';
import Sidebar from "@/components/sidebar/Sidebar";
import NotificationDrawer from '@/components/drawers/NotificationDrawer'; 

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [checkedAuth, setCheckedAuth] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [notifications, setNotifications] = useState([
    { mensaje: "Nueva actualización del Design System disponible." },
    { mensaje: "El cliente Opción 01 ha actualizado sus archivos." }
  ]);

  // DEMO NOTE: there's no real backend/session here, so "logged in" is
  // just a flag the signin page sets in sessionStorage. This makes sure
  // every backoffice screen — not just "/" — starts at /signin first.
  useEffect(() => {
    const isAuthenticated = sessionStorage.getItem('demo-authenticated') === 'true';
    if (!isAuthenticated) {
      router.replace('/signin');
      return;
    }
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setCheckedAuth(true);
  }, [router]);

  const deleteNotification = (index: number) => {
    setNotifications(notifications.filter((_, i) => i !== index));
  };

  if (!checkedAuth) return null;

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