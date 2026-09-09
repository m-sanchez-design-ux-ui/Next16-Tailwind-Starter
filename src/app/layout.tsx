import type { Metadata } from "next";
import "./globals.css";
import FlowbiteInit from '@/components/FlowbiteInit';
import { ToastProvider } from "@/context/ToastContext";
import { LoadingProvider } from "@/context/LoadingContext";
import { ThemeProvider } from "@/context/ThemeContext";

export const metadata: Metadata = {
  title: "Origin Solutions - Backoffice Starter",
  description: "Next.js 16 + Tailwind v4 + Montserrat Local",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        {/* Applies the saved theme before paint, so there's no flash of
            the wrong theme while React hydrates. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                var stored = localStorage.getItem('theme');
                var isDark = stored === 'dark';
                if (isDark) document.documentElement.classList.add('dark');
              })();
            `,
          }}
        />
      </head>
      <body className="font-sans antialiased">
        <FlowbiteInit />
        <ThemeProvider>
          <LoadingProvider>
            <ToastProvider>
              {children}
            </ToastProvider>
          </LoadingProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}