import { LucideIcon } from "lucide-react";

interface StatCardProps {
  label: string;
  value: string;
  icon: LucideIcon;
}

export const StatCard = ({ label, value, icon: Icon }: StatCardProps) => {
  return (
    <div className="w-full p-6 bg-gray-white border border-gray-200 rounded-lg shadow-sm flex flex-col gap-4 dark:bg-gray-800 dark:border-gray-700 transition-colors">
      <div className="inline-flex gap-2 items-center">
        {/* Icono con el tamaño que venimos manejando */}
        <Icon className="size-6 text-gray-900 dark:text-gray-100" />
        <h5 className="text-sm font-semibold text-gray-900 dark:text-gray-100">
          {label}
        </h5>
      </div>
      <p className="text-xl 2xl:text-3xl font-semibold text-gray-900 dark:text-gray-100 leading-none">
        {value}
      </p>
    </div>
  );
};