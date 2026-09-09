'use client';

import { useEffect } from 'react';
import { initModals, initDropdowns, initTabs, initFlowbite } from 'flowbite';
import { usePathname } from 'next/navigation';

export default function FlowbiteInit() {
  const pathname = usePathname();

  useEffect(() => {
    initFlowbite();
    initModals();
    initDropdowns();
    initTabs();
  }, [pathname]);

  return null;
}