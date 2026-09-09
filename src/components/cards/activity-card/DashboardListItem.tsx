import Image from "next/image";

interface ListItemProps {
  title: string;
  category: string;
  price: string;
  itemsCount: string;
  imageSrc?: string;
}

export const DashboardListItem = ({ 
  title, 
  category, 
  price, 
  itemsCount, 
  imageSrc = "/images/cover/cover-default.svg" 
}: ListItemProps) => (
  <li className="py-3 sm:py-4">
    <div className="flex items-center">
      {/* Contenedor relativo para Next Image */}
      <div className="relative shrink-0 size-8 rounded-lg overflow-hidden">
        <Image 
          src={imageSrc} 
          alt={title} 
          fill
          className="object-cover"
          sizes="32px"
        />
      </div>
      
      <div className="flex-1 min-w-0 ms-4">
        <p className="text-sm font-medium text-gray-900 truncate dark:text-gray-100">
          {title}
        </p>
        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
          {category}
        </p>
      </div>

      <div className="inline-flex flex-col min-w-0 ms-4 text-right">
        <p className="text-base font-semibold text-gray-900 dark:text-gray-100">
          {price}
        </p>
        <p className="text-xs font-normal text-gray-500 dark:text-gray-400">
          {itemsCount}
        </p>
      </div>
    </div>
  </li>
);