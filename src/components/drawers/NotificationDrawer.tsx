"use client";

interface Notification {
  mensaje: string;
}

interface NotificationDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  notifications: Notification[];
  onDelete: (index: number) => void;
}

export default function NotificationDrawer({ 
  isOpen, 
  onClose, 
  notifications, 
  onDelete 
}: NotificationDrawerProps) {
  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/30 backdrop-blur-md z-60 transition-opacity" 
          onClick={onClose}
        />
      )}

      {/* Drawer */}
      <aside
        className={`fixed top-0 right-0 z-70 h-screen p-4 overflow-y-auto transition-transform bg-white w-80 dark:bg-gray-800 shadow-2xl ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex flex-row justify-between pb-6 border-b border-gray-100 dark:border-gray-700 mb-4">
          <h5 className="inline-flex items-center text-gray-700 font-bold text-base dark:text-gray-100">
            Notificaciones
          </h5>
          <button 
            onClick={onClose}
            className="text-gray-700 bg-gray-100 hover:bg-gray-200 hover:text-primary rounded-lg text-sm w-8 h-8 inline-flex items-center justify-center dark:bg-gray-600 dark:text-gray-100 dark:hover:bg-gray-700 transition-colors"
          >
            <svg className="w-3 h-3" fill="none" viewBox="0 0 14 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
            </svg>
            <span className="sr-only">Cerrar menú</span>
          </button>
        </div>

        {/* Body */}
        <div className="flex flex-col">
          {notifications.length === 0 ? (
            /* Estado Vacío */
            <div className="flex flex-col gap-6 items-center mt-8 animate-in fade-in duration-500">
              <div className="bg-gray-100 rounded-xl size-52 flex justify-center items-center dark:bg-gray-700">
                <svg viewBox="0 0 208 208" className="size-44">
                  <circle className="fill-gray-200 dark:fill-gray-600" cx="104" cy="104" r="104" />
                  <path className="fill-primary opacity-85" d="M183.52,146.16v3.57H24.47v-3.57c0-3.79,3.07-6.86,6.85-6.86,9.25,0,16.75-7.5,16.75-16.73v-40.99c0-15.44,6.26-29.43,16.39-39.55,6.06-6.06,13.5-10.74,21.83-13.52,2.71-.91,5.51-1.61,8.39-2.08,3.04-.53,6.16-.79,9.33-.79s6.3.26,9.33.79c2.88.46,5.68,1.17,8.39,2.08,22.2,7.43,38.21,28.38,38.21,53.07v40.99c0,9.23,7.5,16.73,16.73,16.73,3.79,0,6.86,3.07,6.86,6.86Z" />
                  <path className="fill-gray-800 dark:fill-gray-400" d="M121.94,25.64c0,.98-.09,1.94-.22,2.87-2.71-.91-5.51-1.61-8.39-2.08.02-.26.03-.53.03-.79,0-5.16-4.2-9.37-9.37-9.37s-9.37,4.2-9.37,9.37c0,.26.02.53.03.79-2.88.46-5.68,1.17-8.39,2.08-.14-.93-.22-1.89-.22-2.87,0-9.9,8.05-17.95,17.95-17.95s17.95,8.05,17.95,17.95Z" />
                  <rect className="fill-gray-800 dark:fill-gray-400" x="24.47" y="146.15" width="159.06" height="3.58" />
                  <path className="fill-primary opacity-50" d="M136.42,149.73c-5.37,12.59-17.86,21.41-32.43,21.41s-27.06-8.82-32.43-21.41h64.86Z" />
                </svg>
              </div>
              <p className="text-base text-gray-700 font-medium text-center dark:text-gray-200">
                ¡No hay notificaciones en este momento!
              </p>
              <span className="text-sm text-gray-500 text-center dark:text-gray-400">
                Aquí aparecerán las próximas notificaciones.
              </span>
            </div>
          ) : (
            /* Lista de Notificaciones */
            <ul className="flex flex-col gap-3">
              {notifications.map((n, i) => (
                <li 
                  key={i}
                  className="group flex gap-3 bg-gray-50 hover:bg-gray-100 rounded-lg py-3 px-3 transition-colors dark:bg-gray-700/50 dark:hover:bg-gray-700"
                >
                  <div className="min-w-10 h-10 flex justify-center items-center bg-gray-100 group-hover:bg-white dark:bg-gray-600 dark:group-hover:bg-gray-500 rounded-md transition-colors">
                    <svg viewBox="0 0 32 32" className="size-6 fill-none">
                      <path className="fill-gray-500 dark:fill-gray-300 group-hover:fill-primary" d="M16 28C13.6266 28 11.3066 27.2962 9.33316 25.9776C7.35977 24.6591 5.8217 22.7849 4.91345 20.5922C4.0052 18.3995 3.76756 15.9867 4.23058 13.6589C4.6936 11.3311 5.83649 9.19295 7.51472 7.51472C9.19295 5.83649 11.3311 4.6936 13.6589 4.23058C15.9867 3.76756 18.3995 4.0052 20.5922 4.91345C22.7849 5.8217 24.6591 7.35977 25.9776 9.33316C27.2962 11.3066 28 13.6266 28 16C27.9965 19.1815 26.7311 22.2317 24.4814 24.4814C22.2317 26.7311 19.1815 27.9965 16 28ZM16 6.40001Z" />
                    </svg>
                  </div>
                  <span className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2 my-auto flex-1">
                    {n.mensaje}
                  </span>
                  <button 
                    onClick={() => onDelete(i)}
                    className="size-7 my-auto text-gray-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg flex items-center justify-center transition-all"
                  >
                    <svg className="size-3" fill="none" viewBox="0 0 14 14">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                    </svg>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </aside>
    </>
  );
}