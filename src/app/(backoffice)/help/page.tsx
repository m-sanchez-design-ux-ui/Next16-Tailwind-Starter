import { LifeBuoy } from 'lucide-react';
import Breadcrumb, { BreadcrumbItem } from "@/components/Breadcrumb";
import Accordion from '@/components/accordion/Accordion'; // El componente

export default function HelpPage() {

  // Force an error to test the error page
  //throw new Error("Error Server Simulation");

  const BREADCRUMB_CONFIG: BreadcrumbItem[] = [
    { 
      text: 'ayuda', 
      href: '/help', 
      icon: <LifeBuoy className="size-4" /> 
    },
    { 
      text: 'Text...', 
      href: '/help', 
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
      </div>

      {/* Title Page Container */}
      <h3 className="text-xl 2xl:text-2xl text-gray-900 dark:text-gray-100 font-semibold w-full py-4">
        Sección de ayuda
      </h3>

        <Accordion />

    </div>
  );
}