import { LayoutDashboard, CalendarDays, CalendarRange, CircleDollarSign, Download } from "lucide-react";
import Breadcrumb, { BreadcrumbItem } from "@/components/Breadcrumb";
import { StatCard } from "@/components/cards/StatCard";
import { RecentActivityCard } from "@/components/cards/activity-card/RecentActivityCard";
import { AreaChartCard } from "@/components/charts/AreaChartCard";
import { PieChartCard } from "@/components/charts/PieChartCard";

export default function DashboardPage() {

  // Force an error to test the error page
  //throw new Error("Error Server Simulation");

  const BREADCRUMB_CONFIG: BreadcrumbItem[] = [
    { 
      text: 'Dashboard', 
      href: '/', 
      icon: <LayoutDashboard className="size-4" /> 
    },
    { 
      text: 'Text...', 
      href: '/', 
    },
    { 
      text: 'Text...', 
      href: '', 
    },
  ];

  return (
    <div className="flex flex-col gap-6">

      {/*Breadcrumb */}
      <div className="flex flex-row flex-wrap justify-between items-center w-full mb-4 gap-4">
        <Breadcrumb items={BREADCRUMB_CONFIG} />
        <button
          type="button" 
          className='flex flex-row gap-2 items-center text-gray-100 bg-primary opacity-100 hover:opacity-80 transition-all duration-100 dark:bg-primary_dark  focus:ring-4 focus:ring-primary dark:focus:ring-primary_dark dark:focus:ring-opacity-30 focus:ring-opacity-30 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none'
        >
          <Download className="size-4" />
          <span>
            Descargar Reporte
          </span>
        </button>
      </div>

      {/* Container de Título y Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-4">
        
        {/* Sección de Título */}
        <div className="flex items-center">
          <h3 className="w-full pt-4 pb-0 xl:pb-4 xl:pt-4 text-xl 2xl:text-2xl text-gray-900 font-semibold dark:text-gray-100">
            Dashboard
          </h3>
        </div>

        {/* Cards Reutilizables */}
        <StatCard 
          label="Cant. del día" 
          value="290" 
          icon={CalendarDays} 
        />
        
        <StatCard 
          label="Cant. del mes" 
          value="180.848" 
          icon={CalendarRange} 
        />
        
        <StatCard 
          label="Monto total" 
          value="$ 500.000,00" 
          icon={CircleDollarSign} 
        />
      </div>
      {/* Container Charts Start */}
      <section className="grid grid-cols-1 sm:grid-cols-1 xl:grid-cols-3 gap-4 mb-4">
        <RecentActivityCard/>
        <AreaChartCard/>
        <PieChartCard/>
      </section>
      {/* Container Charts End */}
    </div>
  );
}