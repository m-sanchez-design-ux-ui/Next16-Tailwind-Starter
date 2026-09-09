import { 
  CheckCircle2, 
  XCircle, 
  AlertTriangle, 
  Info 
} from "lucide-react";

export const TOAST_CONFIG = {
  toastSuccess: {
    icon: CheckCircle2,
    containerClass: "dark:bg-green-300 dark:border-green-500",
    iconContainerClass: "text-green-500 bg-green-100 dark:bg-green-200",
    label: "Success icon"
  },
  toastDanger: {
    icon: XCircle,
    containerClass: "dark:bg-red-300 dark:border-red-500",
    iconContainerClass: "text-red-500 bg-red-100 dark:bg-red-200",
    label: "Error icon"
  },
  toastWarning: {
    icon: AlertTriangle,
    containerClass: "dark:bg-orange-300 dark:border-orange-500",
    iconContainerClass: "text-orange-500 bg-orange-100 dark:bg-orange-200",
    label: "Warning icon"
  },
  toastInfo: {
    icon: Info,
    containerClass: "dark:bg-blue-300 dark:border-blue-500",
    iconContainerClass: "text-blue-500 bg-blue-100 dark:bg-blue-200",
    label: "Info icon"
  }
};

export type ToastType = keyof typeof TOAST_CONFIG;