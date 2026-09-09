'use client';

import Error500Screen from '@/components/Error500Screen';

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function Error({ error, reset }: ErrorProps) {
  return <Error500Screen />;
}
