"use client";
import { useState } from 'react';
import { Package, Plus } from 'lucide-react';
import Breadcrumb, { BreadcrumbItem } from "@/components/Breadcrumb";
import Link from 'next/link';
import { useToast } from "@/context/ToastContext";
import { useLoading } from "@/context/LoadingContext";
import ModalDefault from '@/components/modals/ModalDefault';
import DeleteModal from "@/components/modals/DeleteModal";
import FilterAccordion from '@/components/filters/FilterAccordion';
import MainDataTable from '@/components/datatables/MainDataTable';

export default function TemplateComponentsPage() {

    const { notify } = useToast();  

    const { setLoading } = useLoading();

    const handleShowLoading = () => {
    setLoading(true);
    
    //Loading Hide after 5 seconds (for demo purposes)
    setTimeout(() => {
        setLoading(false);
    }, 5000);
    };

    const BREADCRUMB_CONFIG: BreadcrumbItem[] = [
        { 
        text: 'Template Components', 
        href: '/components', 
        icon: <Package className="size-4" /> 
        },
        { 
        text: 'Text...', 
        href: '/components', 
        },
        { 
        text: 'Text...', 
        href: '', 
        },
    ];

    const [isDefaultModalOpen, setIsDefaultModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

    const handleDefaultConfirm = () => {
        console.log("Acción confirmada en Origin Backoffice");
    };

    const handleDeleteConfirm = () => {
        console.log("Item eliminado con éxito");
        setIsDeleteModalOpen(false);
    };

    return (
        <div className="flex flex-col gap-6">

            {/*Breadcrumb */}
            <div className="flex flex-row flex-wrap justify-between items-center w-full mb-4 gap-4">
                <Breadcrumb items={BREADCRUMB_CONFIG} />
                {/*Container Buttons*/}
                <div className='flex flex-row gap-4 flex-wrap'>

                    {/*Link Button*/}
                    <Link 
                        href="/" 
                        className="cursor-pointer py-2.5 text-sm font-medium text-primary dark:text-primary_dark hover:underline whitespace-nowrap"
                    >
                        Link Button
                    </Link>

                    {/*Tertiary Button*/}
                    <button
                        type="button" 
                        className='flex items-center flex-nowrap gap-2 py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-primary_dark/30 dark:bg-transparent hover:dark:bg-gray-900 dark:text-gray-400 dark:border-gray-500 dark:hover:text-primary_dark active:dark:bg-primary_dark/30'
                    >
                        <span>
                            Tertiary Button
                        </span>
                    </button> 

                    {/*Tertiary Button Icon*/}
                    <button
                        type="button" 
                        className='flex items-center flex-nowrap gap-2 py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-primary_dark/30 dark:bg-transparent hover:dark:bg-gray-900 dark:text-gray-400 dark:border-gray-500 dark:hover:text-primary_dark active:dark:bg-primary_dark/30'
                    >
                        <Plus className="size-4" />
                        <span>
                            Tertiary Button with Icon
                        </span>
                    </button> 

                    {/*Seconday Button*/}
                    <button
                        type="button" 
                        className='flex flex-row gap-2 items-center text-primary dark:text-primary_dark hover:text-gray-100 dark:hover:text-gray-100 bg-transparent hover:bg-primary dark:hover:bg-primary_dark focus:ring-4 focus:ring-primary dark:focus:ring-primary_dark dark:focus:ring-opacity-30 focus:ring-opacity-30 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none border border-primary'
                    >
                        <Plus className="size-4" />
                        <span>
                            Secondary Button with icon
                        </span>
                    </button> 

                    {/*Seconday Button Icon*/}
                    <button
                        type="button" 
                        className='flex flex-row gap-2 items-center text-primary dark:text-primary_dark hover:text-gray-100 dark:hover:text-gray-100 bg-transparent hover:bg-primary dark:hover:bg-primary_dark focus:ring-4 focus:ring-primary dark:focus:ring-primary_dark dark:focus:ring-opacity-30 focus:ring-opacity-30 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none border border-primary'
                    >
                        <Plus className="size-4" />
                        <span>
                            Secondary Button with Icon
                        </span>
                    </button> 

                    {/*Primary Button*/}
                    <button
                        type="button" 
                        className='flex flex-row gap-2 items-center text-gray-100 bg-primary opacity-100 hover:opacity-80 transition-all duration-100 dark:bg-primary_dark  focus:ring-4 focus:ring-primary dark:focus:ring-primary_dark dark:focus:ring-opacity-30 focus:ring-opacity-30 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none'
                    >
                        <span>
                            Primary Button
                        </span>
                    </button>

                    {/*Primary Button Icon*/}
                    <button
                        type="button" 
                        className='flex flex-row gap-2 items-center text-gray-100 bg-primary opacity-100 hover:opacity-80 transition-all duration-100 dark:bg-primary_dark  focus:ring-4 focus:ring-primary dark:focus:ring-primary_dark dark:focus:ring-opacity-30 focus:ring-opacity-30 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none'
                    >
                        <Plus className="size-4" />
                        <span>
                            Primary Button with Icon
                        </span>
                    </button>
                </div>
            </div>

            {/* Title Page Container */}
            <h3 className="text-xl 2xl:text-2xl text-gray-900 dark:text-gray-100 font-semibold w-full py-4">
                Título template components
            </h3>

            {/*Card Button Container*/}
            <div className='flex flex-wrap gap-4 border rounded-lg border-gray-200 bg-white shadow p-5 mb-4 dark:bg-gray-800 dark:border-gray-700'>
                {/*Show Default Modal*/}
                <button
                    type="button" 
                        className='flex items-center flex-nowrap gap-2 py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-primary_dark/30 dark:bg-transparent hover:dark:bg-gray-900 dark:text-gray-400 dark:border-gray-500 dark:hover:text-primary_dark active:dark:bg-primary_dark/30'
                    onClick={() => setIsDefaultModalOpen(true)}
                >
                    <span>
                        Show Default Modal
                    </span>
                </button>
                {/*Show Delete Modal*/}
                <button
                    type="button" 
                        className='flex items-center flex-nowrap gap-2 py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-primary_dark/30 dark:bg-transparent hover:dark:bg-gray-900 dark:text-gray-400 dark:border-gray-500 dark:hover:text-primary_dark active:dark:bg-primary_dark/30'
                    onClick={() => setIsDeleteModalOpen(true)}
                >
                    <span>
                        Show Delete Modal 
                    </span>
                </button>  
                {/*Show Loading*/}
                <button
                    type="button" 
                        className='flex items-center flex-nowrap gap-2 py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-primary_dark/30 dark:bg-transparent hover:dark:bg-gray-900 dark:text-gray-400 dark:border-gray-500 dark:hover:text-primary_dark active:dark:bg-primary_dark/30'
                    onClick={handleShowLoading}
                >
                    <span>
                        Show Loading 
                    </span>
                </button>
                {/*Show Toast Danger*/}
                <button
                    type="button" 
                        className='flex items-center flex-nowrap gap-2 py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-primary_dark/30 dark:bg-transparent hover:dark:bg-gray-900 dark:text-gray-400 dark:border-gray-500 dark:hover:text-primary_dark active:dark:bg-primary_dark/30'
                    onClick={() => notify("Hubo un error al procesar la solicitud.", "toastDanger")}
                >
                    <span>
                        Show Toast Danger
                    </span>
                </button>
                {/*Show Toast Success*/}
                <button
                    type="button" 
                        className='flex items-center flex-nowrap gap-2 py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-primary_dark/30 dark:bg-transparent hover:dark:bg-gray-900 dark:text-gray-400 dark:border-gray-500 dark:hover:text-primary_dark active:dark:bg-primary_dark/30'
                    onClick={() => notify("¡Los cambios se guardaron correctamente!", "toastSuccess")}
                >
                    <span>
                        Show Toast Success
                    </span>
                </button>
                {/*Show Toast Warning*/}
                <button
                    type="button" 
                        className='flex items-center flex-nowrap gap-2 py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-primary_dark/30 dark:bg-transparent hover:dark:bg-gray-900 dark:text-gray-400 dark:border-gray-500 dark:hover:text-primary_dark active:dark:bg-primary_dark/30'
                    onClick={() => notify("Atención: Tu suscripción está por expirar.", "toastWarning")}
                >
                    <span>
                        Show Toast Warning
                    </span>
                </button>
                {/*Show Toast Info*/}
                <button
                    type="button" 
                        className='flex items-center flex-nowrap gap-2 py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-primary_dark/30 dark:bg-transparent hover:dark:bg-gray-900 dark:text-gray-400 dark:border-gray-500 dark:hover:text-primary_dark active:dark:bg-primary_dark/30'
                    onClick={() => notify("Hay nuevas actualizaciones disponibles en el sistema.", "toastInfo")}
                >
                    <span>
                        Show Toast Info
                    </span>
                </button>
                {/*Show Error 404*/}
                <Link
                    href="/error-404"
                    className='flex items-center flex-nowrap gap-2 py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-primary_dark/30 dark:bg-transparent hover:dark:bg-gray-900 dark:text-gray-400 dark:border-gray-500 dark:hover:text-primary_dark active:dark:bg-primary_dark/30'
                >
                    <span>
                        Show Error 404
                    </span>
                </Link>
                {/*Show Error 500 page*/}
                <Link
                    href="/error-500-preview"
                    className='flex items-center flex-nowrap gap-2 py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-primary_dark/30 dark:bg-transparent hover:dark:bg-gray-900 dark:text-gray-400 dark:border-gray-500 dark:hover:text-primary_dark active:dark:bg-primary_dark/30'
                >
                    <span>
                        Show Error 500
                    </span>
                </Link>
            </div>

            <FilterAccordion />

            <MainDataTable />

            <ModalDefault 
                isOpen={isDefaultModalOpen} 
                onClose={() => setIsDefaultModalOpen(false)} 
                onConfirm={handleDefaultConfirm}
                description="Esta acción actualizará los datos permanentemente."
            />

            <DeleteModal 
                isOpen={isDeleteModalOpen}
                onClose={() => setIsDeleteModalOpen(false)}
                onConfirm={handleDeleteConfirm}
            />

        </div>
    );
}