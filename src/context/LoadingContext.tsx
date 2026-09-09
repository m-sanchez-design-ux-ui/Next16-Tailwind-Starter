"use client";

import { createContext, useContext, useState, useCallback } from 'react';
import { LoadingScreen } from '@/components/loading/LoadingScreen';

interface LoadingContextType {
  setLoading: (show: boolean) => void;
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

export const LoadingProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setIsLoading] = useState(false);

  const setLoading = useCallback((show: boolean) => {
    setIsLoading(show);
  }, []);

  return (
    <LoadingContext.Provider value={{ setLoading }}>
      {children}
      {/* El componente visual que creamos antes */}
      <LoadingScreen show={isLoading} />
    </LoadingContext.Provider>
  );
};

export const useLoading = () => {
  const context = useContext(LoadingContext);
  if (!context) throw new Error("useLoading debe usarse dentro de LoadingProvider");
  return context;
};