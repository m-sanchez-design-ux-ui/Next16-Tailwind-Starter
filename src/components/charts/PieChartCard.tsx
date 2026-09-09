"use client";
import dynamic from "next/dynamic";
import { useEffect, useState, useRef } from "react";
import Link from "next/link";

// Importación dinámica para evitar errores de SSR con ApexCharts
const Chart = dynamic(() => import("react-apexcharts"), { 
  ssr: false,
  loading: () => <div className="w-full h-76.25 animate-pulse bg-gray-200 dark:bg-gray-700 rounded-full" />
});

export const PieChartCard = () => {
  const [hasMounted, setHasMounted] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setHasMounted(true);
    
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

    const chartOptions: ApexCharts.ApexOptions = {
        series: [52.8, 26.8, 20.4],
        colors: ["var(--color-primary)", "var(--color-primary-medium)", "var(--color-primary-soft)"],
        chart: {
            height: 320,
            width: "100%",
            type: "pie",
            fontFamily: "Montserrat, sans-serif",
        },
        stroke: {
            colors: ["transparent"],
            lineCap: "round",
        },
        plotOptions: {
            pie: {
            expandOnClick: true,
            donut: { size: "65%" },
            // TypeScript acepta dataLabels aquí para el offset
            dataLabels: {
                offset: -25
            }
            },
        },
        labels: ["Direct", "Organic search", "Referrals"],
        dataLabels: {
            enabled: true,
            style: {
            fontFamily: "Montserrat, sans-serif",
            },
        },
        legend: {
            position: "bottom",
            fontFamily: "Montserrat, sans-serif",
        },
    };

  if (!hasMounted) {
    return (
      <div className="w-full bg-white border border-gray-200 rounded-lg p-4 md:p-6 min-h-124.5 dark:bg-gray-800 dark:border-gray-700">
        <div className="animate-pulse flex flex-col justify-between h-full">
            <div className="flex justify-between items-start">
                <div className="h-6 w-24 bg-gray-200 dark:bg-gray-700 rounded"></div>
                <div className="h-6 w-32 bg-gray-200 dark:bg-gray-700 rounded"></div>
            </div>
            <div className="h-64 w-64 bg-gray-200 dark:bg-gray-700 rounded-full mx-auto my-8"></div>
            <div className="h-10 w-full bg-gray-200 dark:bg-gray-700 rounded border-t border-gray-100 dark:border-gray-600 pt-4"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-white border border-gray-200 rounded-lg shadow-sm p-4 md:p-6 min-h-124.5 max-h-124.5 dark:bg-gray-800 dark:border-gray-700 flex flex-col justify-between">
      <div className="flex justify-between items-start w-full">
        <div className="flex items-center">
          <h5 className="text-xl font-bold leading-none text-gray-900 me-1 uppercase dark:text-gray-100">Items</h5>
          <button title="Crecimiento de la actividad incremental" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
            <svg className="w-3.5 h-3.5 ms-1" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm0 16a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm1-5.034V12a1 1 0 0 1-2 0v-1.418a1 1 0 0 1 1.038-.999 1.436 1.436 0 0 0 1.488-1.441 1.501 1.501 0 1 0-3-.116.986.986 0 0 1-1.037.961 1 1 0 0 1-.96-1.037A3.5 3.5 0 1 1 11 11.466Z"/>
            </svg>
          </button>
        </div>
        
        <button className="text-sm font-medium text-primary dark:text-primary_dark hover:underline flex items-center">
          01 Dic - 30 Dic
          <svg className="w-3 h-3 ms-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
        </button>
      </div>

      <div className="py-6 grow flex items-center justify-center">
        <Chart options={chartOptions} series={chartOptions.series} type="pie" height={320} />
      </div>

      <div className="flex justify-between items-center pt-5 border-t border-gray-200 dark:border-gray-700 relative">
        <div ref={dropdownRef}>
          <button 
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 inline-flex items-center"
            type="button"
          >
            Últimos 30 días
            <svg className={`w-2.5 ms-1.5 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
            </svg>
          </button>

          {isDropdownOpen && (
            <div className="absolute bottom-full mb-2 left-0 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow-md w-44 dark:bg-gray-700">
              <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                {['Ayer', 'Hoy', 'Últimos 7 días', 'Últimos 30 días', 'Últimos 90 días'].map((range) => (
                  <li key={range}>
                    <button 
                      onClick={() => setIsDropdownOpen(false)}
                      className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600"
                    >
                      {range}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        
        <Link 
          href="/dashboard"
          className="uppercase text-sm font-semibold text-primary hover:text-blue-700 dark:text-primary_dark dark:hover:text-blue-400 inline-flex items-center"
        >
          Reporte
          <svg className="w-2.5 h-2.5 ms-1.5" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
          </svg>
        </Link>
      </div>
    </div>
  );
};