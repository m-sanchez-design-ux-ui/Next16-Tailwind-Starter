import Link from "next/link";
import { DashboardListItem } from "./DashboardListItem";

export const RecentActivityCard = () => {
    // Mock de datos para actividades recientes
    const activities = [
        { id: 1, title: "Opción 01", category: "Categoría 01", price: "$ 50.000,00", itemsCount: "10 items" },
        { id: 2, title: "Opción 02", category: "Categoría 02", price: "$ 75.250,00", itemsCount: "15 items" },
        { id: 3, title: "Opción 03", category: "Categoría 03", price: "$ 12.000,00", itemsCount: "05 items" },
        { id: 4, title: "Opción 04", category: "Categoría 04", price: "$ 120.000,00", itemsCount: "22 items" },
        { id: 5, title: "Opción 05", category: "Categoría 05", price: "$ 45.900,00", itemsCount: "08 items" },
        { id: 6, title: "Opción 06", category: "Categoría 06", price: "$ 90.000,00", itemsCount: "12 items" },
        { id: 7, title: "Opción 07", category: "Categoría 07", price: "$ 33.500,00", itemsCount: "04 items" },
        { id: 8, title: "Opción 08", category: "Categoría 08", price: "$ 210.000,00", itemsCount: "30 items" },
        { id: 9, title: "Opción 09", category: "Categoría 09", price: "$ 5.400,00", itemsCount: "02 items" },
        { id: 10, title: "Opción 10", category: "Categoría 10", price: "$ 67.000,00", itemsCount: "11 items" },
    ];

    return (
        <div className="w-full p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-8 min-h-[498px] max-h-[498px] dark:bg-gray-800 dark:border-gray-700">
        <div className="flex items-center justify-between mb-4">
            <h5 className="text-md 2xl:text-lg font-bold text-gray-900 leading-6 dark:text-gray-100">
            Últimos...
            </h5>
            <Link 
            href="/dashboard" 
            className="text-sm font-medium text-primary hover:underline dark:text-blue-400"
            >
            Ver todos
            </Link>
        </div>

        <div className="flow-root min-h-92.5 max-h-92.5 overflow-y-auto pr-1.5 scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-600">
            <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
            {activities.map((item) => (
                <DashboardListItem key={item.id} {...item} />
            ))}
            </ul>
        </div>
        </div>
    );
};