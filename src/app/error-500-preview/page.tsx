import Error500Screen from '@/components/Error500Screen';

// DEMO NOTE: Next.js's error.tsx only renders when a real error is
// thrown during rendering — it isn't a navigable route on its own. This
// page exists purely so the same screen can be viewed directly (e.g.
// from the "Show Error 500" button on the template components page)
// without needing to trigger a real error.
export default function Error500Preview() {
  return <Error500Screen />;
}
